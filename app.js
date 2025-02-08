// Importing necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express to serve our end points
const app = express();

// Define the port to run on
const PORT = process.env.PORT || 3000;

// Use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the directory where the template files are located
app.set('views', path.join(__dirname, 'views'));

// Define a route for HTTP GET requests to the root URL ('/')
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to My Node.js App!' });
});

// Set a static folder for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the Loan Application page
app.get('/application', (req, res) => {
    res.render('application', { title: 'Loan Application', message: 'Start Your Loan Application' });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

