import { render } from '@react-email/render';
import { NextResponse, NextRequest } from 'next/server';
import { createTransport } from 'nodemailer';

import ContactEmail from '@/emails/ContactEmail';
import { ContactFormData } from '@/schemas/contact';

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

    // React-Emailテンプレートを使用してHTMLとテキストを生成
    const emailHtml = await render(
      ContactEmail({ name, email, type, message })
    );
    const emailText = await render(
      ContactEmail({ name, email, type, message }),
      {
        plainText: true,
      }
    );

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'Portfolioからのお問い合わせ',
      html: emailHtml,
      text: emailText,
    });

    return NextResponse.json({ message: 'Success!', status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Failed! ${error}`, status: 500 });
  }
};
