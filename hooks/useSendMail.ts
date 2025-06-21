import { useState } from 'react';

import { ContactFormData } from '@/schemas/contact';

export const useSendMail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMail = async (data: ContactFormData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('メールの送信に失敗しました');
      }

      await response.json();
      setIsSuccess(true);
    } catch (error) {
      console.error('Failed to send mail', error);
      setError(error instanceof Error ? error.message : 'エラーが発生しました');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    sendMail,
    isLoading,
    isSuccess,
    error,
    resetState,
  };
};
