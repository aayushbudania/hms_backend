import express from "express";
import { createDoctor, deleteDoctor, getDoctor, getDoctors, updateDoctor } from "../controllers/doctor.js";

const router = express.Router();

// CREATE DOCTOR
router.post("/", createDoctor)

//GET DOCTOR
router.get("/:id", getDoctor)

//GET DOCTORS
router.get("/", getDoctors)

// UPDATE DOCTOR
router.put("/:id", updateDoctor)

//DELETE DOCTOR
router.delete("/:id", deleteDoctor)

export default router;