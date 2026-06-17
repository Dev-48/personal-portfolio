import express from "express";
import contactRoute from "./routes/contact-route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.use("/api", contactRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
    