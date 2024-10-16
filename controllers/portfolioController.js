// Render the home page
exports.getHomePage = (req, res) => {
    res.render('pages/home', { title: 'Home' });
};

// Render the about page
exports.getAboutPage = (req, res) => {
    res.render('pages/about', { title: 'About' });
};

// Render the projects page
exports.getProjectsPage = (req, res) => {
    res.render('pages/projects', { title: 'Projects' });
};

// Render the contact page
exports.getContactPage = (req, res) => {
    res.render('pages/contact', { title: 'Contact' });
};

// Handle contact form submission
exports.handleContactForm = (req, res) => {
    const { name, email, message } = req.body;

    // Here, you would typically save the data to a database or send an email
    console.log('Contact Form Submission:', { name, email, message });

    // For simplicity, just send a thank you message back to the contact page
    res.render('pages/contact', {
        title: 'Contact',
        message: 'Thank you for reaching out. I will get back to you soon!'
    });
};