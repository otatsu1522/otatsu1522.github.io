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

        // 【修正】表が長いセクションなどは内部に独自のスクロール(overflow-y-auto)を持つため、
        // 一度下までスクロールしてから他の画面を経由して再訪問すると、
        // 前回のスクロール位置が残ったまま（＝上が切れて見える）ことがあった。
        // そのセクションが「今アクティブな画面」になるたびに、内部スクロールを必ず先頭へ戻す。
        entry.target.scrollTop = 0;

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

// 【修正】astro:page-load は <ClientRouter /> 使用時のみ発火するイベントで、
// このプロジェクトでは未使用のため削除（DOMContentLoadedのみで十分）。
document.addEventListener('DOMContentLoaded', initScrollTheme);
