'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { setCurrentStep, saveRegistrationData, getRegistrationData, completeStep } from '@/lib/registration-store';

const statuses = [
  { id: 'starting', title: '就活をこれから始める', level: 1, message: 'OK！基礎から一緒に練習していこう！' },
  { id: 'internship', title: 'インターン面接準備中', level: 2, message: 'いいね！インターン突破に向けて頑張ろう！' },
  { id: 'main-selection', title: '本選考面接準備中', level: 3, message: 'よし！本選考に向けて仕上げていこう！' },
  { id: 'final', title: '最終面接準備中', level: 4, message: 'あと少し！最後まで一緒に走り抜けよう！' },
];

// レベルアイコンコンポーネント（4段階）
function LevelIcon({ level }: { level: number }) {
  const bars = [1, 2, 3, 4];
  return (
    <div className="flex items-end gap-1 h-6">
      {bars.map((bar) => (
        <div
          key={bar}
          className={`w-2 rounded-sm ${
            bar <= level ? 'bg-[#1CB0F6]' : 'bg-gray-200'
          }`}
          style={{ height: `${bar * 5 + 4}px` }}
        />
      ))}
    </div>
  );
}

function StatusContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const company = searchParams.get('company') || 'goldman-sachs';
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // 初回読み込み時のアニメーション & ストア連携
  useEffect(() => {
    setIsInitialLoad(false);
    setCurrentStep('status');

    // 保存済みの就活状況があれば復元
    const data = getRegistrationData();
    if (data.jobStatus) {
      setSelectedStatus(data.jobStatus);
    }
  }, []);

  // 選択が変わったらアニメーションをトリガー
  useEffect(() => {
    if (selectedStatus) {
      setBubbleKey(prev => prev + 1);
    }
  }, [selectedStatus]);

  const handleNext = () => {
    if (selectedStatus) {
      // ストアに保存
      saveRegistrationData({ jobStatus: selectedStatus });
      completeStep('status');
      router.push(`/register/level?company=${company}&status=${selectedStatus}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with X button */}
      <div className="p-4">
        <Link href="/register" className="text-gray-400 hover:text-gray-600 transition-colors">
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
              {selectedStatus
                ? statuses.find((s) => s.id === selectedStatus)?.message
                : '今の就活状況はどのくらいですか？'}
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
      <main className="flex-1 flex flex-col items-center px-4 pt-48 pb-32">
        {/* Status Options */}
        <div className="w-full max-w-lg space-y-5">
          {statuses.map((status) => (
            <button
              key={status.id}
              onClick={() => setSelectedStatus(status.id)}
              className={`flex items-center gap-5 w-full py-7 px-8 bg-white border-2 rounded-2xl transition-all shadow-[0_2px_0_0_#e5e7eb] hover:shadow-[0_2px_0_0_#e5e7eb] active:shadow-none active:translate-y-[2px] ${
                selectedStatus === status.id
                  ? 'border-[#1CB0F6] bg-[#DDF4FF]'
                  : 'border-gray-200 hover:bg-gray-50 active:bg-gray-100'
              }`}
            >
              <LevelIcon level={status.level} />
              <span className="font-semibold text-lg text-gray-800">{status.title}</span>
            </button>
          ))}
        </div>
      </main>

      {/* Bottom Bar with Line and Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
        <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
          <button
            onClick={handleNext}
            disabled={!selectedStatus}
            className={`font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 ${
              selectedStatus
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

export default function StatusPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <StatusContent />
    </Suspense>
  );
}
