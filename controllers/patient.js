import Patient from "../models/Patient.js"

export const getPatient = async (req, res, next) => {
        try {
                const patient = await Patient.findById(
                        req.params.id)

                res.status(200).json(patient)
                
        } catch(err) {
                next(err)
        }
}

export const getPatients = async (req, res, next) => {
        try {
                const patients = await Patient.find()

                res.status(200).json(patients)
                
        } catch(err) {
                next(err)
        }
}

export const updatePatient = async (req, res, next) => {
        try {
                const updatedPatient = await Patient.findByIdAndUpdate(
                        req.params.id,
                        {$set : req.body},
                        {new : true}
                )

                res.status(200).json(updatePatient)

        } catch(err) {
                res.status(500).json(err)
        }
}

export const deletePatient = async (req, res, next) => {
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
}