const express = require("express");
const fs = require("fs");
const app = express();
const helmet = require("helmet"); 
// For security reasons, use Helmet.
app.use(helmet());
app.get("/api/v1/weather/img/sunny.png", (req, res) => {
	res.send(fs.readFileSync("sunny.png", 'utf8'))
})
app.get("/weather/doc", (req, res) => {
	res.send(fs.readFileSync("doc.html", 'utf8'))
})
app.get("/api/v1/weather/img/rainy.png", (req, res) => {
	res.send(fs.readFileSync("rainy.png", 'utf8'))
})
app.get("/api/v1/weather/img/rain_tstorm.png", (req, res) => {
	res.send(fs.readFileSync("rain_tstorm.png", 'utf8')) 
})
app.get("/api/v1/weather/img/cloudy.png", (req, res) => {
	res.send(fs.readFileSync("cloudy.png", 'utf8'))
})
app.get("/weather", (req, res) => {
	res.send(fs.readFileSync("weather.html", 'utf8'))
})
app.get("/api/v1/weather/img/partly_cloudy.png", (req, res) => {
	res.send(fs.readFileSync("partly_cloudy.png", 'utf8'))
})
app.get("/api/v1/weather/forecast/5-day:query", (req, res) => {
	if (req.params.query == "Fort_Campbell") {
	res.send(fs.readFileSync("fort_campbell.json", 'utf8'))
	}
	if (req.params.query == "New_York") {
	res.send(fs.readFileSync("new_york.json", 'utf8'))
	}
	if (req.params.query == "Los_Angeles") {
	res.send(fs.readFileSync("los_angeles.json", 'utf8'))
	}
	if (req.params.query == "Chicago") {
	res.send(fs.readFileSync("chicago.json", 'utf8'))
	}
	if (req.params.query == "Houston") {
	res.send(fs.readFileSync("houston.json", 'utf8'))
	}
	if (req.params.query == "Philadelphia") {
	res.send(fs.readFileSync("philadelphia.json", 'utf8'))
	}
	if (req.params.query == "Phoenix") {
	res.send(fs.readFileSync("phoenix.json", 'utf8'))
	}
	if (req.params.query == "San_Antonio") {
	res.send(fs.readFileSync("san_antonio.json", 'utf8'))
	}
	if (req.params.query == "San_Diego") {
	res.send(fs.readFileSync("san_diego.json", 'utf8'))
	}
	if (req.params.query == "Dallas") {
	res.send(fs.readFileSync("dallas.json", 'utf8'))
	}
	if (req.params.query == "San Jose") {
	res.send(fs.readFileSync("san_jose.json", 'utf8'))
	}
	if (req.params.query == "Austin") {
	res.send(fs.readFileSync("austin.json", 'utf8'))
	}
	if (req.params.query == "Jacksonville") {
	res.send(fs.readFileSync("austin.json", 'utf8'))
	}
	if (req.params.query == "San_Francisco") {
	res.send(fs.readFileSync("austin.json", 'utf8'))
	}
	if (req.params.query == "Indianapolis") {
	res.send(fs.readFileSync("indianapolis.json", 'utf8'))
	}
	if (req.params.query == "Columbus") {
	res.send(fs.readFileSync("columbus.json", 'utf8'))
	}
	if (req.params.query == "Fort_Worth") {
	res.send(fs.readFileSync("fort_worth.json", 'utf8'))
	}
	if (req.params.query == "Denver") {
	res.send(fs.readFileSync("denver.json", 'utf8'))
	}
	if (req.params.query == "Detroit") {
	res.send(fs.readFileSync("detroit.json", 'utf8'))
	}
	if (req.params.query == "Washington") {
	res.send(fs.readFileSync("washington.json", 'utf8'))
	}
	if (req.params.query == "Boston") {
	res.send(fs.readFileSync("boston.json", 'utf8'))
	}
	if (req.params.query == "Memphis") {
	res.send(fs.readFileSync("memphis.json", 'utf8'))
	}
	if (req.params.query == "Nashville") {
	res.send(fs.readFileSync("nashville.json", 'utf8'))
	}
	if (req.params.query == "Las Vegas") {
	res.send(fs.readFileSync("las_vegas.json", 'utf8'))
	}
	if (req.params.query == "Oklahoma City") {
	res.send(fs.readFileSync("Oklahoma City", 'utf8'))
	}
	if (req.params.query == "Colorado Springs") {
	res.send(fs.readFileSync("colorado_springs.json", 'utf8'))
	}
	if (req.params.query == "Miami") {
	res.send(fs.readFileSync("miami.json", 'utf8'))
	}
	else {
	res.send("You must query which city to use before using the API.")
	}
})
app.listen(8080, () => {
	console.log('App running')
})
