import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    restaurant: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Restaurant" },
    delaveryDetails: {
        email: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
        phone: { type: String, required: true },
    },
    cartItems: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            menuId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Menu" },
        }
    ],
    totalAmount: Number,
    status: {
        type: String,
        enum: ["pending", "confirmed", "preparing", "outfordelivery", "delivered"],
        required: true
    }
},{timestamps : true})

const Order = mongoose.model("Order" , orderSchema)
export default Order