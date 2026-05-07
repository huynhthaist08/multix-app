import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.listen(5001, () => {
    console.log("Server bắt đầu trên cổng 5001");
});

// middlewares

// public route

// private route

// connect mongodb với server
connectDB().then(() => {
    // sau khi connectDB chạy xong mới chạy logic bên trong
    console.log(`Server đang chạy tại http://localhost${PORT}`);
});
