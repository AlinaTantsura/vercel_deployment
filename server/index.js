const express = require('express');
require('dotenv').config()
const cors = require('cors')
const app = express();

const { PORT } = process.env

app.use(cors())
app.use('/api/first', (req, res) => {
    res.json({ message: "FIRST"})
});
app.use("/api/second", (req, res) => {
    res.json({
        message: "SECOND"
    })
})

app.listen(PORT, console.log(`Server is running on the port ${PORT}`))