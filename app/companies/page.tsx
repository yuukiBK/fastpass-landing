'use client';

import { useState } from 'react';
import Link from 'next/link';

type IndustryCard = {
  category: string;
  title: string;
  companies: string[];
  questionCount: number;
  link: string;
};

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
      <nav className="flex-1 px-4">
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
          style={{ backgroundColor: '#E8E3FE', color: '#934FFC' }}
        >
          <img
            src="/サイドバー_ホーム_タップ時 (1).png"
            alt="ホーム"
            className="w-6 h-6"
          />
          <span className="font-medium">ホーム</span>
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 mb-2 overflow-hidden">
            <img
              src="/S__222806024.jpg"
              alt="プロフィール画像"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-700 mb-2">LogicalTiger2025</span>
          <button className="px-4 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            プロフィール
          </button>
        </div>
      </div>
    </aside>
  );
}

export default function CompaniesPage() {
  const categories = [
    "戦略コンサル",
    "総合コンサル",
    "ITコンサル",
    "シンクタンク",
    "財務・会計・その他コンサル",
    "M&Aアドバイザリー",
    "外資系金融・証券",
    "日系IT・通信",
    "外資IT",
    "外資系メーカー・サービス",
    "日系金融・証券",
    "商社",
    "日系メーカー・サービス",
    "デベロッパー・不動産・建築",
    "マスコミ・広告",
    "国家公務員・公的機関",
  ];

  const industryCards: IndustryCard[] = [
    {
      category: "戦略コンサル",
      title: "戦略コンサル業界の面接対策",
      companies: ["マッキンゼー", "BCG", "ベイン", "A.T.カーニー", "ローランド・ベルガー", "Strategy&", "アーサー・D・リトル", "ドリームインキュベータ"],
      questionCount: 30,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "総合コンサル",
      title: "総合コンサル業界の面接対策",
      companies: ["アクセンチュア", "デロイト", "PwC", "EY", "KPMG", "アビームコンサルティング", "ベイカレント", "クニエ"],
      questionCount: 32,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "ITコンサル",
      title: "ITコンサル業界の面接対策",
      companies: ["アビームコンサルティング", "ベイカレント", "フューチャー", "シグマクシス", "ウルシステムズ", "ケンブリッジ", "スカイライト"],
      questionCount: 28,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "シンクタンク",
      title: "シンクタンク業界の面接対策",
      companies: ["野村総合研究所", "三菱総合研究所", "日本総研", "大和総研", "みずほリサーチ&テクノロジーズ", "NTTデータ経営研究所"],
      questionCount: 26,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "財務・会計・その他コンサル",
      title: "財務・会計コンサル業界の面接対策",
      companies: ["PwC FAS", "デロイトFAS", "KPMG FAS", "EY FAS", "リンクアンドモチベーション", "マーサー", "タワーズワトソン"],
      questionCount: 24,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "M&Aアドバイザリー",
      title: "M&Aアドバイザリー業界の面接対策",
      companies: ["日本M&Aセンター", "M&Aキャピタルパートナーズ", "ストライク", "フロンティア・マネジメント", "GCA", "IGPI", "経営共創基盤"],
      questionCount: 25,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "外資系金融・証券",
      title: "外資系金融・証券業界の面接対策",
      companies: ["ゴールドマン・サックス", "モルガン・スタンレー", "J.P.モルガン", "バンク・オブ・アメリカ", "シティグループ", "UBS", "ドイツ銀行", "バークレイズ"],
      questionCount: 30,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "日系IT・通信",
      title: "日系IT・通信業界の面接対策",
      companies: ["NTTデータ", "富士通", "NEC", "KDDI", "ソフトバンク", "楽天", "サイバーエージェント", "DeNA", "メルカリ", "LINE"],
      questionCount: 28,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "外資IT",
      title: "外資IT業界の面接対策",
      companies: ["Google", "Amazon", "Microsoft", "Apple", "Meta", "セールスフォース", "オラクル", "SAP", "Adobe", "Netflix"],
      questionCount: 32,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "外資系メーカー・サービス",
      title: "外資系メーカー・サービス業界の面接対策",
      companies: ["P&G", "ユニリーバ", "ロレアル", "ネスレ", "ジョンソン・エンド・ジョンソン", "フィリップモリス", "LVMH", "ダイソン"],
      questionCount: 26,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "日系金融・証券",
      title: "日系金融・証券業界の面接対策",
      companies: ["三菱UFJ銀行", "三井住友銀行", "みずほ銀行", "野村證券", "大和証券", "SMBC日興証券", "東京海上", "三井住友海上", "日本生命"],
      questionCount: 28,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "商社",
      title: "総合商社業界の面接対策",
      companies: ["三菱商事", "三井物産", "伊藤忠商事", "住友商事", "丸紅", "豊田通商", "双日"],
      questionCount: 30,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "日系メーカー・サービス",
      title: "日系メーカー・サービス業界の面接対策",
      companies: ["トヨタ", "ソニー", "パナソニック", "日立", "キーエンス", "リクルート", "任天堂", "ファーストリテイリング", "資生堂", "味の素"],
      questionCount: 28,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "デベロッパー・不動産・建築",
      title: "デベロッパー・不動産業界の面接対策",
      companies: ["三井不動産", "三菱地所", "住友不動産", "東急不動産", "野村不動産", "森ビル", "NTT都市開発", "鹿島建設", "大成建設"],
      questionCount: 32,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "マスコミ・広告",
      title: "マスコミ・広告業界の面接対策",
      companies: ["電通", "博報堂", "ADK", "日本テレビ", "フジテレビ", "TBS", "テレビ朝日", "NHK", "集英社", "講談社"],
      questionCount: 26,
      link: "/demo/sumitomo-realty",
    },
    {
      category: "国家公務員・公的機関",
      title: "国家公務員・公的機関の面接対策",
      companies: ["総合職", "一般職", "外務省専門職", "国税専門官", "JICA", "JETRO", "日本銀行", "DBJ", "JBIC"],
      questionCount: 24,
      link: "/demo/sumitomo-realty",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCards = industryCards.filter(card => {
    const matchesCategory = selectedCategory ? card.category === selectedCategory : true;
    const matchesSearch = searchQuery
      ? card.companies.some(company =>
          company.toLowerCase().includes(searchQuery.toLowerCase())
        ) || card.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar - Desktop only */}
      <Sidebar />

      {/* Main wrapper with sidebar offset on desktop */}
      <div className="lg:ml-64">
        {/* Header - Mobile only */}
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm lg:hidden">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4">
            <a href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" style={{ color: '#4D5CEC' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-base font-medium" style={{ color: '#4D5CEC' }}>トップページに戻る</span>
            </a>
          </div>
        </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border-4 border-white shadow-md">
              <img
                src="/S__222806024.jpg"
                alt="プロフィール画像"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">LogicalTiger2025</h2>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">guest@example.com</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium rounded-full border text-[#934FFC] border-[#934FFC]">慶應義塾大学</span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full border text-[#934FFC] border-[#934FFC]">文系</span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full border text-[#934FFC] border-[#934FFC]">27卒</span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full border text-[#934FFC] border-[#934FFC]">財務アドバイザリー・会計関連</span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full border text-[#934FFC] border-[#934FFC]">戦略コンサル</span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full border text-[#934FFC] border-[#934FFC]">M&Aアドバイザリー</span>
                  </div>
                </div>

                {/* Edit Button */}
                <button
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-white transition-all hover:opacity-90 self-start"
                  style={{ backgroundColor: '#934FFC' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  プロフィール編集
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Banner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img
              src="/FastPass_banar_manual.jpg"
              alt="使い方マニュアル"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img
              src="/FastPass_banar_careerAI.png"
              alt="キャリアAI"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img
              src="/FastPass_banar_common question.png"
              alt="共通質問"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-10 md:mb-16">
          {/* Search Bar */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/AI就活_ファビコン (5) (1).png"
                alt="AI面接"
                className="w-8 h-8"
              />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                AI面接に挑戦する
              </h2>
            </div>
            <p className="text-base text-gray-500 mb-4">
              FastPassでは、外資系コンサル、メガベンチャー、日系大手企業など、厳選された優良企業50社以上のAI面接対策が可能です。
            </p>
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="企業名で検索（例: マッキンゼー、アクセンチュア）"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 pl-12 md:pl-14 rounded-xl border-2 text-sm md:text-base focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: '#4D5CEC', color: '#1C252E' }}
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-6 md:h-6"
                  style={{ color: '#4D5CEC' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity"
                    style={{ color: '#4D5CEC' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-wrap justify-start gap-2 md:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                  className="px-3 md:px-4 py-2 rounded-lg border-2 text-sm md:text-base font-medium hover:scale-105 transition-all"
                  style={{
                    borderColor: '#4D5CEC',
                    backgroundColor: selectedCategory === category ? '#4D5CEC' : 'white',
                    color: selectedCategory === category ? 'white' : '#4D5CEC'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            {selectedCategory && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-sm md:text-base font-medium hover:opacity-70 transition-opacity flex items-center gap-1 mx-auto"
                  style={{ color: '#4D5CEC' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  絞り込みを解除
                </button>
              </div>
            )}
          </div>

          {/* Industry Cards Grid */}
          {filteredCards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredCards.map((card, index) => (
                <Link
                  key={index}
                  href={card.link}
                  className="block bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-[#4D5CEC]"
                >
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium" style={{ backgroundColor: '#E8EBFF', color: '#4D5CEC' }}>
                      {card.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#1C252E' }}>
                    {card.title}
                  </h3>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">対応企業例：</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {card.companies.join(" / ")}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">全{card.questionCount}問</span>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-bold"
                      style={{ color: '#4D5CEC' }}
                    >
                      対策を始める
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                「{searchQuery}」の面接対策は見つかりませんでした
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                志望企業が見つからない場合は、<br className="hidden sm:block" />
                <span className="font-bold" style={{ color: '#4D5CEC' }}>業界タグから近い業界を選んで対策</span>することをおすすめします！
              </p>
              <div className="bg-blue-50 rounded-xl p-4 md:p-6 text-left">
                <p className="text-sm font-bold text-blue-700 mb-3">おすすめの対策方法：</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">1.</span>
                    上のタグから、志望企業に近い<span className="font-bold">業界</span>を選択
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">2.</span>
                    その業界の面接対策で<span className="font-bold">頻出質問</span>を練習
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">3.</span>
                    業界共通の質問は、企業が違っても<span className="font-bold">高確率で出題</span>されます！
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-6 px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#4D5CEC' }}
              >
                検索をクリアして業界から選ぶ
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">
            © 2024 FastPass. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}
