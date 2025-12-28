'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';

// 紙吹雪コンポーネント
function Confetti() {
  const confettiPieces = useMemo(() => {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFA07A', '#98D8C8', '#FF69B4'];
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2.5 + Math.random() * 2,
      color: colors[i % colors.length],
      size: 8 + Math.random() * 12,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[100]">
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: piece.id % 3 === 0 ? '50%' : '2px',
            animation: `confetti-fall ${piece.duration}s linear forwards`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// 数字カウントアップアニメーション
function AnimatedNumber({ value, duration = 500 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

// ランク計算
function getRank(score: number): { rank: string; color: string } {
  if (score >= 90) return { rank: 'S', color: '#FFD700' };
  if (score >= 80) return { rank: 'A', color: '#58CC02' };
  if (score >= 70) return { rank: 'B', color: '#1CB0F6' };
  if (score >= 60) return { rank: 'C', color: '#FFA500' };
  return { rank: 'D', color: '#FF6B6B' };
}

export default function CompletePage() {
  const router = useRouter();

  // 評価項目データ
  const criteria = [
    { name: '簡潔さ', score: 78 },
    { name: '構成力', score: 72 },
    { name: '印象・話し方', score: 85 },
  ];

  const totalScore = Math.round(criteria.reduce((sum, c) => sum + c.score, 0) / criteria.length);
  const isCleared = totalScore >= 70;
  const { rank, color: rankColor } = getRank(totalScore);

  // アニメーション状態
  const [currentStep, setCurrentStep] = useState(-1);
  const [showTotal, setShowTotal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // アニメーションシーケンス
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const baseDelay = 500;

    // 各項目のタイマー
    criteria.forEach((_, index) => {
      timers.push(setTimeout(() => setCurrentStep(index), baseDelay + index * 600));
    });

    // トータルスコア表示
    timers.push(setTimeout(() => setShowTotal(true), baseDelay + criteria.length * 600 + 400));

    // クリア時のみ紙吹雪
    if (isCleared) {
      timers.push(setTimeout(() => setShowConfetti(true), baseDelay + criteria.length * 600 + 1000));
    }

    // メッセージ表示
    timers.push(setTimeout(() => setShowMessage(true), baseDelay + criteria.length * 600 + 1200));

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleNext = () => {
    router.push('/register/result-detail');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 紙吹雪（クリア時のみ） */}
      {showConfetti && isCleared && <Confetti />}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
        {/* Speech Bubble */}
        <div className={`mb-2 transition-all duration-500 ${showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative">
            <div className="bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 shadow-sm">
              <p className="text-lg md:text-xl font-bold text-center text-gray-800">
                {isCleared ? 'クリアだよ！おめでとう！' : '惜しい！もう一度挑戦しよう！'}
              </p>
            </div>
            {/* Bubble Arrow (pointing down) */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-2">
              <div className="w-3 h-3 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Mascot */}
        <div className="mb-4 w-36 h-36 md:w-40 md:h-40">
          <video
            src="/β版　アニメーション (5).mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* タイトル */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#58CC02] mb-4">
          レッスンコンプリート！
        </h1>

        {/* スコア＆ランクカード */}
        <div className="flex gap-4 mb-6">
          {/* スコアカード */}
          <div className="bg-white border-2 border-[#1CB0F6] rounded-2xl px-6 py-4 min-w-[120px]">
            <p className="text-xs font-bold text-[#1CB0F6] mb-1 text-center">スコア</p>
            <div className="flex items-center justify-center">
              <span className="text-2xl font-black text-[#1CB0F6]">
                {showTotal ? <AnimatedNumber value={totalScore} duration={800} /> : '??'}
              </span>
              <span className="text-sm text-gray-400 ml-1">pt</span>
            </div>
          </div>

          {/* ランクカード */}
          <div className="bg-white border-2 rounded-2xl px-6 py-4 min-w-[120px]" style={{ borderColor: rankColor }}>
            <p className="text-xs font-bold mb-1 text-center" style={{ color: rankColor }}>ランク</p>
            <div className="flex items-center justify-center">
              <span className="text-3xl font-black" style={{ color: rankColor }}>
                {showTotal ? rank : '?'}
              </span>
            </div>
          </div>
        </div>

        {/* 評価項目 */}
        <div className="w-full max-w-sm space-y-3">
          {criteria.map((item, index) => {
            const isActive = currentStep >= index;
            return (
              <div
                key={item.name}
                className={`flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
                <span className={`text-lg font-bold ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                  {isActive ? <AnimatedNumber value={item.score} /> : '??'}
                  <span className="text-sm text-gray-400 ml-1">pt</span>
                </span>
              </div>
            );
          })}
        </div>
      </main>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
        <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
          {/* 次へボタン */}
          <button
            onClick={handleNext}
            disabled={!showTotal}
            className={`font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 ${
              showTotal
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
