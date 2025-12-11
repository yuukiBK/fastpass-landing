"use client";

import Link from "next/link";

type Question = {
  title: string;
  time: string;
  status: "completed" | "in_progress" | "pending";
};

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

export default function DeveloperRealtyPage() {
  const industryInfo = {
    name: "デベロッパー・不動産業界",
    description:
      "土地を取得し、オフィスビル・商業施設・マンションなどの開発を行う業界。街づくりを通じて社会に大きなインパクトを与えられる点が魅力。三井不動産・三菱地所・住友不動産の「御三家」を筆頭に、各社が独自の強みで競争。",
    keywords: [
      "主力事業: オフィスビル賃貸、分譲マンション、商業施設開発、都市再開発",
      "業界トレンド: スマートシティ構想、環境配慮型建築（ZEB/ZEH）、海外展開",
      "求める人物像: 長期視点で粘り強く取り組める人、多様な関係者を巻き込める調整力",
    ],
  };

  const level1Questions: Question[] = [
    { title: "自己紹介をしてください。", time: "8分", status: "pending" },
    { title: "学生時代に最も力を入れた経験を教えてください。", time: "12分", status: "pending" },
    { title: "何か聞きたいことはありますか？（逆質問）", time: "8分", status: "pending" },
    { title: "あなたの強みを具体的なエピソードとともに教えてください。", time: "11分", status: "pending" },
    { title: "あなたの弱みと、その克服に向けた取り組みを教えてください。", time: "10分", status: "pending" },
    { title: "なぜデベロッパー業界を志望しているのですか？", time: "10分", status: "pending" },
    { title: "なぜデベロッパー業界の中でも当社を志望しているのですか？", time: "11分", status: "pending" },
    { title: "インターン参加を志望する理由と、そこで得たい学びを教えてください。", time: "10分", status: "pending" },
    { title: "当社に対して抱いている印象を教えてください。", time: "9分", status: "pending" },
    { title: "入社後に携わりたい事業と、その理由を教えてください。", time: "10分", status: "pending" },
    { title: "あなたが好きな街を挙げ、その魅力と改善点を教えてください。", time: "11分", status: "pending" },
    { title: "好きな空間／場所を挙げ、その理由を教えてください。", time: "9分", status: "pending" },
    { title: "あなたが印象に残っているデベロッパーの物件を挙げ、その特徴や魅力を教えてください。", time: "10分", status: "pending" },
    { title: "リーダーシップを発揮した経験を教えてください。", time: "11分", status: "pending" },
    { title: "あなたのこれまでで最も苦しかった経験とその乗り越え方について教えてください。", time: "12分", status: "pending" },
    { title: "どんな社会人になりたいと考えていますか？大切にしたい価値観を教えてください。", time: "10分", status: "pending" },
    { title: "価値観が異なる人と出会ったとき、どのように向き合いますか？", time: "10分", status: "pending" },
    { title: "上司と意見が合わない場合、どのように対応しますか？", time: "10分", status: "pending" },
    { title: "あなたの尊敬する人と、その理由を教えてください。", time: "9分", status: "pending" },
    { title: "新規事業創出のため、不動産・空間の新しい活用方法を提案してください。", time: "12分", status: "pending" },
    { title: "もし自由にお金が使えるとしたら、どんな不動産プロジェクトを行いますか？", time: "12分", status: "pending" },
  ];

  const level2Questions: Question[] = [
    { title: "他社の選考状況と、当社の志望順位を教えてください。", time: "8分", status: "pending" },
    { title: "当社の強みをあなたの言葉で説明してください。", time: "10分", status: "pending" },
    { title: "当社の弱みと、今後注力すべき領域はどこだと思いますか？", time: "12分", status: "pending" },
    { title: "あなたのキャリアプランを教えてください。", time: "10分", status: "pending" },
    { title: "就職活動の軸を教えてください。", time: "9分", status: "pending" },
    { title: "あなたがデベロッパーとして価値を発揮できる点を教えてください。", time: "11分", status: "pending" },
    { title: "あなたの地域にある当社の物件を挙げ、良い点と改善点を教えてください。", time: "11分", status: "pending" },
    { title: "行きたくなるオフィスをつくるために必要な要素は何だと思いますか？", time: "11分", status: "pending" },
    { title: "経験豊富なメンバーを率いる立場になった場合、どのようにチームをまとめますか？", time: "12分", status: "pending" },
  ];

  const level3Questions: Question[] = [
    { title: "最近気になったニュースと、その理由を教えてください。", time: "10分", status: "pending" },
    { title: "苦手な人のタイプと、その理由を教えてください。", time: "9分", status: "pending" },
    { title: "あなたの強みを一言で表し、それを入社後どう活かしますか？", time: "10分", status: "pending" },
    { title: "大企業は\"歯車\"になることだが、どんな歯車になりたいですか？", time: "11分", status: "pending" },
    { title: "海外赴任は可能ですか？", time: "8分", status: "pending" },
    { title: "親の教育で不満に思っている点はありますか？", time: "10分", status: "pending" },
    { title: "自分を漢字一文字で表すと何ですか？", time: "8分", status: "pending" },
    { title: "気が強いタイプか、弱いタイプか？", time: "8分", status: "pending" },
    { title: "物事を要領よく進めるタイプか、コツコツ進めるタイプか？", time: "8分", status: "pending" },
    { title: "60歳になったときに当社でどんな姿でいたいですか？", time: "11分", status: "pending" },
    { title: "趣味・特技を教えてください。", time: "8分", status: "pending" },
    { title: "他社インターンの良かった点・悪かった点を教えてください。", time: "10分", status: "pending" },
    { title: "同業他社の好きな物件と、その理由を教えてください。", time: "10分", status: "pending" },
  ];

  const renderQuestionCard = (question: Question, index: number, levelColor: string, levelBg: string) => {
    const isCompleted = question.status === "completed";
    const isInProgress = question.status === "in_progress";

    return (
      <Link
        key={index}
        href="/demo/interview-prep"
        className={`block p-4 rounded-xl border-2 transition-all duration-200 ${
          isCompleted
            ? "bg-green-50 border-green-200 hover:shadow-md"
            : `bg-white border-gray-200 hover:${levelBg} hover:border-${levelColor}-300 hover:shadow-md`
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Number Badge */}
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                isCompleted
                  ? `bg-${levelColor}-500 text-white`
                  : `bg-${levelColor}-100 text-${levelColor}-600`
              }`}
            >
              {index + 1}
            </div>

            {/* Question Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium leading-snug text-gray-900">
                {question.title}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                  想定時間 {question.time}
                </span>
                {isInProgress && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 font-medium">
                    挑戦中
                  </span>
                )}
                {isCompleted && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-600 font-medium">
                    クリア済み
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Arrow */}
          <span
            className={`text-xl flex-shrink-0 ${
              isCompleted ? "text-gray-300" : `text-${levelColor}-400`
            } group-hover:translate-x-1 transition-transform`}
          >
            →
          </span>
        </div>
      </Link>
    );
  };

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
              href="/companies"
              className="text-[#4D5CEC] text-sm font-medium hover:text-[#3D4CDC]"
            >
              ← 対応企業一覧へ戻る
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Industry Header - Blue Card Design */}
        <section className="rounded-2xl overflow-hidden mb-6" style={{ backgroundColor: '#4D5CEC' }}>
          {/* Top Section */}
          <div className="p-6 pb-4">
            <h1 className="text-2xl font-bold text-white mb-3">
              デベロッパー・不動産業界
            </h1>
            <p className="text-white/90 leading-relaxed">
              土地を取得し、オフィスビル・商業施設・マンションなどの開発を行う業界。街づくりを通じて社会に大きなインパクトを与えられる点が魅力。三井不動産・三菱地所・住友不動産の「御三家」を筆頭に、各社が独自の強みで競争。
            </p>
          </div>

          {/* Bottom Section - Keywords */}
          <div className="bg-white/10 px-6 py-4">
            <h2 className="text-sm font-bold text-white mb-3">
              面接で使える！重要キーワード・事業データ
            </h2>
            <ul className="space-y-1">
              <li className="text-sm text-white/90">・主力事業: オフィスビル賃貸、分譲マンション、商業施設開発、都市再開発</li>
              <li className="text-sm text-white/90">・業界トレンド: スマートシティ構想、環境配慮型建築（ZEB/ZEH）、海外展開</li>
              <li className="text-sm text-white/90">・面接頻出テーマ: 「好きな街・物件」「なぜデベロッパーか」「長期視点の街づくり」</li>
            </ul>
          </div>
        </section>

        {/* Level 1 Questions */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-6">
            Level 1：インターン面接から聞かれる質問
          </h2>

          <div className="space-y-3">
            {level1Questions.map((question, index) =>
              renderQuestionCard(question, index, "blue", "blue-50")
            )}
          </div>
        </section>

        {/* Level 2 Questions */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-green-600 mb-6">
            Level 2：本選考面接から聞かれる質問
          </h2>

          <div className="space-y-3">
            {level2Questions.map((question, index) =>
              renderQuestionCard(question, index, "green", "green-50")
            )}
          </div>
        </section>

        {/* Level 3 Questions */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-red-600 mb-6">
            Level 3：最終面接から聞かれる質問
          </h2>

          <div className="space-y-3">
            {level3Questions.map((question, index) =>
              renderQuestionCard(question, index, "red", "red-50")
            )}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://ai-shukatsu.com"
            className="inline-block px-8 py-4 bg-[#4D5CEC] text-white font-bold rounded-xl hover:bg-[#3D4CDC] transition-colors"
          >
            FastPassで面接練習を始める
          </a>
        </div>
      </main>
      </div>
    </div>
  );
}
