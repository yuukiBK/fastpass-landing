'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Sidebar Component (shared with other pages)
function Sidebar({ activePage = 'home' }: { activePage?: 'home' | 'courses' | 'events' | 'messages' | 'history' | 'profile' }) {
  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-white border-r border-gray-200 fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="p-6">
        <Link href="/" className="flex items-center">
          <img
            src="/名称未設定のデザイン (71).png"
            alt="FastPass"
            className="h-10"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-3">
        {/* ホーム */}
        <Link
          href="/demo/dmm"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'home'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          <span className="font-bold">ホーム</span>
        </Link>

        {/* コースを選択 */}
        <Link
          href="/demo/courses"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'courses'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="font-bold">コースを選択</span>
        </Link>

        {/* イベント */}
        <Link
          href="/demo/events"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'events'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-bold">イベント</span>
          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
        </Link>

        {/* 履歴 */}
        <Link
          href="/history"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'history'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold">履歴</span>
        </Link>

        {/* プロフィール */}
        <Link
          href="/demo/profile"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'profile'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="/β版　アニメーション.png"
              alt="プロフィール画像"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold">プロフィール</span>
        </Link>
      </nav>
    </aside>
  );
}

// 開催日程データ
const scheduleData = [
  {
    date: '1月5日',
    dayOfWeek: '月曜日',
    slots: [
      { time: '13:00〜14:00', deadline: 'オンライン 締切1月5日(月) 7:00' },
      { time: '15:00〜16:00', deadline: 'オンライン 締切1月5日(月) 7:00' },
      { time: '16:30〜17:30', deadline: 'オンライン 締切1月5日(月) 7:00' },
      { time: '18:00〜19:00', deadline: 'オンライン 締切1月5日(月) 7:00' },
    ],
  },
  {
    date: '1月6日',
    dayOfWeek: '火曜日',
    slots: [
      { time: '10:00〜11:00', deadline: 'オンライン 締切1月6日(火) 7:00' },
      { time: '13:00〜14:00', deadline: 'オンライン 締切1月6日(火) 7:00' },
      { time: '15:00〜16:00', deadline: 'オンライン 締切1月6日(火) 7:00' },
      { time: '18:00〜19:00', deadline: 'オンライン 締切1月6日(火) 7:00' },
    ],
  },
  {
    date: '1月7日',
    dayOfWeek: '水曜日',
    slots: [
      { time: '13:00〜14:00', deadline: 'オンライン 締切1月7日(水) 7:00' },
      { time: '16:00〜17:00', deadline: 'オンライン 締切1月7日(水) 7:00' },
      { time: '19:00〜20:00', deadline: 'オンライン 締切1月7日(水) 7:00' },
    ],
  },
];

// 関連イベントデータ
const relatedEvents = [
  {
    id: 2,
    bannerImage: '/AIC2025-LP画像 (1).png',
    title: '【27卒・28卒対象】AI Challengers Fes｜トップIT企業6社の人事・エンジニアが一堂に集結',
  },
  {
    id: 3,
    bannerImage: '/スクリーンショット 2025-12-28 15.22.16.png',
    title: '選考優遇のチャンス／難関企業の採用責任者と直接話せる選考座談会｜採用MEETUP',
  },
];

export default function EventDetailPage() {
  const router = useRouter();
  const [expandedDate, setExpandedDate] = useState<string | null>('1月5日');

  const handleApply = () => {
    // 追加情報入力ページに遷移（会員登録済みの人に足りない情報を入力してもらう）
    router.push('/demo/events/1/apply');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar activePage="events" />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
          {/* Back Link */}
          <Link href="/demo/events" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>イベント一覧に戻る</span>
          </Link>

          {/* Banner Image */}
          <div className="mb-6">
            <img
              src="/スクリーンショット 2025-12-28 15.18.13.png"
              alt="キャリアアドバイザーとの個別面談"
              className="w-full rounded-lg"
            />
          </div>

          {/* Company Info Section */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/【β版】FastPass素材 (1).png"
                  alt="FastPass"
                  className="h-12"
                />
              </div>
              {/* Company Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-700 font-medium">株式会社bestiee｜2027年卒向け</span>
                  <span className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-600">
                    エンジニア
                  </span>
                </div>
                <h2 className="text-gray-800 font-bold text-lg leading-relaxed">
                  【27卒対象】インターン・就活のお悩み相談から企業紹介まで★専任のキャリアアドバイザーと個別面談しませんか？
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="flex-1">
              {/* Title */}
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                ■専任のアドバイザーとお話ししてみませんか？
              </h1>

              {/* Description */}
              <div className="prose prose-gray max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  就活のお悩み相談から企業紹介まで、専任のキャリアアドバイザーがあなたの就活をサポートします。
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  「そもそも業界研究の方法がわからない」「ESの書き方に自信がない」「面接が苦手」など、どんな悩みでもOK！
                  1対1でじっくりお話しできるので、グループ面談では聞きにくいことも気軽にご相談いただけます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  また、あなたの志向性やスキルに合わせて、相性の良い企業をご紹介することも可能です。
                  「自分に合う企業がわからない」という方も、ぜひお気軽にご参加ください！
                </p>
              </div>

              {/* こんな方におすすめ */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">■こんな方におすすめ</h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4D5CEC]">•</span>
                    <span>就活の進め方がわからない方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4D5CEC]">•</span>
                    <span>自分に合う業界・企業を知りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4D5CEC]">•</span>
                    <span>ES・面接対策のアドバイスが欲しい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4D5CEC]">•</span>
                    <span>インターンや本選考の情報を収集したい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4D5CEC]">•</span>
                    <span>就活の悩みを誰かに相談したい方</span>
                  </li>
                </ul>
              </div>

              {/* イベント概要 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">■イベント概要</h2>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">開催形式</span>
                    <span className="text-gray-800">オンライン（Google Meet）</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">所要時間</span>
                    <span className="text-gray-800">約60分</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">参加費</span>
                    <span className="text-gray-800">無料</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">対象</span>
                    <span className="text-gray-800">27卒の学生</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">主催</span>
                    <span className="text-gray-800">株式会社bestiee</span>
                  </div>
                </div>
              </div>

              {/* お申し込みの流れ */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">■お申し込みの流れ</h2>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#4D5CEC] text-white rounded-full flex items-center justify-center text-sm">1</span>
                    <span>右側の開催日程から希望の時間枠を選択</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#4D5CEC] text-white rounded-full flex items-center justify-center text-sm">2</span>
                    <span>「申込へ」ボタンをクリック（会員登録が必要です）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#4D5CEC] text-white rounded-full flex items-center justify-center text-sm">3</span>
                    <span>申込完了後、Google MeetのURLをメールでお送りします</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#4D5CEC] text-white rounded-full flex items-center justify-center text-sm">4</span>
                    <span>当日、時間になりましたらURLからご参加ください</span>
                  </li>
                </ol>
              </div>

              {/* 注意事項 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">■ご参加前に可能な範囲でプロフィールの登録・更新をお願いします</h2>
                <p className="text-gray-600 text-sm">
                  事前にプロフィール情報をご登録いただくと、より充実した面談が可能になります。
                  「プロフィール」ページから、学歴・志望業界・自己PRなどをご入力ください。
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              {/* 開催日程 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">開催日程</h3>

                {/* Time Slots */}
                <div className="space-y-4">
                  {scheduleData.map((day) => (
                    <div key={day.date} className="border-t border-gray-100 pt-4 first:border-t-0 first:pt-0">
                      <button
                        onClick={() => setExpandedDate(expandedDate === day.date ? null : day.date)}
                        className="w-full flex items-center justify-between text-left mb-2"
                      >
                        <span className="text-gray-800">
                          <span className="font-medium">{day.date}({day.dayOfWeek})</span>
                          <span className="text-sm text-gray-500 ml-2">時間枠を選ぶ（{day.slots.length}枠）</span>
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${expandedDate === day.date ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {expandedDate === day.date && (
                        <div className="space-y-2">
                          {day.slots.map((slot, index) => (
                            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                              <div>
                                <p className="font-medium text-gray-800">{slot.time}</p>
                                <p className="text-xs text-gray-500">{slot.deadline}</p>
                              </div>
                              <button
                                onClick={handleApply}
                                className="px-4 py-1.5 border-2 border-[#4D5CEC] text-[#4D5CEC] rounded-lg text-sm font-medium hover:bg-[#4D5CEC] hover:text-white transition-colors"
                              >
                                申込へ
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 関連するイベント */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-4">関連するイベント</h3>
                <div className="space-y-4">
                  {relatedEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={`/demo/events/${event.id}`}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={event.bannerImage}
                        alt={event.title}
                        className="w-full rounded-lg mb-2"
                      />
                      <p className="text-sm text-gray-700 line-clamp-2">{event.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
