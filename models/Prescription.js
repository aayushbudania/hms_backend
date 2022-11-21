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
        patients: {
                type: String
              },
        doctors: {
                type: String
              }
})

export default PrescriptionSchema