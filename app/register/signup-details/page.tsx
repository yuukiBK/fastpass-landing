'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { setCurrentStep, saveDetailInfo, getRegistrationData, completeStep } from '@/lib/registration-store';

export default function SignupDetailsPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // フォーム状態
  const [careerDirection, setCareerDirection] = useState<string | null>(null);
  const [education, setEducation] = useState<string | null>(null);
  const [university, setUniversity] = useState('');
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [graduationMonth, setGraduationMonth] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    setCurrentStep('signup-details');

    // 保存済みの詳細情報があれば復元
    const data = getRegistrationData();
    if (data.detailInfo) {
      if (data.detailInfo.careerDirection) setCareerDirection(data.detailInfo.careerDirection);
      if (data.detailInfo.education) setEducation(data.detailInfo.education);
      if (data.detailInfo.university) setUniversity(data.detailInfo.university);
      if (data.detailInfo.faculty) setFaculty(data.detailInfo.faculty);
      if (data.detailInfo.department) setDepartment(data.detailInfo.department);
      if (data.detailInfo.graduationYear) setGraduationYear(data.detailInfo.graduationYear);
      if (data.detailInfo.graduationMonth) setGraduationMonth(data.detailInfo.graduationMonth);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleLogin = () => {
    router.push('/register/signup');
  };

  const handleNext = () => {
    if (isFormValid) {
      // 詳細情報を保存
      saveDetailInfo({
        careerDirection: careerDirection || undefined,
        education: education || undefined,
        university,
        faculty,
        department,
        graduationYear,
        graduationMonth,
      });
      completeStep('signup-details');
      // アカウント作成処理 → LINEログイン画面へ
      router.push('/register/line-login');
    }
  };

  // バリデーション
  const isFormValid = careerDirection && education && university && faculty && graduationYear && graduationMonth;

  // 卒業予定年の選択肢（2024年〜2030年）
  const years = Array.from({ length: 7 }, (_, i) => 2024 + i);
  // 月の選択肢
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-10 px-6 py-5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          {/* 戻るボタン（左上） */}
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* ログインボタン（右上） */}
          <button
            onClick={handleLogin}
            className="text-[#4D5CEC] font-bold py-2 px-5 border-2 border-[#4D5CEC] rounded-2xl hover:bg-[#4D5CEC] hover:text-white transition-colors"
          >
            ログイン
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 pt-24 pb-8 overflow-y-auto">
        {/* Title */}
        <h1
          className={`text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          あなたについて教えてください
        </h1>

        {/* Form */}
        <div
          className={`w-full max-w-md space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          {/* 志望する職種の方向性 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">志望する職種の方向性</label>
            <div className="flex flex-col gap-2">
              {[
                { id: 'business', label: 'ビジネス職' },
                { id: 'engineer', label: 'エンジニア職・研究職' },
                { id: 'both', label: 'どちらも検討している' },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setCareerDirection(option.id)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all border-2 text-left ${
                    careerDirection === option.id
                      ? 'border-[#4D5CEC] bg-[#EEF0FD] text-[#4D5CEC]'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* あなたの学歴 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">あなたの学歴</label>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'bachelor', label: '学士' },
                { id: 'master', label: '修士' },
                { id: 'doctor', label: '博士' },
                { id: 'mba', label: 'MBA' },
                { id: 'kosen', label: '高専' },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setEducation(option.id)}
                  className={`py-3 px-5 rounded-xl font-semibold transition-all border-2 ${
                    education === option.id
                      ? 'border-[#4D5CEC] bg-[#EEF0FD] text-[#4D5CEC]'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 大学を選択 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">大学を選択</label>
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="大学名を入力"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors"
            />
          </div>

          {/* 学部を選択 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">学部を選択</label>
            <input
              type="text"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              placeholder="学部名を入力"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors"
            />
          </div>

          {/* 学科を選択 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">学科を選択（任意）</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="学科名を入力"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors"
            />
          </div>

          {/* 卒業予定 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">卒業予定</label>
            <div className="flex gap-3">
              {/* 年 */}
              <div className="flex-1">
                <select
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                  className={`w-full px-3 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors appearance-none bg-white ${!graduationYear ? 'text-gray-400' : 'text-gray-800'}`}
                >
                  <option value="">年を選択</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}年</option>
                  ))}
                </select>
              </div>
              {/* 月 */}
              <div className="w-28">
                <select
                  value={graduationMonth}
                  onChange={(e) => setGraduationMonth(e.target.value)}
                  className={`w-full px-3 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors appearance-none bg-white ${!graduationMonth ? 'text-gray-400' : 'text-gray-800'}`}
                >
                  <option value="">月を選択</option>
                  {months.map((month) => (
                    <option key={month} value={month}>{month}月</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div
          className={`w-full max-w-md mt-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <button
            onClick={handleNext}
            disabled={!isFormValid}
            className={`w-full font-bold py-4 px-8 rounded-2xl transition-all ${
              isFormValid
                ? 'bg-[#4D5CEC] hover:bg-[#3949AB] text-white shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-[0_4px_0_0_#d1d5db]'
            }`}
          >
            登録を完了する
          </button>
        </div>

        {/* Terms */}
        <p
          className={`text-gray-400 text-xs mt-6 text-center max-w-sm leading-relaxed ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          登録するとFastPassの<span className="text-[#4D5CEC]">利用規約</span>と<span className="text-[#4D5CEC]">プライバシーポリシー</span>に同意したことになります。
        </p>
      </main>
    </div>
  );
}
