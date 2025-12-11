"use client";

import { useState } from "react";
import Link from "next/link";

// Sidebar Component
function Sidebar() {
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
      <nav className="flex-1 px-4">
        <Link
          href="/companies"
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
          style={{ backgroundColor: '#E8E3FE', color: '#934FFC' }}
        >
          <img
            src="/サイドバー_ホーム_タップ時 (1).png"
            alt="ホーム"
            className="w-6 h-6"
          />
          <span className="font-medium">ホーム</span>
        </Link>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 mb-2 overflow-hidden">
            <img
              src="/S__222806024.jpg"
              alt="プロフィール画像"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-700 mb-2">LogicalTiger2025</span>
          <button className="px-4 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            プロフィール
          </button>
        </div>
      </div>
    </aside>
  );
}

export default function InterviewPrepPage() {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [interruptChecked, setInterruptChecked] = useState(false);

  const canStart = privacyChecked && interruptChecked;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area - offset for sidebar on desktop */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="px-4 py-4">
            <Link
              href="/demo/sumitomo-realty"
              className="text-[#4D5CEC] text-sm font-medium hover:text-[#3D4CDC]"
            >
              ← 質問一覧へ戻る
            </Link>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              面接を開始する前に
            </h1>
            <p className="text-gray-500">
              以下の内容を確認してから面接を開始してください
            </p>
          </div>

          {/* Question Info */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                Level 1
              </span>
              <span className="text-sm text-gray-500">想定時間 8分</span>
            </div>
            <h2 className="text-lg font-bold text-gray-900">
              自己紹介をしてください。
            </h2>
          </div>

          {/* Check Items */}
          <div className="space-y-4 mb-8">
            {/* Privacy Check */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">プライバシー保護について</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    回答内容は他のユーザーのランキングに表示される場合があります。<br />
                    <span className="text-red-500 font-medium">本名・大学名を回答に含めないでください。</span>
                  </p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyChecked}
                      onChange={(e) => setPrivacyChecked(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#4D5CEC] focus:ring-[#4D5CEC]"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      本名・大学名を回答に含めないことを理解しました
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Interrupt Check */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">面接の中断について</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    面接中にタブを切り替えたり、画面を閉じると面接は中断されます。<br />
                    <span className="text-orange-500 font-medium">途中から再開することはできません（最初からやり直し）</span>
                  </p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={interruptChecked}
                      onChange={(e) => setInterruptChecked(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#4D5CEC] focus:ring-[#4D5CEC]"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      面接を中断すると最初からやり直しになることを理解しました
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Environment Info (No checkbox) */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">環境確認</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      カメラ・マイクの許可が必要です
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      静かな場所で受けてください
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      安定したネット環境を推奨します
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <Link
              href="/interview-result"
              className={`inline-block px-10 py-4 rounded-xl font-bold text-lg transition-all ${
                canStart
                  ? "bg-[#4D5CEC] text-white hover:bg-[#3D4CDC] cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
              }`}
            >
              面接を開始する
            </Link>
            {!canStart && (
              <p className="text-sm text-gray-500 mt-3">
                上記2つの項目にチェックを入れてください
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
