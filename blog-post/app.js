const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

mongoose.connect("mongodb+srv://admin-sonu:Test123@cluster0.hihom9r.mongodb.net/blogDB", {useNewUrlParser: true});

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
 

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  // console.log(data, postData);
  const post = new Post({
    title: req.body.item,
    content : req.body.postData
  });
  // posts.push(post);
  post.save(function (err) {
    if(!err) {
      res.redirect("/");
    }
  });
});

app.get("/home", function (req, res) {
  Post.find({}, function (err, posts) {
    res.render("home", {
      startingContent: homeStartingContent,
      posts : posts 
    });
  });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutPara: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactData: contactContent });
});

app.get("/", function (req, res) {
  Post.find({}, function (err, posts) {
    res.render("home", { 
      startingContent: homeStartingContent,
      posts: posts 
    });
  });
});

app.get("/post/:postId", function (req, res) {
  const checkData = req.params.postId;
  Post.findOne({_id: checkData}, function (err, posts) {
      res.render("post", {
        title: "ID-->"+checkData,
        data: posts.content
      });
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server Successfully started");
});