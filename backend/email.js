const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Allow frontend requests
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // Or any port you like

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email sending route
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'campusconnect1813@gmail.com',         // your Gmail
      pass: 'sxgwcvmmronvnfzp'            // your Gmail App Password
    }
  });

  const mailOptions = {
    from: 'campusconnect1813@gmail.com',
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});
