export const paginationInitialClasses = {
  mobile: '[html[data-js]_&]:max-md:hidden',
  desktop: '[html[data-js]_&]:md:hidden',
} as const;

export const getInitialPaginationClass = (
  index: number,
  mobilePageSize: number,
  desktopPageSize: number,
) =>
  [
    index >= mobilePageSize && paginationInitialClasses.mobile,
    index >= desktopPageSize && paginationInitialClasses.desktop,
  ]
    .filter(Boolean)
    .join(' ');
