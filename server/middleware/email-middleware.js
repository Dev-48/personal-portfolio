import { contactFromUserTemplate } from "../utils/emailTemplate.js";
import { transporter } from "./email-config-middleware.js";

// Wrap in an async IIFE so we can use await.
const sendEmail = async (name, email, subject, message) => {
  try {
     const info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: "mahadevkhokhar05@gmail.com",
    subject: subject,
    text: subject, // plain‑text body
    html: contactFromUserTemplate
      .replace("{username}", name)
      .replace("{userSubject}", subject)
      .replace("{userEmail}", email)
      .replace("{userMessage}", message), // HTML body
  });
    
     return true
  } catch (error) {
    console.log(error)
    return false
  }
 
};

export { sendEmail };
