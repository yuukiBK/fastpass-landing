'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { setCurrentStep, completeStep } from '@/lib/registration-store';

export default function LevelResultPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentStep('level-result');
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    router.push('/register/goal');
  };

  const handleNext = () => {
    completeStep('level-result');
    router.push('/register/create-account');
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
          animation: pop 0.4s ease-out forwards;
        }
      `}</style>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
        {/* Speech Bubble */}
        <div className={`mb-4 ${isVisible ? 'animate-pop' : 'opacity-0'}`}>
          <div className="relative">
            <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-5 shadow-sm max-w-sm">
              <p className="text-lg md:text-xl font-bold text-center text-gray-800 leading-relaxed">
                ぴったりなレベルは<span className="text-[#4D5CEC]">セクション2</span>みたいだね！まずはそこからスタートして、あとで調整しよう。
              </p>
            </div>
            {/* Bubble Arrow (pointing down) */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-2">
              <div className="w-3 h-3 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Mascot */}
        <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <img
            src="/β版　アニメーション (6).gif"
            alt="マスコット"
            className="w-40 h-40 object-contain"
          />
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
