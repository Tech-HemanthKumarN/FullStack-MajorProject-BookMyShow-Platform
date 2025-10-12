const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// requireing the reviews
// const Review = require("./review.js");
// const { string } = require("joi");


const eventSchema = new Schema({
    title: {
        type: String,
        maxlength: 500,
        required: true,
    },
    description: String,

    image: {
        filename: {
            type: String,
            default: "Eventimage"
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            set: (v) =>
                v === ""
                    ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    : v
        }
        // url: String,
        // filename: String
    },
    ticketPrice: {
        type: Number,
        required: true,
        min: 0
    },
    venue: {// Renamed from location (e.g., "Palace Grounds")
        type: String,
        required: true,
    },
    city: { // Renamed from country (e.g., "Bengaluru")
        type: String,
        required: true,
    },
    // eventDate: {// NEW: To store the date of the event
    //     type: Date,
    //     required: true,
    // },
    // ticketsAvailable: Number, // NEW: Total tickets for sale
    // // NEW FIELD: To categorize the event
    // category: {
    //     type: String,
    //     enum: ["Movie","Music", "Comedy", "Workshop", "Tech", "Sports", "Arts"],
    //     required: true,
    // },

    // reviews: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Review", // This logic stays exactly the same
    //     },
    // ],

    // // This is now the Event Organizer
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    // },

    // // This can be used to show the event venue on a map
    // geometry: {
    //     type: {
    //         type: String,
    //         enum: ['Point'],
    //         default: 'Point',
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: true
    //     },
    // },

    // // This post-delete middleware is PERFECT and works exactly the same for events!
    // // When an event is deleted, all its associated reviews will also be deleted.

    // eventSchema.post("findOneAndDelete", async (event) => {
    //     if (event) {
    //         await Review.deleteMany({ _id: { $in: event.reviews } });
    //     }
});
//CREATING THE MODEL Event 
const Event = mongoose.model("Event", eventSchema);

//EXPORTING THE MODEL TO USE IT IN OTHER FILES
module.exports = Event;