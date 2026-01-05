'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Sidebar Component (shared with other pages)
function Sidebar({ activePage = 'home' }: { activePage?: 'home' | 'courses' | 'events' | 'history' | 'profile' }) {
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

export default function EventApplyPage() {
  const router = useRouter();
  // 会員登録済み情報を初期値として設定（デモ用）
  const [formData, setFormData] = useState({
    phone: '090-1234-5678',
    university: '東京大学',
    graduationYear: '2027年卒',
    department: '工学部 情報工学科',
    availability: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // デモ用：少し待ってから完了ページへ遷移
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push('/demo/events/1/complete');
  };

  const isFormValid = formData.phone && formData.university && formData.department;

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar activePage="events" />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Back Link */}
          <Link href="/demo/events/1" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>イベント詳細に戻る</span>
          </Link>

          {/* Event Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src="/【β版】FastPass素材 (1).png"
                alt="FastPass"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              />
              <div>
                <p className="text-sm text-gray-500 mb-1">申込イベント</p>
                <h2 className="font-bold text-gray-800 text-sm sm:text-base">
                  【27卒対象】キャリアアドバイザーとの個別面談
                </h2>
                <p className="text-sm text-[#4D5CEC] mt-1">1月5日(月) 13:00〜14:00</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              追加情報の入力
            </h1>
            <p className="text-gray-500 text-sm mb-6">
              イベント参加に必要な情報を入力してください。既に登録済みの情報は自動で入力されています。
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 電話番号 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="090-1234-5678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none transition-all"
                  required
                />
                <p className="text-xs text-gray-400 mt-1">緊急連絡用に使用します</p>
              </div>

              {/* 大学名 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  大学名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  placeholder="例：東京大学"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* 学部・学科 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  学部・学科 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="例：工学部 情報工学科"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* 卒業年度 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  卒業予定年度
                </label>
                <select
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="2026年卒">2026年卒</option>
                  <option value="2027年卒">2027年卒</option>
                  <option value="2028年卒">2028年卒</option>
                </select>
              </div>

              {/* 相談したい内容（任意） */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  相談したい内容（任意）
                </label>
                <textarea
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="例：自分に合う業界を知りたい、ES添削をしてほしい、など"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* 注意事項 */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-medium text-yellow-800 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  ご注意ください
                </h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>・申込後のキャンセルは、開催日の前日までにご連絡ください</li>
                  <li>・当日の無断欠席が続く場合、今後のイベント参加をお断りする場合があります</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-8 rounded-2xl font-bold text-white transition-all ${
                  isFormValid && !isSubmitting
                    ? 'bg-[#1CB0F6] hover:bg-[#1A9FE0] shadow-[0_4px_0_0_#1A9FE0] hover:shadow-[0_2px_0_0_#1A9FE0] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    送信中...
                  </span>
                ) : (
                  '申込を確定する'
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
