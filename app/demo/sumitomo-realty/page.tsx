"use client";

import Link from "next/link";

type Question = {
  title: string;
  time: string;
  status: "completed" | "in_progress" | "locked";
  score?: number;
};

export default function SumitomoRealtyPage() {
  const companyInfo = {
    name: "住友不動産",
    description:
      "オフィスビル賃貸で都内No.1の基盤を持つ、財閥系総合デベロッパー。「光景になる、仕事。」を掲げ、大規模な都市再開発を手掛ける。実力主義の社風で、若手から大きな裁量権を持つ。",
    keywords: [
      "主力事業: オフィスビル賃貸（都内No.1）、分譲マンション（シティタワー）",
      "代表的プロジェクト: 六本木グランドタワー、羽田エアポートガーデン、有明ガーデン",
      "求める人物像: 高い目標を掲げ、泥臭く完遂できる「現場力」のある人材",
    ],
  };

  const level1Questions: Question[] = [
    { title: "1分間で自己紹介をしてください", time: "16分", status: "completed", score: 72 },
    { title: "あなたが大学で学んでいる内容を教えてください", time: "12分", status: "completed", score: 85 },
    { title: "あなたの強みを、具体的なエピソードとともに教えてください", time: "15分", status: "completed", score: 68 },
    { title: "あなたの弱みと、その克服に向けて取り組んでいることを教えてください", time: "14分", status: "in_progress" },
    { title: "学生時代に最も力を入れたことは何ですか？", time: "18分", status: "locked" },
    { title: "リーダーシップを発揮した経験を教えてください", time: "15分", status: "locked" },
    { title: "最も困難だった経験と、その乗り越え方を教えてください", time: "16分", status: "locked" },
    { title: "個人またはチームで\"やり切った\"経験を教えてください", time: "15分", status: "locked" },
    { title: "あなたが苦手だと感じるタイプの人と、その理由を教えてください", time: "12分", status: "locked" },
    { title: "社会人として大切にしたい価値観を教えてください", time: "10分", status: "locked" },
    { title: "キャリアプランと、その理由を教えてください", time: "14分", status: "locked" },
    { title: "大学生活を振り返って何点ですか？また、残りの学生生活でどこまで上げられそうですか？", time: "12分", status: "locked" },
    { title: "大学生が1年生のうちから就活を意識することに賛成ですか？反対ですか？", time: "10分", status: "locked" },
    { title: "逆質問（面接官に聞きたいことはありますか？）", time: "8分", status: "locked" },
  ];

  const level2Questions: Question[] = [
    { title: "なぜこの業界を志望しているのですか？", time: "15分", status: "locked" },
    { title: "就職活動の軸と、弊社がその軸に合っている理由を教えてください", time: "16分", status: "locked" },
    { title: "この業界の中で、弊社を第一志望とする理由を教えてください", time: "14分", status: "locked" },
    { title: "弊社インターンを志望する理由を教えてください", time: "12分", status: "locked" },
    { title: "他社の選考状況と、弊社のこの業界内での志望順位を教えてください", time: "10分", status: "locked" },
    { title: "最近この業界で気になったニュースと、その理由を教えてください", time: "14分", status: "locked" },
    { title: "あなたが\"好きな街\"を挙げ、その魅力と改善点を教えてください", time: "15分", status: "locked" },
    { title: "不動産／空間の新しい活用方法を提案してください", time: "18分", status: "locked" },
    { title: "同業他社で魅力を感じる物件があれば教えてください", time: "12分", status: "locked" },
    { title: "弊社に対して抱いた印象を教えてください", time: "10分", status: "locked" },
  ];

  const level3Questions: Question[] = [
    { title: "弊社の\"強み\"を、あなたの言葉で説明してください", time: "15分", status: "locked" },
    { title: "弊社の\"弱み\"と、今後注力すべき領域はどこだと思いますか？", time: "16分", status: "locked" },
    { title: "弊社の好きな物件を挙げ、その魅力を説明してください", time: "14分", status: "locked" },
    { title: "弊社の物件にはどんな特徴があると感じますか？", time: "12分", status: "locked" },
    { title: "あなたが弊社でどのように貢献できるか、具体的に教えてください", time: "15分", status: "locked" },
    { title: "入社後に携わりたい事業と、その理由を教えてください", time: "14分", status: "locked" },
    { title: "あなたの地域にある弊社物件を挙げ、その良い点と課題を教えてください", time: "16分", status: "locked" },
    { title: "インド事業の広大な土地がある場合、あなたならどんな開発を行いますか？", time: "20分", status: "locked" },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-yellow-500";
    if (score >= 70) return "text-purple-500";
    if (score >= 55) return "text-blue-500";
    return "text-gray-500";
  };

  const getScoreBg = (score: number) => {
    if (score >= 85) return "bg-yellow-50 border-yellow-200";
    if (score >= 70) return "bg-purple-50 border-purple-200";
    if (score >= 55) return "bg-blue-50 border-blue-200";
    return "bg-gray-50 border-gray-200";
  };

  const renderQuestionCard = (question: Question, index: number, levelColor: string, levelBg: string, levelHover: string) => {
    const isLocked = question.status === "locked";
    const isCompleted = question.status === "completed";
    const isInProgress = question.status === "in_progress";

    return (
      <Link
        key={index}
        href={isLocked ? "#" : "/interview-result"}
        className={`block p-4 rounded-xl border-2 transition-all duration-200 ${
          isLocked
            ? "bg-gray-50 border-gray-100 opacity-60 cursor-not-allowed"
            : isCompleted
            ? `${getScoreBg(question.score!)} hover:shadow-md`
            : `bg-white border-gray-200 hover:${levelBg} hover:border-${levelColor}-300 hover:shadow-md`
        }`}
        onClick={(e) => isLocked && e.preventDefault()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Number Badge */}
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                isLocked
                  ? "bg-gray-200 text-gray-400"
                  : isCompleted
                  ? `bg-${levelColor}-500 text-white`
                  : `bg-${levelColor}-100 text-${levelColor}-600`
              }`}
            >
              {isLocked ? "🔒" : index + 1}
            </div>

            {/* Question Content */}
            <div className="flex-1 min-w-0">
              <h3
                className={`font-medium leading-snug ${
                  isLocked ? "text-gray-400" : "text-gray-900"
                }`}
              >
                {question.title}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isLocked
                      ? "bg-gray-100 text-gray-400"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  想定 {question.time}
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

          {/* Right Side - Score or Arrow */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {isCompleted && question.score && (
              <div className="text-right">
                <div className={`text-2xl font-bold ${getScoreColor(question.score)}`}>
                  {question.score}
                </div>
                <div className="text-xs text-gray-400">点</div>
              </div>
            )}
            {!isLocked && (
              <span
                className={`text-xl ${
                  isCompleted ? "text-gray-300" : `text-${levelColor}-400`
                } group-hover:translate-x-1 transition-transform`}
              >
                →
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  };

  const completedCount = (questions: Question[]) =>
    questions.filter((q) => q.status === "completed").length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#4D5CEC] text-sm font-medium hover:text-[#3D4CDC]"
          >
            ← トップへ戻る
          </Link>
          <span className="text-sm text-gray-500">デモページ</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Company Header */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {companyInfo.name}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            {companyInfo.description}
          </p>

          {/* Keywords Section */}
          <div className="bg-blue-50 rounded-xl p-4">
            <h2 className="text-sm font-bold text-blue-700 mb-3">
              面接で使える！重要キーワード・事業データ
            </h2>
            <ul className="space-y-2">
              {companyInfo.keywords.map((keyword, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Progress Overview */}
        <section className="bg-gradient-to-r from-[#4D5CEC] to-[#7f4dec] rounded-2xl shadow-sm p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold mb-1">あなたの進捗</h2>
              <p className="text-white/80 text-sm">全32問中 3問クリア</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">9%</div>
              <div className="text-white/80 text-sm">完了</div>
            </div>
          </div>
          <div className="mt-4 h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: "9%" }}
            />
          </div>
        </section>

        {/* Level 1 Questions */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">L1</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Level 1：どの企業でも出る基礎質問
                </h2>
                <p className="text-sm text-gray-500">
                  {completedCount(level1Questions)}/{level1Questions.length}問クリア
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{
                    width: `${(completedCount(level1Questions) / level1Questions.length) * 100}%`,
                  }}
                />
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {Math.round((completedCount(level1Questions) / level1Questions.length) * 100)}%
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {level1Questions.map((question, index) =>
              renderQuestionCard(question, index, "blue", "blue-50", "blue-50")
            )}
          </div>
        </section>

        {/* Level 2 Questions */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">L2</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Level 2：業界理解が問われる質問
                </h2>
                <p className="text-sm text-gray-500">
                  {completedCount(level2Questions)}/{level2Questions.length}問クリア
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{
                    width: `${(completedCount(level2Questions) / level2Questions.length) * 100}%`,
                  }}
                />
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {Math.round((completedCount(level2Questions) / level2Questions.length) * 100)}%
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {level2Questions.map((question, index) =>
              renderQuestionCard(question, index, "green", "green-50", "green-50")
            )}
          </div>
        </section>

        {/* Level 3 Questions */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">L3</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Level 3：企業特有の質問
                </h2>
                <p className="text-sm text-gray-500">
                  {completedCount(level3Questions)}/{level3Questions.length}問クリア
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{
                    width: `${(completedCount(level3Questions) / level3Questions.length) * 100}%`,
                  }}
                />
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {Math.round((completedCount(level3Questions) / level3Questions.length) * 100)}%
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {level3Questions.map((question, index) =>
              renderQuestionCard(question, index, "red", "red-50", "red-50")
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
  );
}
