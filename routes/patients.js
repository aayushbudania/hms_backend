import express from "express";
import { deletePatient, getPatient, getPatients, updatePatient } from "../controllers/patient.js";

const router = express.Router();

//GET PATIENT
router.get("/:id", getPatient)

//GET PATIENTS
router.get("/", getPatients)

// UPDATE PATIENT
router.put("/:id", updatePatient)

//DELETE PATIENT
router.delete("/:id", deletePatient)

export default router;