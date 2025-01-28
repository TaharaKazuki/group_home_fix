'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  message: z
    .string()
    .min(10, 'メッセージは10文字以上入力してください')
    .max(1000, 'メッセージは1000文字以内で入力してください'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    // ここにAPI送信処理を実装
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-4xl p-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-700"
          >
            お名前
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`mt-2 block w-full rounded-md border-2 border-gray-200 py-3 text-base shadow-sm focus:border-red-300 focus:ring-red-300 ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-base font-medium text-gray-700"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`mt-2 block w-full rounded-md border-2 border-gray-200 py-3 text-base shadow-sm focus:border-red-300 focus:ring-red-300 ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-base font-medium text-gray-700"
          >
            お問い合わせ内容（1000文字以内）
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={6}
            maxLength={1000}
            className={`mt-2 block w-full rounded-md border-2 border-gray-200 py-3 text-base shadow-sm focus:border-red-300 focus:ring-red-300 ${
              errors.message ? 'border-red-500' : ''
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-full border border-transparent bg-red-300 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            送信する
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
