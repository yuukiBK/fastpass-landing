'use client';

import Link from 'next/link';

// Sidebar Component (shared with DMM page)
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

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar activePage="courses" />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              面接対策したい企業は？
            </h1>
            <p className="text-gray-500">
              後から他の企業も追加できます
            </p>
          </div>

          {/* 選択ボタン */}
          <div className="mb-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register/start?company=undecided"
              className="inline-block py-4 px-8 text-center font-bold text-[#4B5563] bg-white border-2 border-gray-300 rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-all shadow-[0_2px_0_0_#d1d5db] hover:shadow-[0_2px_0_0_#d1d5db] active:shadow-none active:translate-y-[2px]"
            >
              自分に合う業界を探す
            </Link>
            <Link
              href="/register/industry"
              className="inline-block py-4 px-8 text-center font-bold text-[#4B5563] bg-white border-2 border-gray-300 rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-all shadow-[0_2px_0_0_#d1d5db] hover:shadow-[0_2px_0_0_#d1d5db] active:shadow-none active:translate-y-[2px]"
            >
              業界別に練習する
            </Link>
          </div>

          {/* 企業グリッド画像 */}
          <Link href="/demo/dmm" className="block">
            <img
              src="/見出しを追加 (1626 x 877 px).png"
              alt="コースを選択"
              className="w-full rounded-lg"
            />
          </Link>
          <img
            src="/見出しを追加 (1626 x 869 px).png"
            alt="コースを選択2"
            className="w-full mt-6 rounded-lg"
          />
          <img
            src="/見出しを追加 (1626 x 869 px) (1).png"
            alt="コースを選択3"
            className="w-full mt-4 lg:mt-6 rounded-lg"
          />

          {/* 順次追加予定セクション */}
          <div className="mt-12 mb-8 text-center">
            <p className="text-lg font-bold text-gray-800 mb-3">
              他の企業も順次追加予定
            </p>
            <p className="text-gray-500 mb-4">
              追加してほしい企業や機能があれば教えてください！<br />
              優先度高く準備します！
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZxkC7VNM2tD877YWQPE6zgRFApGmn8Wyye8DfjplsIMzVYA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4D5CEC] hover:text-[#395BE5] font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              リクエストを送る
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
