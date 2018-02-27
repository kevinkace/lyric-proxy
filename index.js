"use strict";

const express = require("express");
const app = express();

const request = require("request");

const api = "http://lyrics.wikia.com/wiki/Special:Search?search="

app.get("/", (req, res, next) => {
    console.log(req.query);

    request(api + req.query, function (error, response, body) {
        if(error) {
            console.log("error:", error);

            return next();
        }

        console.log("statusCode:", response.statusCode); // Print the response status code if a response was received
        console.log("body:", body); // Print the HTML for the Google homepage.

        return next();
    });
}, (req, res) => {
    return res.send("Hello World!");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
