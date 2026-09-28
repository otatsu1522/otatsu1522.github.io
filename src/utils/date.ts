export const toDateNumber = (date?: string) => {
  if (!date) return 0;

  const match = date.trim().match(/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/);
  if (!match) return 0;

  return Number(match[1]) * 10000 + Number(match[2]) * 100 + Number(match[3]);
};
