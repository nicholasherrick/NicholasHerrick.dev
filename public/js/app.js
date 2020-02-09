$(document).ready(function() {
  AOS.init();
  $('.nav-item [href^="/home' + location.pathname.split("/")[1] + '"]').addClass(
    "active"
  );
  $('.nav-item [href^="/home' + location.pathname.split("/home")[1] + '"]').addClass(
    "active"
  );
  $('.nav-item [href^="/portfolio' + location.pathname.split("/portfolio")[1] + '"]').addClass(
    "active"
  );
  $('.nav-item [href^="/about' + location.pathname.split("/about")[1] + '"]').addClass(
    "active"
  );
  $('.nav-item [href^="/contact' + location.pathname.split("/contact")[1] + '"]').addClass(
    "active"
  );
  $('.nav-item [href^="/web-development' + location.pathname.split("/web-development")[1] + '"]').addClass(
    "active"
  );
  $('.nav-item [href^="/web-development' + location.pathname.split("/web-development/front-end")[1] + '"]').addClass(
    "active"
  );
  $('.nav-item [href^="/web-development' + location.pathname.split("/web-development/back-end")[1] + '"]').addClass(
    "active"
  );
  $('.nav-item [href^="/web-development' + location.pathname.split("/web-development/ui-ux")[1] + '"]').addClass(
    "active"
  );
  $('.nav-item [href^="/other-skills' + location.pathname.split("/other-skills")[1] + '"]').addClass(
    "active"
  );
});

// Login Button
$(document.body).on("click", "#login-button", function(event) {
  event.preventDefault();
  var adminData = {
    username: $("#username")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim()
  };
  $.post("/api/login", adminData)
    .then(function(res) {
      window.location.replace(res);
    })
    .catch(function(err) {
      console.log(err.responseJSON);
    });
});

$(document.body).on("click", "#submit-project", function(event) {
  event.preventDefault();
  var newProjectData = {
    projectName: $("#project-name")
      .val()
      .trim(),
    deployedLink: $("#deployed-link")
      .val()
      .trim(),
    repositoryLink: $("#repository-link")
      .val()
      .trim(),
    projectDescription: $("#project-description")
      .val()
      .trim(),
    imagePath: $("#image-path")
      .val()
      .trim()
  };
  $.post("/api/project", newProjectData)
    .then(function(res) {
      window.location.replace(res);
    })
    .catch(function(err) {
      console.log(err.responseJSON);
    });
});

$(document.body).on("click", "#send-email", function(event) {
  event.preventDefault();
  var msg = {
    to: "nth.herrick@gmail.com",
    from: "info@nicholasherrick.dev",
    subject: $("#email-subject").val().trim(),
    text: $("#email-text").val().trim(),
    html: "<strong>Sent from nicholasherrick.dev</strong>"
  };
  $.post("/api/sendemail", msg).then(function(res) {
    window.location.replace(res);
  }).catch(function(err) {
    console.log(err.responseJSON);
  });
});

// Sends registration info from the login page
// $(document.body).on("click", "#register-button", function(event) {
//   event.preventDefault();
//   var adminData = {
//     username: $("#username")
//       .val()
//       .trim(),
//     password: $("#password")
//       .val()
//       .trim()
//   };
//   console.log(adminData);
//   $.post("/api/signup", adminData)
//     .then(function(res) {
//       window.location.replace(res);
//     })
//     .catch(function(err) {
//       console.log(err.responseJSON);
//     });
// });
