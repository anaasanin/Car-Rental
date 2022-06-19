const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title:{type: String, required: true, unique:true},
        desc: {type: String, required: true},
        img: {type: String, required:true},
        category: {type: String, required:true},
        fuel: {type: String, required:true},
        gear: {type: String, required:true},
        year: {type: Number, required:true},
        mileage: {type: Number},
        insurance: {type: String, default:"liability"},
        price: {type: Number, required:true},
        inStock: {type: Boolean, default: true},
        rentedAt: {type: Array},
        rentedUntil: {type: Array}
    },{
        timestamps: true
    }
);

module.exports = mongoose.model("Product", ProductSchema);