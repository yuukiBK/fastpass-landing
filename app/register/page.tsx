'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { clearIfExpired, setCurrentStep, saveRegistrationData } from '@/lib/registration-store';

export default function RegisterPage() {
  useEffect(() => {
    // 有効期限切れのデータをクリア
    clearIfExpired();
    // 現在のステップを記録
    setCurrentStep('register');
  }, []);

  const handleCompanySelect = (company: string) => {
    saveRegistrationData({ selectedCompany: company });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <img
              src="/透過ロゴ.png"
              alt="FastPass"
              className="h-16 md:h-20"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 lg:px-6 lg:py-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 mt-8 md:mt-12">
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

        {/* 企業グリッド画像1 - ゴールドマン・サックスへのリンク */}
        <Link href="/register/start?company=goldman-sachs" className="block" onClick={() => handleCompanySelect('goldman-sachs')}>
          <img
            src="/見出しを追加 (1626 x 877 px).png"
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
      </main>
    </div>
  );
}
