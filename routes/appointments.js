import express from "express";
import { createAppointment, deleteAppointment, getAppointment, getAppointments, updateAppointment } from "../controllers/appointment.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE APPOINTMENT
router.post("/", verifyUser, createAppointment)

//GET APPOINTMENT
router.get("/:id", verifyUser, getAppointment)

//GET ALL APPOINTMENTS
router.get("/", getAppointments)

// UPDATE APPOINTMENT
router.put("/:id", verifyAdmin, updateAppointment)

//DELETE APPOINTMENT
router.delete("/:id", verifyAdmin, deleteAppointment)

export default router;