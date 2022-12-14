import nodemailer from "nodemailer"

export const sendConsultationMeet = (req, res, next) => {
        const transporter = nodemailer.transporter({
                service: "hotmail",
                auth: {
                        user: "medilab@outlook.in",
                        pass: "lnmiitpasswordy19"
                }
        })

        const options = {
                from: "medilab@outlook.in",
                to: req.body.email,
                subject: "Appointment scheduled",
                text: "Booking Confirmed!!"
        }

        transporter.sendMail(options, (err, data) => {
                if(err) {
                    console.log('Error Occurs');
                } else {
                    next()
                }
            });
}
