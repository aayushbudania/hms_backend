import express from "express";
import { deletePatient, getPatient, getPatients, updatePatient } from "../controllers/patient.js";
import { verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

// CHECK AUTHENTICATION
router.get("/checkauth", verifyToken, (req, res, next) => {
        res.status(200).send("User verified")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
        res.status(200).send(req.user)
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
        res.status(200).send("Admin verified")
})

//GET PATIENT
router.get("/:id", verifyUser, getPatient)

//GET ALL PATIENTS
router.get("/", verifyUser, getPatients)

// UPDATE PATIENT
router.put("/:id", updatePatient)

//DELETE PATIENT
router.delete("/:id", deletePatient)

export default router;