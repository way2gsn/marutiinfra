// app/api/contact/route.ts

import type { NextApiRequest, NextApiResponse } from 'next';
//@ts-ignore
import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, toEmail } = await req.json();

    // Create a Nodemailer transporter with GoDaddy SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net', // GoDaddy SMTP server
      port: 465,                           // GoDaddy SMTP port for SSL
      secure: true,                       // Use 'true' for SSL
      auth: {
        user: process.env.GODADDY_EMAIL,   // Environment variable for GoDaddy email
        pass: process.env.GODADDY_PASSWORD, // Environment variable for GoDaddy password
      },
      tls: {
        ciphers: 'SSLv3', // You might need to adjust this based on GoDaddy's requirements
        rejectUnauthorized: true, // It's generally safer to keep this true in production
      },
      // Optional: You might need to add more specific TLS/SSL options
    });

    // Compose the email message
    const mailOptions = {
      from: email,
      to: toEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body>
          <p>Hi ${toEmail},</p>
          <p>A new contact form submission has been received from your website:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
          </ul>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <br>
          <p>Sincerely,</p>
          <p>Your Website Notification System</p>
        </body>
        </html>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}