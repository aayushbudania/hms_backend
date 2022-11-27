import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
        datetime: {
                type: Date,
              },
        patient: {
                type: String
        },
        doctor: {
                type: String
        },
        isCompleted: {
                type: Boolean,
                default: false
        }
})

export default mongoose.model("Appointment", AppointmentSchema)