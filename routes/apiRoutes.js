var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../lib/isAuthenticated");
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = function(app) {

  app.post(
    "/api/login",
    passport.authenticate("local", {
      failureRedirect: "/admin-login",
      failureFlash: "true"
    }),
    function(req, res) {
      res.json("/admin");
    }
  );

  app.post("/api/signup", function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function() {
        res.json("/admin-login");
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/"); //Inside a callback… bulletproof!
    });
  });

  app.post("/api/project", isAuthenticated, function(req, res) {
    db.Project.create({...req.body, UserId: req.user.id
    }).then(function(response) {
      console.log("New project created");
      res.json("/admin");
    });
  });

  app.post("/api/sendemail", function(req, res) {
    var msg = req.body;
    console.log(msg);
    sgMail.send(msg).then(function(result) {
      res.json("/contact")
    })
  });

};
