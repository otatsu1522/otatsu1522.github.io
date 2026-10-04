const DATE_PATTERN = /^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/;

export const isValidDateString = (date: string) => DATE_PATTERN.test(date.trim());

export const toDateNumber = (date?: string) => {
  if (!date) return 0;

  const match = date.trim().match(DATE_PATTERN);
  if (!match) return 0;

  return Number(match[1]) * 10000 + Number(match[2]) * 100 + Number(match[3]);
};

export const toIsoDate = (date?: string) => {
  if (!date) return undefined;

  const match = date.trim().match(DATE_PATTERN);
  if (!match) return undefined;

  return `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`;
};
