'use client';

import Link from 'next/link';

export default function EventApplyCompletePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-center">
          <img
            src="/名称未設定のデザイン (71).png"
            alt="FastPass"
            className="h-8"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            申込が完了しました！
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            ご登録いただいたメールアドレスに確認メールをお送りしました。当日の参加方法などの詳細をご確認ください。
          </p>

          {/* Event Info Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left">
            <div className="flex items-start gap-4">
              <img
                src="/【β版】FastPass素材 (1).png"
                alt="FastPass"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-bold text-gray-800 mb-1">
                  キャリアアドバイザーとの個別面談
                </p>
                <p className="text-sm text-gray-600">
                  1月5日(月) 13:00〜14:00
                </p>
                <p className="text-sm text-gray-500">
                  オンライン（Google Meet）
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-left">
            <h3 className="font-medium text-blue-800 mb-2">次のステップ</h3>
            <ul className="text-sm text-blue-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                <span>確認メールに記載されたGoogle MeetのURLをブックマークしてください</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                <span>当日5分前にURLからご参加ください</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                <span>プロフィールを充実させると、より良い面談ができます</span>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Link
              href="/demo/dmm"
              className="block w-full py-4 px-8 rounded-2xl font-bold text-white bg-[#1CB0F6] hover:bg-[#1A9FE0] transition-all shadow-[0_4px_0_0_#1A9FE0] hover:shadow-[0_2px_0_0_#1A9FE0] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
            >
              ホームに戻る
            </Link>
            <Link
              href="/demo/events"
              className="block w-full py-4 px-8 rounded-2xl font-bold text-gray-600 border-2 border-gray-200 hover:bg-gray-50 transition-all"
            >
              他のイベントを見る
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
