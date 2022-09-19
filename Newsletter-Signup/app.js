const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { response } = require("express");
const https = require("https");
const client = require("mailchimp-marketing");
const { url } = require("inspector");

const app = express();

//Using Public folder as a folder. Most Important
app.use(express.static("public"));

//Use Body Paster for this.
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const url = "https://us9.api.mailchimp.com/3.0/lists/6c0af9314d";

  const jsonData = JSON.stringify(data);

  const options = {
    method: "POST",
    auth: "sonu:f1039f657689ddb79806ba282caed555-us9",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/sucess.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

//For Dynamic Port by heroku
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening... on 3000");
});

//For Local Host
// app.listen(3000, function () {
//   console.log("Listening the port at 3000");
// });

//API KEY FOR NEWS LETTER
//f1039f657689ddb79806ba282caed555-us9

// List ID NewsLetter
//6c0af9314d
