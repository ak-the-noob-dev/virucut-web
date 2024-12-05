import { sendEmail } from "@/lib/smtp";
import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company: string;
  phone: string;
}

export async function POST(req: Request) {
  const { name, email, message, company, phone }: ContactFormData =
    await req.json();

  if (!name || !email || !message || !company || !phone) {
    return NextResponse.json({ error: "All fields are required" });
  }

  // Email options
  const mailOptions = {
    from: "thebackendtech1011@gmail.com",
    to: "inquiry@virucut.in",
    subject: `New Contact Form Submission from ${name}`,
    html: `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Contact Us</title>
              </head>
              <body>
              <div style="
              background-color: rgb(219 234 254 / 1);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: medium;
              font-family: sans-serif;
              text-align: justify;
              ">
                  <p><h3>You have received a new message from : ${name}</h3></p>
                  <p>Email : ${email}</p>
                  <p>Phone : ${phone}</p>
                  <p>Company : ${company}</p>
                  <p>Message :${message}</p>
                </div>
              </body>
            </html>`,
  };

  try {
    // Send the email
    await sendEmail(mailOptions);
    return NextResponse.json(
      { success: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Error sending email", details: String(error) },
      { status: 500 }
    );
  }
}
