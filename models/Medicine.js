import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        manufacturer: {
            type: String,
            required: true
        },
        composition: {
            type: [String]
        },
        image: {
            type: [String]
        },
        price: {
            type: Number,
            required: true
        },
        expirationDate: {
            type: Date,
            required: true
        }
})

export default mongoose.model("Medicine", MedicineSchema)