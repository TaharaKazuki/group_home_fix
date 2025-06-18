'use client';

import Image from 'next/image';

import { ABOUT_SECTION_DESC } from '@/constant';

export default function AboutPage() {
  return (
    <section className="min-h-screen px-4 py-24 pt-[15vw]">
      <div className="mx-auto max-w-7xl">
        <p className="text-2xl font-semibold">
          私たちについて
          <span className="mt-2 block text-base font-normal text-red-300">
            About us
          </span>
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
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
                <div className="rounded-lg border border-dashed border-red-300 p-3 shadow-md lg:p-6">
                  <h2 className="font-bold lg:text-lg">施設概要</h2>
                  <dl className="mt-4 space-y-2">
                    <div className="flex gap-4">
                      <dt className="w-20 text-xs font-medium lg:text-base">
                        設立
                      </dt>
                      <dd className="text-xs font-semibold lg:text-base">
                        2020年4月
                      </dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-20 text-xs font-medium lg:text-base">
                        定員
                      </dt>
                      <dd className="text-xs font-semibold lg:text-base">
                        20名
                      </dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-20 text-xs font-medium lg:text-base">
                        職員数
                      </dt>
                      <dd className="text-xs font-semibold lg:text-base">
                        15名
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-lg border border-dashed border-red-300 p-3 shadow-md lg:p-6">
                  <h2 className="font-bold lg:text-lg">所在地・アクセス</h2>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="text-xs font-medium lg:text-base">住所</dt>
                      <dd className="mt-1 text-xs font-semibold lg:text-base">
                        〒000-0000
                        <br />
                        埼玉県草加市〇〇1-1-1
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium lg:text-base">
                        アクセス
                      </dt>
                      <dd className="mt-1 text-xs font-semibold lg:text-base">
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
    </section>
  );
}
