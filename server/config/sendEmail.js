// import { Resend } from 'resend';
// import dotenv from 'dotenv'
// dotenv.config()

// if(!process.env.RESEND_API){
//     console.log("Provide RESEND_API in side the .env file")
// }

// const resend = new Resend(process.env.RESEND_API);

// const sendEmail = async({sendTo, subject, html })=>{
//     try {
//         const { data, error } = await resend.emails.send({
//             from: 'Quicktrolley <onboarding@resend.dev>',      
//             to: sendTo,
//             subject: subject,
//             html: html,
//         });

//         if (error) {
//             return console.error({ error });
//         }

//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default sendEmail






import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Check required env variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('Please provide EMAIL_USER and EMAIL_PASS in the .env file');
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or "hotmail", "yahoo", or custom SMTP
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send email function
const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const mailOptions = {
      from: `"QuickTrolley" <${process.env.EMAIL_USER}>`,
      to: sendTo,
      subject: subject,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;



