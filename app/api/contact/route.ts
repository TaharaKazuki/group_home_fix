import { render } from '@react-email/render';
import { NextResponse, NextRequest } from 'next/server';
import { createTransport } from 'nodemailer';

import ContactEmail from '@/emails/ContactEmail';
import ContactReplyEmail from '@/emails/ContactReplyEmail';
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

    // 管理者宛メール（お問い合わせ内容）
    const adminEmailHtml = await render(
      ContactEmail({ name, email, type, message })
    );
    const adminEmailText = await render(
      ContactEmail({ name, email, type, message }),
      {
        plainText: true,
      }
    );

    // お客様宛自動返信メール
    const replyEmailHtml = await render(ContactReplyEmail({ name }));
    const replyEmailText = await render(ContactReplyEmail({ name }), {
      plainText: true,
    });

    // 管理者宛メール送信
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'IXIA Group Homeからのお問い合わせ',
      html: adminEmailHtml,
      text: adminEmailText,
    });

    // 自動返信メール送信
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email, // お問い合わせ者のメールアドレス
      subject: 'お問い合わせを受け付けました - IXIA Group Home',
      html: replyEmailHtml,
      text: replyEmailText,
    });

    return NextResponse.json({ message: 'Success!', status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Failed! ${error}`, status: 500 });
  }
};
