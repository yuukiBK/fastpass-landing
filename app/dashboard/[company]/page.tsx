'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

// 企業データ
const companyData: Record<string, {
  name: string;
  shortName: string;
  color: string;
  bgColor: string;
  description: string;
}> = {
  'goldman-sachs': {
    name: 'ゴールドマン・サックス',
    shortName: 'GS',
    color: '#7399C6',
    bgColor: '#E8F0F7',
    description: '世界をリードする投資銀行',
  },
  'bcg': {
    name: 'ボストン コンサルティング グループ',
    shortName: 'BCG',
    color: '#00A650',
    bgColor: '#E5F5EC',
    description: '戦略コンサルティングのリーダー',
  },
  'mckinsey': {
    name: 'マッキンゼー・アンド・カンパニー',
    shortName: 'McKinsey',
    color: '#0033A0',
    bgColor: '#E5EBF5',
    description: '世界最高峰の戦略コンサルティングファーム',
  },
};

// クエストデータ
const quests = [
  {
    id: 1,
    title: '自己紹介',
    description: '基本的な自己紹介の練習',
    level: 1,
    completed: false,
    locked: false,
  },
  {
    id: 2,
    title: '志望動機',
    description: 'なぜこの会社を志望するか',
    level: 1,
    completed: false,
    locked: false,
  },
  {
    id: 3,
    title: 'ガクチカ',
    description: '学生時代に力を入れたこと',
    level: 2,
    completed: false,
    locked: true,
  },
  {
    id: 4,
    title: '強み・弱み',
    description: '自己分析に基づく回答',
    level: 2,
    completed: false,
    locked: true,
  },
  {
    id: 5,
    title: 'ケース面接',
    description: '論理的思考力を問う問題',
    level: 3,
    completed: false,
    locked: true,
  },
];

// サイドバーコンポーネント
function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 fixed left-0 top-0 h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <Link href="/">
          <img
            src="/透過ロゴ.png"
            alt="FastPass"
            className="h-10"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#DDF4FF] text-[#1CB0F6] font-bold"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          ホーム
        </Link>
        <Link
          href="/register"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          コース
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/>
          </svg>
          ランキング
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          プロフィール
        </Link>
      </nav>
    </aside>
  );
}

export default function DashboardPage() {
  const params = useParams();
  const companyId = params.company as string;
  const company = companyData[companyId] || companyData['goldman-sachs'];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Sidebar />

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <img
            src="/透過ロゴ.png"
            alt="FastPass"
            className="h-8"
          />
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-600">Lv.1</span>
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        {/* Company Header */}
        <div
          className="px-6 py-8 lg:py-12"
          style={{ backgroundColor: company.bgColor }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: company.color }}
              >
                {company.shortName.substring(0, 2)}
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  {company.name}
                </h1>
                <p className="text-gray-600">{company.description}</p>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">進捗</span>
                <span className="text-sm font-bold" style={{ color: company.color }}>0/5 完了</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ backgroundColor: company.color, width: '0%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quest List */}
        <div className="max-w-2xl mx-auto px-6 py-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">面接練習</h2>

          <div className="space-y-3">
            {quests.map((quest) => (
              <div
                key={quest.id}
                className={`bg-white rounded-2xl p-4 border-2 ${
                  quest.locked
                    ? 'border-gray-200 opacity-50'
                    : 'border-gray-200 hover:border-[#58CC02] hover:shadow-md cursor-pointer'
                } transition-all`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center ${
                      quest.locked ? 'bg-gray-200 text-gray-400' : 'text-white'
                    }`}
                    style={{
                      backgroundColor: quest.locked ? undefined : company.color,
                    }}
                  >
                    {quest.locked ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z"/>
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800">{quest.title}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        Lv.{quest.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{quest.description}</p>
                  </div>
                  {!quest.locked && (
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-8 p-6 bg-white rounded-2xl border-2 border-dashed border-gray-300 text-center">
            <p className="text-gray-500 font-medium">さらに多くの練習問題を準備中...</p>
            <p className="text-sm text-gray-400 mt-1">随時追加されます</p>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-2 py-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center gap-1" style={{ color: '#1CB0F6' }}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-[10px] font-bold">ホーム</span>
          </div>
          <Link href="/register" className="flex flex-col items-center gap-1 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-[10px] font-bold">コース</span>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/>
            </svg>
            <span className="text-[10px] font-bold">ランキング</span>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span className="text-[10px] font-bold">プロフィール</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
