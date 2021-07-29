const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Successfully Started The Apllication!'
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/MZ.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}...`);
});