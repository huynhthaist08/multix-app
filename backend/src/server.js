import express from "express";

const app = express();

app.listen(5001, () => {
    console.log("Server bắt đầu trên cổng 5001");
});

app.get("/api/tasks", (request, response) => {
    response.send("Bạn có một việc cần làm");
});

app.post("/api/tasks", (req, res) => {
    res.status(201).json({
        message: "Nhiệm vụ mới đã được thêm vào thành công",
    });
});
