
const SCROLL_SPEED = 1500; // 移動速度（px/秒）。距離に応じて所要時間が決まる（距離 ÷ 速度）

const MIN_DURATION = 500; // 所要時間の下限（ms）
const MAX_DURATION = 2000; // 所要時間の上限（ms）

interface SmoothScrollOptions {
  speed?: number;
  minDuration?: number;
  maxDuration?: number;
}

let animationFrame = 0;
let savedBehavior: string | null = null;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const restoreBehavior = () => {
  if (savedBehavior === null) return;
  document.documentElement.style.scrollBehavior = savedBehavior;
  savedBehavior = null;
};

export function smoothScrollTo(targetY: number, options: SmoothScrollOptions = {}): void {
  const { speed = SCROLL_SPEED, minDuration = MIN_DURATION, maxDuration = MAX_DURATION } = options;

  cancelAnimationFrame(animationFrame);

  const root = document.documentElement;
  const startY = window.scrollY;
  const endY = Math.max(0, targetY);
  const distance = endY - startY;

  if (Math.abs(distance) < 1) return;

  if (savedBehavior === null) {
    savedBehavior = root.style.scrollBehavior;
  }
  root.style.scrollBehavior = 'auto';

  const duration = Math.min(
    Math.max((Math.abs(distance) / speed) * 1000, minDuration),
    maxDuration,
  );

  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const progress = Math.min(Math.max((currentTime - startTime) / duration, 0), 1);

    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
      return;
    }

    restoreBehavior();
  };

  animationFrame = requestAnimationFrame(animate);
}
