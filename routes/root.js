const express = require("express");
const app = express()
const router = express.Router();
const http = require("https");
app.set('view engine','ejs')

const options = {
    "method": "GET",
    "hostname": "ip-geo-location.p.rapidapi.com",
    "port": null,
    "path": "/ip/check?format=json",
    "headers": {
        "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com",
        "X-RapidAPI-Key": "d86ec95b53msh5bda15598b343b1p1e949cjsn99997566305e",
        "useQueryString": true
    }
};

app.set('view engine','ejs')
router

    .route("/")
    .get((req, res) =>{
            const request = http.request(options, function (response) {
                const chunks = [];

                response.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                response.on("end", function () {
                    const body = Buffer.concat(chunks);
                    const information = JSON.parse(body);
                    res.render(__dirname + '/views/Index.ejs', {city: information.city.name})
                });
            });
            request.end();
        })
    .post((req, res) => res.render("POST"));
module.exports = router;