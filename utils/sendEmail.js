import nodemailer from "nodemailer"

export const sendConsultationMeet = (options) => {

        const transporter = nodemailer.transporter({
                service: "hotmail",
                auth: {
                        user: process.env.MAIL_USERNAME,
                        pass: process.env.MAIL_PASSWORD
                }
        })

        const mailOptions = {
            from: process.env.MAIL_USERNAME,
            to: options.to,
            subject: options.subject,
            html: options.text,
          };

        transporter.sendMail(mailOptions, (err, data) => {
                if(err) {
                    console.log('Error Occurs');
                } else {
                    console.log('Email sent successfully.');
                }
            });
}
