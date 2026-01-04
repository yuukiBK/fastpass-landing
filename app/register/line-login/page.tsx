'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { setCurrentStep, saveRegistrationData, completeStep, clearRegistrationData } from '@/lib/registration-store';

export default function LineLoginPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentStep('line-login');
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    // LINE認証完了
    saveRegistrationData({ lineAuthenticated: true });
    completeStep('line-login');
    // 登録完了後はデータをクリア（必要に応じて）
    // clearRegistrationData();
    // LINEログイン後、デモ誘導画面へ
    router.push('/register/demo-intro');
  };

  const handleOtherAccount = () => {
    // 別のアカウントでログイン（今はデモ誘導画面へ）
    router.push('/register/demo-intro');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* LINE Login Card */}
        <div
          className={`bg-white rounded-lg shadow-lg w-full max-w-md p-8 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
        >
          {/* LINE Logo */}
          <div className="text-center mb-8">
            <h1 className="text-[#06C755] text-3xl font-bold tracking-wider">LINE</h1>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center mb-8">
            {/* Profile Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#06C755]">
              <img
                src="/スクリーンショット 2025-12-23 15.29.56.png"
                alt="プロフィール"
                className="w-full h-full object-cover bg-gray-200"
              />
            </div>

            {/* Text */}
            <p className="text-gray-500 text-sm mb-1">次のアカウントでログイン</p>
            <p className="text-gray-800 font-bold text-lg">FastPass ユーザー</p>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-4 rounded-lg transition-colors mb-4"
          >
            ログイン
          </button>

          {/* Other Account Link */}
          <div className="text-center">
            <button
              onClick={handleOtherAccount}
              className="text-[#06C755] hover:underline text-sm"
            >
              別のアカウントでログイン
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-xs text-gray-400">
          <span>© LY Corporation</span>
          <div className="flex gap-4">
            <span className="hover:text-gray-600 cursor-pointer">LINEについて</span>
            <span className="hover:text-gray-600 cursor-pointer">プライバシーポリシー</span>
            <span className="hover:text-gray-600 cursor-pointer">利用規約</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
