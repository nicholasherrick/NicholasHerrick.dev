var db = require("../models");
var isAuthenticated = require("../lib/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/home", function(req, res) {
    res.render("index");
  });

  app.get("/portfolio", function(req, res) {
    db.Project.findAll({}).then(function(result) {
      console.log(result);
      res.render("portfolio", { projects: result });
    });
  });

  app.get("/about", function(req, res) {
    res.render("about");
  });

  app.get("/web-development", function(req, res) {
    res.render("web-development");
  });

  app.get("/web-development/front-end", function(req, res) {
    res.render("front-end");
  });

  app.get("/web-development/back-end", function(req, res) {
    res.render("back-end");
  });

  app.get("/web-development/ui-ux", function(req, res) {
    res.render("ui-ux");
  });

  app.get("/other-skills", function(req, res) {
    res.render("other-skills");
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  app.get("/admin-login", function(req, res) {
    res.render("admin-login");
  });

  // Admin Page!
  app.get("/admin", isAuthenticated, function(req, res) {
    res.render("admin");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
