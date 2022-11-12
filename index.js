import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import doctorRoute from "./routes/doctors.js"
import patientRoute from "./routes/patients.js"
import appointmentRoute from "./routes/appointments.js"
import prescriptionRoute from "./routes/prescriptions.js"
import billRoute from "./routes/bills.js"

dotenv.config();
const app = express();

const connect = async() => {
        try {
                await mongoose.connect(process.env.MONGO);
                console.log("Connected to MongoDB");
              } catch (error) {
                throw error;
        }
}

// Middlewares

app.use(express.json())

app.use("/auth", authRoute);
app.use("/doctors", doctorRoute);
app.use("/patients", patientRoute);
app.use("/appointments", appointmentRoute);
app.use("/prescriptions", prescriptionRoute);
app.use("/bills", billRoute);

mongoose.connection.on("disconnected", () => {
        console.log("MongoDB disconnected");
})

// mongoose.connection.on("connected", () => {
//         console.log("MongoDB connected");
// })

app.listen(8800, () => {
        connect();
        console.log("connected to backend");
})