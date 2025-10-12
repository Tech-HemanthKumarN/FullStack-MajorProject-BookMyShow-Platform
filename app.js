const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Event = require("./models/event.js")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

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

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.engine('ejs',ejsMate); 

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

//Index Route
app.get("/events",async(req,res)=>{
    const allEvents = await Event.find({});
    res.render("./events/index.ejs",{allEvents})
});

//New Route
app.get("/events/new",(req,res)=>{
    res.render("./events/new.ejs")
});

//Show Route
app.get("/events/:id",async(req,res)=>{
    let {id} = req.params;
    const event = await Event.findById(id);
    res.render("./events/show.ejs",{event})
});

//Create Route
app.post("/events",async(req,res)=>{
    const newEvent = new Event(req.body.event);
    await newEvent.save();
    res.redirect("/events")
});

//Edit Route
app.get("/events/:id/edit",async(req,res)=>{
    let{id} = req.params;
    const event = await Event.findById(id);
    res.render("events/edit.ejs",{event})
});

//Update Route
app.put("/events/:id",async(req,res)=>{
    let {id} = req.params;
    await Event.findByIdAndUpdate(id,{...req.body.event});
    res.redirect(`/events/${id}`);
});

//Delete Route
app.delete("/events/:id",async(req,res)=>{
    let {id} =  req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    console.log(deletedEvent);
    res.redirect("/events")
});

app.get("/", (req, res) => {
    res.send("Successful connection");
});
app.listen(8080, () => {
    console.log("Server is listing on the port");
});