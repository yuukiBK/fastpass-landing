'use client';

import Link from 'next/link';

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
              src="/スクリーンショット 2025-12-23 15.29.56.png"
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

// イベントデータ
const events = [
  {
    id: 1,
    bannerImage: '/スクリーンショット 2025-12-28 15.18.13.png', // バナー画像
    title: '【27卒対象】インターン・就活のお悩み相談から企業紹介まで★専任のキャリアアドバイザーと個別面談しませんか？',
    organizer: '株式会社bestiee',
    tags: ['エンジニア'],
    location: 'オンライン',
    dates: ['1月5日(月)', '1月5日(月)', '1月5日(月)', '1月6日(火)', '1月6日(火)'],
    moreCount: 87,
    deadline: '1月5日(月)の申込締切 1月5日(月) 7:00',
  },
  {
    id: 2,
    bannerImage: '/AIC2025-LP画像 (1).png', // バナー画像
    title: '【27卒・28卒対象】AI Challengers Fes｜トップIT企業6社の人事・エンジニアが一堂に集結する内定直結型イベント',
    organizer: '株式会社bestiee',
    tags: ['エンジニア'],
    location: 'オフライン（東京）',
    dates: ['12月21日(土)'],
    moreCount: 0,
    deadline: '12月20日(金)の申込締切 12月20日(金) 18:00',
  },
  {
    id: 3,
    bannerImage: '/スクリーンショット 2025-12-28 15.22.16.png', // バナー画像
    title: '選考優遇のチャンス／難関企業の採用責任者と直接話せる選考座談会｜採用MEETUP',
    organizer: 'FastPass',
    tags: ['総合職', 'エンジニア'],
    location: '東京都渋谷区道玄坂1丁目21−1 渋谷ソラスタ 14F',
    dates: ['1月9日(木)', '1月13日(月)'],
    moreCount: 0,
    deadline: '1月8日(水)の申込締切 1月8日(水) 18:00',
  },
];

// イベントカードコンポーネント
function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <Link href={`/demo/events/${event.id}`} className="block">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        {/* Banner Image */}
        <div className="w-full">
          <img
            src={event.bannerImage}
            alt={event.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-gray-800 font-bold text-base mb-2 leading-relaxed">
            {event.title}
          </h3>

          {/* Organizer */}
          <p className="text-gray-500 text-sm mb-3">{event.organizer}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Location & Dates */}
          <div className="border border-gray-200 rounded-lg p-3 mb-4">
            <p className="text-gray-700 text-sm font-medium mb-1">{event.location}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              {event.dates.map((date, index) => (
                <span key={index}>{date}{index < event.dates.length - 1 ? '、' : ''}</span>
              ))}
              {event.moreCount > 0 && (
                <span className="text-gray-400">その他{event.moreCount}件</span>
              )}
            </div>
          </div>

          {/* Deadline */}
          <p className="text-right text-[#4D5CEC] text-sm font-medium">
            {event.deadline}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar activePage="events" />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              すべての募集中のイベント
            </h1>
          </div>

          {/* Event Count */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <p className="text-lg font-medium text-gray-800">
              募集中のイベント <span className="font-bold">{events.length}件</span>
            </p>
          </div>

          {/* Event List */}
          <div className="space-y-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
