'use client';

import Link from 'next/link';
import { useState } from 'react';

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
              src="/β版　アニメーション.png"
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

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('/β版　アニメーション.png');

  // 選択可能なアバター一覧
  const avatarOptions = [
    '/β版　アニメーション.png',
    '/S__222806024.jpg',
    '/【β版】FastPass素材 (1).png',
  ];

  // デモ用のプロフィールデータ
  const [profile, setProfile] = useState({
    name: '後藤 航',
    userId: 'kou_goto',
    university: '東京大学',
    faculty: '工学部 情報工学科',
    graduationYear: '2027年卒',
    email: 'kou.goto@example.com',
    phone: '090-1234-5678',
    joinDate: '2024年12月',
    industries: ['戦略コンサル', '総合商社', 'IT・通信'],
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar activePage="profile" />

      {/* Avatar Picker Modal */}
      {showAvatarPicker && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-50"
            onClick={() => setShowAvatarPicker(false)}
          />
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl p-6 shadow-xl w-[320px]">
            <h3 className="text-lg font-bold text-gray-800 mb-4">アイコンを選択</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {avatarOptions.map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedAvatar(avatar);
                    setShowAvatarPicker(false);
                  }}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedAvatar === avatar
                      ? 'border-[#1CB0F6] ring-2 ring-[#1CB0F6]/30'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={avatar}
                    alt={`アバター ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowAvatarPicker(false)}
              className="w-full py-3 bg-gray-100 text-gray-600 font-medium rounded-xl hover:bg-gray-200 transition-colors"
            >
              キャンセル
            </button>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
          {/* Profile Card */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
            {/* Avatar Banner - Duolingo Style */}
            <div className="relative bg-gray-100 h-40 flex items-center justify-center">
              <img
                src={selectedAvatar}
                alt="プロフィール画像"
                className="h-32 w-auto object-contain"
              />
              {/* Edit Button */}
              <button
                onClick={() => setShowAvatarPicker(true)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-600 shadow-sm hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>

            {/* Profile Info */}
            <div className="p-6">

            {/* Name & ID */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">{profile.name}</h1>
              <p className="text-gray-500">@{profile.userId}</p>
              <p className="text-sm text-gray-400 mt-1">{profile.joinDate}に参加</p>
            </div>

            {/* University Info */}
            <div className="text-center mb-6">
              <p className="text-gray-700 font-medium">{profile.university}</p>
              <p className="text-gray-600">{profile.faculty}</p>
              <span className="inline-block mt-2 px-4 py-1 bg-[#E8EBFF] text-[#4D5CEC] rounded-full text-sm font-medium">
                {profile.graduationYear}
              </span>
            </div>

            {/* Desired Industries */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">志望業界</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {profile.industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">基本情報</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-[#1CB0F6] font-medium text-sm hover:text-[#1A9FE0] transition-colors"
              >
                {isEditing ? '保存する' : '編集する'}
              </button>
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500">氏名</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="text-right text-gray-800 font-medium border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none"
                  />
                ) : (
                  <span className="text-gray-800 font-medium">{profile.name}</span>
                )}
              </div>

              {/* University */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500">大学</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.university}
                    onChange={(e) => setProfile({ ...profile, university: e.target.value })}
                    className="text-right text-gray-800 font-medium border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none"
                  />
                ) : (
                  <span className="text-gray-800 font-medium">{profile.university}</span>
                )}
              </div>

              {/* Faculty */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500">学部・学科</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.faculty}
                    onChange={(e) => setProfile({ ...profile, faculty: e.target.value })}
                    className="text-right text-gray-800 font-medium border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none"
                  />
                ) : (
                  <span className="text-gray-800 font-medium">{profile.faculty}</span>
                )}
              </div>

              {/* Graduation Year */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500">卒業予定年度</span>
                {isEditing ? (
                  <select
                    value={profile.graduationYear}
                    onChange={(e) => setProfile({ ...profile, graduationYear: e.target.value })}
                    className="text-right text-gray-800 font-medium border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none bg-white"
                  >
                    <option value="2026年卒">2026年卒</option>
                    <option value="2027年卒">2027年卒</option>
                    <option value="2028年卒">2028年卒</option>
                  </select>
                ) : (
                  <span className="text-gray-800 font-medium">{profile.graduationYear}</span>
                )}
              </div>

              {/* Email */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500">メールアドレス</span>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="text-right text-gray-800 font-medium border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none"
                  />
                ) : (
                  <span className="text-gray-800 font-medium">{profile.email}</span>
                )}
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-500">電話番号</span>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="text-right text-gray-800 font-medium border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-[#1CB0F6] focus:border-transparent outline-none"
                  />
                ) : (
                  <span className="text-gray-800 font-medium">{profile.phone}</span>
                )}
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">アカウント設定</h2>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-medium">パスワードを変更</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-medium">通知設定</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-medium">プライバシー設定</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="pt-4 border-t border-gray-200 mt-4">
                <button className="w-full py-3 px-4 text-red-500 font-medium rounded-xl hover:bg-red-50 transition-colors">
                  ログアウト
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
