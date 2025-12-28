'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { setCurrentStep, completeStep } from '@/lib/registration-store';

// 炎のアニメーションコンポーネント
function FireAnimation() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <img
        src="/β版　アニメーション (4).gif"
        alt="炎"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

// 曜日カレンダーコンポーネント（5日間: 火〜土）
function WeekCalendar({ streakDays }: { streakDays: number }) {
  const days = ['火', '水', '木', '金', '土'];

  return (
    <div className="flex justify-center gap-3">
      {days.map((day, index) => {
        // 1日目なので最初の曜日（火）だけチェック
        const isChecked = index === 0 && streakDays >= 1;
        const isToday = index === 0;

        return (
          <div key={day} className="flex flex-col items-center gap-1">
            <span className={`text-xs font-medium ${isToday ? 'text-[#FF9600]' : 'text-gray-400'}`}>
              {day}
            </span>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isChecked
                  ? 'bg-[#FF9600] text-white'
                  : 'bg-gray-100'
              }`}
            >
              {isChecked ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-gray-300">–</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// 数字カウントアップアニメーション
function AnimatedNumber({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // より滑らかなeaseOutExpo曲線
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(Math.floor(easeOutExpo * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

export default function StreakPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  // デモ用のストリーク日数
  const streakDays = 1;

  useEffect(() => {
    setCurrentStep('streak');

    // アニメーションシーケンス（ぬるっと表示）
    const timer1 = setTimeout(() => setIsVisible(true), 200);
    const timer2 = setTimeout(() => setShowNumber(true), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleBack = () => {
    router.push('/register/result-detail');
  };

  const handleNext = () => {
    completeStep('streak');
    router.push('/register/goal');
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
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
        {/* Fire Icon */}
        <div className={`mb-2 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
          <FireAnimation />
        </div>

        {/* Streak Number */}
        <div className={`text-center mb-2 ${showNumber ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-6xl md:text-7xl font-black text-[#FF9600]">
              {showNumber ? <AnimatedNumber value={streakDays} duration={1200} /> : '0'}
            </span>
            <span className="text-2xl md:text-3xl font-bold text-[#FF9600]">日</span>
          </div>
        </div>

        {/* Title */}
        <h1
          className={`text-xl md:text-2xl font-bold text-gray-800 mb-6 ${showNumber ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          連続学習中！
        </h1>

        {/* Week Calendar */}
        <div
          className={`bg-gray-50 rounded-2xl p-6 ${showNumber ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <WeekCalendar streakDays={streakDays} />
          <div className="border-t border-gray-200 mt-4 pt-4">
            <p className="text-gray-600 text-sm text-center">
              毎日レッスンすれば連続記録が更新されるけど、<br />
              1日忘れるとゼロになるよ！
            </p>
          </div>
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
            className="bg-[#4D5CEC] hover:bg-[#3949AB] text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
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
