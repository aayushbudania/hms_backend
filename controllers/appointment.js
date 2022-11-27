import Appointment from "../models/Appointment.js"
import Doctor from "../models/Doctor.js"
import Patient from "../models/Patient.js"

export const createAppointment = async (req, res, next) => {
        const patientId = req.params.id
        const doctorId = req.params.docid

        const newAppointment = new Appointment(req.body)
        newAppointment.patient = patientId
        newAppointment.doctor = doctorId

        try {
                const savedAppointment = await newAppointment.save()

                try{
                        await Doctor.findByIdAndUpdate(doctorId, {
                                $push: {
                                        appointments: savedAppointment._id,
                                        unavailableDates: savedAppointment.datetime
                                }
                        })

                        await Patient.findByIdAndUpdate(patientId, {
                                $push: {
                                        appointments: savedAppointment._id
                                }
                        })
                }catch(err) {
                        next(err)
                }

                res.status(200).json(savedAppointment)
        } catch(err) {
                next(err)
        }
}

export const getAppointment = async (req, res, next) => {
        try {
                const appointment = await Appointment.findById(
                        req.params.aid)

                res.status(200).json(appointment)
                
        } catch(err) {
                next(err)
        }
}

export const getAppointments = async (req, res, next) => {
        const patientId = req.params.id

        try {
                const appointments = await Appointment.find({
                        patient: patientId
                })

                res.status(200).json(appointments)
                
        } catch(err) {
                next(err)
        }
}

export const updateAppointment = async (req, res, next) => {
        try {
                const updatedAppointment = await Appointment.findByIdAndUpdate(
                        req.params.id,
                        {$set : req.body},
                        {new : true}
                )

                res.status(200).json(updatedAppointment)

        } catch(err) {
                next(err)
        }
}

export const deleteAppointment = async (req, res, next) => {
        try {
                await Appointment.findByIdAndDelete(
                        req.params.id,
                        {$set : req.body},
                        {new : true}
                )

                res.status(200).json("Deleted Appointment Records.")
                
        } catch(err) {
                next(err)
        }
}