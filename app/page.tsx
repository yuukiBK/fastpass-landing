'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const featuresDropdownRef = useRef<HTMLDivElement>(null);
  const articlesDropdownRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        featuresDropdownRef.current &&
        !featuresDropdownRef.current.contains(event.target as Node) &&
        articlesDropdownRef.current &&
        !articlesDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/透過ロゴ.png"
                alt="Fastpass Logo"
                className="h-16 md:h-20 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative" ref={featuresDropdownRef}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'features' ? null : 'features')}
                  className="text-sm font-medium text-gray-700 hover:text-[#4D5CEC] transition-colors flex items-center gap-1"
                >
                  機能
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openDropdown === 'features' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <a
                      href="#"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4D5CEC] transition-colors"
                    >
                      AI面接
                    </a>
                    <a
                      href="#"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4D5CEC] transition-colors"
                    >
                      早期特別選考
                    </a>
                  </div>
                )}
              </div>
              <div className="relative" ref={articlesDropdownRef}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'articles' ? null : 'articles')}
                  className="text-sm font-medium text-gray-700 hover:text-[#4D5CEC] transition-colors flex items-center gap-1"
                >
                  コラム記事
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openDropdown === 'articles' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <a
                      href="#"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4D5CEC] transition-colors"
                    >
                      新卒
                    </a>
                    <a
                      href="#"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4D5CEC] transition-colors"
                    >
                      中途
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#4D5CEC] transition-colors">
                ヘルプガイド
              </a>
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-3 md:gap-4">
              <a href="#" className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#4D5CEC] transition-colors">
                採用担当者様はこちら
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="text-sm font-medium text-[#4D5CEC] hover:text-[#395be5] transition-colors px-2 md:px-3 py-2">
                ログイン
              </a>
              <a
                href="#"
                className="text-sm font-bold text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-all duration-250 hover:opacity-90"
                style={{
                  background: 'linear-gradient(90deg, #7f4dec 0%, #395be5 100%)',
                }}
              >
                無料で始める
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#EBECF5' }}
      >
        {/* Gradient Background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(127, 77, 236, 0.3) 0%, rgba(235, 236, 245, 0) 70%)',
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
          {/* Mobile: Title first, then stats */}
          <div className="lg:hidden text-center mb-6 md:mb-8">
            {/* Main Heading - Mobile */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 md:mb-8">
              <span style={{ color: '#1C252E' }}>難関企業特化のAI面接で、</span><br />
              <span style={{ color: '#1C252E' }}>企業ごとの個別対策を。</span>
            </h1>

            {/* Stats - Mobile */}
            <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex-1 max-w-[220px]">
                <img
                  src="/学生向け_実績 (2200 x 700 px) (3).png"
                  alt="外資・メガベン・日経大手50社分の面接に対応"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1 max-w-[220px]">
                <img
                  src="/学生向け_実績 (2200 x 700 px) (2).png"
                  alt="AI×就活領域業界No.1専門家監修"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Desktop: 2 column layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Desktop */}
            <div className="text-left">
              {/* Stats - Desktop */}
              <div className="flex justify-start gap-6 mb-8">
                <div>
                  <img
                    src="/学生向け_実績 (2200 x 700 px) (3).png"
                    alt="外資・メガベン・日経大手50社分の面接に対応"
                    className="w-auto h-auto max-w-[300px]"
                  />
                </div>
                <div>
                  <img
                    src="/学生向け_実績 (2200 x 700 px) (2).png"
                    alt="AI×就活領域業界No.1専門家監修"
                    className="w-auto h-auto max-w-[300px]"
                  />
                </div>
              </div>

              {/* Main Heading - Desktop */}
              <h1 className="text-5xl font-bold leading-tight mb-8">
                <span style={{ color: '#1C252E' }}>難関企業特化のAI面接で、</span><br />
                <span style={{ color: '#1C252E' }}>企業ごとの個別対策を。</span>
              </h1>

              {/* CTA Buttons - Desktop */}
              <div className="flex gap-4 mb-8">
                <a
                  href="#"
                  className="px-8 py-4 rounded-lg font-bold text-base text-white transition-all duration-250 hover:opacity-90 text-center"
                  style={{
                    background: 'linear-gradient(90deg, #7f4dec 0%, #395be5 100%)',
                  }}
                >
                  無料で始める
                </a>
                <a
                  href="#"
                  className="px-8 py-4 rounded-lg font-bold text-base border-2 transition-all duration-250 hover:bg-gray-50 text-center"
                  style={{
                    borderColor: '#4D5CEC',
                    color: '#4D5CEC',
                  }}
                >
                  ログイン
                </a>
              </div>

              {/* Company Logos Title - Desktop */}
              <div className="flex items-end gap-4">
                <p className="text-3xl font-bold" style={{ color: '#5371ff' }}>対応企業例</p>
                <a
                  href="/companies"
                  className="text-lg font-bold underline hover:opacity-70 transition-opacity whitespace-nowrap"
                  style={{ color: '#5371ff' }}
                >
                  企業一覧を見る→
                </a>
              </div>
            </div>

            {/* Right Content - Video - Desktop */}
            <div className="relative">
              <div className="rounded-2xl aspect-video relative overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/アクセンチュア株式会社 一次先行 (4).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Company Logos Section - Desktop Full Width */}
          <div className="hidden lg:block mt-12">
            <div className="relative overflow-hidden">
              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to right, #EBECF5, transparent)' }}></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to left, #EBECF5, transparent)' }}></div>

              {/* Scrolling container */}
              <div className="flex animate-scroll">
                {/* First set of logos */}
                <div className="flex items-center gap-8 min-w-max pr-8">
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>三菱商事</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>アクセンチュア</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>電通</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>サイバーエージェント</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>野村総合研究所</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>LINEヤフー</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>マッキンゼー</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>NTTデータ</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>P&G</div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-8 min-w-max pr-8">
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>三菱商事</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>アクセンチュア</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>電通</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>サイバーエージェント</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>野村総合研究所</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>LINEヤフー</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>マッキンゼー</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>NTTデータ</div>
                  <div className="text-2xl font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>P&G</div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section - Mobile */}
          <div className="lg:hidden relative mb-6 md:mb-8">
            <div className="rounded-2xl aspect-video relative overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/AI面接動画.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* CTA Buttons - Mobile */}
          <div className="lg:hidden flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="#"
              className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base text-white transition-all duration-250 hover:opacity-90 text-center"
              style={{
                background: 'linear-gradient(90deg, #7f4dec 0%, #395be5 100%)',
              }}
            >
              無料で始める
            </a>
            <a
              href="#"
              className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base border-2 transition-all duration-250 hover:bg-gray-50 text-center"
              style={{
                borderColor: '#4D5CEC',
                color: '#4D5CEC',
              }}
            >
              ログイン
            </a>
          </div>

          {/* Company Logos Section - Mobile */}
          <div className="lg:hidden mt-8">
            <div className="flex flex-col items-center gap-2 mb-4">
              <p className="text-lg font-bold text-center" style={{ color: '#5371ff' }}>対応企業例</p>
              <a
                href="/companies"
                className="text-base font-bold underline hover:opacity-70 transition-opacity"
                style={{ color: '#5371ff' }}
              >
                企業一覧を見る→
              </a>
            </div>
            <div className="relative overflow-hidden">
              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(to right, #EBECF5, transparent)' }}></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(to left, #EBECF5, transparent)' }}></div>

              {/* Scrolling container */}
              <div className="flex animate-scroll-mobile">
                {/* First set of logos */}
                <div className="flex items-center gap-6 min-w-max pr-6">
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>三菱商事</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>アクセンチュア</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>電通</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>サイバーエージェント</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>野村総合研究所</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>LINEヤフー</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>マッキンゼー</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>NTTデータ</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>P&G</div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-6 min-w-max pr-6">
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>三菱商事</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>アクセンチュア</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>電通</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>サイバーエージェント</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>野村総合研究所</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>LINEヤフー</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>マッキンゼー</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>NTTデータ</div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: '#7b7b7b' }}>P&G</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-center" style={{ color: '#1C252E' }}>
                キャリア相談AIで、<br />あなたに合う業界が見つかる
              </h3>

              <div className="flex justify-center mb-6">
                <div className="w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/名称未設定のデザイン (14).jpg"
                    alt="キャリア相談AI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed text-center">
                AIが対話であなたの経験を深掘りし、<br />相性の良い業界や社風を「理由付き」で提案。<br />就活で使えるエピソードの掘り起こしまでサポート。
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-center" style={{ color: '#1C252E' }}>
                面接AIで実践練習<br />難関企業の「過去問」に挑戦
              </h3>

              <div className="flex justify-center mb-6">
                <div className="w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/実写_実践形式 (3).jpg"
                    alt="面接練習"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed text-center">
                難関企業の過去問を、対話形式で練習可能。<br />過去の頻出質問を網羅しているから、<br />どんな質問にも対応できる実践力を養えます。
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-center" style={{ color: '#1C252E' }}>
                有名・難関企業の<br />「選考免除」に直結
              </h3>

              <div className="flex justify-center mb-6">
                <div className="w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/実写_実践形式 (5).jpg"
                    alt="早期特別選考"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed text-center">
                AI面接のスコアや志向性データをもとに、<br />あなたに合った外資・難関企業の限定イベントや<br />選考免除付きの人事面談に招待。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is CaseMatch Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo Icon */}
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none">
                <path d="M50 20L30 50L50 40L70 50L50 20Z" fill="#4D5CEC"/>
                <path d="M30 50L50 80L50 40L30 50Z" fill="#7f4dec"/>
                <path d="M70 50L50 80L50 40L70 50Z" fill="#395be5"/>
              </svg>
            </div>

            {/* Subtitle */}
            <p className="text-gray-500 text-lg md:text-xl mb-4">FastPassとは？</p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span style={{ color: '#4D5CEC' }}>難関企業特化のAI面接で、徹底対策</span><br />
              <span style={{ color: '#1C252E' }}>積み上げた結果から、選考免除オファーもゲット</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Feature 1 - AI Interview */}
            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 lg:p-10">
              <div className="text-center mb-4 md:mb-6">
                <p className="text-xs md:text-sm text-gray-500 mb-2">Feature 1</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" style={{ color: '#4D5CEC' }}>
                  対話形式の実践的なAI面接
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-800 mt-3 md:mt-4 leading-relaxed">
                  AI面接官があなたの答えに応じて次の質問を展開。<br />本番さながらの対話形式で、何度でも実践的な面接練習ができます。
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 p-4">
                <div className="bg-white rounded-lg aspect-video overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/アクセンチュア株式会社 一次先行 (4).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* AI Interview Challenge Section */}
              <div className="mt-6 md:mt-8">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h4 className="text-base md:text-lg font-bold text-gray-900">AI面接に挑戦する</h4>
                  </div>
                  <span className="text-[#4D5CEC] text-xs md:text-sm font-medium inline-flex items-center gap-1 hover:opacity-80 transition-opacity cursor-default">
                    すべて見る→
                  </span>
                </div>

                {/* Interview Cards Grid */}
                <div className="overflow-x-auto pb-4 mb-6 md:mb-8">
                  <div className="flex gap-3 md:gap-4">
                  {/* McKinsey & Company Card */}
                  <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col w-[calc(100vw-3rem)] sm:w-[280px] md:w-[350px]">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                      McKinsey & Company
                    </span>
                    <h5 className="text-base font-bold text-gray-900 mb-2">学生時代に最も大きな成果を出した経験について教えてください。</h5>
                    <p className="text-xs text-gray-600 mb-4">あなたのスコア：<span className="text-blue-600 font-bold">53点</span></p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                        18min
                      </span>
                      <span>Level2</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                        376人が挑戦中
                      </span>
                    </div>
                  </div>

                  {/* 三菱UFJ銀行 Card */}
                  <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col w-[calc(100vw-3rem)] sm:w-[280px] md:w-[350px]">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                      三菱UFJ銀行
                    </span>
                    <h5 className="text-base font-bold text-gray-900 mb-2">当行を志望する理由と、入行後にチャレンジしたいことを教えてください。</h5>
                    <p className="text-xs text-gray-600 mb-4">あなたのスコア：<span className="text-gray-500">—</span></p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                        15min
                      </span>
                      <span>Level1</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                        298人が挑戦中
                      </span>
                    </div>
                  </div>

                  {/* Google Card */}
                  <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col w-[calc(100vw-3rem)] sm:w-[280px] md:w-[350px]">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                      Google
                    </span>
                    <h5 className="text-base font-bold text-gray-900 mb-2">困難な課題に直面した際、どのように問題解決を進めましたか。</h5>
                    <p className="text-xs text-gray-600 mb-4">あなたのスコア：<span className="text-blue-600 font-bold">60点</span></p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                        20min
                      </span>
                      <span>Level3</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                        542人が挑戦中
                      </span>
                    </div>
                  </div>

                  {/* Recruit Card */}
                  <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col w-[calc(100vw-3rem)] sm:w-[280px] md:w-[350px]">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                      Recruit
                    </span>
                    <h5 className="text-base font-bold text-gray-900 mb-2">チームで意見が対立した場面で、あなたが取った行動について教えてください。</h5>
                    <p className="text-xs text-gray-600 mb-4">あなたのスコア：<span className="text-gray-500">—</span></p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                        16min
                      </span>
                      <span>Level2</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                        419人が挑戦中
                      </span>
                    </div>
                  </div>

                  {/* Mercari Card */}
                  <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col w-[calc(100vw-3rem)] sm:w-[280px] md:w-[350px]">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                      Mercari
                    </span>
                    <h5 className="text-base font-bold text-gray-900 mb-2">あなたが主体的に新しい取り組みを提案・実行した経験を教えてください。</h5>
                    <p className="text-xs text-gray-600 mb-4">あなたのスコア：<span className="text-blue-600 font-bold">35.5点</span></p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                        14min
                      </span>
                      <span>Level1</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                        376人が挑戦中
                      </span>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Early Special Selection */}
            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 lg:p-10">
              <div className="text-center mb-4 md:mb-6">
                <p className="text-xs md:text-sm text-gray-500 mb-2">Feature 2</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" style={{ color: '#4D5CEC' }}>
                  選考免除オファー
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-800 mt-3 md:mt-4 leading-relaxed">
                  AI面接のスコアと価値観データをもとに、<br />難関企業の限定イベントや選考免除付き面談に招待されます。
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-white border-2 border-gray-100 shadow-sm">
                {/* Blue Header Banner */}
                <div className="bg-[#4D5CEC] px-6 py-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white text-[#4D5CEC] text-xs font-medium px-3 py-1 rounded-full">28卒向け</span>
                      <span className="text-white text-xs">Posted 3日前</span>
                    </div>
                    <h3 className="text-white text-xl font-bold">
                      28卒向け｜一次面接免除付き 戦略コンサルタント早期特別選考
                    </h3>
                  </div>
                  <a href="#" className="bg-white text-[#4D5CEC] px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors whitespace-nowrap inline-block text-center">
                    応募する
                  </a>
                </div>

                {/* Content Area */}
                <div className="p-4">
                  <div className="flex gap-4">
                    {/* Left Column - Company Info */}
                    <div className="flex-shrink-0" style={{ width: '240px' }}>
                      {/* Company Logo and Name */}
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">ブルー・<br />コンサルティング株式会社</h4>
                      </div>

                      {/* Job Details */}
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          <div>
                            <div className="text-gray-500 text-xs mb-1">想定年収</div>
                            <div className="font-medium text-gray-900">550万円〜750万円＋業績賞与</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div>
                            <div className="text-gray-500 text-xs mb-1">勤務地</div>
                            <div className="font-medium text-gray-900">東京（丸の内）／リモート一部可</div>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Right Column - Description and Image */}
                    <div className="flex-1">
                      <div className="rounded-xl overflow-hidden mb-4">
                        <img
                          src="/コンサル.jpg"
                          alt="スカウト内容"
                          className="w-full h-auto"
                        />
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Section for Feature 2 */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h4 className="text-lg font-bold text-gray-900">選考免除オファーを獲得する</h4>
                  </div>
                  <span className="text-[#4D5CEC] text-sm font-medium inline-flex items-center gap-1 hover:opacity-80 transition-opacity cursor-default">
                    すべて見る→
                  </span>
                </div>

                {/* Job Cards - Horizontal Scroll */}
                <div className="overflow-x-auto pb-4">
                  <div className="flex gap-4 min-w-max">
                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col" style={{ width: '350px' }}>
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                        Recruit
                      </span>
                      <h5 className="text-base font-bold text-gray-900 mb-2">28卒 ビジネス総合職 FastPass限定早期特別選考</h5>
                      <p className="text-xs text-gray-600 mb-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-700 mr-2">
                          28卒向け
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">
                          書類選考免除
                        </span>
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                          新卒
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
                          12/08まで
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col" style={{ width: '350px' }}>
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                        三菱商事
                      </span>
                      <h5 className="text-base font-bold text-gray-900 mb-2">総合職（グローバル）</h5>
                      <p className="text-xs text-gray-600 mb-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600 mr-2">
                          新卒
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">
                          1次面接免除
                        </span>
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
                          12/10まで
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col" style={{ width: '350px' }}>
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                        Google Japan
                      </span>
                      <h5 className="text-base font-bold text-gray-900 mb-2">ソフトウェアエンジニア</h5>
                      <p className="text-xs text-gray-600 mb-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600 mr-2">
                          新卒
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">
                          書類選考免除
                        </span>
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
                          12/15まで
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col" style={{ width: '350px' }}>
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                        KEARNEY
                      </span>
                      <h5 className="text-base font-bold text-gray-900 mb-2">【選考ステップ短縮】マネージャー職</h5>
                      <p className="text-xs text-gray-600 mb-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
                          中途
                        </span>
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
                          11/28まで
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col" style={{ width: '350px' }}>
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                        SalesMarker
                      </span>
                      <h5 className="text-base font-bold text-gray-900 mb-2">SalesMarker特別選考</h5>
                      <p className="text-xs text-gray-600 mb-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600 mr-2">
                          新卒
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
                          選考優遇あり
                        </span>
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
                          2/05まで
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors flex-shrink-0 flex flex-col" style={{ width: '350px' }}>
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                        Amazon
                      </span>
                      <h5 className="text-base font-bold text-gray-900 mb-2">プロダクトマネージャー</h5>
                      <p className="text-xs text-gray-600 mb-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
                          中途
                        </span>
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
                          12/20まで
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avatar Selection Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span style={{ color: '#4D5CEC' }}>4タイプの面接官</span>
              <span style={{ color: '#1C252E' }}>で、あらゆる面接シーンに対応</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              面接官のタイプに合わせて練習することで、<br className="hidden md:block" />
              本番さながらの実践的な対策が可能になります。
            </p>
          </div>

          {/* Avatar Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Avatar 1 - 優しい女性人事 */}
            <div className="bg-gradient-to-b from-pink-50 to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-pink-100">
              <div className="w-full h-48 md:h-56 overflow-hidden">
                <img
                  src="/33623226_s.jpg"
                  alt="優しい女性人事"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-center" style={{ color: '#1C252E' }}>
                  優しい女性人事
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-center mb-4">
                  学生の深掘りを丁寧にしてくれる、親しみやすい雰囲気の人事担当者。
                </p>
                <div className="bg-pink-50 rounded-lg p-3 text-xs text-gray-600">
                  <p className="font-semibold mb-1">こんな学生におすすめ：</p>
                  <p>初めての面接練習や、自己分析を深めたい方</p>
                </div>
              </div>
            </div>

            {/* Avatar 2 - 一般的な男性人事 */}
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-full h-48 md:h-56 overflow-hidden">
                <img
                  src="/4292426_s.jpg"
                  alt="スタンダード人事"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-center" style={{ color: '#1C252E' }}>
                  スタンダード人事
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-center mb-4">
                  最も一般的な面接スタイル。標準的な質問で基礎力を固める練習に最適。
                </p>
                <div className="bg-blue-50 rounded-lg p-3 text-xs text-gray-600">
                  <p className="font-semibold mb-1">こんな学生におすすめ：</p>
                  <p>基本的な面接対策を万全にしたい方</p>
                </div>
              </div>
            </div>

            {/* Avatar 3 - エンジニア面接官 */}
            <div className="bg-gradient-to-b from-purple-50 to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-purple-100">
              <div className="w-full h-48 md:h-56 overflow-hidden">
                <img
                  src="/4452860_s.jpg"
                  alt="技術面接官"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-center" style={{ color: '#1C252E' }}>
                  技術面接官
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-center mb-4">
                  技術や研究内容を深掘りする、エンジニア・研究職向けの専門面接官。
                </p>
                <div className="bg-purple-50 rounded-lg p-3 text-xs text-gray-600">
                  <p className="font-semibold mb-1">こんな学生におすすめ：</p>
                  <p>理系職種や技術面接を控えている方</p>
                </div>
              </div>
            </div>

            {/* Avatar 4 - 役員面接官 */}
            <div className="bg-gradient-to-b from-amber-50 to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-amber-100">
              <div className="w-full h-48 md:h-56 overflow-hidden">
                <img
                  src="/29105858_s.jpg"
                  alt="役員面接官"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-center" style={{ color: '#1C252E' }}>
                  役員面接官
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-center mb-4">
                  ビジョンや志望動機を深く問う、最終面接想定の経営層レベルの面接官。
                </p>
                <div className="bg-amber-50 rounded-lg p-3 text-xs text-gray-600">
                  <p className="font-semibold mb-1">こんな学生におすすめ：</p>
                  <p>最終面接対策やキャリアビジョンを磨きたい方</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 md:mt-16">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base text-white transition-all duration-250 hover:opacity-90"
              style={{
                background: 'linear-gradient(90deg, #7f4dec 0%, #395be5 100%)',
              }}
            >
              4つのアバターで面接練習を始める
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* What FastPass Can Do Section */}
      <section className="pt-0 pb-16 md:pb-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span style={{ color: '#4D5CEC' }}>FastPass</span>
            <span style={{ color: '#1C252E' }}>だからできること</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Card 1 - メンターAIとの対話で自己分析 */}
            <div className="bg-white rounded-3xl p-4 md:p-8 lg:p-10 border border-gray-200 shadow-sm">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-center" style={{ color: '#4D5CEC' }}>
                メンターAIとの対話で自己分析
              </h3>

              <p className="text-sm md:text-base text-gray-900 text-center mb-4 md:mb-6 leading-relaxed">
                AIの深掘り質問に答えるだけで、言語化できていなかった<br />
                強み・価値観・エピソードが整理できます。
              </p>

              {/* Screenshot */}
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/スクリーンショット 2025-11-27 14.57.51.png"
                  alt="対話型の自己分析"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Card 2 - 17の評価項目で、各社基準に合わせ練習 */}
            <div className="bg-white rounded-3xl p-4 md:p-8 lg:p-10 border border-gray-200 shadow-sm">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-center" style={{ color: '#4D5CEC' }}>
                17の評価項目で、各社基準に合わせ練習
              </h3>

              <p className="text-sm md:text-base text-gray-900 text-center mb-4 md:mb-6 leading-relaxed">
                17の評価項目で、あなたの強み・弱みを多角的に評価。<br />
                企業別の評価基準に合わせ、実践的な対策が可能。
              </p>

              {/* Screenshot */}
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/ランキング (5).jpg"
                  alt="17の評価項目で、各社基準に合わせ練習"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Card 3 - ランキング上位者の回答から学べる */}
            <div className="bg-white rounded-3xl p-4 md:p-8 lg:p-10 border border-gray-200 shadow-sm">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-center" style={{ color: '#4D5CEC' }}>
                優秀者の回答内容が見られる
              </h3>

              <p className="text-sm md:text-base text-gray-900 text-center mb-4 md:mb-6 leading-relaxed">
                各お題で上位にランクインした学生の実際の回答を見ながら、<br />自分の回答を効果的に磨けます。
              </p>

              {/* Screenshot */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/ランキング.jpg"
                  alt="ランキング上位者の回答から学べる"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Card 4 - 相性の良い企業からだけ届くスカウト */}
            <div className="bg-white rounded-3xl p-4 md:p-8 lg:p-10 border border-gray-200 shadow-sm">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-center" style={{ color: '#4D5CEC' }}>
                志望領域 × スコアで届く特別オファー
              </h3>

              <p className="text-sm md:text-base text-gray-900 text-center mb-4 md:mb-6 leading-relaxed">
                AI面接の結果から、あなたの志向性やスキルにマッチした<br className="hidden md:block" />
                企業だけからパーソナライズされたスカウトが届きます。
              </p>

              {/* Screenshot */}
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/ランキング (7).jpg"
                  alt="志望領域 × スコアで届く特別オファー"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Information Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16" style={{ color: '#1C252E' }}>
            News/お役立ち情報
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Card 1 */}
            <a href="https://ai-fes2025.aishukatsu.com/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/News_AIチャレンジャーズフェス (11).png"
                  alt="通過率が上がるES作成術"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    イベント
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                    27卒
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                    28卒
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                    文系
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                    理系
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  AIチャレンジャーズフェス2025
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  2025/12/21(日)開催！国内トップIT企業が一堂に集結。<br />
                  参加者限定で企業との特別選考チャンスも。
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/175950f70cf28d7831846c123d8d6de2_t.jpeg"
                  alt="効果的な自己分析の進め方"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  自己分析
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  効果的な自己分析の進め方
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  就活で差がつく自己分析のフレームワークと、AIを活用した新しいアプローチ
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/shutterstock_178724234.jpg"
                  alt="外資系コンサルの面接対策完全ガイド"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  面接対策
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  外資系コンサルの面接対策完全ガイド
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  マッキンゼー、BCG、ベインなど外資系戦略コンサルの面接で頻出の質問と対策方法を解説
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2 text-[#4D5CEC] font-medium hover:opacity-80 transition-opacity">
              記事一覧を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16" style={{ color: '#1C252E' }}>
            よくある質問
          </h2>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full p-6 md:p-8 flex items-start gap-4 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4D5CEC] flex items-center justify-center text-white font-bold text-sm">
                  Q
                </div>
                <div className="flex-1">
                  <span className="text-base font-medium text-gray-900">
                    FastPassは無料で使えますか？
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-500 transition-transform flex-shrink-0 ${openFAQ === 0 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 0 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[4.5rem] md:pl-[5.5rem]">
                  <div className="text-sm text-gray-700 leading-relaxed">
                    はい、学生・社会人ともに基本機能はすべて無料でご利用いただけます。AI面接の受験、フィードバックの確認、スカウトの受信などに追加費用はかかりません。
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full p-6 md:p-8 flex items-start gap-4 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4D5CEC] flex items-center justify-center text-white font-bold text-sm">
                  Q
                </div>
                <div className="flex-1">
                  <span className="text-base font-medium text-gray-900">
                    面接練習にはどういった事前準備が必要ですか？
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-500 transition-transform flex-shrink-0 ${openFAQ === 1 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 1 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[4.5rem] md:pl-[5.5rem]">
                  <div className="text-sm text-gray-700 leading-relaxed">
                    特別な準備は不要です。パソコンやスマートフォンがあれば、いつでもどこでも面接練習を始められます。カメラとマイクの使用を推奨しますが、音声のみでも利用可能です。
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full p-6 md:p-8 flex items-start gap-4 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4D5CEC] flex items-center justify-center text-white font-bold text-sm">
                  Q
                </div>
                <div className="flex-1">
                  <span className="text-base font-medium text-gray-900">
                    AI面接のスコアはどのように算出されますか？
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-500 transition-transform flex-shrink-0 ${openFAQ === 2 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 2 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[4.5rem] md:pl-[5.5rem]">
                  <div className="text-sm text-gray-700 leading-relaxed">
                    独自のAIモデルが、回答内容の論理性、具体性、一貫性などを多角的に分析してスコアを算出します。過去の優秀な回答データとの比較も行い、客観的な評価を提供します。
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full p-6 md:p-8 flex items-start gap-4 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4D5CEC] flex items-center justify-center text-white font-bold text-sm">
                  Q
                </div>
                <div className="flex-1">
                  <span className="text-base font-medium text-gray-900">
                    スカウトはどのような企業から届きますか？
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-500 transition-transform flex-shrink-0 ${openFAQ === 3 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 3 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[4.5rem] md:pl-[5.5rem]">
                  <div className="text-sm text-gray-700 leading-relaxed">
                    外資系コンサルティングファーム、メガベンチャー、日系大手企業など、厳選された優良企業から届きます。あなたのAI面接結果と企業の求める人材像がマッチした場合にのみスカウトが送られます。
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Final CTA Section - AI Interview Promotion */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left side - Device mockups */}
            <div className="flex-1 relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Video showcase */}
                <div className="relative z-10 rounded-2xl aspect-video overflow-hidden shadow-2xl">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/アクセンチュア株式会社 一次先行 (4).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Right side - CTA content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 lg:mb-8 leading-tight">
                AI面接をして就活、<br />
                転職を有利に進めよう！
              </h2>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-lg font-bold text-base md:text-lg lg:text-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                無料で始める
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 md:py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
            {/* Logo Section */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/透過ロゴ.png"
                  alt="FastPass Logo"
                  className="h-16 md:h-20 w-auto"
                />
              </div>
            </div>

            {/* 機能 */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm">機能</h3>
              <ul className="space-y-2 md:space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#4D5CEC] transition-colors">AI面接</a></li>
                <li><a href="#" className="hover:text-[#4D5CEC] transition-colors">早期特別選考</a></li>
              </ul>
            </div>

            {/* コラム記事 */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm">コラム記事</h3>
              <ul className="space-y-2 md:space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#4D5CEC] transition-colors">新卒</a></li>
                <li><a href="#" className="hover:text-[#4D5CEC] transition-colors">中途</a></li>
              </ul>
            </div>

            {/* ヘルプガイド */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm">ヘルプガイド</h3>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 pt-6 md:pt-8">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-gray-600">
                <a href="#" className="hover:text-[#4D5CEC] transition-colors">お問い合わせ</a>
                <a href="#" className="hover:text-[#4D5CEC] transition-colors">利用規約</a>
                <a href="#" className="hover:text-[#4D5CEC] transition-colors">プライバシーポリシー</a>
              </div>
              <p className="text-xs text-gray-500">©bestiee Inc. all rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
