const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Event = require("./models/event.js")
const Review = require("./models/review.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { eventSchema,reviewSchema } = require("./schema.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/EventHive"
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.engine('ejs', ejsMate);

// ____________________________________________
// Session and Flash Setup
const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};
app.use(session(sessionOptions));
app.use(flash());

// ✅ ADD THIS MIDDLEWARE HERE
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// --- ALL YOUR ROUTES GO AFTER THE MIDDLEWARE ---

app.get("/testevent", async (req, res) => {
    let sampleEvents = new Event({
        title: "My New Villa",
        description: "By the beach",
        ticketPrice: 1200,
        venue: "Calangute Goa",
        city: "India"

    });
    await sampleEvents.save();
    console.log("sample was saved");
    res.send("succesfull")
});

const validateEvent = (req, res, next) => {
    let { error } = eventSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

const validateReview = (req,res,next)=>{
    let{error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

//Index Route
app.get("/events", wrapAsync(async (req, res) => {
    const allEvents = await Event.find({});
    res.render("./events/index.ejs", { allEvents })
}));

//New Route
app.get("/events/new", (req, res) => {
    res.render("./events/new.ejs")
});

//Show Route
app.get("/events/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const event = await Event.findById(id).populate("reviews");
    res.render("./events/show.ejs", { event })
}));

//Create Route
app.post("/events", validateEvent, wrapAsync(async (req, res) => {
    const newEvent = new Event(req.body.event);
    await newEvent.save();
    res.redirect("/events")
}));

//Edit Route
app.get("/events/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const event = await Event.findById(id);
    res.render("events/edit.ejs", { event })
}));

//Ticket-Book Route (Corrected)
// Change app.post to app.get to RENDER the booking page
app.get("/events/:id/book", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const event = await Event.findById(id);
    // You also need to pass the event to the booking page
    res.render("events/book.ejs", { event });
}));

// GET Route - To RENDER the ticket selection form
app.get("/events/:id/seats", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
        // Handle case where event is not found
        return res.redirect("/events");
    }
    res.render("events/seats.ejs", { event });
}));

// POST Route-To PROCESS the booking form
app.post("/events/:id/checkout", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const event = await Event.findById(id);
    const ticketCount = parseInt(req.body.ticketCount);

    if (!event || !ticketCount || ticketCount <= 0) {
        req.flash("error", "Something went wrong with your booking. Please try again.");
        return res.redirect(`/events/${id}/seats`);
    }

    const totalPrice = event.ticketPrice * ticketCount;

    console.log("--- New Booking Initiated ---");
    console.log("Event:", event.title);
    console.log("Number of Tickets:", ticketCount);
    console.log("Total Price: ₹", totalPrice);
    console.log("----------------------------");

    //SET THE SUCCESS MESSAGE HERE
    req.flash("success", `Booking confirmed! Your ${ticketCount} seat(s) for ${event.title} are reserved.`);

    // Now redirect to the home page
    res.redirect("/events");
}));

//Update Route
app.put("/events/:id", validateEvent, wrapAsync(async (req, res) => {
    let { id } = req.params;

    await Event.findByIdAndUpdate(id, { ...req.body.event });
    res.redirect(`/events/${id}`);
}));

//Reviews Route(post Route)
app.post("/events/:id/reviews", async (req, res) => {
    let event = await Event.findById(req.params.id);
    let newReview = new Review(req.body.review);
    event.reviews.push(newReview);
    await newReview.save();
    await event.save();

    res.redirect(`/events/${event._id}`);
});

//Reviews Delete Route
app.delete("/events/:id/reviews/:reviewId",wrapAsync(async(req,res) =>{
    let {id, reviewId} = req.params;
    await Event.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/events/${id}`);
}));

//Delete Route
app.delete("/events/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    console.log(deletedEvent);
    res.redirect("/events")
}));

app.get("/", (req, res) => {
    res.send("Successful connection");
});

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"))
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
    // res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log("Server is listing on the port");
});