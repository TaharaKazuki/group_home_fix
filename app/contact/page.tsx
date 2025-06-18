import ContactForm from '@/components/sections/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold">お問い合わせ</h1>
        <p className="mx-auto mb-12 max-w-[400px] text-center text-gray-600">
          ご質問やご相談がございましたら
          <br />
          下記フォームよりお気軽にお問い合わせください。
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
