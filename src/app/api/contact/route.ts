
import { NextResponse } from 'next/server';
import { addMessage } from '@/lib/db';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Save to DB first
    // optional: Gracefully handle missing DB connection for demo purposes
    let newMessage;
    if (!process.env.MONGODB_URI) {
        console.warn('MONGODB_URI missing. Skipping database save.');
    } else {
        newMessage = await addMessage({
            name,
            email,
            subject,
            message,
        });
    }

    // Send Email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'shareefnncr@gmail.com', // User's requested email
            replyTo: email, // Reply to the person who filled the form
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <h3>New Message from Bakery Mart Contact Form</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">${message}</blockquote>
            `,
        };

        await transporter.sendMail(mailOptions);
    } else {
        console.warn('Email credentials missing (EMAIL_USER, EMAIL_PASS). Skipping email.');
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!', data: newMessage });

  } catch (error: unknown) {
    console.error('Contact Form Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
