import mongoose from "mongoose";

const PrescriptionSchema = new mongoose.Schema({
        treatment: {
                type: String,
              },
        test: {
                type: String,
              },
        diagnosis: {
                type: String,
                required: true,
              },
        symptoms: {
                type: Number,
                required: true,
              },
        patient: {
                type: String
              },
        doctor: {
                type: String
              }
})

export default mongoose.model("Prescription", PrescriptionSchema)