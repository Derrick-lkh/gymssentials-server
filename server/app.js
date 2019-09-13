var express = require("express");
var bodyParser = require("body-parser");

// import controller
var controller = require("./controllers/controller");
var test = require("./controllers/test");

var app = express();
var cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// http
app.get("/api/get", test.list);
app.get("/api/category/get", controller.listCategory);

// Product
app.get("/api/product/get", controller.listProduct);
app.get("/api/product_bullet/get/:product_id", controller.listBullets);

// set port and start webserver
app.listen("3000", "0.0.0.0", function() {
  console.log("server running at http://localhost:3000");
});
