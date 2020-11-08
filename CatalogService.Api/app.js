const express = require('express')
const app = express()
const port = 4000
const jwt = require("jsonwebtoken");
var Rollbar = require('rollbar');
var rollbar = new Rollbar('493b977ee19749b1878496635ea86436');
process.env.ACCESS_TOKEN_SECRET = "XCAP05H6LoKvbRRa/QkqLNMI7cOHguaRyHzyg7n5qEkGjQmtBhz4SzYh4Fqwjyi3KJHlSXKPwVu2+bXr6CtpgQ=="

function authenticateToken(req, res, next) {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next() // pass the execution off to whatever request the client intended
    })
}

app.get('/', authenticateToken, (req, res) => {
    console.log(req);
    res.send("Hello! " + req.user.unique_name);
});

function filterFoodItems(search, category, data) {
    var filteredItems = data;
    if (search !== "") {
        filteredItems = filteredItems.filter(i => i.name.startsWith(search));
    }

    if (category !== "") {
        filteredItems = filteredItems.filter(i => i.category === category);
    }
    return filteredItems;
}

app.get('/menu', (req, res) => {
    //throw (55);
    res.send([{ name: "Momo" }]);
});

// Use the rollbar error handler to send exceptions to your rollbar account
app.use(rollbar.errorHandler());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})