import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
        consultationfees: {
                type: Number,
                required: true,
                min: 0
              },
        datetime: {
                type: Date,
              },
        patient: {
                type: String
        },
        doctor: {
                type: String
        },
        meetlink: {
                type: String
        }
})

export default AppointmentSchema