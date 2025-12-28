'use client';

import Link from 'next/link';

// 企業データ（フラットに）
const companies = [
  // 外資コンサル
  { name: 'マッキンゼー', color: '#58CC02', challengers: 28470, slug: 'mckinsey', active: false },
  { name: 'BCG', color: '#58CC02', challengers: 21560, slug: 'bcg', active: false },
  { name: 'ベイン', color: '#58CC02', challengers: 18320, slug: 'bain', active: false },
  { name: 'アクセンチュア', color: '#58CC02', challengers: 34210, slug: 'accenture', active: false },
  // 外資金融
  { name: 'ゴールドマン・サックス', color: '#1CB0F6', challengers: 19560, slug: 'goldman-sachs', active: false },
  { name: 'モルガン・スタンレー', color: '#1CB0F6', challengers: 16230, slug: 'morgan-stanley', active: false },
  { name: 'JPモルガン', color: '#1CB0F6', challengers: 14870, slug: 'jpmorgan', active: false },
  // 総合商社
  { name: '三菱商事', color: '#FF9600', challengers: 45210, slug: 'mitsubishi-corp', active: false },
  { name: '三井物産', color: '#FF9600', challengers: 38920, slug: 'mitsui', active: false },
  { name: '伊藤忠商事', color: '#FF9600', challengers: 36540, slug: 'itochu', active: false },
  { name: '住友商事', color: '#FF9600', challengers: 29870, slug: 'sumitomo-corp', active: false },
  { name: '丸紅', color: '#FF9600', challengers: 24560, slug: 'marubeni', active: false },
  // 日系大手・メガベンチャー
  { name: 'DMM', color: '#A855F7', challengers: 18230, slug: 'dmm', link: '/demo/dmm', active: true },
  { name: 'リクルート', color: '#A855F7', challengers: 52340, slug: 'recruit', active: false },
  { name: 'サイバーエージェント', color: '#A855F7', challengers: 31870, slug: 'cyberagent', active: false },
  { name: 'メルカリ', color: '#A855F7', challengers: 26540, slug: 'mercari', active: false },
  { name: 'DeNA', color: '#A855F7', challengers: 19870, slug: 'dena', active: false },
  // 外資IT・テック
  { name: 'Google', color: '#2DD4BF', challengers: 41230, slug: 'google', active: false },
  { name: 'Amazon', color: '#2DD4BF', challengers: 38760, slug: 'amazon', active: false },
  { name: 'Microsoft', color: '#2DD4BF', challengers: 29340, slug: 'microsoft', active: false },
  { name: 'Apple', color: '#2DD4BF', challengers: 21870, slug: 'apple', active: false },
  { name: 'Meta', color: '#2DD4BF', challengers: 18760, slug: 'meta', active: false },
];

// Sidebar Component
function Sidebar() {
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
      <nav className="flex-1 px-4 space-y-1">
        {/* ホーム */}
        <Link
          href="/demo/dmm"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-gray-500 hover:bg-gray-100"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          <span className="font-bold text-[15px]">ホーム</span>
        </Link>

        {/* コースを選択 - Active */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors"
          style={{ backgroundColor: '#DDF4FF', color: '#1CB0F6' }}
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          <span className="font-bold text-[15px]">コースを選択</span>
        </div>

        {/* 自己分析 */}
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-gray-500 hover:bg-gray-100"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
          </svg>
          <span className="font-bold text-[15px]">自己分析</span>
        </Link>

        {/* ランキング */}
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-gray-500 hover:bg-gray-100"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
          </svg>
          <span className="font-bold text-[15px]">ランキング</span>
        </Link>

        {/* クエスト */}
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-gray-500 hover:bg-gray-100"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
          <span className="font-bold text-[15px]">クエスト</span>
        </Link>

        {/* 履歴 */}
        <Link
          href="/history"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-gray-500 hover:bg-gray-100"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
          </svg>
          <span className="font-bold text-[15px]">履歴</span>
        </Link>

        {/* プロフィール */}
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-gray-500 hover:bg-gray-100"
        >
          <div className="w-7 h-7 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-300">
            <img
              src="/S__222806024.jpg"
              alt="プロフィール"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-[15px]">プロフィール</span>
        </Link>

        {/* もっと見る */}
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-gray-500 hover:bg-gray-100"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          <span className="font-bold text-[15px]">もっと見る</span>
        </Link>
      </nav>
    </aside>
  );
}

// 企業カードコンポーネント（Duolingo風）
function CompanyCard({
  company
}: {
  company: typeof companies[0];
}) {
  const href = company.link || `/demo/${company.slug}`;

  // 挑戦者数をフォーマット（万人単位）
  const formatChallengers = (num: number) => {
    if (num >= 10000) {
      return `${(num / 10000).toFixed(1)}万人が挑戦中`;
    }
    return `${num.toLocaleString()}人が挑戦中`;
  };

  return (
    <Link
      href={href}
      className="flex flex-col items-center group"
    >
      {/* カード本体 */}
      <div className="relative">
        {/* チェックマーク（アクティブな場合） */}
        {company.active && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#58CC02] rounded-full flex items-center justify-center z-10 border-2 border-white">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}

        {/* ロゴエリア */}
        <div
          className="w-[88px] h-[88px] rounded-2xl flex items-center justify-center text-white text-3xl font-bold group-hover:scale-105 transition-transform shadow-sm"
          style={{ backgroundColor: company.color }}
        >
          {company.name.charAt(0)}
        </div>
      </div>

      {/* 企業名 */}
      <h3 className="font-bold text-gray-700 text-center text-sm mt-3 mb-1 group-hover:text-gray-900">
        {company.name}
      </h3>

      {/* 挑戦中人数 */}
      <p className="text-xs text-gray-400">
        {formatChallengers(company.challengers)}
      </p>
    </Link>
  );
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="">
        {/* Main Area */}
        <main className="max-w-4xl mx-auto px-4 py-6 lg:px-6 lg:py-10">
          {/* 企業グリッド画像1 - DMMへのリンク */}
          <Link href="/demo/dmm" className="block">
            <img
              src="/見出しを追加 (17).png"
              alt="コースを選択"
              className="w-full"
            />
          </Link>
          <img
            src="/見出しを追加 (1626 x 869 px).png"
            alt="コースを選択2"
            className="w-full mt-6"
          />
          <img
            src="/見出しを追加 (1626 x 869 px) (1).png"
            alt="コースを選択3"
            className="w-full mt-4 lg:mt-6"
          />
        </main>
      </div>
    </div>
  );
}
