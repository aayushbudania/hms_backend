import Patient from "../models/Patient.js"
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs"

export const register = async (req, res, next) => {
        try {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(req.body.password, salt);
                const newPatient = new Patient(req.body);
                newPatient.password = hash;

                await newPatient.save()
                res.status(200).json("Patient registered into the system.")
        } catch(err) {
                next(err)
        }
}

export const login = async (req, res, next) => {
        try {
                const user = await Patient.findOne({ email: req.body.email });
                if (!user) return next(createError(404, "User not found!"));
            
                const isPasswordCorrect = await bcrypt.compare(
                  req.body.password,
                  user.password
                );
                if (!isPasswordCorrect)
                  return next(createError(400, "Wrong password or username!"));

                const { password, ...otherDetails } = user._doc;
                res.status(200).json({...otherDetails})
                
        } catch(err) {
                next(err)
        }
}