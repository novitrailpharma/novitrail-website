import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", // GoDaddy's SMTP host
      port: 465, // GoDaddy's SMTP port
      secure: true, // Use STARTTLS
      auth: {
        user: process.env.GODADDY_EMAIL, // Your GoDaddy email
        pass: process.env.GODADDY_EMAIL_PASSWORD, // Your email password
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.GODADDY_EMAIL}>`, // Sender address
      to: process.env.GODADDY_EMAIL, // Recipient email
      subject: subject,
      text: `You received a message from ${name} (${email}):\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send the message. Please try again later." },
      { status: 500 }
    );
  }
}
