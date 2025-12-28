'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { setCurrentStep, completeStep } from '@/lib/registration-store';

export default function CreateAccountPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentStep('create-account');
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateAccount = () => {
    completeStep('create-account');
    router.push('/register/signup');
  };

  const handleLater = () => {
    router.push('/demo/dmm');
  };

  const handleClose = () => {
    router.push('/demo/dmm');
  };

  const handleLogin = () => {
    router.push('/register/signup');
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
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Mascot */}
        <div className={`mb-8 ${isVisible ? 'animate-pop' : 'opacity-0'}`}>
          <img
            src="/β版　アニメーション (8).gif"
            alt="マスコット"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Title */}
        <h1
          className={`text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          アカウントを作ろう！
        </h1>

        {/* Subtitle */}
        <p
          className={`text-gray-500 text-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          アカウントを作って学習の成果を記録しよう。
        </p>

        {/* Buttons */}
        <div
          className={`w-full max-w-sm space-y-3 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          {/* アカウントを作る（無料）ボタン */}
          <button
            onClick={handleCreateAccount}
            className="w-full bg-[#4D5CEC] hover:bg-[#3949AB] text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
          >
            アカウントを作る（無料）
          </button>

          {/* あとでボタン */}
          <button
            onClick={handleLater}
            className="w-full font-bold py-4 px-8 rounded-2xl transition-all border-2 border-gray-200 text-gray-600 hover:bg-gray-50 shadow-[0_4px_0_0_#e5e7eb] hover:shadow-[0_2px_0_0_#e5e7eb] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
          >
            あとで
          </button>
        </div>
      </main>
    </div>
  );
}
