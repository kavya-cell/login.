const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Perform login validation here (e.g., check against a database)
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Invalid username or password.');
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});