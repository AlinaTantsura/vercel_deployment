import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";
// import { medicineRouter } from "./routes/medicineRouter.js";
// import { orderRouter } from "./routes/orderRouter.js";

const app = express();
const { DB_HOST, PORT } = process.env;

app.use(cors())
app.use(express.json());

// app.use("/api/drugshops", medicineRouter);
// app.use("/api/orders", orderRouter);
app.use("/api/test", (req, res) => {
    res.json({"message": "This is the test"})
})

app.get("/api/test2", (req, res) => {
    res.json({"message": "This is the test2"})
})
app.use('_', (_, res) => {
    res.status(404).json({
        message: "Route not found"
    })
});

app.use((err, req, res, next) => {
    const { status=500, message="Server error"} = err;
    res.status(status).json({ message });
})


mongoose.connect(DB_HOST).then(() => {
    console.log("Database connection succesful")
    app.listen(PORT || 3001, () => {
        console.log(`Server is running on port ${PORT}`)
    });
}).catch(err => {
    console.log(err.message);
    process.exit(1);
})