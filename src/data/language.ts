export const languages = ['ja', 'en'] as const;

export type Language = (typeof languages)[number];

/** HTML の初期状態(ビルド時)の言語。`<title>` など切り替えられない箇所もこの言語になる */
export const defaultLanguage: Language = 'ja';

/** 選択した言語を localStorage に保存するキー */
export const languageStorageKey = 'preferred-lang';

/** 言語を切り替えたときに発行するイベント（メニュー側が受け取り、トップページへ移動する） */
export const languageChangedEvent = 'language-changed';

export interface LanguageChangedDetail {
  /** 選択した言語を localStorage に保存できたか（保存できないと、ページ移動で元の言語に戻ってしまう） */
  persisted: boolean;
}

export const isLanguage = (value: unknown): value is Language =>
  languages.includes(value as Language);
