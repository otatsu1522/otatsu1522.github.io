// 移動速度（px/秒）。距離に応じて所要時間が決まる（距離 ÷ 速度）
const SCROLL_SPEED = 1500;
// 所要時間の下限/上限（ms）
const MIN_DURATION = 400;
const MAX_DURATION = 3000;

interface SmoothScrollOptions {
  /** 平均速度 (px/秒) */
  speed?: number;
  minDuration?: number;
  maxDuration?: number;
}

let animationFrame = 0;
// アニメーション中に再度呼ばれても、元の scroll-behavior を失わないよう保持する
let savedBehavior: string | null = null;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const restoreBehavior = () => {
  if (savedBehavior === null) return;
  document.documentElement.style.scrollBehavior = savedBehavior;
  savedBehavior = null;
};

export function smoothScrollTo(
  targetY: number,
  options: SmoothScrollOptions = {}
): void {
  const {
    speed = SCROLL_SPEED,
    minDuration = MIN_DURATION,
    maxDuration = MAX_DURATION,
  } = options;

  cancelAnimationFrame(animationFrame);

  const root = document.documentElement;
  const startY = window.scrollY;
  const endY = Math.max(0, targetY);
  const distance = endY - startY;

  if (Math.abs(distance) < 1) return;

  // global.css の `scroll-behavior: smooth` が有効なままだと、
  // フレームごとの scrollTo が標準のスムーズスクロールと干渉するため、
  // アニメーション中だけ auto にする。
  if (savedBehavior === null) {
    savedBehavior = root.style.scrollBehavior;
  }
  root.style.scrollBehavior = 'auto';

  // 速度一定：距離が長いほど時間をかける
  const duration = Math.min(
    Math.max((Math.abs(distance) / speed) * 1000, minDuration),
    maxDuration
  );

  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const progress = Math.min(
      Math.max((currentTime - startTime) / duration, 0),
      1
    );

    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
      return;
    }

    restoreBehavior();
  };

  animationFrame = requestAnimationFrame(animate);
}
