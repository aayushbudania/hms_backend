import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
        },
        email: {
                type: String,
                required: true,
        },
        password: {
                type: String,
                required: true,
        },
        mobilenumber: {
                type: String,
                required: true
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
        appointments: {
                type: [String]
              },
        image: {
                type: String
              }
})

export default mongoose.model("Patient",PatientSchema);