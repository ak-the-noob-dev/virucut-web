import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mnestest3000@gmail.com",
    pass: "aoftqcepribbcwwp",
  },
});

interface EmailProps {
  to: string;
  subject: string;
  html: string;
  from: string;
}
export function sendEmail(props: EmailProps) {
  try {
    transporter.sendMail({
      from: props.from,
      to: props.to,
      subject: props.subject,
      html: props.html,
    });
  } catch (error: unknown) {
    console.log(error);
  }
}
