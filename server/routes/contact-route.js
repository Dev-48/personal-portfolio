import express from "express"
import { contactUs } from "../controller/contact-controller.js"

const router = express.Router()

router.route("/contact").post(contactUs)


export default router