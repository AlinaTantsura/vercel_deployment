const express = require('express');
const dotenv = require('dotenv')
const app = express();

const{PORT} = process.env
app.use('/', (req, res) => {
    res.send("Server is running")
});
app.use("/api/", (req, res) => {
    res.json({
        message: "This is a route /api/"
    })
})

app.listen(PORT, console.log(`Server is running on the port ${PORT}`))