const express = require('express');
const path = require('path');
const portfolioRoutes = require('./routes/portfolioRoutes'); // Import the routes
const app = express();
const PORT = process.env.PORT || 3000;



// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded form data (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Use the portfolio routes
app.use('/', portfolioRoutes);

// Start the server on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});