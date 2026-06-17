import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

// Create a test account or replace with real credentials.
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

