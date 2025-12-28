'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventApplyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    phone: '',
    university: '',
    graduationYear: '2027年卒',
    department: '',
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
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/demo/events/1" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>戻る</span>
          </Link>
          <img
            src="/名称未設定のデザイン (71).png"
            alt="FastPass"
            className="h-8"
          />
          <div className="w-16"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Event Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-4">
            <img
              src="/【β版】FastPass素材 (1).png"
              alt="FastPass"
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="text-sm text-gray-500 mb-1">申込イベント</p>
              <h2 className="font-bold text-gray-800">
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
      </main>
    </div>
  );
}
