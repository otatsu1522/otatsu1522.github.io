export function matchesMinWidth(name: string): boolean {
  const width = getComputedStyle(document.documentElement)
    .getPropertyValue(`--breakpoint-${name}`)
    .trim();

  return window.matchMedia(`(min-width: ${width})`).matches;
}
