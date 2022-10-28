const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();


app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true,});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

/////////////////////Request Targetting all articles //////////////////////
app.route("/article")
    .get((req, res) => {
        Article.find({}, function (err, articles) {
            if(!err) {
                res.send(articles);
            } else {
                res.send(err);
            }
        });
    })
    .post(function(req, res) {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err) {
        if(!err) {
            res.send("Sucessfully added the data to article.");
        }
        else {
            res.send(err);
        }
    });
})
.delete(function(req, res) {
    Article.deleteMany({}, function(err) {
        if(!err) {
            res.send("Successfully deleted the articles");
        }
        else {
            res.send(err);
        }
    });
});

/////////////////////Request Targetting a specific articles //////////////////////
app.route("/articles/:articleTitle")
    .get(function(req, res) {
        Article.findOne({title: req.params.articleTitle}, function(err, article) {
            console.log(req.params.articleTitle);
            if(article) {
                res.send(article);
            }
            else {
                res.send("No article maching title found");
            }
        });
    })
    .put(function(req, res) {
        Article.updateMany(
            {
                title: req.params.articleTitle
            }, 
            {
                title: req.body.title, 
                content: req.body.content
            }, 
            function(err) {
                if(!err) {
                    res.send("Succesfully updated the article.");
                }
                else {
                    res.send("Please check again");
                }
            }
        );
    })
    .patch(function(req, res) {
        Article.updateOne({title: req.params.articleTitle}, req.body, function(err) {
            if(!err) {
                res.send("Succesfully updated article.");
            }
            else {
                res.send(err);
            }
        });
    })
    .delete(function(req, res) {
        Article.deleteOne({title: req.params.articleTitle}, function (err) {
            if(!err) {
                res.send("Succesfully deleted the coressponding Article");
            }
            else {
                res.send(err);
            }
        });
    });

app.listen(3000, function () {
    console.log('listening on port 3000');
});