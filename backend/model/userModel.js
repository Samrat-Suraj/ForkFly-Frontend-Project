import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Boolean, required: true, default: false },
    cartData: { type: mongoose.Schema.Types.ObjectId, required: true, default: [], ref: "Food" },
    profile: {
        address: { type: String, required: true, default: "" },
        city: { type: String, required: true, default: "" },
        postalCode: { type: String, required: true, default: "" },
        country: { type: String, required: true, default: "" },
        phone: { type: String, required: true, default: "" },
        profilePic: { type: String, required: true, default: "" },
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User