const WishlistRecords = require('./dummyRecords'); 
const sendEmail = require('../config/mail-service'); 

// Endpoint handler to trigger the wishlist availability notification
exports.sendWishlistNotificationEndpoint = async (req, res) => {
  const { userId, mediaID } = req.body;

  try {
    // Find the user's wishlist record for the specific media item
    const record = WishlistRecords.find(record => record.userID === userId && record.mediaID === mediaID);

    if (record) {
      const emailContent = `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #4CAF50; text-align: center;">Media Item Now Available!</h2>
          <p>Dear User,</p>
          <p>We are excited to inform you that a media item on your wishlist is now available for borrowing.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Media Item ID:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${mediaID}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Added to Wishlist:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${new Date(record.createdAt).toISOString().split('T')[0]}</td>
            </tr>
          </table>
          <p style="margin-top: 20px;">You can now access this media item. Thank you for using our service!</p>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">Best Regards,<br>Your Library Team</p>
          <p style="text-align: center; font-size: 12px; color: #aaa; margin-top: 20px;">
            This is an automated message, please do not reply.
          </p>
        </div>
      `;

      
      await sendEmail('farshad389@gmail.com', 'Wishlist Media Item Now Available', emailContent); // Replace with dynamic email address later
      console.log('Availability notification email sent successfully');
      
      
      res.status(201).json({ message: 'Wishlist availability notification sent successfully' });
    } else {
  
      res.status(404).json({ message: 'No matching wishlist record found for the specified user and media item' });
    }
  } catch (error) {
    console.error('Failed to send wishlist notification email:', error);
    res.status(500).json({ error: 'Failed to send availability notification email' });
  }
};