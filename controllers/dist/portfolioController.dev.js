"use strict";

// Render the home page
exports.getHomePage = function (req, res) {
  res.render('pages/home', {
    title: 'Home'
  });
}; // Render the about page


exports.getAboutPage = function (req, res) {
  res.render('pages/about', {
    title: 'About'
  });
}; // Render the projects page


exports.getProjectsPage = function (req, res) {
  res.render('pages/projects', {
    title: 'Projects'
  });
}; // Render the contact page


exports.getContactPage = function (req, res) {
  res.render('pages/contact', {
    title: 'Contact'
  });
}; // Handle contact form submission


exports.handleContactForm = function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      message = _req$body.message; // Here, you would typically save the data to a database or send an email

  console.log('Contact Form Submission:', {
    name: name,
    email: email,
    message: message
  }); // For simplicity, just send a thank you message back to the contact page

  res.render('pages/contact', {
    title: 'Contact',
    message: 'Thank you for reaching out. I will get back to you soon!'
  });
};
//# sourceMappingURL=portfolioController.dev.js.map
