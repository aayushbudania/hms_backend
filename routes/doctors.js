import express from "express";
import { createDoctor, deleteDoctor, getDoctor, getDoctors, updateDoctor } from "../controllers/doctor.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE DOCTOR
router.post("/", verifyAdmin, createDoctor)

//GET DOCTOR
router.get("/:id", getDoctor)

//GET DOCTORS
router.get("/", getDoctors)

// UPDATE DOCTOR
router.put("/:id", verifyAdmin, updateDoctor)

//DELETE DOCTOR
router.delete("/:id", verifyAdmin, deleteDoctor)

export default router;