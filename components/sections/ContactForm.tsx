'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { MdCheckCircle, MdError } from 'react-icons/md';

import { useSendMail } from '@/hooks/useSendMail';
import { ContactFormData, contactSchema } from '@/schemas/contact';

const ContactForm = () => {
  const { sendMail, isLoading, isSuccess, error, resetState } = useSendMail();
  const formRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await sendMail(data);
    reset();
  };

  // 送信完了またはエラー時にスクロール
  useEffect(() => {
    if (isSuccess || error) {
      formRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isSuccess, error]);

  const handleReset = () => {
    resetState();
    reset();
  };

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-4xl p-6"
    >
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <div className="rounded-lg bg-white p-8 shadow-xl">
              <div className="flex flex-col items-center space-y-4">
                <AiOutlineLoading3Quarters className="size-8 animate-spin text-red-300" />
                <p className="text-lg font-medium text-gray-700">送信中...</p>
              </div>
            </div>
          </motion.div>
        )}

        {isSuccess && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4"
          >
            <div className="flex items-center space-x-3">
              <MdCheckCircle className="size-6 text-green-600" />
              <div>
                <p className="font-medium text-green-800">送信完了</p>
                <p className="text-sm text-green-700">
                  お問い合わせありがとうございます。後日ご連絡いたします。
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-3 text-sm text-green-600 underline hover:text-green-800"
            >
              新しいお問い合わせをする
            </button>
          </motion.div>
        )}

        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4"
          >
            <div className="flex items-center space-x-3">
              <MdError className="size-6 text-red-600" />
              <div>
                <p className="font-medium text-red-800">送信エラー</p>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
            <button
              onClick={resetState}
              className="mt-3 text-sm text-red-600 underline hover:text-red-800"
            >
              再試行する
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="min-h-[110px]">
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-700"
          >
            お名前
          </label>
          <input
            type="text"
            id="name"
            placeholder="山田 太郎"
            {...register('name')}
            disabled={isLoading}
            className={`mt-2 block w-full rounded-md border-2 border-gray-200 p-3 text-base shadow-sm placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-gray-100 ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="min-h-[110px]">
          <label
            htmlFor="email"
            className="block text-base font-medium text-gray-700"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            {...register('email')}
            disabled={isLoading}
            className={`mt-2 block w-full rounded-md border-2 border-gray-200 p-3 text-base shadow-sm placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-gray-100 ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="relative min-h-[110px]">
          <label
            htmlFor="type"
            className="block text-base font-medium text-gray-700"
          >
            お問い合わせ種別
          </label>
          <select
            id="type"
            {...register('type')}
            defaultValue=""
            disabled={isLoading}
            className={`mt-2 block w-full appearance-none rounded-md border-2 border-gray-200 p-3 pr-10 text-base shadow-sm placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-gray-100 ${
              errors.type ? 'border-red-500' : ''
            }`}
          >
            <option value="" disabled hidden>
              選択してください
            </option>
            <option value="入居について">入居について</option>
            <option value="採用について">採用について</option>
          </select>
          <div className="pointer-events-none absolute right-0 top-[2.9rem] flex items-center pr-3">
            <IoIosArrowDropdownCircle className="size-5 text-red-300" />
          </div>
          {errors.type && (
            <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
          )}
        </div>

        <div className="min-h-[110px]">
          <label
            htmlFor="message"
            className="block text-base font-medium text-gray-700"
          >
            お問い合わせ内容（1000文字以内）
          </label>
          <textarea
            id="message"
            placeholder="お問い合わせ内容を入力してください"
            {...register('message')}
            rows={6}
            maxLength={1000}
            disabled={isLoading}
            className={`mt-2 block w-full rounded-md border-2 border-gray-200 p-3 text-base shadow-sm placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-gray-100 ${
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
            disabled={isLoading}
            className="flex w-full items-center justify-center rounded-full border border-transparent bg-red-300 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {isLoading ? (
              <>
                <AiOutlineLoading3Quarters className="mr-2 size-4 animate-spin" />
                送信中...
              </>
            ) : (
              '送信する'
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
