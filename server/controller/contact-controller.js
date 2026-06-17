import { sendEmail } from "../middleware/email-middleware.js";

const contactUs = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
   const response = await sendEmail(name, email, subject, message);
   if(response){
     res.status(200).json({
     message: "Contact sent",
    });
   }else{
    res.status(400).json({
     message: "Something went wrong",
    })
   }
  } catch (error) {
    console.log("Internal Server Error", error);
    res.status(500).json("Internal Server Error");
  }
};

export { contactUs };
