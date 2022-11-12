import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
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
              appointments: {
                type: [String]
              },
              image: {
                type: String
              }
})

export default DoctorSchema