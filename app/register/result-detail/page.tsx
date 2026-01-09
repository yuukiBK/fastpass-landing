'use client';

import { useRouter } from 'next/navigation';

export default function ResultDetailPage() {
  const router = useRouter();

  const handleTap = () => {
    router.push('/register/congrats');
  };

  return (
    <div
      className="min-h-screen bg-white cursor-pointer"
      onClick={handleTap}
    >
      {/* Main Content - Screenshot Images (Full Width) */}
      <main className="w-full">
        {/* スコア + 総評セクション */}
        <img
          src="/スクリーンショット 2026-01-08 16.02.58.png"
          alt="スコアと総評"
          className="w-full"
        />

        {/* 審査項目セクション */}
        <img
          src="/スクリーンショット 2026-01-08 15.38.20.png"
          alt="審査項目"
          className="w-full"
        />

        {/* ランキング + 会話履歴セクション */}
        <img
          src="/スクリーンショット 2026-01-08 15.43.27.png"
          alt="ランキングと会話履歴"
          className="w-full"
        />
      </main>
    </div>
  );
}
