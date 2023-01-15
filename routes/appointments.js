import express from "express";
import { createAppointment, deleteAppointment, getAppointment, getAppointments, updateAppointment } from "../controllers/appointment.js";
import { sendConsultationMeet } from "../utils/sendEmail.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE APPOINTMENT
router.post("/:id/:docid", [verifyUser, createAppointment], sendConsultationMeet)

//GET APPOINTMENT
router.get("/:id/:aid", verifyUser, getAppointment)

//GET ALL APPOINTMENTS OF THE PATIENT
router.get("/:id", verifyUser, getAppointments)

// UPDATE APPOINTMENT
router.put("/:id", verifyAdmin, updateAppointment)

//DELETE APPOINTMENT
router.delete("/:id", verifyAdmin, deleteAppointment)

export default router;