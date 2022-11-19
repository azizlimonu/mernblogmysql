import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
// import multer from "multer";

// Import Routes
import postsRoutes from './routes/postsRoute.js';
import authRoutes from './routes/authRoute.js';
import usersRoutes from './routes/usersRoute.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
dotenv.config();


const port = parseInt(process.env.PORT) || 8000;


app.listen(port, () => {
  console.log(`Server Connected at ${port}`);
});

// usage Routes
app.use("/post", postsRoutes);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);