import { NextResponse, NextRequest } from 'next/server';
import { createTransport } from 'nodemailer';

import { ContactFormData } from '@/schemas/contact'


export const POST = async (req: NextRequest) => {
  try {
    const transporter = createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const { name, email, type, message } =
      (await req.json()) as ContactFormData;

    const details = `
      名前: ${name}

      Email: ${email}

      お問い合わせ種別: ${type}

      お問い合わせ詳細
      ${message}
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'Portfolioからのお問い合わせ',
      text: details,
    });

    return NextResponse.json({ message: 'Success!', status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Failed! ${error}`, status: 500 });
  }
};
