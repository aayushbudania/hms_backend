import express from "express";
import mongoose from "mongoose";
import Doctor from "../models/Doctor.js"

const router = express.Router();

router.get("/",(req,res) => {
        res.status(200).send("Doctors api");
})

// CREATE DOCTOR
router.post("/", async (req,res) => {
        const newDoctor = new Doctor(req.body)

        try {
                const savedDoctor = await newDoctor.save()
                res.status(200).json(savedDoctor)
        } catch(err) {
                res.status(500).json(err)
        }
})

//GET DOCTOR
router.get("/:id", async (req, res) => {
        try {
                const doctor = await Doctor.findById(
                        req.params.id)

                res.status(200).json(doctor)
                
        } catch(err) {
                res.status(500).json(err)
        }
})

//GET DOCTORS
router.get("/", async (req, res) => {
        try {
                const doctors = await Doctor.find()

                res.status(200).json(doctors)
                
        } catch(err) {
                res.status(500).json(err)
        }
})

// UPDATE DOCTOR
router.put("/:id", async (req, res) => {
        try {
                const updatedDoctor = await Doctor.findByIdAndUpdate(
                        req.params.id,
                        {$set : req.body},
                        {new : true}
                )

                res.status(200).json(updatedDoctor)

        } catch(err) {
                res.status(500).json(err)
        }
})

//DELETE DOCTOR
router.delete("/:id", async (req, res) => {
        try {
                await Doctor.findByIdAndDelete(
                        req.params.id,
                        {$set : req.body},
                        {new : true}
                )

                res.status(200).json("Deleted Doctor Records.")
                
        } catch(err) {
                res.status(500).json(err)
        }
})
export default router;