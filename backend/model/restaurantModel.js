import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    restaurantName: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    city: { type: String, required: true },
    country: { type: String, required: true },
    delavaryTime: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    cuisines: [{ type: String, required: true }],
    menu: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "Menu" }],
    image: { type: String, required: true },
}, { timestamps: true })

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
export default Restaurant