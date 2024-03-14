// const express = require('express');
// require('dotenv').config()
// const cors = require('cors')
// const app = express();

// const { PORT } = process.env

// app.use(cors())
// app.use('/api/first', (req, res) => {
//     res.json({ message: "FIRST"})
// });
// app.use("/api/second", (req, res) => {
//     res.json({
//         message: "SECOND"
//     })
// })

// app.listen(PORT, console.log(`Server is running on the port ${PORT}`))

import express from "express";
import cors from "cors";

import "dotenv/config.js";

const app = express();

app.use(cors())
app.use(express.json());

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

app.listen(3001, () => {
        console.log(`Server is running on port 3001`)
    });