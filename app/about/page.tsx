'use client';

import Image from 'next/image';

import { ABOUT_SECTION_DESC } from '@/constant';

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-2xl font-semibold">
          私たちについて
          <span className="mt-2 block text-base font-normal text-red-300">
            About us
          </span>
        </p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
            <Image
              src="/assets/hero/hero_background_1.png"
              alt="施設の外観"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <p className="whitespace-pre-wrap text-base leading-relaxed text-gray-600 lg:text-lg">
                {ABOUT_SECTION_DESC}
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6">
                  <h2 className="text-lg font-semibold">施設概要</h2>
                  <dl className="mt-4 space-y-2">
                    <div className="flex gap-4">
                      <dt className="w-20 font-medium">設立</dt>
                      <dd>2020年4月</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-20 font-medium">定員</dt>
                      <dd>20名</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-20 font-medium">職員数</dt>
                      <dd>15名</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-gray-50 p-6">
                  <h2 className="text-lg font-semibold">所在地・アクセス</h2>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="font-medium">住所</dt>
                      <dd className="mt-1">
                        〒000-0000
                        <br />
                        東京都〇〇区〇〇1-1-1
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium">アクセス</dt>
                      <dd className="mt-1">
                        〇〇線 〇〇駅から徒歩5分
                        <br />
                        バス停「〇〇」から徒歩1分
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
