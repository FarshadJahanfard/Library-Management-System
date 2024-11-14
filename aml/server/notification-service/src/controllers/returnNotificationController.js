const Borrowingrecords = require('./dummyRecords'); // Adjust path as necessary
const sendEmail = require('../config/mail-service'); // Adjust path as necessary

// Function to fetch a borrowing record by user ID
const getBorrowingRecord = (userId) => {
  return Borrowingrecords.find(record => record.userID === userId);
};

// Function to send a return notification
const remindUserToReturnBook = async (userId) => {
  const record = getBorrowingRecord(userId);

  if (record) {
    const returnDate = new Date(record.returnAt);

    const emailContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #FF6347; text-align: center;">Return Reminder</h2>
        <p>Dear User,</p>
        <p>This is a reminder to return the borrowed media item. You have only two days left to return this media item.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Media Item ID:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${record.mediaID}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Return By:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${returnDate.toISOString().split('T')[0]}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">Please make sure to return it by the due date to avoid any late fees. Thank you for using our service!</p>
        <p style="margin-top: 20px; font-size: 12px; color: #888;">Best Regards,<br>Your Library Team</p>
        <p style="text-align: center; font-size: 12px; color: #aaa; margin-top: 20px;">
          This is an automated message, please do not reply.
        </p>
      </div>
    `;

    try {
      await sendEmail('farshad389@gmail.com', 'Return Reminder', emailContent); // Replace with actual user email
      console.log('Reminder email sent successfully');
    } catch (error) {
      console.error('Failed to send reminder email:', error);
    }
  } else {
    console.log(`No borrowing record found for user ID: ${userId}`);
  }
};

// Endpoint handler to trigger the reminder function
exports.sendReturnNotification = async (req, res) => {
  try {
    await remindUserToReturnBook(req.body.userId);
    res.status(201).json({ message: 'Return notification sent successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
