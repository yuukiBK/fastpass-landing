"use client";

import Link from "next/link";

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

type HistoryItem = {
  id: number;
  question: string;
  industry: string;
  date: string;
  score: number;
  duration: string;
};

export default function HistoryPage() {
  const historyItems: HistoryItem[] = [
    {
      id: 1,
      question: "自己紹介をしてください。",
      industry: "デベロッパー・不動産",
      date: "2024/12/12 14:30",
      score: 85,
      duration: "6分32秒",
    },
    {
      id: 2,
      question: "学生時代に最も力を入れた経験を教えてください。",
      industry: "デベロッパー・不動産",
      date: "2024/12/11 16:45",
      score: 78,
      duration: "9分15秒",
    },
    {
      id: 3,
      question: "なぜデベロッパー業界を志望しているのですか？",
      industry: "デベロッパー・不動産",
      date: "2024/12/10 11:20",
      score: 92,
      duration: "7分48秒",
    },
    {
      id: 4,
      question: "あなたの強みを具体的なエピソードとともに教えてください。",
      industry: "戦略コンサル",
      date: "2024/12/09 15:00",
      score: 88,
      duration: "8分22秒",
    },
    {
      id: 5,
      question: "リーダーシップを発揮した経験を教えてください。",
      industry: "総合商社",
      date: "2024/12/08 10:30",
      score: 81,
      duration: "10分05秒",
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-100";
    if (score >= 80) return "text-blue-600 bg-blue-100";
    if (score >= 70) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "D";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar activePage="history" />

      {/* Main Content Area - offset for sidebar on desktop */}
      <div className="lg:ml-64">
        {/* Header - Mobile only */}
        <header className="bg-white shadow-sm sticky top-0 z-10 lg:hidden">
          <div className="px-4 py-4">
            <Link
              href="/companies"
              className="text-[#4D5CEC] text-sm font-medium hover:text-[#3D4CDC]"
            >
              ← ホームへ戻る
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <img src="/名称未設定のデザイン (80).png" alt="" className="w-6 h-6" />
              AI面接の履歴
            </h1>
            <p className="text-gray-500">過去の面接結果を確認できます</p>
          </div>

          {/* History List */}
          <div className="space-y-4">
            {historyItems.map((item) => (
              <Link
                key={item.id}
                href="/interview-result"
                className="block bg-white rounded-2xl shadow-sm p-5 border border-gray-100 hover:shadow-md hover:border-[#4D5CEC] transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Industry Tag */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#E8EBFF] text-[#4D5CEC] mb-2">
                      {item.industry}
                    </span>

                    {/* Question */}
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {item.question}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.date}
                      </span>
                                          </div>
                  </div>

                  {/* Score and Arrow */}
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${getScoreColor(item.score)}`}>
                        <span className="text-xl font-bold">{getScoreLabel(item.score)}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{item.score}点</span>
                    </div>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State (hidden for demo) */}
          {historyItems.length === 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-12 border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">まだ履歴がありません</h3>
              <p className="text-gray-500 mb-6">AI面接に挑戦して、結果を確認しましょう</p>
              <Link
                href="/companies"
                className="inline-block px-6 py-3 rounded-xl font-bold text-white bg-[#4D5CEC] hover:bg-[#3D4CDC] transition-colors"
              >
                AI面接を始める
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
