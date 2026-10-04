export const languages = ['ja', 'en'] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = 'ja';

/** 選択した言語を localStorage に保存するキー */
export const languageStorageKey = 'preferred-lang';

export const isLanguage = (value: unknown): value is Language =>
  languages.includes(value as Language);
