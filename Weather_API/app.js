const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { url } = require("inspector");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const cityName = req.body.cityName;
  const appId = "60b2a6ddb0cad60c7bbe83f9f7972156";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    appId +
    "&" +
    "units=" +
    unit;
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const WhetherData = JSON.parse(data);
      const temperature = WhetherData.main.temp;
      const icon = WhetherData.weather[0].icon;
      const url = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>Address " + WhetherData.name + " </h1>");
      res.write(
        "<h1>Today the temperature is " + temperature + "degree C </h1>"
      );
      const discription = WhetherData.weather[0].description;
      res.write("<p> Dicription is " + discription + " <p>");
      res.write("<img src=" + url + " />");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Running on 3000");
});
