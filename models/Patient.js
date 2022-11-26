import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
        },
        email: {
                type: String,
                required: true,
                unique: true
        },
        password: {
                type: String,
                required: true,
        },
        mobilenumber: {
                type: String,
                required: true,
                unique: true
        },
        age:{
                type: Number,
                required: true,
                min: 0,
                max: 100
        },
        gender: {
                type: String,
                required: true
        },
        address: {
                type: String,
                required: true
        },
        image: {
                type: String
              },
        isAdmin: {
                type: Boolean,
                default: false
        },
        appointments: [{
                type: String
                }],
        },
        {
                timestamps: true,
        })

export default mongoose.model("Patient",PatientSchema);