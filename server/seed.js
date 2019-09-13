var configDB = require("./configDB");
var database = require("./database");
// var MailListener = require("mail-listener2");

// var apiURI = "http://localhost:3000";

// var Category = database.Category;
// var Task = database.Task;
// var Mail = database.Mail;
// var Furniture = database.Furniture;

var User = database.User;

module.exports = function() {
  if (configDB.seed) {
    User.bulkCreate([
      {
        user_id: "123qwe123",
        user_name: "testboy1",
        user_password: "qwesadadasdwewqe21312",
        DOB: "07/08/2000",
        avatar: "img",
        phone_number: "90201020",
        email: "testboy1@gmail.com",
        gender: "male",
        weight: "20",
        height: "100",
        BMI: "2"
      }
    ]).then(function() {
      console.log("done creating furniture records");
      // console.log(this.returnMail);
    });
  }
};
