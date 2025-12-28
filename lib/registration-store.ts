// 登録フローの状態管理（localStorage）

const STORAGE_KEY = 'fastpass_registration';

// 登録データの型定義
export interface RegistrationData {
  // 進捗管理
  currentStep: string;
  completedSteps: string[];

  // コース選択
  selectedCompany?: string;

  // 就活状況
  jobStatus?: string;

  // レベル選択
  levelChoice?: string; // 'beginner' | 'find_level'

  // デモ質問の回答
  demoAnswers?: {
    questionId: string;
    answer: string;
  }[];

  // 診断結果
  diagnosisResult?: {
    score: number;
    section: number;
    completedAt: string;
  };

  // 目標設定
  goal?: string; // '7days' | '14days' | '30days' | '50days'

  // 基本情報（signup）
  basicInfo?: {
    lastName?: string;
    firstName?: string;
    lastNameKana?: string;
    firstNameKana?: string;
    gender?: string;
    birthYear?: string;
    birthMonth?: string;
    birthDay?: string;
  };

  // 詳細情報（signup-details）
  detailInfo?: {
    careerDirection?: string;
    education?: string;
    university?: string;
    faculty?: string;
    department?: string;
    graduationYear?: string;
    graduationMonth?: string;
  };

  // LINE認証完了
  lineAuthenticated?: boolean;

  // 最終更新日時
  updatedAt: string;
}

// ステップの順序定義
export const REGISTRATION_STEPS = [
  'register',           // コース選択
  'status',             // 就活状況
  'level',              // レベル選択
  'demo',               // デモ質問
  'complete',           // 診断完了
  'result-detail',      // 診断結果詳細
  'streak',             // ストリーク
  'goal',               // 目標設定
  'level-result',       // レベル結果
  'create-account',     // アカウント作成促進
  'signup',             // 基本情報
  'signup-details',     // 詳細情報
  'line-login',         // LINE認証
] as const;

// 初期状態
const initialState: RegistrationData = {
  currentStep: 'register',
  completedSteps: [],
  updatedAt: new Date().toISOString(),
};

// データを取得
export function getRegistrationData(): RegistrationData {
  if (typeof window === 'undefined') return initialState;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to parse registration data:', e);
  }

  return initialState;
}

// データを保存
export function saveRegistrationData(data: Partial<RegistrationData>): void {
  if (typeof window === 'undefined') return;

  try {
    const current = getRegistrationData();
    const updated: RegistrationData = {
      ...current,
      ...data,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save registration data:', e);
  }
}

// ステップを完了としてマーク
export function completeStep(step: string): void {
  const data = getRegistrationData();
  if (!data.completedSteps.includes(step)) {
    saveRegistrationData({
      completedSteps: [...data.completedSteps, step],
    });
  }
}

// 現在のステップを更新
export function setCurrentStep(step: string): void {
  saveRegistrationData({ currentStep: step });
}

// 次のステップを取得
export function getNextStep(currentStep: string): string | null {
  const index = REGISTRATION_STEPS.indexOf(currentStep as typeof REGISTRATION_STEPS[number]);
  if (index === -1 || index === REGISTRATION_STEPS.length - 1) return null;
  return REGISTRATION_STEPS[index + 1];
}

// 再開すべきステップを取得
export function getResumeStep(): string {
  const data = getRegistrationData();

  // 完了ステップがあれば、次のステップから再開
  if (data.completedSteps.length > 0) {
    const lastCompleted = data.completedSteps[data.completedSteps.length - 1];
    const nextStep = getNextStep(lastCompleted);
    if (nextStep) return nextStep;
  }

  // なければ最初から
  return 'register';
}

// データをクリア
export function clearRegistrationData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

// 基本情報を保存
export function saveBasicInfo(info: RegistrationData['basicInfo']): void {
  const data = getRegistrationData();
  saveRegistrationData({
    basicInfo: { ...data.basicInfo, ...info },
  });
}

// 詳細情報を保存
export function saveDetailInfo(info: RegistrationData['detailInfo']): void {
  const data = getRegistrationData();
  saveRegistrationData({
    detailInfo: { ...data.detailInfo, ...info },
  });
}

// 診断結果を保存
export function saveDiagnosisResult(score: number, section: number): void {
  saveRegistrationData({
    diagnosisResult: {
      score,
      section,
      completedAt: new Date().toISOString(),
    },
  });
}

// データの有効期限チェック（7日間）
export function isDataExpired(): boolean {
  const data = getRegistrationData();
  if (!data.updatedAt) return true;

  const updatedAt = new Date(data.updatedAt);
  const now = new Date();
  const daysDiff = (now.getTime() - updatedAt.getTime()) / (1000 * 60 * 60 * 24);

  return daysDiff > 7;
}

// 有効期限切れならクリア
export function clearIfExpired(): void {
  if (isDataExpired()) {
    clearRegistrationData();
  }
}
