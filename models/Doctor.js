import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
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
                require: true,
                unique: true
        },
        age: {
                type: Number,
                required: true,
              },
        experience: {
                type: Number,
                required: true,
                min:0
              },
        specialization: {
                type: String,
                required: true,
              },
        consultationfees: {
                type: Number,
                required: true,
                min: 0
              },
        image: {
                type: String
              },
        meetlink: {
                type: String,
                required: true
        },
        appointments: [{
                type: String
        }],
        unavailableDates: [{
                type: Date
        }],
},{timestamps: true})

export default mongoose.model("Doctor",DoctorSchema)