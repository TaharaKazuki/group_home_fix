import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  type: z
    .string()
    .min(1, 'お問い合わせ種別を選択してください')
    .refine((value) => ['入居について', '採用について'].includes(value), {
      message: 'お問い合わせ種別を選択してください',
    }),
  message: z
    .string()
    .min(10, 'メッセージは10文字以上入力してください')
    .max(1000, 'メッセージは1000文字以内で入力してください'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
