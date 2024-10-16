const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Define routes and map them to controller functions

// Route for the home page
router.get('/', portfolioController.getHomePage);

// Route for the about page
router.get('/about', portfolioController.getAboutPage);

// Route for the projects page
router.get('/projects', portfolioController.getProjectsPage);

// Route for the contact page (GET request to display the form)
router.get('/contact', portfolioController.getContactPage);

// Route for processing contact form submissions (POST request)
router.post('/contact', portfolioController.handleContactForm);

module.exports = router;