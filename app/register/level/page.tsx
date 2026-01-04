'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { setCurrentStep, saveRegistrationData, getRegistrationData, completeStep } from '@/lib/registration-store';

const levels = [
  {
    id: 'placement',
    title: '自分のレベルを診断する',
    description: '3分で簡単な質問に答えるだけ！',
    subDescription: 'タイピングでも音声でもOK',
    recommended: true,
  },
  {
    id: 'beginner',
    title: 'ゼロからはじめる',
    description: '一番簡単な基礎から順番にはじめていこう',
    recommended: false,
  },
];

function LevelContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const company = searchParams.get('company') || 'goldman-sachs';
  const status = searchParams.get('status') || 'starting';

  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // 初期化 & ストア連携
  useEffect(() => {
    setCurrentStep('level');

    // 保存済みのレベル選択があれば復元
    const data = getRegistrationData();
    if (data.levelChoice) {
      setSelectedLevel(data.levelChoice);
    }
  }, []);

  // レベル選択完了
  const handleNext = () => {
    if (selectedLevel) {
      // レベル選択を保存
      saveRegistrationData({ levelChoice: selectedLevel });
      completeStep('level');
      // どちらを選んでもレベル診断テストの動画に遷移
      router.push(`/register/demo?company=${company}&status=${status}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative">
      {/* レベル選択カードオーバーレイ */}
      <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center px-4 animate-[fadeIn_0.3s_ease-out]">
        {/* カード型フォーム */}
        <div className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-xl shadow-xl border-2 border-gray-200 max-h-[90vh] overflow-y-auto animate-[slideUp_0.4s_ease-out]">
          {/* ヘッダー部分 */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">どっちで始める？</h2>
          </div>

          {/* レベル選択オプション */}
          <div className="space-y-4 mb-6">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`relative w-full py-5 px-6 bg-white border-2 rounded-2xl transition-all shadow-[0_2px_0_0_#e5e7eb] hover:shadow-[0_2px_0_0_#e5e7eb] active:shadow-none active:translate-y-[2px] ${
                  selectedLevel === level.id
                    ? 'border-[#1CB0F6] bg-[#DDF4FF] shadow-[0_2px_0_0_#1CB0F6]'
                    : 'border-gray-200 hover:bg-gray-50 active:bg-gray-100'
                }`}
              >
                {/* おすすめバッジ */}
                {level.recommended && (
                  <span className="absolute -top-3 left-4 bg-[#FF9600] text-white text-xs font-bold px-3 py-1 rounded-full">
                    おすすめ
                  </span>
                )}
                <div className="text-left">
                  <p className="font-bold text-lg text-gray-800 mb-1">{level.title}</p>
                  <p className="text-sm text-gray-500">{level.description}</p>
                  {level.subDescription && (
                    <p className="text-sm text-gray-500">{level.subDescription}</p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* 補足情報 - placementを選んだ時のみ表示 */}
          {selectedLevel === 'placement' && (
            <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-xl animate-[fadeIn_0.3s_ease-out]">
              <p className="text-sm text-orange-600">
                ⚠️  AI面接では音声が流れます。イヤホンのご使用をおすすめします。<br />
                （字幕付きのため、音声なしでもご利用いただけます）
              </p>
            </div>
          )}

          {/* 決定ボタン */}
          <button
            onClick={handleNext}
            disabled={!selectedLevel}
            className={`w-full font-bold py-4 px-6 rounded-xl text-lg transition-all ${
              selectedLevel
                ? 'bg-[#4D5CEC] hover:bg-[#395BE5] text-white shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-[0_4px_0_0_#b0b0b0]'
            }`}
          >
            決定
          </button>
        </div>
      </div>

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

export default function LevelPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <LevelContent />
    </Suspense>
  );
}
