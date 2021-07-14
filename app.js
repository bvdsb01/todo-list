const express = require("express");
const bodyParser = require("body-parser");
const date = require("./views/date.js");
//const date = require(__dirname + "/date.js");

const app = express();


const items = [];
const workItems = [];
app.use(bodyParser.urlencoded({ extended: true }));

//to tell express to use our static content
app.use(express.static("public"));

//tell our app to use ejs
app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    const day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items });
});
app.post("/", function (req, res) {
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});
//targeting the work route
app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
})


app.listen(3000, function () {
    console.log("Server is running on port 3000.")
})