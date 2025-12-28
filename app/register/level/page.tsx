'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { setCurrentStep, saveRegistrationData, getRegistrationData, completeStep } from '@/lib/registration-store';

const levels = [
  {
    id: 'beginner',
    title: 'ゼロからはじめる',
    description: '一番簡単な基礎から順番にはじめていこう',
    message: 'いいね！一緒に基礎から固めていこう！',
    icon: null,
    color: '#58CC02',
    bgColor: '#E5F6E5',
    video: '/β版　アニメーション (2).gif',
  },
  {
    id: 'placement',
    title: 'ぴったりのレベルを見つける',
    description: 'AI面接でおすすめのスタート地点を選ぶよ',
    message: 'よし！ぴったりのステージを見つけよう！',
    icon: null,
    color: '#1CB0F6',
    bgColor: '#E5F4FB',
    video: '/β版　アニメーション (3).gif',
  },
];

function LevelContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const company = searchParams.get('company') || 'goldman-sachs';
  const status = searchParams.get('status') || 'starting';
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [bubbleKey, setBubbleKey] = useState(0);

  // 初期化 & ストア連携
  useEffect(() => {
    setCurrentStep('level');

    // 保存済みのレベル選択があれば復元
    const data = getRegistrationData();
    if (data.levelChoice) {
      setSelectedLevel(data.levelChoice);
    }
  }, []);

  // 選択が変わったらアニメーションをトリガー
  useEffect(() => {
    if (selectedLevel) {
      setBubbleKey(prev => prev + 1);
    }
  }, [selectedLevel]);

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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with X button */}
      <div className="p-4">
        <Link href={`/register/status?company=${company}`} className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>
      </div>

      {/* Mascot with Speech Bubble - Fixed Position */}
      <div className="fixed top-16 left-1/2 -translate-x-1/2 z-10 flex items-start gap-2 -ml-48">
        {/* Mascot */}
        <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
          <video
            src="/就活状況.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
        {/* Speech Bubble */}
        <div className="relative flex-shrink-0">
          <div
            key={bubbleKey}
            className="bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 shadow-sm w-[380px] md:w-[420px] animate-[pop_0.3s_ease-out] whitespace-nowrap"
          >
            <p className="text-lg md:text-xl font-bold text-gray-800">
              {selectedLevel
                ? levels.find((l) => l.id === selectedLevel)?.message
                : 'どこから始めますか？'}
            </p>
          </div>
          {/* Bubble Arrow (pointing left) */}
          <div className="absolute left-0 top-6 -translate-x-2">
            <div className="w-3 h-3 bg-white border-l-2 border-b-2 border-gray-200 transform rotate-45"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 pt-56 pb-32">
        {/* Level Options */}
        <div className="w-full max-w-lg space-y-4">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`flex items-center gap-5 w-full py-8 px-8 bg-white border-2 rounded-2xl transition-all shadow-[0_2px_0_0_#e5e7eb] hover:shadow-[0_2px_0_0_#e5e7eb] active:shadow-none active:translate-y-[2px] ${
                selectedLevel === level.id
                  ? 'border-[#1CB0F6] bg-[#DDF4FF]'
                  : 'border-gray-200 hover:bg-gray-50 active:bg-gray-100'
              }`}
            >
              <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                {level.video.endsWith('.gif') ? (
                  <img
                    src={level.video}
                    alt={level.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <video
                    src={level.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg text-gray-800">{level.title}</p>
                <p className="text-base text-gray-500">{level.description}</p>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Bottom Bar with Line and Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
        <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
          <button
            onClick={handleNext}
            disabled={!selectedLevel}
            className={`font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 ${
              selectedLevel
                ? 'bg-[#4D5CEC] hover:bg-[#395BE5] text-white shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-[0_4px_0_0_#d1d5db]'
            }`}
          >
            次へ
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
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
