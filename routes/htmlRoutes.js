var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/portfolio", function(req, res) {
    res.render("portfolio");
  });

  app.get("/about", function(req, res) {
    res.render("about");
  });

  app.get("/web-development", function(req, res) {
    res.render("web-development");
  });

  app.get("/web-development/front-end", function(req, res) {
    res.render("web-development");
  });

  app.get("/web-development/back-end", function(req, res) {
    res.render("web-development");
  });

  app.get("/web-development/ui-ux", function(req, res) {
    res.render("web-development");
  });

  app.get("/other-skills", function(req, res) {
    res.render("other-skills");
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
