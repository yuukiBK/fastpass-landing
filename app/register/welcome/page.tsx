'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function WelcomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const company = searchParams.get('company') || 'goldman-sachs';

  // 3秒後に自動で次のページへ遷移
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/register');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router, company]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative">
      {/* Speech Bubble */}
      <div className="relative mb-4">
        <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
          <p className="text-lg md:text-xl font-bold text-gray-800 text-center">
            ようこそ！
          </p>
          <p className="text-sm text-gray-500 text-center mt-1">
            一緒に面接対策を始めましょう
          </p>
        </div>
        {/* Bubble Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
          <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
        </div>
      </div>

      {/* Animation */}
      <div className="w-64 h-64 md:w-80 md:h-80">
        <video
          src="/手を振る.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom Bar with Line and Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
        <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
          <button
            onClick={() => router.push('/register')}
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
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <WelcomeContent />
    </Suspense>
  );
}
