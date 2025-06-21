import {
  Html,
  Head,
  Font,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from '@react-email/components';
import React from 'react';

interface ContactReplyEmailProps {
  name: string;
}

export const ContactReplyEmail: React.FC<ContactReplyEmailProps> = ({
  name,
}) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>お問い合わせを受け付けました</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>お問い合わせありがとうございます</Heading>

            <Text style={text}>{name} 様</Text>

            <Text style={text}>
              この度は、IXIA Group
              Homeにお問い合わせいただき、誠にありがとうございます。
            </Text>

            <Text style={text}>
              お送りいただいたお問い合わせ内容を確認させていただき、担当者より3営業日以内にご返信いたします。
            </Text>

            <Hr style={hr} />

            <Section style={contactInfo}>
              <Text style={contactTitle}>お問い合わせ先</Text>
              <Text style={contactText}>IXIA Group Home</Text>
              <Text style={contactText}>
                お問い合わせ受付時間: 平日 9:00-18:00
              </Text>
            </Section>

            <Text style={footerText}>
              ※このメールは自動送信されています。このメールに直接返信いただいてもお答えできませんのでご了承ください。
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Inter, Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const section = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '32px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 20px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const contactInfo = {
  backgroundColor: '#f9fafb',
  padding: '20px',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
  marginBottom: '20px',
};

const contactTitle = {
  color: '#1f2937',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 8px',
};

const contactText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0 0 4px',
};

const footerText = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '20px 0 0',
};

export default ContactReplyEmail;
