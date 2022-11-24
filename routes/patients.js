import express from "express";
import Patient from "../models/Patient.js"

const router = express.Router();

//GET PATIENT
router.get("/:id", async (req, res, next) => {
        try {
                const patient = await Patient.findById(
                        req.params.id)

                res.status(200).json(patient)
                
        } catch(err) {
                next(err)
        }
})

//GET PATIENTS
router.get("/", async (req, res) => {
        try {
                const patient = await Patient.find()

                res.status(200).json(patient)
                
        } catch(err) {
                next(err)
        }
})

// UPDATE PATIENT
router.put("/:id", async (req, res) => {
        try {
                const updatedPatient = await Patient.findByIdAndUpdate(
                        req.params.id,
                        {$set : req.body},
                        {new : true}
                )

                res.status(200).json(updatedPatient)

        } catch(err) {
                res.status(500).json(err)
        }
})

//DELETE PATIENT
router.delete("/:id", async (req, res) => {
        try {
                await Patient.findByIdAndDelete(
                        req.params.id,
                        {$set : req.body},
                        {new : true}
                )

                res.status(200).json("Deleted Patient Records.")
                
        } catch(err) {
                next(err)
        }
})

export default router;