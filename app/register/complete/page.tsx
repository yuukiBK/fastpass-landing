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

// ランクスロットアニメーション
function AnimatedRank({ targetRank, color, duration = 1000 }: { targetRank: string; color: string; duration?: number }) {
  const ranks = ['S', 'A', 'B', 'C', 'D'];
  const [displayRank, setDisplayRank] = useState('S');
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let currentIndex = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        // スロットのように高速で回転（最初は速く、徐々に遅く）
        const speed = Math.max(50, 200 * (1 - progress));
        currentIndex = (currentIndex + 1) % ranks.length;
        setDisplayRank(ranks[currentIndex]);

        setTimeout(animate, speed);
      } else {
        // 最終的にターゲットランクで停止
        setDisplayRank(targetRank);
        setIsAnimating(false);
      }
    };

    animate();
  }, [targetRank, duration]);

  return (
    <span
      style={{ color: isAnimating ? '#9CA3AF' : color }}
      className="transition-colors duration-200"
    >
      {displayRank}
    </span>
  );
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

  // スコアデータ
  const totalScore = 78;
  const isCleared = totalScore >= 70;
  const { rank, color: rankColor } = getRank(totalScore);

  // アニメーション状態
  const [showScore, setShowScore] = useState(false);
  const [showRank, setShowRank] = useState(false);
  const [showCleared, setShowCleared] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  // アニメーションシーケンス
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const scoreDelay = 600;
    const rankDelay = scoreDelay + 1000; // スコア表示後1秒後にランク
    const rankAnimationDuration = 600; // ランクのスロットアニメーション時間（短縮）
    const clearedDelay = rankDelay + rankAnimationDuration + 400; // ランクアニメーション完了後
    const nextButtonDelay = clearedDelay + 600; // クリア表示後

    timers.push(setTimeout(() => setShowScore(true), scoreDelay));
    timers.push(setTimeout(() => setShowRank(true), rankDelay));

    if (isCleared) {
      timers.push(setTimeout(() => setShowCleared(true), clearedDelay));
      timers.push(setTimeout(() => setShowConfetti(true), clearedDelay)); // クリア表示と同時に紙吹雪
    }

    timers.push(setTimeout(() => setShowNextButton(true), nextButtonDelay));

    return () => timers.forEach(clearTimeout);
  }, [isCleared]);

  const handleNext = () => {
    router.push('/register/result-detail');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative">
      {/* 紙吹雪（クリア時のみ） */}
      {showConfetti && isCleared && <Confetti />}

      {/* メインコンテンツ */}
      <div className="flex flex-col items-center">
        {/* 結果発表リボン */}
        <div className="mb-2 -mt-8 md:-mt-12">
          <img
            src="/ダウンロード (39).png"
            alt="結果発表"
            className="w-80 md:w-[400px] lg:w-[480px] h-auto"
          />
        </div>

        {/* Mascot */}
        <div className="w-64 h-64 md:w-72 md:h-72 mb-4">
          <video
            src="/β版　アニメーション (5).mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* ステージクリア表示 */}
        {isCleared && (
          <p
            className={`text-xl md:text-2xl font-bold text-[#58CC02] -mt-2 mb-5 transition-opacity duration-500 ${
              showCleared ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ステージクリア！
          </p>
        )}

        {/* スコア＆ランクカード */}
        <div className="flex gap-6">
          {/* スコアカード */}
          <div className="bg-white border-2 border-[#1CB0F6] rounded-2xl px-8 py-4 min-w-[140px]">
            <p className="text-sm font-bold text-[#1CB0F6] mb-1 text-center">スコア</p>
            <div className="flex items-center justify-center">
              <span className="text-3xl font-black text-[#1CB0F6]">
                {showScore ? <AnimatedNumber value={totalScore} duration={800} /> : '??'}
              </span>
              <span className="text-base text-gray-400 ml-1">pt</span>
            </div>
          </div>

          {/* ランクカード */}
          <div
            className="bg-white border-2 rounded-2xl px-8 py-4 min-w-[140px] transition-colors duration-300"
            style={{ borderColor: showRank ? rankColor : '#E5E7EB' }}
          >
            <p
              className="text-sm font-bold mb-1 text-center transition-colors duration-300"
              style={{ color: showRank ? rankColor : '#9CA3AF' }}
            >
              ランク
            </p>
            <div className="flex items-center justify-center">
              <span className="text-3xl font-black">
                {showRank ? (
                  <AnimatedRank targetRank={rank} color={rankColor} duration={600} />
                ) : (
                  <span className="text-gray-400">?</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
        <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
          <button
            onClick={handleNext}
            disabled={!showNextButton}
            className={`font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 ${
              showNextButton
                ? 'bg-[#4D5CEC] hover:bg-[#3949AB] text-white shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-[0_4px_0_0_#d1d5db]'
            }`}
          >
            詳細を見る
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
