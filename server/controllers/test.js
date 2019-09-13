var User = require("../database").User;

exports.list = function(req, resp) {
  User
    .findAll // select * from categories
    //{attribute: ['cat_name']} - select the cat_name only
    ()
    .then(result => {
      resp
        .status(200)
        .type("application/json")
        .json(result);
    })
    .catch(err => {
      resp
        .status(500)
        .type("application/json")
        .json({ error: true });
    });

  //   resp.json({ HI: "HI" });
};
