'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';

// 業界別おすすめ企業データ
const industryCompanies: { [key: string]: { name: string; logo: string; color: string }[] } = {
  'コンサル': [
    { name: 'マッキンゼー', logo: '/企業ロゴ/mckinsey.png', color: '#00A0DC' },
    { name: 'BCG', logo: '/企業ロゴ/bcg.png', color: '#00843D' },
    { name: 'ベイン', logo: '/企業ロゴ/bain.png', color: '#CC0000' },
    { name: 'アクセンチュア', logo: '/企業ロゴ/accenture.png', color: '#A100FF' },
  ],
  '金融': [
    { name: 'ゴールドマン・サックス', logo: '/企業ロゴ/gs.png', color: '#7399C6' },
    { name: 'モルガン・スタンレー', logo: '/企業ロゴ/ms.png', color: '#002D72' },
    { name: 'JPモルガン', logo: '/企業ロゴ/jpmorgan.png', color: '#117ACA' },
    { name: '三菱UFJ銀行', logo: '/企業ロゴ/mufg.png', color: '#DA291C' },
  ],
  'IT・通信': [
    { name: 'Google', logo: '/企業ロゴ/google.png', color: '#4285F4' },
    { name: 'Microsoft', logo: '/企業ロゴ/microsoft.png', color: '#00A4EF' },
    { name: 'Amazon', logo: '/企業ロゴ/amazon.png', color: '#FF9900' },
    { name: 'メルカリ', logo: '/企業ロゴ/mercari.png', color: '#FF0211' },
  ],
  'default': [
    { name: 'ゴールドマン・サックス', logo: '/企業ロゴ/gs.png', color: '#7399C6' },
    { name: 'マッキンゼー', logo: '/企業ロゴ/mckinsey.png', color: '#00A0DC' },
    { name: 'Google', logo: '/企業ロゴ/google.png', color: '#4285F4' },
    { name: '三菱商事', logo: '/企業ロゴ/mitsubishi.png', color: '#E60012' },
  ],
};

function DemoIntroContent() {
  const router = useRouter();

  // ステップ管理
  const [step, setStep] = useState<'message1' | 'message2' | 'company-select' | 'message3' | 'message4' | 'message5'>('message1');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isBubbleTransitioning, setIsBubbleTransitioning] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [showStartCard, setShowStartCard] = useState(false);

  // 業界データを取得（実際には登録データから取得）
  const userIndustry = 'default'; // TODO: 登録データから取得
  const companies = industryCompanies[userIndustry] || industryCompanies['default'];

  // 企業選択カード表示用state
  const [showCompanyCard, setShowCompanyCard] = useState(false);

  // メッセージ1 → 企業選択カードへ直接遷移
  const handleMessage1Next = () => {
    setShowCompanyCard(true);
  };

  // メッセージ2 → 企業選択カードを表示
  const handleMessage2Next = () => {
    setShowCompanyCard(true);
  };

  // 企業選択ハンドラ
  const handleCompanySelect = (companyName: string) => {
    setSelectedCompany(companyName);
    setShowCompanyCard(false);
    setTimeout(() => {
      setStep('message3');
    }, 300);
  };

  // メッセージ1 → 自動遷移（2.5秒後にメッセージ2へ）
  useEffect(() => {
    if (step === 'message1' && !showCompanyCard && !isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setStep('message2');
          setIsTransitioning(false);
        }, 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step, showCompanyCard, isTransitioning]);

  // メッセージ2 → 自動で企業選択カードを表示（2.5秒後）
  useEffect(() => {
    if (step === 'message2' && !showCompanyCard) {
      const timer = setTimeout(() => {
        setShowCompanyCard(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step, showCompanyCard]);

  // メッセージ3 → メッセージ4への自動遷移（吹き出しのみフェード、同じアニメーション）
  useEffect(() => {
    if (step === 'message3') {
      const timer = setTimeout(() => {
        setIsBubbleTransitioning(true);
        setTimeout(() => {
          setStep('message4');
          setIsBubbleTransitioning(false);
        }, 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // メッセージ4 → カード表示への自動遷移
  useEffect(() => {
    if (step === 'message4') {
      const timer = setTimeout(() => {
        setShowStartCard(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // メッセージ4は自動遷移しない（ユーザーがボタンをクリックして進む）

  // 他の企業も見る
  const handleViewMoreCompanies = () => {
    router.push('/demo/courses?from=register');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative">
      {/* メッセージ1: 登録完了 */}
      {step === 'message1' && !showCompanyCard && (
        <>
          <div className={`flex flex-col items-center transition-all duration-300 ${isTransitioning ? 'opacity-0 transform -translate-y-4' : 'opacity-100'}`}>
            {/* Speech Bubble */}
            <div className="relative mb-4">
              <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
                <p className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                  これで登録完了だよ！<br />
                  <span>お疲れ様！</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
              </div>
            </div>
            {/* Animation */}
            <div className="w-64 h-64 md:w-80 md:h-80">
              <img
                src="/β版　アニメーション (15).gif"
                alt="キャラクター"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Bottom Bar with Line and Button - トランジション外に配置 */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8 z-10">
            <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
              <button
                onClick={handleMessage1Next}
                className="bg-[#4D5CEC] hover:bg-[#395BE5] text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
              >
                次へ
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* メッセージ2: 企業の過去問を練習 */}
      {step === 'message2' && !showCompanyCard && (
        <div className={`flex flex-col items-center transition-all duration-300 ${isTransitioning ? 'opacity-0 transform -translate-y-4' : 'opacity-100'}`}>
          <div className="relative mb-4">
            <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
              <p className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                まずは、どこの企業の<br />
                <span>過去問から練習したい？</span>
              </p>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
            </div>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80">
            <img
              src="/β版　アニメーション (11).gif"
              alt="キャラクター"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bottom Bar with Line and Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
            <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
              <button
                onClick={handleMessage2Next}
                className="bg-[#4D5CEC] hover:bg-[#395BE5] text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
              >
                次へ
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 企業選択カードオーバーレイ - 業界選択と同じスタイル */}
      {showCompanyCard && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center px-4 animate-[fadeIn_0.3s_ease-out]">
          {/* カード型フォーム - 大きめサイズ */}
          <div className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-3xl shadow-xl border-2 border-gray-200 max-h-[90vh] overflow-y-auto animate-[slideUp_0.4s_ease-out]">
            {/* ヘッダー部分 */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">どの企業の過去問から始める？</h2>
              <p className="text-gray-500 text-sm">後から追加・変更もできます</p>
            </div>

            {/* 企業選択画像 */}
            <div className="mb-8">
              <img
                src="/企業選択4択.png"
                alt="企業を選択"
                className="w-full cursor-pointer"
                onClick={() => handleCompanySelect('モルガン・スタンレー')}
              />
            </div>

            {/* 他の企業も見るリンク */}
            <div className="text-center">
              <button
                onClick={handleViewMoreCompanies}
                className="text-[#1CB0F6] hover:text-[#0A91D3] font-medium text-sm inline-flex items-center gap-1"
              >
                他の企業も見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* メッセージ3 & メッセージ4: 同じアニメーションなので統合（吹き出しのみ切り替え） */}
      {(step === 'message3' || step === 'message4') && selectedCompany && !showStartCard && (
        <>
          <div className="flex flex-col items-center">
            {/* 吹き出し - ステップに応じて内容が切り替わる */}
            <div className="relative mb-4">
              <div className={`bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-sm transition-opacity duration-300 ${isBubbleTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {step === 'message3' ? (
                  <p className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                    {selectedCompany}だね！OK！
                  </p>
                ) : (
                  <p className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                    さっそく面接練習を<br />はじめよう！
                  </p>
                )}
              </div>
              <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${isBubbleTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
              </div>
            </div>

            {/* アニメーション - 常に表示（フェードしない） */}
            <div className="w-64 h-64 md:w-80 md:h-80">
              <img
                src="/β版　アニメーション (16).gif"
                alt="キャラクター"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Bottom Bar with Line and Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8 z-10">
            <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
              {step === 'message3' ? (
                <button
                  onClick={() => {
                    setIsBubbleTransitioning(true);
                    setTimeout(() => {
                      setStep('message4');
                      setIsBubbleTransitioning(false);
                    }, 300);
                  }}
                  className="bg-[#4D5CEC] hover:bg-[#395BE5] text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
                >
                  次へ
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => setShowStartCard(true)}
                  className="bg-[#4D5CEC] hover:bg-[#395BE5] text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
                >
                  次へ
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </>
      )}

      {/* レベル選択カード */}
      {showStartCard && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center px-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-5xl shadow-xl border-2 border-gray-200 max-h-[90vh] overflow-y-auto animate-[slideUp_0.4s_ease-out]">
            {/* ヘッダー部分 */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">準備はいい？</h2>
            </div>

            {/* 選択肢画像 */}
            <img
              src="/見出しを追加 (1626 x 426 px).gif"
              alt="面接練習を始める"
              className="w-full cursor-pointer rounded-xl"
              onClick={() => router.push('/register/demo')}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default function DemoIntroPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <DemoIntroContent />
    </Suspense>
  );
}
