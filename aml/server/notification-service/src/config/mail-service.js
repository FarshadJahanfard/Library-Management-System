// emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
    }
});

// Function to send email
const sendEmail = async (to, subject, html) => { 
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: to,
            subject: subject,
            html: html 
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;
