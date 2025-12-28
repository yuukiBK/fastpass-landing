'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { setCurrentStep, saveRegistrationData, getRegistrationData, completeStep } from '@/lib/registration-store';

const goals = [
  { id: '7days', days: 7, title: '7日連続記録', label: 'まずはここから', message: 'まずは1週間！いい目標だね！' },
  { id: '14days', days: 14, title: '14日連続記録', label: '習慣づくり', message: '2週間続けられたらすごい！' },
  { id: '30days', days: 30, title: '30日連続記録', label: '本気モード', message: '1ヶ月チャレンジ！本気だね！' },
  { id: '50days', days: 50, title: '50日連続記録', label: 'ガチ勢', message: '50日！？君ならできる！' },
];

export default function GoalPage() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [bubbleKey, setBubbleKey] = useState(0);

  const selectedGoalData = goals.find(g => g.id === selectedGoal);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    setCurrentStep('goal');

    // 保存済みの目標があれば復元
    const data = getRegistrationData();
    if (data.goal) {
      setSelectedGoal(data.goal);
    }

    return () => clearTimeout(timer);
  }, []);

  // 選択が変わったらアニメーションをトリガー
  useEffect(() => {
    if (selectedGoal) {
      setBubbleKey(prev => prev + 1);
    }
  }, [selectedGoal]);

  const handleBack = () => {
    router.push('/register/streak');
  };

  const handleNext = () => {
    if (selectedGoal) {
      // 目標を保存
      saveRegistrationData({ goal: selectedGoal });
      completeStep('goal');
      router.push('/register/level-result');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
        .animate-fadeInUp {
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-pop {
          animation: pop 0.3s ease-out forwards;
        }
      `}</style>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
        {/* Speech Bubble */}
        <div className={`mb-4 ${isVisible ? 'animate-pop' : 'opacity-0'}`}>
          <div className="relative">
            <div
              key={bubbleKey}
              className="bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 shadow-sm animate-pop"
            >
              <p className="text-lg md:text-xl font-bold text-center text-gray-800">
                {selectedGoalData ? selectedGoalData.message : (<>まずは連続記録の目標を<br />設定しよう！</>)}
              </p>
            </div>
            {/* Bubble Arrow (pointing down) */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-2">
              <div className="w-3 h-3 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Mascot */}
        <div className={`mb-6 flex items-center justify-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <img
            src="/β版　アニメーション (5).gif"
            alt="マスコット"
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Goal Options */}
        <div className={`w-full max-w-md space-y-3 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`w-full flex items-center justify-between py-4 px-5 bg-white border-2 rounded-2xl transition-all ${
                selectedGoal === goal.id
                  ? 'border-[#1CB0F6] bg-[#DDF4FF]'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className="font-semibold text-gray-800">{goal.title}</span>
              <span className="text-gray-400 text-sm">{goal.label}</span>
            </button>
          ))}
        </div>
      </main>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
        <div className="max-w-4xl mx-auto flex justify-between px-4 md:px-8">
          {/* 戻るボタン */}
          <button
            onClick={handleBack}
            className="font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 border-2 border-gray-200 text-gray-600 hover:bg-gray-50 shadow-[0_4px_0_0_#e5e7eb] hover:shadow-[0_2px_0_0_#e5e7eb] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            戻る
          </button>
          {/* 次へボタン */}
          <button
            onClick={handleNext}
            disabled={!selectedGoal}
            className={`font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 ${
              selectedGoal
                ? 'bg-[#4D5CEC] hover:bg-[#3949AB] text-white shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
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
