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

interface ContactEmailProps {
  name: string;
  email: string;
  type: string;
  message: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  type,
  message,
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
      <Preview>IXIA Group Homeからのお問い合わせがありました</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>お問い合わせ</Heading>
            <Text style={text}>
              IXIA Group Homeサイトからお問い合わせがありました。
            </Text>

            <Hr style={hr} />

            <Section style={infoSection}>
              <Text style={label}>お名前</Text>
              <Text style={value}>{name}</Text>
            </Section>

            <Section style={infoSection}>
              <Text style={label}>メールアドレス</Text>
              <Text style={value}>{email}</Text>
            </Section>

            <Section style={infoSection}>
              <Text style={label}>お問い合わせ種別</Text>
              <Text style={value}>{type}</Text>
            </Section>

            <Section style={infoSection}>
              <Text style={label}>お問い合わせ内容</Text>
              <Text style={messageValue}>{message}</Text>
            </Section>
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
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 16px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const infoSection = {
  marginBottom: '20px',
};

const label = {
  color: '#374151',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 4px',
};

const value = {
  color: '#1f2937',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 16px',
};

const messageValue = {
  color: '#1f2937',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap',
  padding: '16px',
  backgroundColor: '#f9fafb',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
};

export default ContactEmail;
