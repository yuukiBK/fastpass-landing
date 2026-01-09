'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState, useCallback } from 'react';

function WelcomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const company = searchParams.get('company') || 'goldman-sachs';
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isBubbleTransitioning, setIsBubbleTransitioning] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingStep, setGreetingStep] = useState(0);
  const [isGreetingTransitioning, setIsGreetingTransitioning] = useState(false);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isNameInputFadingOut, setIsNameInputFadingOut] = useState(false);
  const [showIndustryPicker, setShowIndustryPicker] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [isIndustryPickerFadingOut, setIsIndustryPickerFadingOut] = useState(false);
  const [showPostIndustryGreeting, setShowPostIndustryGreeting] = useState(false);
  const [postIndustryStep, setPostIndustryStep] = useState(0);
  const [isPostIndustryTransitioning, setIsPostIndustryTransitioning] = useState(false);
  const [showStatusPicker, setShowStatusPicker] = useState(false);

  // 学歴入力用のstate
  const [bunriType, setBunriType] = useState<'文系' | '理系' | null>(null);
  const [schoolType, setSchoolType] = useState<string | null>(null);
  const [graduateCourse, setGraduateCourse] = useState<'masters' | 'doctorate' | null>(null);
  const [schoolName, setSchoolName] = useState('');
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [graduationYear, setGraduationYear] = useState<string | null>(null);
  const [universityEmail, setUniversityEmail] = useState('');

  // 現在のステップを取得
  const getCurrentStep = useCallback(() => {
    if (showStatusPicker) return 'status-picker';
    if (showPostIndustryGreeting) return 'post-industry-greeting';
    if (showIndustryPicker) return 'industry-picker';
    if (showGreeting) return 'greeting';
    if (showNameInput) return 'name-input';
    return 'welcome';
  }, [showStatusPicker, showPostIndustryGreeting, showIndustryPicker, showGreeting, showNameInput]);

  // ステップに応じた状態を復元
  const restoreStep = useCallback((step: string) => {
    // すべてリセット
    setShowNameInput(false);
    setShowGreeting(false);
    setShowIndustryPicker(false);
    setShowPostIndustryGreeting(false);
    setShowStatusPicker(false);
    setIsNameInputFadingOut(false);
    setIsIndustryPickerFadingOut(false);
    setIsGreetingTransitioning(false);
    setIsPostIndustryTransitioning(false);

    switch (step) {
      case 'name-input':
        setShowNameInput(true);
        break;
      case 'greeting':
        setShowGreeting(true);
        setGreetingStep(0);
        break;
      case 'industry-picker':
        setShowGreeting(true);
        setGreetingStep(1);
        setShowIndustryPicker(true);
        break;
      case 'post-industry-greeting':
        setShowGreeting(true);
        setShowPostIndustryGreeting(true);
        setPostIndustryStep(0);
        break;
      case 'status-picker':
        setShowGreeting(true);
        setShowPostIndustryGreeting(true);
        setPostIndustryStep(1);
        setShowStatusPicker(true);
        break;
      case 'welcome':
      default:
        // 初期状態
        break;
    }
  }, []);

  // popstateイベント（ブラウザ戻る/進む）のハンドリング
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.step) {
        restoreStep(event.state.step);
      } else {
        // 初期状態に戻る
        restoreStep('welcome');
      }
    };

    window.addEventListener('popstate', handlePopState);

    // 初期ステートを設定
    if (!window.history.state || !window.history.state.step) {
      window.history.replaceState({ step: 'welcome' }, '');
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [restoreStep]);

  // ステップが変わったら履歴に追加
  const pushHistoryState = useCallback((step: string) => {
    window.history.pushState({ step }, '');
  }, []);

  // 業界データ
  const industries = [
    { id: 'consulting', name: 'コンサル', icon: '💼', color: '#58CC02' },
    { id: 'finance', name: '金融', icon: '🏦', color: '#1CB0F6' },
    { id: 'trading', name: '総合商社', icon: '🌐', color: '#FF9600' },
    { id: 'it-tech', name: 'IT・テック', icon: '💻', color: '#2DD4BF' },
    { id: 'megaventure', name: 'メガベンチャー', icon: '🚀', color: '#A855F7' },
    { id: 'manufacturer', name: 'メーカー', icon: '🏭', color: '#F59E0B' },
    { id: 'real-estate', name: '不動産・デベロッパー', icon: '🏢', color: '#6366F1' },
    { id: 'media', name: 'マスコミ・広告', icon: '📺', color: '#EC4899' },
  ];

  // 学種データ
  const schoolTypes = [
    { id: 'university', title: '大学' },
    { id: 'graduate', title: '大学院' },
    { id: 'kosen', title: '高等専門学校' },
  ];

  // 卒業見込み時期データ（年+月）
  const graduationYears = [
    '2025年3月', '2025年9月',
    '2026年3月', '2026年9月',
    '2027年3月', '2027年9月',
    '2028年3月', '2028年9月',
    '2029年3月', '2029年9月',
    '2030年3月', '2030年9月',
    '2031年3月', '2031年9月',
  ];


  // 学校種別に応じたラベルとプレースホルダーを取得
  const getSchoolLabels = () => {
    switch (schoolType) {
      case 'graduate':
        return {
          schoolLabel: '大学院を選択',
          schoolPlaceholder: '例：ファストパス大学大学院',
          facultyLabel: '研究科を選択',
          facultyPlaceholder: '例：未来創造研究科',
          departmentLabel: '専攻を選択',
          departmentPlaceholder: '例：イノベーション専攻',
        };
      case 'kosen':
        return {
          schoolLabel: '高専を選択',
          schoolPlaceholder: '例：ファストパス工業高等専門学校',
          facultyLabel: '学科を選択',
          facultyPlaceholder: '例：情報工学科',
          departmentLabel: null,
          departmentPlaceholder: null,
        };
      case 'university':
      default:
        return {
          schoolLabel: '大学を選択',
          schoolPlaceholder: '例：ファストパス大学',
          facultyLabel: '学部を選択',
          facultyPlaceholder: '例：未来創造学部',
          departmentLabel: '学科を選択',
          departmentPlaceholder: '例：キャリアデザイン学科',
        };
    }
  };

  const schoolLabels = getSchoolLabels();

  const messages = [
    { text: 'やあ！僕はファスト！', subText: 'これからよろしくね！', animation: '/β版　アニメーション (9).gif' },
    { text: 'さっそく一緒に', subText: '面接対策を始めよう！', animation: '/手を振る.mp4' },
    { text: 'まずは、君の名前を教えてね！', subText: '', animation: '/手を振る.mp4' },
  ];

  // 次へボタンでメッセージを切り替える
  const handleIntroNext = () => {
    if (messageIndex < messages.length - 1) {
      const currentAnimation = messages[messageIndex].animation;
      const nextAnimation = messages[messageIndex + 1].animation;
      const animationChanges = currentAnimation !== nextAnimation;

      if (animationChanges) {
        // アニメーションが変わる場合は全体をフェード
        setIsTransitioning(true);
        setTimeout(() => {
          setMessageIndex(messageIndex + 1);
          setIsTransitioning(false);
        }, 300);
      } else {
        // アニメーションが同じ場合は吹き出しのみフェード
        setIsBubbleTransitioning(true);
        setTimeout(() => {
          setMessageIndex(messageIndex + 1);
          setIsBubbleTransitioning(false);
        }, 300);
      }
    } else {
      // 最後のメッセージの場合は名前入力を表示
      setShowNameInput(true);
      pushHistoryState('name-input');
    }
  };

  const handleSubmitName = () => {
    if (lastName && firstName) {
      // TODO: 名前をストアに保存
      // フェードアウトを開始
      setIsNameInputFadingOut(true);
      // フェードアウト完了後にグリーティング画面へ
      setTimeout(() => {
        setShowNameInput(false);
        setIsNameInputFadingOut(false);
        setShowGreeting(true);
        pushHistoryState('greeting');
      }, 400);
    }
  };

  // 挨拶画面のメッセージ
  const greetingMessages = [
    { text: `${lastName}さん！`, subText: 'これから、よろしくね！', animation: '/β版　アニメーション (9).gif' },
    { text: 'じゃあ次は、興味のある', subText: '業界を教えてね！', animation: '/β版　アニメーション (11).gif' },
  ];

  // 挨拶画面で「次へ」を押した時の処理（1つずつ進む）
  const handleGreetingNext = () => {
    if (greetingStep < greetingMessages.length - 1) {
      // まだ次のメッセージがある場合は次へ進む
      setIsGreetingTransitioning(true);
      setTimeout(() => {
        setGreetingStep(greetingStep + 1);
        setIsGreetingTransitioning(false);
      }, 300);
    } else {
      // 最後のメッセージの場合は業界選択カードを表示
      setShowIndustryPicker(true);
      pushHistoryState('industry-picker');
    }
  };

  // 業界の選択を切り替える
  const toggleIndustry = (industryId: string) => {
    setSelectedIndustries(prev =>
      prev.includes(industryId)
        ? prev.filter(id => id !== industryId)
        : [...prev, industryId]
    );
  };

  // 選択した業界の名前を取得
  const getSelectedIndustryNames = () => {
    return selectedIndustries
      .map(id => industries.find(i => i.id === id)?.name)
      .filter(Boolean)
      .join('・');
  };

  // 業界選択後のメッセージ（3段階）
  const isUndecided = selectedIndustries.length === 1 && selectedIndustries[0] === 'undecided';
  const postIndustryMessages = [
    {
      text: isUndecided ? 'OK！' : `${getSelectedIndustryNames()}か！いいね！`,
      subText: isUndecided ? '一緒に探していこう！' : '',
      animation: '/β版　アニメーション (12).gif'
    },
    { text: '最後に、君のことを', subText: 'もう少し詳しく教えてね！', animation: '/β版　アニメーション (13).gif' },
  ];

  // 業界選択完了後に挨拶画面へ
  const handleIndustryNext = () => {
    // TODO: 選択した業界をストアに保存
    // フェードアウトを開始
    setIsIndustryPickerFadingOut(true);
    setTimeout(() => {
      setShowIndustryPicker(false);
      setIsIndustryPickerFadingOut(false);
      setShowPostIndustryGreeting(true);
      pushHistoryState('post-industry-greeting');
    }, 400);
  };

  // 業界選択後の挨拶画面で「次へ」を押した時の処理（1つずつ進む）
  const handlePostIndustryNext = () => {
    if (postIndustryStep < postIndustryMessages.length - 1) {
      // まだ次のメッセージがある場合は次へ進む
      setIsPostIndustryTransitioning(true);
      setTimeout(() => {
        setPostIndustryStep(postIndustryStep + 1);
        setIsPostIndustryTransitioning(false);
      }, 300);
    } else {
      // 最後のメッセージの場合は学歴入力カードを表示
      setShowStatusPicker(true);
      pushHistoryState('status-picker');
    }
  };

  // 学歴入力完了後に次へ進む
  const handleEducationNext = () => {
    // TODO: 選択した学歴情報をストアに保存
    router.push('/register/line-login');
  };

  // 学歴入力が完了しているかチェック
  const needsDepartment = schoolType === 'university' || schoolType === 'graduate';
  const needsGraduateCourse = schoolType === 'graduate';
  const needsUniversityEmail = schoolType === 'university' || schoolType === 'graduate' || schoolType === 'kosen';
  const needsBunriType = schoolType !== 'kosen'; // 高専は理系のみなので文理選択不要
  const isEducationComplete = schoolType && schoolName && faculty && graduationYear
    && (!needsBunriType || bunriType)
    && (!needsDepartment || department)
    && (!needsGraduateCourse || graduateCourse)
    && (!needsUniversityEmail || universityEmail);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative">
      {/* Speech Bubble & Animation - 名前入力カードや挨拶画面が表示されたら非表示 */}
      {!showNameInput && !showGreeting && (
        <>
          {/* Speech Bubble - 高さ固定でアニメーション位置のズレを防止 */}
          <div className="relative mb-4 h-[88px] md:h-[96px] flex items-center justify-center">
            <div className={`transition-opacity duration-300 ${isTransitioning || isBubbleTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
                <p className="text-lg md:text-xl font-bold text-gray-800 text-center">
                  {messages[messageIndex].text}
                </p>
                {messages[messageIndex].subText && (
                  <p className="text-lg md:text-xl font-bold text-gray-800 text-center">
                    {messages[messageIndex].subText}
                  </p>
                )}
              </div>
              {/* Bubble Arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
                <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Animation */}
          <div className={`w-64 h-64 md:w-80 md:h-80 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {messages[messageIndex].animation.endsWith('.gif') ? (
              <img
                src={messages[messageIndex].animation}
                alt="FastPass キャラクター"
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={messages[messageIndex].animation}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </>
      )}

      {/* 名前入力オーバーレイ */}
      {showNameInput && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${isNameInputFadingOut ? 'bg-white' : 'bg-black/30 animate-[fadeIn_0.3s_ease-out]'}`}>
          {/* カード型フォーム */}
          <div className={`bg-white rounded-3xl p-8 md:p-10 w-full max-w-md shadow-xl border-2 border-gray-200 transition-all duration-300 ${isNameInputFadingOut ? 'opacity-0 scale-95' : 'animate-[slideUp_0.4s_ease-out]'}`}>
            {/* ヘッダー部分 */}
            <div className="mb-8">
              <span className="text-xl font-bold text-gray-700">お名前</span>
            </div>

            {/* 入力フィールド */}
            <div className="space-y-6 mb-4">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">姓</span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="山田"
                  className="w-full px-5 py-4 text-xl bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#4D5CEC] focus:bg-white focus:outline-none transition-colors"
                  autoFocus
                />
              </div>
              <div>
                <span className="text-sm text-gray-500 mb-2 block">名</span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="太郎"
                  className="w-full px-5 py-4 text-xl bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#4D5CEC] focus:bg-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* 注意書き */}
            <p className="text-sm text-orange-500 mb-6">※一度登録すると、名前は変更できません</p>

            {/* 決定ボタン */}
            <button
              onClick={handleSubmitName}
              disabled={!lastName || !firstName}
              className={`w-full font-bold py-4 px-6 rounded-xl text-lg transition-all ${
                lastName && firstName
                  ? 'bg-[#4D5CEC] hover:bg-[#395BE5] text-white shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-[0_4px_0_0_#b0b0b0]'
              }`}
            >
              決定
            </button>
          </div>
        </div>
      )}

      {/* 挨拶画面オーバーレイ - 業界選択カードが表示されたら完全に非表示 */}
      {showGreeting && !showIndustryPicker && !showPostIndustryGreeting && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-4">
          {/* Speech Bubble - 高さ固定 */}
          <div className="relative mb-4 h-[88px] md:h-[96px] flex items-center justify-center">
            <div className={`transition-opacity duration-300 ${isGreetingTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
                <p className="text-lg md:text-xl font-bold text-gray-800 text-center">
                  {greetingMessages[greetingStep].text}
                </p>
                {greetingMessages[greetingStep].subText && (
                  <p className="text-lg md:text-xl font-bold text-gray-800 text-center">
                    {greetingMessages[greetingStep].subText}
                  </p>
                )}
              </div>
              {/* Bubble Arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
                <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Animation - greetingStep === 0 の時のみ最初のアニメーションを表示 */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            {/* 最初のアニメーション（いい名前だね） - greetingStep が 0 の時のみ表示 */}
            {greetingStep === 0 && (
              <img
                src="/β版　アニメーション (9).gif"
                alt="FastPass キャラクター"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${!isGreetingTransitioning ? 'opacity-100' : 'opacity-0'}`}
              />
            )}
            {/* 2番目のアニメーション（業界を教えてね） - greetingStep が 1 の時のみ表示 */}
            {greetingStep === 1 && (
              <img
                src="/β版　アニメーション (11).gif"
                alt="FastPass キャラクター"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${!isGreetingTransitioning ? 'opacity-100' : 'opacity-0'}`}
              />
            )}
          </div>

          {/* Bottom Bar with Line and Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
            <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
              <button
                onClick={handleGreetingNext}
                className="bg-[#4D5CEC] hover:bg-[#395BE5] text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
              >
                次へ
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 業界選択オーバーレイ - 業界選択後の挨拶画面や学歴入力が表示されたら非表示 */}
      {showIndustryPicker && !showPostIndustryGreeting && !showStatusPicker && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${isIndustryPickerFadingOut ? 'bg-white' : 'bg-black/30 animate-[fadeIn_0.3s_ease-out]'}`}>
          {/* カード型フォーム - 大きめサイズ */}
          <div className={`bg-white rounded-3xl p-8 md:p-12 w-full max-w-3xl shadow-xl border-2 border-gray-200 max-h-[90vh] overflow-y-auto transition-all duration-300 ${isIndustryPickerFadingOut ? 'opacity-0 scale-95' : 'animate-[slideUp_0.4s_ease-out]'}`}>
            {/* ヘッダー部分 */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">興味のある業界は？</h2>
              <p className="text-orange-500">複数選択できます</p>
            </div>

            {/* 業界グリッド - 大きめサイズ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {industries.map((industry) => {
                const isSelected = selectedIndustries.includes(industry.id);
                return (
                  <button
                    key={industry.id}
                    onClick={() => toggleIndustry(industry.id)}
                    className={`flex flex-col items-center justify-center gap-3 p-6 md:p-8 rounded-2xl border-2 transition-all shadow-[0_2px_0_0_#e5e7eb] hover:shadow-[0_2px_0_0_#e5e7eb] active:shadow-none active:translate-y-[2px] ${
                      isSelected
                        ? 'border-[#1CB0F6] bg-[#DDF4FF] shadow-[0_2px_0_0_#1CB0F6]'
                        : 'border-gray-200 hover:bg-gray-50 active:bg-gray-100'
                    }`}
                  >
                    <span className="text-4xl md:text-5xl">{industry.icon}</span>
                    <span className="font-bold text-gray-800 text-sm md:text-base text-center">{industry.name}</span>
                  </button>
                );
              })}
            </div>

            {/* まだ決めていない / その他リンク */}
            <div className="text-center mb-6">
              <button
                onClick={() => {
                  setSelectedIndustries(['undecided']);
                  handleIndustryNext();
                }}
                className="text-[#1CB0F6] hover:text-[#0A91D3] font-medium text-sm inline-flex items-center gap-1"
              >
                この中にない / まだ決めていない
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* 決定ボタン */}
            <button
              onClick={handleIndustryNext}
              disabled={selectedIndustries.length === 0}
              className={`w-full font-bold py-4 px-6 rounded-xl text-lg transition-all ${
                selectedIndustries.length > 0
                  ? 'bg-[#4D5CEC] hover:bg-[#395BE5] text-white shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-[0_4px_0_0_#b0b0b0]'
              }`}
            >
              決定
            </button>
          </div>
        </div>
      )}

      {/* 業界選択後の挨拶画面オーバーレイ - 就活状況選択カードが表示されたら非表示 */}
      {showPostIndustryGreeting && !showStatusPicker && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-4 animate-[fadeIn_0.3s_ease-out]">
          {/* Speech Bubble - 高さ固定 */}
          <div className="relative mb-4 h-[88px] md:h-[96px] flex items-center justify-center">
            <div className={`transition-opacity duration-300 ${isPostIndustryTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
                <p className="text-lg md:text-xl font-bold text-gray-800 text-center">
                  {postIndustryMessages[postIndustryStep].text}
                </p>
                {postIndustryMessages[postIndustryStep].subText && (
                  <p className="text-lg md:text-xl font-bold text-gray-800 text-center">
                    {postIndustryMessages[postIndustryStep].subText}
                  </p>
                )}
              </div>
              {/* Bubble Arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
                <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-200 transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Animation - 両方を事前レンダリングしてopacityで切り替え */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            {/* 最初のアニメーション（〇〇か！いいね！） */}
            <img
              src="/β版　アニメーション (16).gif"
              alt="FastPass キャラクター"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${postIndustryStep === 0 && !isPostIndustryTransitioning ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* 2番目のアニメーション（君のことを教えてね） */}
            <img
              src="/β版　アニメーション (13).gif"
              alt="FastPass キャラクター"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${postIndustryStep === 1 && !isPostIndustryTransitioning ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          {/* Bottom Bar with Line and Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
            <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
              <button
                onClick={handlePostIndustryNext}
                className="bg-[#4D5CEC] hover:bg-[#395BE5] text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
              >
                次へ
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 学歴入力オーバーレイ */}
      {showStatusPicker && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center px-4 animate-[fadeIn_0.3s_ease-out]">
          {/* カード型フォーム - 大きめサイズ */}
          <div className="bg-white rounded-3xl p-6 md:p-10 w-full max-w-2xl shadow-xl border-2 border-gray-200 animate-[slideUp_0.4s_ease-out] max-h-[90vh] overflow-y-auto">
            {/* ヘッダー部分 */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">あなたについて教えてください</h2>
            </div>

            {/* 学種選択 */}
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-600 mb-2 block">学校種別</label>
              <div className="flex flex-wrap gap-2">
                {schoolTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSchoolType(schoolType === type.id ? null : type.id)}
                    className={`py-3 px-4 rounded-xl border-2 font-bold transition-all ${
                      schoolType === type.id
                        ? 'border-[#1CB0F6] bg-[#DDF4FF] text-[#1CB0F6]'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {type.title}
                  </button>
                ))}
              </div>
            </div>

            {/* 大学院の場合は修士/博士課程を選択 */}
            {schoolType === 'graduate' && (
              <div className="mb-5 animate-[fadeIn_0.3s_ease-out]">
                <label className="text-sm font-medium text-gray-600 mb-2 block">課程</label>
                <div className="flex gap-3">
                  {([{ id: 'masters', title: '修士課程' }, { id: 'doctorate', title: '博士課程' }] as const).map((course) => (
                    <button
                      key={course.id}
                      onClick={() => setGraduateCourse(graduateCourse === course.id ? null : course.id)}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all ${
                        graduateCourse === course.id
                          ? 'border-[#1CB0F6] bg-[#DDF4FF] text-[#1CB0F6]'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {course.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 学校種別選択後に表示されるフィールド（学校名・学部・学科） */}
            {schoolType && (
              <>
                {/* 学校名入力 */}
                <div className="mb-5 animate-[fadeIn_0.3s_ease-out]">
                  <label className="text-sm font-medium text-gray-600 mb-2 block">{schoolLabels.schoolLabel}</label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder={schoolLabels.schoolPlaceholder}
                    className="w-full px-4 py-3 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#4D5CEC] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* 学部/研究科入力 */}
                <div className="mb-5 animate-[fadeIn_0.3s_ease-out]">
                  <label className="text-sm font-medium text-gray-600 mb-2 block">{schoolLabels.facultyLabel}</label>
                  <input
                    type="text"
                    value={faculty}
                    onChange={(e) => setFaculty(e.target.value)}
                    placeholder={schoolLabels.facultyPlaceholder}
                    className="w-full px-4 py-3 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#4D5CEC] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* 学科/専攻入力 - 必要な学校種別のみ表示 */}
                {schoolLabels.departmentLabel && (
                  <div className="mb-5 animate-[fadeIn_0.3s_ease-out]">
                    <label className="text-sm font-medium text-gray-600 mb-2 block">{schoolLabels.departmentLabel}</label>
                    <input
                      type="text"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      placeholder={schoolLabels.departmentPlaceholder || ''}
                      className="w-full px-4 py-3 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#4D5CEC] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                )}

                {/* 大学メールアドレス入力 - 大学・大学院・高専のみ表示 */}
                <div className="mb-5 animate-[fadeIn_0.3s_ease-out]">
                  <label className="text-sm font-medium text-gray-600 mb-2 block">大学メールアドレス</label>
                  <input
                    type="email"
                    value={universityEmail}
                    onChange={(e) => setUniversityEmail(e.target.value)}
                    placeholder="例：fastpass@ac.jp"
                    className="w-full px-4 py-3 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#4D5CEC] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </>
            )}

            {/* 文理選択（大学・大学院のみ表示） */}
            {(schoolType === 'university' || schoolType === 'graduate') && (
              <div className="mb-5 animate-[fadeIn_0.3s_ease-out]">
                <label className="text-sm font-medium text-gray-600 mb-2 block">文系 / 理系</label>
                <div className="flex gap-3">
                  {(['文系', '理系'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setBunriType(bunriType === type ? null : type)}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all ${
                        bunriType === type
                          ? 'border-[#1CB0F6] bg-[#DDF4FF] text-[#1CB0F6]'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 卒業見込み時期選択 - スクロール式（常に表示） */}
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-600 mb-2 block">卒業見込み時期</label>
              <div className="relative">
                <select
                  value={graduationYear || ''}
                  onChange={(e) => setGraduationYear(e.target.value || null)}
                  className={`w-full px-4 py-3 text-lg bg-gray-50 border-2 rounded-xl focus:border-[#4D5CEC] focus:bg-white focus:outline-none transition-colors appearance-none cursor-pointer ${
                    graduationYear
                      ? 'border-[#1CB0F6] bg-[#DDF4FF] text-[#1CB0F6] font-bold'
                      : 'border-gray-200 text-gray-600'
                  }`}
                >
                  <option value="">選択してください</option>
                  {graduationYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {/* ドロップダウン矢印 */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className={`w-5 h-5 ${graduationYear ? 'text-[#1CB0F6]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 決定ボタン */}
            <button
              onClick={handleEducationNext}
              disabled={!isEducationComplete}
              className={`w-full font-bold py-4 px-6 rounded-xl text-lg transition-all ${
                isEducationComplete
                  ? 'bg-[#4D5CEC] hover:bg-[#395BE5] text-white shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-[0_4px_0_0_#b0b0b0]'
              }`}
            >
              決定
            </button>

            {/* 利用規約・プライバシーポリシー */}
            <p className="text-center text-sm text-gray-500 mt-4">
              登録するとFastPassの<a href="/terms" className="text-[#4D5CEC] hover:underline">利用規約</a>と<a href="/privacy" className="text-[#4D5CEC] hover:underline">プライバシーポリシー</a>に同意したものとみなします。
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Bottom Bar with Line and Button - イントロ画面でのみ表示 */}
      {!showNameInput && !showGreeting && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-12 px-8">
          <div className="max-w-4xl mx-auto flex justify-end pr-4 md:pr-8">
            <button
              onClick={handleIntroNext}
              className="bg-[#4D5CEC] hover:bg-[#395BE5] text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 shadow-[0_4px_0_0_#3949AB] hover:shadow-[0_2px_0_0_#3949AB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]"
            >
              次へ
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <WelcomeContent />
    </Suspense>
  );
}
