// // This is the CORRECTED code for schema.js
// const Joi = require('joi');

// module.exports.listingSchema = Joi.object({
//     listing: Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         location: Joi.string().required(),
//         country: Joi.string().required(),
//         price: Joi.number().required().min(0),
//         // FIX IS HERE:
//         image: Joi.object({
//             url: Joi.string().allow("", null),
//             filename: Joi.string().allow("", null), // You can add filename here too
//         }),
//     }).required()
// });

// schemas.js

const Joi = require('joi');

module.exports.eventSchema = Joi.object({
    event: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.object({
            url: Joi.string().allow("", null),
            filename: Joi.string().allow("", null), // You can add filename here too
        }),
        ticketPrice: Joi.number().required().min(0),
        venue: Joi.string().required(),
        city: Joi.string().required(),
        // category: Joi.string().required(),
        // language: Joi.string().required(),
        // genre: Joi.string().required(),
        // duration: Joi.string().required(),
        // releaseDate: Joi.date().required(),
    }).required()
});