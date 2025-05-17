const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 5500;

// Middleware
app.use(bodyParser.json());

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Dummy list of emergency contacts
const emergencyContacts = [
  { email: 'b522004@iiit-bh.ac.in' },
  { email: 'b522031@iiit-bh.ac.in' }
];

// Function to send emails
function sendEmailAlert(type, location) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ananyakar2002@gmail.com', // Replace with your email
      pass: 'Ananya@2002'   // Replace with your email password
    }
  });

  const mailOptions = {
    from: 'ananyakar2002@gmail.com',
    to: emergencyContacts.map(contact => contact.email).join(','),
    subject: `${type.charAt(0).toUpperCase() + type.slice(1)} Alert!`,
    text: `An alert has been triggered! \nLocation: Latitude ${location.latitude}, Longitude ${location.longitude}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Endpoint to handle alert requests
app.post('/send-alert', (req, res) => {
  const { type, location } = req.body;
  if (location && (type === 'emergency' || type === 'silent')) {
    sendEmailAlert(type, location);
    res.status(200).send('Alert sent successfully.');
  } else {
    res.status(400).send('Invalid request.');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
