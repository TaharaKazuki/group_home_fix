import { ContactFormData } from '@/schemas/contact';

export const useSendMail = () => {
  const sendMail = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send mail');
      }
      await response.json();
    } catch (error) {
      console.error('Failed to send mail', error);
      throw error;
    }
  };

  return { sendMail };
};
