import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectToDatabase from '../backend/config/connection'
import router from "./routes/userroute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/user", router);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
connectToDatabase()