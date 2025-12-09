"use client";

import Link from "next/link";

export default function InterviewResultPage() {
  // サンプルデータ
  const questionData = {
    title: "1分間で自己紹介をしてください",
    subtitle: "面接の第一印象を決める重要な1分間",
    estimatedTime: "16分",
    difficulty: "Level 1",
  };

  const scoreData = {
    score: 72,
    passScore: 65,
    maxScore: 100,
    rank: "A",
  };

  const evaluation = {
    summary:
      "全体として論理的な構成ができており、自身の強みを具体的なエピソードで説明できています。ただし、結論部分の企業への貢献イメージがやや抽象的なため、より具体的な表現を心がけると良いでしょう。",
    goodPoints: [
      "学生時代の経験を具体的な数字を交えて説明できている点が評価できます。特にサークルでの集客200%達成という成果は印象的です。",
      "自己分析が深く、自身の強みである「巻き込み力」を一貫して伝えられています。",
    ],
    improvements: [
      "志望動機との接続がやや弱いため、なぜこの企業でその強みを活かしたいのかをより明確に伝えましょう。",
      "話すスピードがやや速く、重要なポイントが埋もれてしまう場面がありました。緩急をつけた話し方を意識しましょう。",
    ],
  };

  const criteriaScores = {
    understanding: 75,
    thinking: 80,
    action: 65,
    growth: 70,
    collaboration: 78,
  };

  const criteriaDescriptions = [
    {
      name: "課題理解力",
      key: "understanding",
      score: 75,
      definition: "問題・状況を正しく捉え、本質的な論点を整理できているか",
      comment: "質問の意図を正確に把握し、的確な回答ができています。",
    },
    {
      name: "思考力",
      key: "thinking",
      score: 80,
      definition: "考えの一貫性・論理構造の明瞭さ・判断の根拠の説明力",
      comment: "PREP法を意識した構成で、説得力のある回答ができています。",
    },
    {
      name: "行動力",
      key: "action",
      score: 65,
      definition: "目的達成のための行動量・推進力・試行錯誤のスピード",
      comment: "具体的な行動エピソードをもう少し増やすと良いでしょう。",
    },
    {
      name: "成長力",
      key: "growth",
      score: 70,
      definition: "経験からの「気づき → 学び → 次の行動」への転換力",
      comment: "経験からの学びは示せていますが、今後の展望との接続を強化しましょう。",
    },
    {
      name: "協働・巻き込み力",
      key: "collaboration",
      score: 78,
      definition: "周囲を動かす力・仲間との連携・関係構築力",
      comment: "チームでの役割を明確に説明できており、リーダーシップが伝わります。",
    },
  ];

  const rankings = [
    { rank: 1, username: "user_3a8k2", score: 95, summary: "長期インターンでの新規事業立ち上げ経験" },
    { rank: 2, username: "taka_m91", score: 92, summary: "体育会サッカー部での主将経験" },
    { rank: 3, username: "study_22x", score: 89, summary: "ゼミでの産学連携プロジェクトリーダー" },
    { rank: 4, username: "and0_k", score: 85, summary: "アルバイト先での売上改善施策" },
    { rank: 5, username: "mochi_55", score: 82, summary: "留学中の現地NPOボランティア活動" },
    { rank: 15, username: "あなた", score: 72, summary: "テニスサークル副代表でのSNS集客施策", isCurrentUser: true },
  ];

  const chatMessages = [
    {
      role: "interviewer",
      message: "それでは、1分間で自己紹介をお願いします。",
    },
    {
      role: "user",
      message:
        "はい、〇〇大学経済学部の山田太郎と申します。私の強みは「周囲を巻き込む力」です。大学ではテニスサークルの副代表として、新入生の集客に課題を感じ、SNS戦略を提案・実行しました。その結果、前年比200%の新入生獲得に成功しました。この経験から、チームで目標に向かう楽しさを学びました。御社でもこの強みを活かして貢献したいと考えています。",
      feedback: {
        good: "具体的な数字（200%）を用いて成果を示せている点が良いです。",
        improvement: "「貢献したい」の内容が抽象的です。どのような場面で活かすか具体化しましょう。",
        isHighlight: true,
      },
    },
    {
      role: "interviewer",
      message: "ありがとうございます。その「巻き込む力」を発揮する上で、最も大切にしていることは何ですか？",
    },
    {
      role: "user",
      message:
        "相手の立場に立って考えることです。SNS戦略を進める際も、まずメンバー一人ひとりの得意分野や興味を聞き、それぞれが楽しみながら取り組める役割分担を心がけました。",
      feedback: {
        good: "「相手の立場」という価値観を具体的なエピソードで補強できています。",
        improvement: "もう少し深掘りして、困難な場面でどう乗り越えたかも加えると良いでしょう。",
        isHighlight: false,
      },
    },
    {
      role: "interviewer",
      message: "チーム内で意見が対立した際は、どのように対応しましたか？",
    },
    {
      role: "user",
      message:
        "意見の対立は何度かありました。その際は、まず双方の意見をしっかり聞いた上で、共通のゴールを確認することを大切にしました。最終的には、両方の良い部分を取り入れた折衷案を提案することで、チームの納得感を得られました。",
      feedback: {
        good: "対立解消のプロセスを段階的に説明できています。",
        improvement: "具体的なエピソード（どんな対立だったか）を加えると、より説得力が増します。",
        isHighlight: false,
      },
    },
    {
      role: "interviewer",
      message: "その経験を、当社でどのように活かしたいと考えていますか？",
    },
    {
      role: "user",
      message:
        "御社のプロジェクト型の働き方において、多様なバックグラウンドを持つメンバーをまとめる場面で活かしたいです。特に、クライアントとチームの橋渡し役として、双方の意見を調整しながらプロジェクトを推進していきたいと考えています。",
      feedback: {
        good: "企業の働き方を理解した上で、具体的な役割イメージを示せています。",
        improvement: "なぜ「橋渡し役」に適性があるのか、過去の経験との接続をより明確にしましょう。",
        isHighlight: false,
      },
    },
  ];

  // ランクに応じた色を返す（緩めの基準: S: 85+, A: 70+, B: 55+, C: 40+, D: 40未満）
  const getRankColor = (rank: string) => {
    switch (rank) {
      case "S":
        return "text-yellow-500";
      case "A":
        return "text-purple-500";
      case "B":
        return "text-blue-500";
      case "C":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  // スコアからランクを計算
  const getRank = (score: number) => {
    if (score >= 85) return "S";
    if (score >= 70) return "A";
    if (score >= 55) return "B";
    if (score >= 40) return "C";
    return "D";
  };

  // 合格ラインを超えているか
  const isPassed = scoreData.score >= scoreData.passScore;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#4D5CEC] text-sm font-medium hover:text-[#3D4CDC]"
          >
            ← 戻る
          </Link>
          <h1 className="text-lg font-bold text-gray-900">AI面接結果</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Question Header */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-[#4D5CEC]/10 text-[#4D5CEC] text-sm font-medium rounded-full">
              {questionData.difficulty}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              想定時間: {questionData.estimatedTime}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {questionData.title}
          </h2>
          <p className="text-gray-600">{questionData.subtitle}</p>
        </section>

        {/* Score Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">あなたのスコア</h3>
            {isPassed && (
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full font-bold text-sm shadow-lg">
                <span className="text-lg">✓</span>
                CLEAR!
              </div>
            )}
          </div>
          <div className="flex items-center gap-6">
            {/* Score Circle with Progress Ring */}
            <div className="flex-shrink-0 relative">
              <svg className="w-36 h-36 transform -rotate-90">
                {/* Background Circle */}
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke={isPassed ? "#10b981" : "#4D5CEC"}
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${(scoreData.score / 100) * 377} 377`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-gray-900">
                  {scoreData.score}
                </span>
                <span className="text-sm text-gray-500">/ {scoreData.maxScore}</span>
              </div>
            </div>

            {/* Score Bar and Rank */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">スコア</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">ランク:</span>
                  <span
                    className={`text-3xl font-bold ${getRankColor(getRank(scoreData.score))}`}
                  >
                    {getRank(scoreData.score)}
                  </span>
                </div>
              </div>

              {/* Progress Bar with Clear Zone */}
              <div className="relative h-8 rounded-full overflow-hidden mb-2">
                {/* Background - Not Clear Zone */}
                <div
                  className="absolute left-0 top-0 h-full bg-gray-200"
                  style={{ width: `${scoreData.passScore}%` }}
                />
                {/* Clear Zone Background */}
                <div
                  className="absolute top-0 h-full bg-gradient-to-r from-green-100 to-emerald-100"
                  style={{ left: `${scoreData.passScore}%`, right: 0 }}
                />
                {/* Score Bar */}
                <div
                  className={`absolute left-0 top-0 h-full transition-all duration-500 ${
                    isPassed
                      ? "bg-gradient-to-r from-green-400 to-emerald-500"
                      : "bg-[#4D5CEC]"
                  }`}
                  style={{ width: `${scoreData.score}%` }}
                />
                {/* Pass Line */}
                <div
                  className="absolute top-0 h-full w-1 bg-green-600 z-10"
                  style={{ left: `${scoreData.passScore}%` }}
                />
                {/* Clear Label */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 text-xs font-bold text-green-700 z-10"
                  style={{ left: `${scoreData.passScore + 2}%` }}
                >
                  CLEAR
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-500">
                <span>0</span>
                <span className="text-green-600 font-medium">合格ライン: {scoreData.passScore}点</span>
                <span>{scoreData.maxScore}</span>
              </div>

              {/* Rank Legend */}
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <span className="text-yellow-500 font-medium">S: 85〜100</span>
                <span className="text-purple-500 font-medium">A: 70〜84</span>
                <span className="text-blue-500 font-medium">B: 55〜69</span>
                <span className="text-green-500 font-medium">C: 40〜54</span>
                <span className="text-gray-500 font-medium">D: 〜39</span>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">総評</h3>
          <p className="text-gray-700 leading-relaxed mb-6">{evaluation.summary}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Good Points */}
            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="text-blue-700 font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">👍</span> 良い点
              </h4>
              <ul className="space-y-3">
                {evaluation.goodPoints.map((point, index) => (
                  <li key={index} className="text-gray-700 text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Improvements */}
            <div className="bg-orange-50 rounded-xl p-4">
              <h4 className="text-orange-700 font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">💡</span> 改善点
              </h4>
              <ul className="space-y-3">
                {evaluation.improvements.map((point, index) => (
                  <li key={index} className="text-gray-700 text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Criteria Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">5項目評価</h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Radar Chart */}
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full max-w-sm">
                {/* Background Pentagon */}
                {[100, 80, 60, 40, 20].map((level, i) => (
                  <polygon
                    key={i}
                    points={generatePentagonPoints(200, 200, level * 1.5)}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}

                {/* Axis Lines */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const angle = (i * 72 - 90) * (Math.PI / 180);
                  const x = 200 + Math.cos(angle) * 150;
                  const y = 200 + Math.sin(angle) * 150;
                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Data Polygon */}
                <polygon
                  points={generateDataPoints(200, 200, [
                    criteriaScores.understanding,
                    criteriaScores.thinking,
                    criteriaScores.action,
                    criteriaScores.growth,
                    criteriaScores.collaboration,
                  ])}
                  fill="rgba(77, 92, 236, 0.3)"
                  stroke="#4D5CEC"
                  strokeWidth="2"
                />

                {/* Labels */}
                {["課題理解力", "思考力", "行動力", "成長力", "協働力"].map(
                  (label, i) => {
                    const angle = (i * 72 - 90) * (Math.PI / 180);
                    const x = 200 + Math.cos(angle) * 180;
                    const y = 200 + Math.sin(angle) * 180;
                    return (
                      <text
                        key={i}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm fill-gray-700 font-medium"
                      >
                        {label}
                      </text>
                    );
                  }
                )}
              </svg>
            </div>

            {/* Criteria Descriptions */}
            <div className="space-y-4">
              {criteriaDescriptions.map((criteria, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900">{criteria.name}</h4>
                      <span className="text-xs text-gray-900">({criteria.definition})</span>
                    </div>
                    <span className="text-[#4D5CEC] font-bold">{criteria.score}点</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2">
                    <div
                      className="h-full bg-[#4D5CEC] rounded-full"
                      style={{ width: `${criteria.score}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-700">{criteria.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ranking and Chat Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Ranking */}
          <section className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">ランキング</h3>
            <div className="space-y-3">
              {rankings.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-xl ${
                    item.isCurrentUser
                      ? "bg-[#4D5CEC]/10 border-2 border-[#4D5CEC]"
                      : "bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      item.rank <= 3
                        ? "bg-yellow-400 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-medium ${
                          item.isCurrentUser ? "text-[#4D5CEC]" : "text-gray-900"
                        }`}
                      >
                        {item.username}
                      </span>
                      <span className="text-sm text-gray-500">{item.score}点</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Chat */}
          <section className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">面接やりとり</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div key={index}>
                  {msg.role === "interviewer" ? (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden">
                        <img
                          src="/Interviewer_icon.png"
                          alt="面接官"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                        <p className="text-sm text-gray-700">{msg.message}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-end">
                      <div
                        className={`rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] ${
                          msg.feedback?.isHighlight
                            ? "bg-orange-100 border-2 border-orange-400"
                            : "bg-[#4D5CEC] text-white"
                        }`}
                      >
                        <p
                          className={`text-sm ${
                            msg.feedback?.isHighlight ? "text-gray-700" : ""
                          }`}
                        >
                          {msg.message}
                        </p>
                      </div>
                      {msg.feedback && (
                        <div className="mt-2 w-full max-w-[85%] text-xs space-y-1">
                          <p className="text-blue-600">
                            <span className="font-medium">Good: </span>
                            {msg.feedback.good}
                          </p>
                          <p className="text-orange-600">
                            <span className="font-medium">Improve: </span>
                            {msg.feedback.improvement}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/consulting"
            className="inline-block px-8 py-4 bg-[#4D5CEC] text-white font-bold rounded-xl hover:bg-[#3D4CDC] transition-colors"
          >
            質問一覧に戻る
          </Link>
        </div>
      </main>
    </div>
  );
}

// Helper function to generate pentagon points
function generatePentagonPoints(cx: number, cy: number, radius: number): string {
  const points = [];
  for (let i = 0; i < 5; i++) {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}

// Helper function to generate data polygon points
function generateDataPoints(
  cx: number,
  cy: number,
  scores: number[]
): string {
  const points = [];
  for (let i = 0; i < 5; i++) {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    const radius = (scores[i] / 100) * 150;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}
