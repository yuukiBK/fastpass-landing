'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

// Welcome Modal Component
function WelcomeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-[200] flex items-center justify-center px-4 animate-[fadeIn_0.3s_ease-out]">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-xl border border-gray-200 animate-[slideUp_0.4s_ease-out] relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            ようこそ、FastPassへ！
          </h2>
          <p className="text-base text-gray-700">
            有名・難関企業への最速内定を目指そう！
          </p>
        </div>

        {/* 3 Features */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {/* AI面接練習 */}
          <div className="bg-[#FFF4E5] rounded-xl p-3 text-center">
            <div className="w-10 h-10 bg-[#FF9600] rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs font-bold text-gray-700">AI面接練習</p>
          </div>

          {/* 限定イベント */}
          <div className="bg-[#E8F5FF] rounded-xl p-3 text-center">
            <div className="w-10 h-10 bg-[#1CB0F6] rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs font-bold text-gray-700">限定イベント</p>
          </div>

          {/* 特別スカウト */}
          <div className="bg-[#F0FDF4] rounded-xl p-3 text-center">
            <div className="w-10 h-10 bg-[#58CC02] rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <p className="text-xs font-bold text-gray-700">特別スカウト</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onClose}
          className="w-full bg-[#4D5CEC] hover:bg-[#3949AB] text-white font-bold py-3 px-6 rounded-2xl transition-all shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
        >
          さっそく始める
        </button>
      </div>
    </div>
  );
}

// Video Modal Component (Full Screen)
function VideoModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // ブラウザの戻るボタンで閉じる
  useEffect(() => {
    if (typeof window !== 'undefined' && isOpen) {
      window.history.pushState({ videoModal: true }, '');
      window.onpopstate = () => {
        onClose();
        // まず一番上に移動してから、ザーッと一番下までスクロール
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 50);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    // まず一番上に移動してから、ザーッと一番下までスクロール
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 50);
  };

  return (
    <div
      className="fixed inset-0 bg-black z-[100] flex items-center justify-center cursor-pointer"
      onClick={handleClose}
    >
      {/* Video - Full Screen */}
      <video
        src="/DMM最終面接.mp4"
        autoPlay
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
}

// Quest Popup Component
function QuestPopup({
  isOpen,
  onClose,
  title,
  description,
  year,
  color,
  interviewerImage,
  interviewerName,
  onStartVideo
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  year: string;
  color: string;
  interviewerImage?: string;
  interviewerName?: string;
  onStartVideo?: () => void;
}) {
  if (!isOpen) return null;

  const handleButtonClick = () => {
    if (onStartVideo) {
      onStartVideo();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-50"
        onClick={onClose}
      />
      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[340px]">
        <div
          className="rounded-2xl p-6 shadow-xl relative"
          style={{ backgroundColor: color }}
        >
          {/* Arrow pointing up */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45"
            style={{ backgroundColor: color }}
          />

          {/* Interviewer Section */}
          {interviewerImage && (
            <div className="flex items-center gap-3 mb-4 bg-white/20 rounded-xl p-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/50 flex-shrink-0">
                <img
                  src={interviewerImage}
                  alt={interviewerName || '面接官'}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white/70 text-xs">AI面接官</p>
                <p className="text-white font-bold">{interviewerName || '面接官'}</p>
              </div>
            </div>
          )}

          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-white/90 text-sm mb-1">{year}</p>
          <p className="text-white/80 text-sm mb-4">{description}</p>

          {/* Practice Button */}
          <button
            onClick={handleButtonClick}
            className="w-full py-3 rounded-xl font-bold text-gray-700 mb-3 transition-all hover:brightness-95 active:scale-[0.98]"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 4px 0 rgba(0,0,0,0.1)'
            }}
          >
            練習(タイピング)
          </button>

          {/* 本番モード Button */}
          <button
            onClick={handleButtonClick}
            className="w-full py-3 rounded-xl font-bold transition-all hover:brightness-95 active:scale-[0.98]"
            style={{
              backgroundColor: '#FFC800',
              color: '#8B6914',
              boxShadow: '0 4px 0 #CC9F00'
            }}
          >
            本番モード(音声)
          </button>
        </div>
      </div>
    </>
  );
}

// Sidebar Component
function Sidebar({ activePage = 'home' }: { activePage?: 'home' | 'courses' | 'events' | 'messages' | 'history' | 'profile' }) {
  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-white border-r border-gray-200 fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="p-6">
        <Link href="/" className="flex items-center">
          <img
            src="/名称未設定のデザイン (71).png"
            alt="FastPass"
            className="h-10"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-3">
        {/* ホーム */}
        <Link
          href="/demo/dmm"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'home'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          <span className="font-bold">ホーム</span>
        </Link>

        {/* コースを選択 */}
        <Link
          href="/demo/courses"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'courses'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="font-bold">コースを選択</span>
        </Link>

        {/* イベント */}
        <Link
          href="/demo/events"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'events'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-bold">イベント</span>
          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
        </Link>

        {/* 履歴 */}
        <Link
          href="/history"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'history'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold">履歴</span>
        </Link>

        {/* プロフィール */}
        <Link
          href="/demo/profile"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activePage === 'profile'
              ? 'bg-[#DDF4FF] text-[#1CB0F6]'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="/スクリーンショット 2025-12-23 15.29.56.png"
              alt="プロフィール画像"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold">プロフィール</span>
        </Link>
      </nav>
    </aside>
  );
}

// Unit Card Component (Duolingo style)
function UnitCard({ unitNumber, title, color }: { unitNumber: number; title: string; color: string }) {
  // レベルとラベルを決定
  const getLevelInfo = (unit: number) => {
    if (unit <= 3) return { level: 1, label: 'インターン面接' };
    if (unit <= 5) return { level: 2, label: '本選考面接' };
    return { level: 3, label: '最終面接' };
  };

  const { level, label } = getLevelInfo(unitNumber);

  return (
    <div
      className="w-full rounded-2xl px-6 py-4 flex items-center justify-between"
      style={{ backgroundColor: color }}
    >
      <div>
        <p className="text-white/80 text-sm font-medium mb-1">
          ← Level {level}・ユニット {unitNumber}
        </p>
        <h2 className="text-white text-xl font-bold">{title}</h2>
      </div>
      <div className="bg-white/20 text-white px-4 py-2.5 rounded-xl font-bold text-sm border-2 border-white/30">
        <p className="text-white/70 text-xs mb-0.5">Level {level}</p>
        <p className="text-white font-bold">{label}</p>
      </div>
    </div>
  );
}

// Question Node Component
type QuestionNode = {
  id: number;
  question: string;
  completed: boolean;
  score?: number;
};

function DungeonNode({ index }: { node: QuestionNode; index: number; color: string }) {
  // Duolingo style offset pattern (zigzag)
  const getOffset = (idx: number) => {
    const pattern = [0, 50, 70, 50, 0, -50, -70, -50];
    return pattern[idx % pattern.length];
  };

  const offset = getOffset(index);

  return (
    <div className="flex flex-col items-center py-2">
      <div style={{ transform: `translateX(${offset}px)` }}>
        <Link
          href="/demo/interview-prep"
          className="block hover:scale-105 active:scale-95 transition-all duration-150 ease-out cursor-pointer"
        >
          <img
            src="/スクリーンショット 2025-12-20 9.04.02.png"
            alt="クエスト"
            className="w-[72px] h-[72px] object-contain"
          />
        </Link>
      </div>
    </div>
  );
}

// Boss Node Component
function BossNode() {
  return (
    <div className="flex flex-col items-center py-4">
      <Link
        href="/demo/interview-prep"
        className="group relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-[-8px] bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />

        {/* Main node */}
        <div
          className="relative w-24 h-24 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: '#7C3AED',
            boxShadow: '0 8px 0 rgba(109, 40, 217, 0.8), 0 12px 24px rgba(0,0,0,0.2)'
          }}
        >
          {/* Inner highlight */}
          <div
            className="absolute inset-[4px] rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 50%)'
            }}
          />

          {/* Crown */}
          <span className="text-4xl drop-shadow-lg relative z-10">👑</span>
        </div>

        {/* BOSS badge */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs font-black shadow-md">
            BOSS
          </span>
        </div>

        {/* Stars */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-0.5">
          {[1, 2, 3].map((star) => (
            <svg
              key={star}
              className="w-4 h-4 text-yellow-400 fill-current drop-shadow"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </Link>

      <p className="text-center text-purple-700 font-bold mt-6">亀山会長とのAI面接</p>
    </div>
  );
}

// AI面接官データ（レベル別）
const interviewers = {
  level1: { image: "/AI面接官画像 (2).png", name: "田中 采配（人事担当）" },
  level2: { image: "/AI面接官画像 (3).png", name: "佐藤 厳格（事業部部長）" },
  level3: { image: "/名称未設定のデザイン (88).png", name: "亀山 敬司（DMM会長）" },
};

// Quest data for popups
const questDetails: Record<number, { title: string; description: string; year: string; interviewerImage: string; interviewerName: string }[]> = {
  1: [
    { title: "自己紹介をしてください", description: "第一印象を良くする自己紹介を練習しよう！", year: "2024年 DMM面接", interviewerImage: interviewers.level1.image, interviewerName: interviewers.level1.name },
    { title: "趣味・特技について", description: "あなたらしさを伝える練習！", year: "2024年 DMM面接", interviewerImage: interviewers.level1.image, interviewerName: interviewers.level1.name },
    { title: "最近気になったニュース", description: "時事問題への関心をアピール！", year: "2023年 DMM面接", interviewerImage: interviewers.level1.image, interviewerName: interviewers.level1.name },
  ],
  2: [
    { title: "学生時代に力を入れたこと", description: "ガクチカの基本を練習！", year: "2024年 DMM面接", interviewerImage: interviewers.level1.image, interviewerName: interviewers.level1.name },
    { title: "チームで成果を出した経験", description: "協調性をアピール！", year: "2024年 DMM面接", interviewerImage: interviewers.level1.image, interviewerName: interviewers.level1.name },
    { title: "挫折経験と学んだこと", description: "困難を乗り越える力を伝えよう！", year: "2023年 DMM面接", interviewerImage: interviewers.level1.image, interviewerName: interviewers.level1.name },
  ],
  3: [
    { title: "あなたの強みは？", description: "自己分析の成果を発揮！", year: "2024年 DMM面接", interviewerImage: interviewers.level1.image, interviewerName: interviewers.level1.name },
    { title: "あなたの短所は？", description: "弱みを強みに変える練習！", year: "2024年 DMM面接", interviewerImage: interviewers.level1.image, interviewerName: interviewers.level1.name },
    { title: "周囲からの評価", description: "客観的な自己理解を示そう！", year: "2023年 DMM面接", interviewerImage: interviewers.level1.image, interviewerName: interviewers.level1.name },
  ],
  4: [
    { title: "なぜDMMを志望するのか？", description: "志望動機の核心を伝えよう！", year: "2024年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
    { title: "DMMで興味のある事業は？", description: "企業研究の成果を見せよう！", year: "2024年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
    { title: "他社ではなくDMMを選ぶ理由は？", description: "差別化ポイントを明確に！", year: "2023年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
  ],
  5: [
    { title: "DMMはエンタメ寄りの会社だけど大丈夫？", description: "事業理解を深めよう！", year: "2024年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
    { title: "あなたが考えるDMMの課題と解決策は？", description: "分析力をアピール！", year: "2024年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
    { title: "意見が対立したときどう対処した？", description: "コンフリクト解決力を示そう！", year: "2023年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
  ],
  6: [
    { title: "5年後にやりたいことは？", description: "キャリアビジョンを描こう！", year: "2024年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
    { title: "DMMで具体的に何を成し遂げたい？", description: "具体的な目標を伝えよう！", year: "2024年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
    { title: "入社後、最初に取り組みたいことは？", description: "即戦力をアピール！", year: "2023年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
  ],
  7: [
    { title: "新規事業を立ち上げるとしたら何をする？", description: "発想力を見せよう！", year: "2024年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
    { title: "DMMの新しい収益源を提案してください", description: "ビジネス感覚をアピール！", year: "2024年 DMM面接", interviewerImage: interviewers.level2.image, interviewerName: interviewers.level2.name },
  ],
  8: [
    { title: "亀山会長との最終面接", description: "これまでの全てを出し切ろう！", year: "2024年 DMM面接", interviewerImage: interviewers.level3.image, interviewerName: interviewers.level3.name },
  ],
};

// Unit Section Component
function UnitSection({ unit }: { unit: typeof units[0] }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState<{ title: string; description: string; year: string; interviewerImage: string; interviewerName: string } | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleQuestClick = () => {
    const quests = questDetails[unit.unitNumber];
    if (quests && quests.length > 0) {
      setSelectedQuest(quests[0]);
      setPopupOpen(true);
    }
  };

  const handleStartVideo = () => {
    setPopupOpen(false);
    setVideoOpen(true);
  };

  // ユニット1はすごろく風コース
  if (unit.unitNumber === 1) {
    return (
      <div className="mb-8">
        {/* Unit Card */}
        <div className="mb-6">
          <UnitCard unitNumber={unit.unitNumber} title={unit.title} color={unit.color} />
        </div>

        {/* すごろく風コース */}
        <div className="relative flex flex-col items-center gap-3">
          {/* ステップ1: 星3つ（クリア済み） */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform"
            onClick={handleQuestClick}
          >
            <img
              src="/Gemini_Generated_Image_j6vf82j6vf82j6vf.png"
              alt="ステップ1"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ2: 星3つ（クリア済み） */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform translate-x-10"
            onClick={handleQuestClick}
          >
            <img
              src="/Gemini_Generated_Image_j6vf82j6vf82j6vf.png"
              alt="ステップ2"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ3: 星2つ（クリア済み） */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform -translate-x-6"
            onClick={handleQuestClick}
          >
            <img
              src="/Gemini_Generated_Image_y5ns5zy5ns5zy5ns.png"
              alt="ステップ3"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ4: 星2つ（クリア済み） */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform"
            onClick={handleQuestClick}
          >
            <img
              src="/Gemini_Generated_Image_y5ns5zy5ns5zy5ns.png"
              alt="ステップ4"
              className="w-24 h-24"
            />
          </div>
        </div>

        {/* Quest Popup */}
        {selectedQuest && (
          <QuestPopup
            isOpen={popupOpen}
            onClose={() => setPopupOpen(false)}
            title={selectedQuest.title}
            description={selectedQuest.description}
            year={selectedQuest.year}
            color={unit.color}
            interviewerImage={selectedQuest.interviewerImage}
            interviewerName={selectedQuest.interviewerName}
            onStartVideo={handleStartVideo}
          />
        )}

        {/* Video Modal */}
        <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      </div>
    );
  }

  // ユニット2はすごろく風コース（紫）
  if (unit.unitNumber === 2) {
    return (
      <div className="mb-8">
        {/* Unit Card */}
        <div className="mb-6">
          <UnitCard unitNumber={unit.unitNumber} title={unit.title} color={unit.color} />
        </div>

        {/* すごろく風コース */}
        <div className="relative flex flex-col items-center gap-3">
          {/* ステップ1: 星3つ（クリア済み） */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (5).png"
              alt="ステップ1"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ2: 星3つ（クリア済み） - 左側に配置 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform -translate-x-10"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (5).png"
              alt="ステップ2"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ3: 星2つ（クリア済み） - 右側に配置 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform translate-x-6"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (6).png"
              alt="ステップ3"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ4: 星1つ（クリア済み） - 中央に配置 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (7).png"
              alt="ステップ4"
              className="w-24 h-24"
            />
          </div>
        </div>

        {/* Quest Popup */}
        {selectedQuest && (
          <QuestPopup
            isOpen={popupOpen}
            onClose={() => setPopupOpen(false)}
            title={selectedQuest.title}
            description={selectedQuest.description}
            year={selectedQuest.year}
            color={unit.color}
            interviewerImage={selectedQuest.interviewerImage}
            interviewerName={selectedQuest.interviewerName}
            onStartVideo={handleStartVideo}
          />
        )}

        {/* Video Modal */}
        <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      </div>
    );
  }

  // ユニット3はすごろく風コース（ターコイズ）
  if (unit.unitNumber === 3) {
    return (
      <div className="mb-8">
        {/* Unit Card */}
        <div className="mb-6">
          <UnitCard unitNumber={unit.unitNumber} title={unit.title} color={unit.color} />
        </div>

        {/* すごろく風コース */}
        <div className="relative flex flex-col items-center gap-3">
          {/* ステップ1: 星3つ（クリア済み） */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (8).png"
              alt="ステップ1"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ2: 星2つ（クリア済み） - 右側に配置 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform translate-x-10"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (9).png"
              alt="ステップ2"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ3: 星1つ（クリア済み） - 中央に配置 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform -translate-x-6"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (11).png"
              alt="ステップ3"
              className="w-24 h-24"
            />
          </div>
        </div>

        {/* Quest Popup */}
        {selectedQuest && (
          <QuestPopup
            isOpen={popupOpen}
            onClose={() => setPopupOpen(false)}
            title={selectedQuest.title}
            description={selectedQuest.description}
            year={selectedQuest.year}
            color={unit.color}
            interviewerImage={selectedQuest.interviewerImage}
            interviewerName={selectedQuest.interviewerName}
            onStartVideo={handleStartVideo}
          />
        )}

        {/* Video Modal */}
        <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      </div>
    );
  }

  // ユニット4はすごろく風コース（緑）- 5ステップ
  if (unit.unitNumber === 4) {
    return (
      <div className="mb-8">
        {/* Unit Card */}
        <div className="mb-6">
          <UnitCard unitNumber={unit.unitNumber} title={unit.title} color={unit.color} />
        </div>

        {/* すごろく風コース */}
        <div className="relative flex flex-col items-center gap-3">
          {/* ステップ1: 星3つ */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (18).png"
              alt="ステップ1"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ2: 星3つ - 右側 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform translate-x-10"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (18).png"
              alt="ステップ2"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ3: 星2つ - 左側 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform -translate-x-6"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (19).png"
              alt="ステップ3"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ4: 星2つ - 中央 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (19).png"
              alt="ステップ4"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ5: 星1つ - 右側 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform translate-x-10"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (20).png"
              alt="ステップ5"
              className="w-24 h-24"
            />
          </div>
        </div>

        {/* Quest Popup */}
        {selectedQuest && (
          <QuestPopup
            isOpen={popupOpen}
            onClose={() => setPopupOpen(false)}
            title={selectedQuest.title}
            description={selectedQuest.description}
            year={selectedQuest.year}
            color={unit.color}
            interviewerImage={selectedQuest.interviewerImage}
            interviewerName={selectedQuest.interviewerName}
            onStartVideo={handleStartVideo}
          />
        )}

        {/* Video Modal */}
        <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      </div>
    );
  }

  // ユニット5はすごろく風コース（青）- 5ステップ
  if (unit.unitNumber === 5) {
    return (
      <div className="mb-8">
        {/* Unit Card */}
        <div className="mb-6">
          <UnitCard unitNumber={unit.unitNumber} title={unit.title} color={unit.color} />
        </div>

        {/* すごろく風コース */}
        <div className="relative flex flex-col items-center gap-3">
          {/* ステップ1: 星3つ */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (15).png"
              alt="ステップ1"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ2: 星3つ - 左側 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform -translate-x-10"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (15).png"
              alt="ステップ2"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ3: 星2つ - 右側 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform translate-x-6"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (16).png"
              alt="ステップ3"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ4: 星2つ - 中央 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (16).png"
              alt="ステップ4"
              className="w-24 h-24"
            />
          </div>

          {/* ステップ5: 星1つ - 左側 */}
          <div
            className="relative cursor-pointer transform hover:scale-105 transition-transform -translate-x-10"
            onClick={handleQuestClick}
          >
            <img
              src="/β版　アニメーション (17).png"
              alt="ステップ5"
              className="w-24 h-24"
            />
          </div>
        </div>

        {/* Quest Popup */}
        {selectedQuest && (
          <QuestPopup
            isOpen={popupOpen}
            onClose={() => setPopupOpen(false)}
            title={selectedQuest.title}
            description={selectedQuest.description}
            year={selectedQuest.year}
            color={unit.color}
            interviewerImage={selectedQuest.interviewerImage}
            interviewerName={selectedQuest.interviewerName}
            onStartVideo={handleStartVideo}
          />
        )}

        {/* Video Modal */}
        <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      </div>
    );
  }

  return (
    <div className="mb-8">
      {/* Unit Card */}
      <div className="mb-6">
        <UnitCard unitNumber={unit.unitNumber} title={unit.title} color={unit.color} />
      </div>

      {/* Questions */}
      <div className="space-y-2">
        {unit.questions.map((node, index) => (
          <DungeonNode
            key={node.id}
            node={node}
            index={index}
            color={unit.color}
          />
        ))}
      </div>
    </div>
  );
}

// Unit data
const units = [
  {
    unitNumber: 1,
    title: "自己紹介をマスターする",
    color: "#1CB0F6", // シアン（星アイコンに合わせて）
    questions: [
      { id: 1, question: "自己紹介をしてください", completed: true, score: 92 },
      { id: 2, question: "趣味や特技について教えてください", completed: true, score: 88 },
      { id: 3, question: "最近気になったニュースは？", completed: true, score: 85 },
    ]
  },
  {
    unitNumber: 2,
    title: "ガクチカを語る",
    color: "#A855F7", // 紫
    questions: [
      { id: 4, question: "学生時代に力を入れたことは？", completed: true, score: 90 },
      { id: 5, question: "チームで成果を出した経験は？", completed: true, score: 86 },
      { id: 6, question: "挫折経験とそこから学んだことは？", completed: true, score: 82 },
    ]
  },
  {
    unitNumber: 3,
    title: "自分の強み・弱みを伝える",
    color: "#2DD4BF", // ターコイズ
    questions: [
      { id: 7, question: "あなたの強みは何ですか？", completed: true, score: 88 },
      { id: 8, question: "あなたの短所を教えてください", completed: true, score: 78 },
      { id: 9, question: "周囲からどんな人だと言われる？", completed: true, score: 84 },
    ]
  },
  {
    unitNumber: 4,
    title: "志望動機を固める",
    color: "#58CC02", // 緑
    questions: [
      { id: 10, question: "なぜDMMを志望するのか？", completed: true, score: 91 },
      { id: 11, question: "DMMで興味のある事業は？", completed: true, score: 87 },
      { id: 12, question: "他社ではなくDMMを選ぶ理由は？", completed: true, score: 83 },
    ]
  },
  {
    unitNumber: 5,
    title: "DMMを深く知る",
    color: "#1CB0F6", // 青
    questions: [
      { id: 13, question: "DMMはエンタメ寄りの会社だけど大丈夫？", completed: true, score: 89 },
      { id: 14, question: "あなたが考えるDMMの課題と解決策は？", completed: true, score: 76 },
      { id: 15, question: "意見が対立したときどう対処した？", completed: true, score: 85 },
    ]
  },
];

const bossUnit = {
  unitNumber: 6,
  title: "最終面接に挑戦",
  color: "#FF9600", // オレンジ
};

function DMMDungeonContent() {
  const searchParams = useSearchParams();
  const isFromRegister = searchParams.get('from') === 'register';
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [bossPopupOpen, setBossPopupOpen] = useState(false);
  const [bossVideoOpen, setBossVideoOpen] = useState(false);
  const bossQuest = questDetails[8]?.[0];

  useEffect(() => {
    if (isFromRegister) {
      setShowWelcomeModal(true);
    }
  }, [isFromRegister]);

  const handleBossStartVideo = () => {
    setBossPopupOpen(false);
    setBossVideoOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Modal */}
      {showWelcomeModal && <WelcomeModal onClose={() => setShowWelcomeModal(false)} />}

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:ml-64 flex">
        {/* Dungeon Area */}
        <div className="flex-1 min-h-screen">

          {/* Dungeon Path */}
          <div className="max-w-xl mx-auto px-4 py-8">
            {/* Regular Units */}
            {units.map((unit) => (
              <UnitSection key={unit.unitNumber} unit={unit} />
            ))}

            {/* Boss Unit */}
            <div className="mb-8">
              <div className="mb-6">
                <UnitCard unitNumber={bossUnit.unitNumber} title={bossUnit.title} color={bossUnit.color} />
              </div>

              {/* すごろく風コース */}
              <div className="relative flex flex-col items-center gap-3">
                {/* ステップ1: 星3つ */}
                <div
                  className="relative cursor-pointer transform hover:scale-105 transition-transform"
                  onClick={() => setBossPopupOpen(true)}
                >
                  <img
                    src="/β版　アニメーション (21).png"
                    alt="ステップ1"
                    className="w-24 h-24"
                  />
                </div>

                {/* ステップ2: 星3つ - 右側 */}
                <div
                  className="relative cursor-pointer transform hover:scale-105 transition-transform translate-x-10"
                  onClick={() => setBossPopupOpen(true)}
                >
                  <img
                    src="/β版　アニメーション (21).png"
                    alt="ステップ2"
                    className="w-24 h-24"
                  />
                </div>

                {/* ステップ3: 星2つ - 左側 */}
                <div
                  className="relative cursor-pointer transform hover:scale-105 transition-transform -translate-x-10"
                  onClick={() => setBossPopupOpen(true)}
                >
                  <img
                    src="/β版　アニメーション (22).png"
                    alt="ステップ3"
                    className="w-24 h-24"
                  />
                </div>

                {/* ステップ4: 星1つ - 中央 */}
                <div
                  className="relative cursor-pointer transform hover:scale-105 transition-transform"
                  onClick={() => setBossPopupOpen(true)}
                >
                  <img
                    src="/β版　アニメーション (23).png"
                    alt="ステップ4"
                    className="w-24 h-24"
                  />
                </div>

                {/* ステップ5: ゴール - 右側 */}
                <div
                  className="relative cursor-pointer transform hover:scale-105 transition-transform translate-x-10"
                  onClick={() => setBossPopupOpen(true)}
                >
                  <img
                    src="/β版　アニメーション (24).png"
                    alt="ステップ5"
                    className="w-24 h-24"
                  />
                </div>
              </div>

              {/* Boss Quest Popup */}
              {bossQuest && (
                <QuestPopup
                  isOpen={bossPopupOpen}
                  onClose={() => setBossPopupOpen(false)}
                  title={bossQuest.title}
                  description={bossQuest.description}
                  year={bossQuest.year}
                  color={bossUnit.color}
                  interviewerImage={bossQuest.interviewerImage}
                  interviewerName={bossQuest.interviewerName}
                  onStartVideo={handleBossStartVideo}
                />
              )}

              {/* Boss Video Modal */}
              <VideoModal isOpen={bossVideoOpen} onClose={() => setBossVideoOpen(false)} />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:block w-[480px] bg-white pl-10 pr-24 py-6 space-y-6 sticky top-0 h-screen overflow-y-auto">
          {/* Status Bar (DMM style) */}
          <img
            src="/右サイドバー_1.gif"
            alt="DMM Status Bar"
            className="w-3/4"
          />

          {/* Boss Interview Card */}
          <img
            src="/所長面接に挑戦var2.png"
            alt="社長面接に挑戦"
            className="w-full rounded-2xl"
          />

          {/* Event Card */}
          <img
            src="/イベント告知.png"
            alt="イベント告知"
            className="w-full rounded-2xl"
          />

          {/* Friends Card */}
          <img
            src="/フレンド (2).png"
            alt="フレンド"
            className="w-full rounded-2xl"
          />

          {/* Additional Card */}
          <img
            src="/スクリーンショット 2025-12-20 8.57.53.png"
            alt="追加カード"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default function DMMDungeonPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <DMMDungeonContent />
    </Suspense>
  );
}
