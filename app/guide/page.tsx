"use client";

import Link from "next/link";
import { useState } from "react";

export default function GuidePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const steps = [
    {
      id: 1,
      title: "FastPassへようこそ！",
      subtitle: "就活を効率化するAIサービス",
      description: "FastPassは、キャリア相談AI・面接練習AI・企業マッチングを通じて、あなたの就活をサポートします。",
      image: "/スクリーンショット 2025-12-08 18.49.19.png",
    },
    {
      id: 2,
      title: "キャリア相談AI",
      subtitle: "あなたに合う業界が見つかる",
      description: "AIが対話であなたの経験を深掘りし、相性の良い業界や社風を「理由付き」で提案します。",
      image: "/guide-step2.png",
    },
    {
      id: 3,
      title: "AI面接練習",
      subtitle: "難関企業の過去問に挑戦",
      description: "音声でも筆記でも、本番さながらの実践的なAI面接で練習できます。",
      image: "/guide-step3.png",
    },
    {
      id: 4,
      title: "企業別対策",
      subtitle: '"刺さる"伝え方を練習',
      description: "企業ごとの評価基準を分析し、あなたの経験をどう語ると刺さるかを提示します。",
      image: "/guide-step4.png",
    },
    {
      id: 5,
      title: "優秀者の回答を閲覧",
      subtitle: "ランキング上位者から学ぶ",
      description: "各お題で上位にランクインした学生の実際の回答を見ながら、自分の回答を磨けます。",
      image: "/guide-step5.png",
    },
    {
      id: 6,
      title: "特別オファー",
      subtitle: "志望領域×スコアでマッチング",
      description: "AI面接の結果から、あなたにマッチした企業だけからスカウトが届きます。",
      image: "/guide-step6.png",
    },
  ];

  const currentStepData = steps[currentStep - 1];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    window.location.href = "https://ai-shukatsu.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="px-4 py-4 flex justify-between items-center">
        {currentStep > 1 ? (
          <button
            onClick={handlePrev}
            className="text-[#4D5CEC] text-sm font-medium hover:text-[#3D4CDC]"
          >
            ← 戻る
          </button>
        ) : (
          <Link href="/" className="text-[#4D5CEC] text-sm font-medium hover:text-[#3D4CDC]">
            ← トップへ
          </Link>
        )}
        <button
          onClick={handleSkip}
          className="text-[#4D5CEC] text-sm font-medium hover:text-[#3D4CDC]"
        >
          スキップ
        </button>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="flex gap-1.5">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                index + 1 <= currentStep ? "bg-[#4D5CEC]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4">
        {/* Image */}
        <div className="w-full max-w-3xl mb-4">
          <div className="aspect-[3/2] bg-white rounded-3xl shadow-lg overflow-hidden">
            <img
              src={currentStepData.image}
              alt={currentStepData.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-md mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {currentStepData.title}
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            {currentStepData.description}
          </p>
        </div>
      </main>

      {/* Navigation */}
      <footer className="px-6 py-8">
        {currentStep === totalSteps ? (
          <a
            href="https://ai-shukatsu.com"
            className="block w-full py-4 bg-[#4D5CEC] text-white text-center font-bold rounded-xl hover:bg-[#3D4CDC] transition-colors"
          >
            FastPassを始める
          </a>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-[#4D5CEC] text-white font-bold rounded-xl hover:bg-[#3D4CDC] transition-colors"
          >
            次へ
          </button>
        )}
      </footer>
    </div>
  );
}
