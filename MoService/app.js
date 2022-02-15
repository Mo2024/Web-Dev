const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/publicLinks'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/HoverMe', (req, res) => {
    res.sendFile(path.join(__dirname, '/Projects/HoverMe/HoverMe.html'));
})

app.get('/PricingPanelProject', (req, res) => {
    res.sendFile(path.join(__dirname, '/Projects/Pricing Panel Project/index.html'));
})

app.get('/MuseumOfCandy', (req, res) => {
    res.sendFile(path.join(__dirname, '/Projects/Museum of Candy/index.html'));
})

app.listen(443, () => {

    console.log("Listening to port 443")

})
