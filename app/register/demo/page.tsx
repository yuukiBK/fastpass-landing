'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useRef, useEffect } from 'react';

function DemoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const company = searchParams.get('company') || 'goldman-sachs';
  const status = searchParams.get('status') || 'starting';

  // 動画の再生速度を1.2倍に設定
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.2;
    }
  }, []);

  // 画面タップで結果ページへ遷移
  const handleScreenClick = () => {
    router.push('/register/complete');
  };

  return (
    <div
      className="fixed inset-0 bg-black z-[100] flex items-center justify-center cursor-pointer"
      onClick={handleScreenClick}
    >
      {/* Video - Full Screen */}
      <video
        ref={videoRef}
        src="/β版　冒頭レベルテスト動画 (2).mp4"
        autoPlay
        playsInline
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
}

export default function DemoPage() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
      <DemoContent />
    </Suspense>
  );
}
