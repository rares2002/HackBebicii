import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

export async function sendMail() {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT),
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: 'test#gmail.com',
    subject: 'test',
    html: `<p>Content</p>`,
  });
}
