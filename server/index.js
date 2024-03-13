const express = require('express');
const dotenv = require('dotenv')
const app = express();

const{PORT} = process.env
app.use('/', (req, res) => {
    res.send("Server is running")
});

app.listen(PORT, console.log(`Server is running on the port ${PORT}`))