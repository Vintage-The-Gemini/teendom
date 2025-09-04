import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: parseInt(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async sendConfirmationEmail(nominatorEmail, nominatorName, nomineeName) {
    const emailTemplate = `
      <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #0b1426 0%, #162a4a 50%, #0b1426 100%); border-radius: 10px;">
          <h1 style="color: #DAA520; font-size: 28px; margin: 0; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);">
            🌟 Teendom Awards 2025 🌟
          </h1>
        </div>

        <!-- Main Content -->
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #0b1426; margin-top: 0; font-size: 24px;">
            Dear Teen Champion,
          </h2>

          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for submitting a nomination for the <strong>Teendom Awards 2025</strong>! 🌟
          </p>

          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We have received your entry nominating <strong style="color: #DAA520;">${nomineeName}</strong> and our team is excited to review it. Every nomination helps us shine a light on the incredible talent, courage, and leadership of Kenya's teen changemakers.
          </p>

          <!-- What Happens Next -->
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #DAA520; margin: 25px 0;">
            <h3 style="color: #0b1426; margin-top: 0; font-size: 18px;">What Happens Next:</h3>
            <ol style="color: #333; padding-left: 20px; line-height: 1.6;">
              <li><strong>Review & Shortlisting</strong> – Our panel of judges will carefully review all entries.</li>
              <li><strong>Notification</strong> – Only shortlisted nominees will be contacted by our team.</li>
              <li><strong>Consent Forms</strong> – For the nominees under 18, who will be shortlisted as finalists, we will request a signed parental/guardian consent form before we can go public with their names and details.</li>
              <li><strong>Public Announcement</strong> – All the finalists will be profiled on our website and social platforms.</li>
            </ol>
          </div>

          <!-- Key Dates -->
          <div style="background: linear-gradient(135deg, #DAA520, #B8860B); padding: 20px; border-radius: 8px; margin: 25px 0; color: white;">
            <h3 style="margin-top: 0; font-size: 18px; color: #0b1426;">📅 Key Dates:</h3>
            <ul style="padding-left: 20px; line-height: 1.8; color: #0b1426; font-weight: 500;">
              <li>Nominations close: <strong>30th September, 2025</strong></li>
              <li>Judging takes place: <strong>5 October – 5 November, 2025</strong></li>
              <li>Voting for the category winners: <strong>8 – 21 November, 2025</strong></li>
              <li>Awards Ceremony: <strong>6 December, 2025</strong></li>
            </ul>
          </div>

          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            If you have any questions, please reach out to us at 
            <a href="mailto:info@teendom.africa" style="color: #DAA520; text-decoration: none; font-weight: bold;">info@teendom.africa</a> 
            and/or follow our journey on social media <strong>@teendomafrica</strong>.
          </p>

          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you once again for helping us celebrate and empower Kenya's next generation of leaders.
          </p>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #f0f0f0;">
            <p style="color: #DAA520; font-size: 16px; font-weight: bold; margin-bottom: 5px;">
              With gratitude,
            </p>
            <p style="color: #0b1426; font-size: 18px; font-weight: bold; margin-bottom: 10px;">
              The Teendom Africa Team
            </p>
            <a href="https://www.teendom.africa" style="color: #DAA520; text-decoration: none; font-weight: bold; font-size: 16px;">
              www.teendom.africa
            </a>
          </div>
        </div>

        <!-- Footer Branding -->
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
          <p>© 2025 Teendom Africa. Celebrating Kenya's Next Generation of Leaders.</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Teendom Awards 2025" <${process.env.EMAIL_USER}>`,
      to: nominatorEmail,
      subject: 'Thank You for Your Nomination – Teendom Awards 2025',
      html: emailTemplate,
      text: `
Dear Teen Champion,

Thank you for submitting a nomination for the Teendom Awards 2025! 🌟

We have received your entry nominating ${nomineeName} and our team is excited to review it. Every nomination helps us shine a light on the incredible talent, courage, and leadership of Kenya's teen changemakers.

What Happens Next:
1. Review & Shortlisting – Our panel of judges will carefully review all entries.
2. Notification – Only shortlisted nominees will be contacted by our team.
3. Consent Forms – For the nominees under 18, who will be shortlisted as finalists, we will request a signed parental/guardian consent form before we can go public with their names and details.
4. Public Announcement – All the finalists will be profiled on our website and social platforms.

📅 Key Dates:
● Nominations close: 30th September, 2025.
● Judging takes place: 5 October – 5 November, 2025
● Voting for the category winners: 8 – 21 November, 2025
● Awards Ceremony: 6 December, 2025

If you have any questions, please reach out to us at info@teendom.africa and/or follow our journey on social media @teendomafrica.

Thank you once again for helping us celebrate and empower Kenya's next generation of leaders.

With gratitude,
The Teendom Africa Team
www.teendom.africa
      `
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('✅ Confirmation email sent:', info.messageId);
      return {
        success: true,
        messageId: info.messageId
      };
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async testConnection() {
    try {
      await this.transporter.verify();
      console.log('✅ Email server connection successful');
      return true;
    } catch (error) {
      console.error('❌ Email server connection failed:', error);
      return false;
    }
  }
}

export default new EmailService();