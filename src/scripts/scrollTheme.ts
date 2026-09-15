// スクロールコンテナ内で「今どのセクションが画面中央に来ているか」を監視し、
// 以下の2つのカスタムイベントを発火する。監視は必ずこの1箇所にまとめること。
//   - 'theme-change'   : 背景が黒か否か（LanguageSwitcherの枠線色 / スクロールバー色に使用）
//   - 'section-change' : 現在のセクション番号と総数（ScrollNavのページ表示・矢印の活性制御に使用）
export function initScrollTheme() {
  const container = document.getElementById('scroll-container');
  if (!container) return;

  const sections = Array.from(container.querySelectorAll('section, footer'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const isDark = entry.target.classList.contains('bg-black');
        const index = sections.indexOf(entry.target);

        container.classList.toggle('is-dark-scroll', isDark);

        window.dispatchEvent(new CustomEvent('theme-change', { detail: { isDark } }));
        window.dispatchEvent(
          new CustomEvent('section-change', {
            detail: { index, total: sections.length },
          })
        );
      });
    },
    {
      root: container,
      threshold: 0.5,
    }
  );

  sections.forEach((sec) => observer.observe(sec));
}

document.addEventListener('DOMContentLoaded', initScrollTheme);
