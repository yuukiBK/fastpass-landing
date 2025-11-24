'use client';

import { useState } from 'react';

export default function CompaniesPage() {
  const companies = [
    { name: "三菱商事", category: "商社" },
    { name: "アクセンチュア", category: "総合コンサル" },
    { name: "電通", category: "マスコミ・広告" },
    { name: "サイバーエージェント", category: "日系IT・通信" },
    { name: "野村総合研究所", category: "シンクタンク" },
    { name: "LINEヤフー", category: "日系IT・通信" },
    { name: "マッキンゼー・アンド・カンパニー", category: "戦略コンサル" },
    { name: "NTTデータ", category: "日系IT・通信" },
    { name: "P&G", category: "外資系メーカー・サービス" },
    { name: "ボストン・コンサルティング・グループ", category: "戦略コンサル" },
    { name: "ベイン・アンド・カンパニー", category: "戦略コンサル" },
    { name: "デロイト トーマツ コンサルティング", category: "総合コンサル" },
    { name: "PwCコンサルティング", category: "総合コンサル" },
    { name: "EYストラテジー・アンド・コンサルティング", category: "総合コンサル" },
    { name: "KPMGコンサルティング", category: "財務・会計・その他コンサル" },
    { name: "ブルー・コンサルティング", category: "ITコンサル" },
    { name: "三井物産", category: "商社" },
    { name: "住友商事", category: "商社" },
    { name: "伊藤忠商事", category: "商社" },
    { name: "丸紅", category: "商社" },
    { name: "楽天グループ", category: "日系IT・通信" },
    { name: "メルカリ", category: "日系IT・通信" },
    { name: "DeNA", category: "日系IT・通信" },
    { name: "リクルート", category: "日系メーカー・サービス" },
    { name: "博報堂", category: "マスコミ・広告" },
    { name: "ADKホールディングス", category: "マスコミ・広告" },
    { name: "ソニー", category: "日系メーカー・サービス" },
    { name: "パナソニック", category: "日系メーカー・サービス" },
    { name: "日立製作所", category: "日系メーカー・サービス" },
    { name: "富士通", category: "日系IT・通信" },
    { name: "NEC", category: "日系IT・通信" },
    { name: "日本IBM", category: "ITコンサル" },
    { name: "日本マイクロソフト", category: "外資IT" },
    { name: "Google", category: "外資IT" },
    { name: "Amazon Japan", category: "外資IT" },
    { name: "メタ・プラットフォームズ", category: "外資IT" },
    { name: "Apple Japan", category: "外資IT" },
    { name: "セールスフォース・ジャパン", category: "外資IT" },
    { name: "オラクル", category: "外資IT" },
    { name: "ゴールドマン・サックス", category: "外資系金融・証券" },
    { name: "モルガン・スタンレー", category: "外資系金融・証券" },
    { name: "J.P.モルガン", category: "外資系金融・証券" },
    { name: "野村證券", category: "日系金融・証券" },
    { name: "大和証券", category: "日系金融・証券" },
    { name: "三菱UFJ銀行", category: "日系金融・証券" },
    { name: "三井住友銀行", category: "日系金融・証券" },
    { name: "みずほ銀行", category: "日系金融・証券" },
    { name: "ユニリーバ・ジャパン", category: "外資系メーカー・サービス" },
    { name: "ロレアル", category: "外資系メーカー・サービス" },
    { name: "資生堂", category: "日系メーカー・サービス" },
  ];

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
    "デベロッパー・不動産・建設",
    "マスコミ・広告",
    "国家公務員・公的機関",
  ];

  // 職種データ
  const jobTypes = [
    "コンサルタント",
    "エンジニア",
    "事業開発",
    "マーケティング・企画",
    "営業",
    "リサーチ・アナリスト",
    "クリエイティブ",
    "人事・採用",
  ];

  // こだわりポイントデータ
  const preferences = [
    "実力主義",
    "若手から活躍",
    "グローバル環境",
    "リモートワーク可",
    "福利厚生充実",
    "初年度500万円以上",
    "フレックス制度",
    "育児支援充実",
    "研修制度充実",
    "副業OK",
  ];

  // 面接スキルデータ
  const interviewSkills = [
    "ケース面接",
    "フェルミ推定",
    "論理的思考力",
    "プレゼンテーション",
    "志望動機",
    "自己PR",
    "ガクチカ",
    "逆質問",
    "グループディスカッション",
    "英語面接",
  ];

  const [activeTab, setActiveTab] = useState<'industry' | 'job' | 'preference' | 'skill'>('industry');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = companies.filter(company => {
    const matchesCategory = selectedCategory ? company.category === selectedCategory : true;
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <svg className="w-6 h-6" style={{ color: '#4D5CEC' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xl font-bold" style={{ color: '#1C252E' }}>FastPass</span>
            </a>
            <a
              href="https://fastpass.bio.link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-white text-sm md:text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#4D5CEC' }}
            >
              AI面接を受ける
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="mb-10 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ color: '#1C252E' }}>
              対応企業一覧
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              FastPassでは、外資系コンサル、メガベンチャー、日系大手企業など、<br className="hidden md:block" />
              厳選された優良企業50社以上のAI面接対策が可能です。
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 md:mb-12">
            <div className="max-w-2xl mx-auto">
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

          {/* Tab Navigation */}
          <div className="mb-8 md:mb-12">
            <div className="border-b-2 border-gray-200 mb-6 md:mb-8">
              <div className="flex flex-wrap gap-2 md:gap-0">
                <button
                  onClick={() => { setActiveTab('industry'); setSelectedCategory(null); }}
                  className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-bold transition-all border-b-4 -mb-0.5"
                  style={{
                    borderColor: activeTab === 'industry' ? '#4D5CEC' : 'transparent',
                    color: activeTab === 'industry' ? '#4D5CEC' : '#6B7280'
                  }}
                >
                  業界から探す
                </button>
                <button
                  onClick={() => { setActiveTab('job'); setSelectedCategory(null); }}
                  className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-bold transition-all border-b-4 -mb-0.5"
                  style={{
                    borderColor: activeTab === 'job' ? '#4D5CEC' : 'transparent',
                    color: activeTab === 'job' ? '#4D5CEC' : '#6B7280'
                  }}
                >
                  職種から探す
                </button>
                <button
                  onClick={() => { setActiveTab('preference'); setSelectedCategory(null); }}
                  className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-bold transition-all border-b-4 -mb-0.5"
                  style={{
                    borderColor: activeTab === 'preference' ? '#4D5CEC' : 'transparent',
                    color: activeTab === 'preference' ? '#4D5CEC' : '#6B7280'
                  }}
                >
                  こだわりポイントから探す
                </button>
                <button
                  onClick={() => { setActiveTab('skill'); setSelectedCategory(null); }}
                  className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-bold transition-all border-b-4 -mb-0.5"
                  style={{
                    borderColor: activeTab === 'skill' ? '#4D5CEC' : 'transparent',
                    color: activeTab === 'skill' ? '#4D5CEC' : '#6B7280'
                  }}
                >
                  面接スキルから探す
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {selectedCategory && (
                <div className="mb-4 md:mb-6 flex items-center justify-between">
                  <div className="text-sm md:text-base text-gray-600">
                    絞り込み中: <span className="font-bold" style={{ color: '#4D5CEC' }}>{selectedCategory}</span>
                  </div>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-sm md:text-base font-medium hover:opacity-70 transition-opacity flex items-center gap-1"
                    style={{ color: '#4D5CEC' }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    絞り込みを解除
                  </button>
                </div>
              )}

              {/* Industry Tab */}
              {activeTab === 'industry' && (
                <div className="flex flex-wrap gap-2 md:gap-3">
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
              )}

              {/* Job Type Tab */}
              {activeTab === 'job' && (
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {jobTypes.map((job) => (
                    <button
                      key={job}
                      onClick={() => setSelectedCategory(job === selectedCategory ? null : job)}
                      className="px-3 md:px-4 py-2 rounded-lg border-2 text-sm md:text-base font-medium hover:scale-105 transition-all"
                      style={{
                        borderColor: '#4D5CEC',
                        backgroundColor: selectedCategory === job ? '#4D5CEC' : 'white',
                        color: selectedCategory === job ? 'white' : '#4D5CEC'
                      }}
                    >
                      {job}
                    </button>
                  ))}
                </div>
              )}

              {/* Preference Tab */}
              {activeTab === 'preference' && (
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {preferences.map((pref) => (
                    <button
                      key={pref}
                      onClick={() => setSelectedCategory(pref === selectedCategory ? null : pref)}
                      className="px-3 md:px-4 py-2 rounded-lg border-2 text-sm md:text-base font-medium hover:scale-105 transition-all"
                      style={{
                        borderColor: '#4D5CEC',
                        backgroundColor: selectedCategory === pref ? '#4D5CEC' : 'white',
                        color: selectedCategory === pref ? 'white' : '#4D5CEC'
                      }}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              )}

              {/* Interview Skill Tab */}
              {activeTab === 'skill' && (
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {interviewSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setSelectedCategory(skill === selectedCategory ? null : skill)}
                      className="px-3 md:px-4 py-2 rounded-lg border-2 text-sm md:text-base font-medium hover:scale-105 transition-all"
                      style={{
                        borderColor: '#4D5CEC',
                        backgroundColor: selectedCategory === skill ? '#4D5CEC' : 'white',
                        color: selectedCategory === skill ? 'white' : '#4D5CEC'
                      }}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Companies Grid */}
          <div className="mb-6 md:mb-8">
            <p className="text-sm md:text-base text-gray-600">
              {selectedCategory ? `${selectedCategory}の企業: ${filteredCompanies.length}社` : `全企業: ${companies.length}社`}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredCompanies.sort((a, b) => a.name.localeCompare(b.name, 'ja')).map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-opacity-50"
                style={{ '--hover-border-color': '#4D5CEC' } as React.CSSProperties}
              >
                <div className="mb-3 md:mb-4">
                  <span className="inline-block px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium" style={{ backgroundColor: '#E8EBFF', color: '#4D5CEC' }}>
                    {company.category}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: '#1C252E' }}>
                  {company.name}
                </h3>
                <a
                  href="https://fastpass.bio.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 md:gap-2 text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
                  style={{ color: '#4D5CEC' }}
                >
                  面接対策を始める
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
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
  );
}
