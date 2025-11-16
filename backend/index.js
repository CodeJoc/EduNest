import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import Razorpay from "razorpay";

import { connectDb } from "./database/db.js";
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

// Connect to MongoDB
connectDb();

// Razorpay Instance
export const instance = new Razorpay({
  key_id: process.env.Razorpay_Key,
  key_secret: process.env.Razorpay_Secret,
});

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://edu-nest-omega.vercel.app",
    credentials: true
  })
);

// Serve static files
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/user", userRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/admin", adminRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Edu Nest Backend Running Successfully");
});

// Export app for Vercel (Do NOT use app.listen)
export default app;
