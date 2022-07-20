const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/styles.css'))
})

const port = process.env.PORT || 5501

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})