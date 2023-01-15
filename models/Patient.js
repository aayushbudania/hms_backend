import mongoose from "mongoose";
import { emailValidator, nameValidator, numberValidator } from "../validators/Regex.validator.js";

const PatientSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
        },
        email: {
                type: String,
                required: true,
                unique: true,
                validate: {
                    validator: emailValidator,
                    message: "Email id is not in correct format"
                }
        },
        password: {
                type: String,
                required: true,
        },
        mobilenumber: {
                type: String,
                required: true,
                unique: true,
                validate: {
                    validator: numberValidator,
                    message: "Contact number should contain only and exactly 10 digits . ",
                  },
        },
        age:{
                type: Number,
                required: true,
                min: 0,
                max: 100
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: [true, "Gender Required."],
        },
        permanentAddress: {

            addressLineOne: {
              type: String,
              default: null,
              required: [true, "Address Line One is required."],
            },
            addressLineTwo: {
              type: String,
              default: null,
            },
            state: {
              type: String,
              default: null,
              required: [true, "State is required."],
              validate: {
                validator: nameValidator,
                message: "State should contain only characters."
              },
            },
            city: {
              type: String,
              default: null,
              required: [true, "City is required."],
              validate: {
                validator: nameValidator,
                message: "City should contain only characters."
              },
            },
            zipCode: {
              type: String,
              default: null,
              required: [true, "ZipCode is required."],
            },
          },
        image: {
                type: [String]
              },
        isAdmin: {
                type: Boolean,
                default: false
        },
        appointments: [{
                type: String
                }],
        unavailableDates: [{
                type: Date
        }],
        },
        {
                timestamps: true,
        })

export default mongoose.model("Patient",PatientSchema);