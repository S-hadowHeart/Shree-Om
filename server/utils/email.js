const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

async function sendVerificationEmail(to, token) {
    const link = `${process.env.CLIENT_URL}/verify-email/${token}`;
    await transporter.sendMail({
        from: `"Shree Om Hardware" <${process.env.EMAIL_USER}>`,
        to,
        subject: "Verify your email — Shree Om Hardware",
        html: `
      <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:24px;border:1px solid #eee;border-radius:8px;">
        <div style="background:#f97316;padding:12px 20px;border-radius:6px 6px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:18px;">Shree Om Hardware</h2>
        </div>
        <div style="padding:24px;">
          <h3 style="margin-top:0;">Verify Your Email Address</h3>
          <p style="color:#555;">Thank you for registering! Click the button below to verify your email address and activate your account.</p>
          <a href="${link}" style="display:inline-block;background:#f97316;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-weight:bold;margin:16px 0;">Verify Email</a>
          <p style="color:#999;font-size:12px;">This link expires in 24 hours. If you did not create an account, ignore this email.</p>
        </div>
      </div>`,
    });
}

async function sendPasswordResetEmail(to, token) {
    const link = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
    await transporter.sendMail({
        from: `"Shree Om Hardware" <${process.env.EMAIL_USER}>`,
        to,
        subject: "Reset your password — Shree Om Hardware",
        html: `
      <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:24px;border:1px solid #eee;border-radius:8px;">
        <div style="background:#f97316;padding:12px 20px;border-radius:6px 6px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:18px;">Shree Om Hardware</h2>
        </div>
        <div style="padding:24px;">
          <h3 style="margin-top:0;">Password Reset Request</h3>
          <p style="color:#555;">We received a request to reset your password. Click the button below to set a new password.</p>
          <a href="${link}" style="display:inline-block;background:#f97316;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-weight:bold;margin:16px 0;">Reset Password</a>
          <p style="color:#999;font-size:12px;">This link expires in 1 hour. If you did not request a reset, ignore this email.</p>
        </div>
      </div>`,
    });
}

async function sendContactThankYouEmail(to, name) {
    await transporter.sendMail({
        from: `"Shree Om Hardware" <${process.env.EMAIL_USER}>`,
        to,
        subject: "Thank you for contacting us — Shree Om Hardware",
        html: `
      <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:24px;border:1px solid #eee;border-radius:8px;">
        <div style="background:#f97316;padding:12px 20px;border-radius:6px 6px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:18px;">Shree Om Hardware</h2>
        </div>
        <div style="padding:24px;">
          <h3 style="margin-top:0;">Thank You, ${name}!</h3>
          <p style="color:#555;">We have received your message and will get back to you within 1-2 business days.</p>
          <p style="color:#555;">Our business hours are <strong>Monday – Saturday, 9:00 AM – 6:00 PM</strong>.</p>
          <p style="color:#555;">For urgent queries, call us at <strong>+91-98765-43210</strong>.</p>
          <p style="margin-top:24px;color:#888;font-size:12px;">— Team Shree Om Hardware</p>
        </div>
      </div>`,
    });
}

module.exports = { sendVerificationEmail, sendPasswordResetEmail, sendContactThankYouEmail };
