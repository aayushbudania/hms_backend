import mongoose from "mongoose";

const PrescriptionSchema = new mongoose.Schema({
        treatment: {
            medicines: [{
                id: String,
                dosage: String,
              }],
            duration: {
                type: Number,
                min: 1,
            }
        },
        test: {
                type: [String],
                default: "No tests required."
              },
        diagnosis: {
                type: String,
                required: [true, "Diagnosis is required."],
              },
        symptoms: {
                type: [String],
                required: [true, "Symptoms required"],
              },
        patient: {
                type: String
              },
        doctor: {
                type: String
              },
},{timestamps: true})

export default mongoose.model("Prescription", PrescriptionSchema)