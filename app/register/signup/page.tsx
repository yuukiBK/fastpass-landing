'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { setCurrentStep, saveBasicInfo, getRegistrationData, completeStep } from '@/lib/registration-store';

export default function SignupPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // フォーム状態
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastNameKana, setLastNameKana] = useState('');
  const [firstNameKana, setFirstNameKana] = useState('');
  const [gender, setGender] = useState<string | null>(null);
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    setCurrentStep('signup');

    // 保存済みの基本情報があれば復元
    const data = getRegistrationData();
    if (data.basicInfo) {
      if (data.basicInfo.lastName) setLastName(data.basicInfo.lastName);
      if (data.basicInfo.firstName) setFirstName(data.basicInfo.firstName);
      if (data.basicInfo.lastNameKana) setLastNameKana(data.basicInfo.lastNameKana);
      if (data.basicInfo.firstNameKana) setFirstNameKana(data.basicInfo.firstNameKana);
      if (data.basicInfo.gender) setGender(data.basicInfo.gender);
      if (data.basicInfo.birthYear) setBirthYear(data.basicInfo.birthYear);
      if (data.basicInfo.birthMonth) setBirthMonth(data.basicInfo.birthMonth);
      if (data.basicInfo.birthDay) setBirthDay(data.basicInfo.birthDay);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    router.push('/demo/dmm');
  };

  const handleLogin = () => {
    router.push('/register/signup');
  };

  const handleNext = () => {
    if (isFormValid) {
      // 基本情報を保存
      saveBasicInfo({
        lastName,
        firstName,
        lastNameKana,
        firstNameKana,
        gender: gender || undefined,
        birthYear,
        birthMonth,
        birthDay,
      });
      completeStep('signup');
      router.push('/register/signup-details');
    }
  };

  // バリデーション
  const isFormValid = lastName && firstName && lastNameKana && firstNameKana && gender && birthYear && birthMonth && birthDay;

  // 年の選択肢（1990年〜2010年）
  const years = Array.from({ length: 21 }, (_, i) => 1990 + i);
  // 月の選択肢
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  // 日の選択肢
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

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
          {/* 閉じるボタン（左上） */}
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
          基本情報を入力してください
        </h1>

        {/* Form */}
        <div
          className={`w-full max-w-md space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          {/* 氏名（漢字） */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">氏名（漢字）</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="姓"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors"
              />
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="名"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors"
              />
            </div>
          </div>

          {/* 氏名（ひらがな） */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">氏名（ひらがな）</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={lastNameKana}
                onChange={(e) => setLastNameKana(e.target.value)}
                placeholder="せい"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors"
              />
              <input
                type="text"
                value={firstNameKana}
                onChange={(e) => setFirstNameKana(e.target.value)}
                placeholder="めい"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors"
              />
            </div>
          </div>

          {/* 性別 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">性別</label>
            <div className="flex gap-3">
              {[
                { id: 'male', label: '男性' },
                { id: 'female', label: '女性' },
                { id: 'other', label: 'その他' },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setGender(option.id)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all border-2 ${
                    gender === option.id
                      ? 'border-[#4D5CEC] bg-[#EEF0FD] text-[#4D5CEC]'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 生年月日 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">生年月日</label>
            <div className="flex gap-2">
              {/* 年 */}
              <div className="flex-1">
                <select
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  className={`w-full px-3 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors appearance-none bg-white ${!birthYear ? 'text-gray-400' : 'text-gray-800'}`}
                >
                  <option value="">年</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              {/* 月 */}
              <div className="w-24">
                <select
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                  className={`w-full px-3 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors appearance-none bg-white ${!birthMonth ? 'text-gray-400' : 'text-gray-800'}`}
                >
                  <option value="">月</option>
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              {/* 日 */}
              <div className="w-24">
                <select
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                  className={`w-full px-3 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#4D5CEC] transition-colors appearance-none bg-white ${!birthDay ? 'text-gray-400' : 'text-gray-800'}`}
                >
                  <option value="">日</option>
                  {days.map((day) => (
                    <option key={day} value={day}>{day}</option>
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
            次へ
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
