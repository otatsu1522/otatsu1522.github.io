const PARTICLE_COUNT = 50; // 通常の星の数
const MOBILE_PARTICLE_COUNT = 30; // モバイルメニュー内の星の数

const MIN_SIZE = 1; // 通常の星の最小サイズ(px)
const MAX_SIZE = 5; // 通常の星の最大サイズ(px)

const MIN_DURATION = 1; // 通常の星が1回点滅する最短時間(秒)
const MAX_DURATION = 5; // 通常の星が1回点滅する最長時間(秒)

const MIN_OPACITY = 0.1; // 通常の星の最小透明度
const MAX_OPACITY = 1; // 通常の星の最大透明度

const MIN_DELAY = -5; // 通常の星の初回表示までの最短遅延(秒)
const MAX_DELAY = 0; // 通常の星の初回表示までの最長遅延(秒)

const SHOOTING_STAR_MIN_INTERVAL = 1; // 流れ星が出現する最短間隔(秒)
const SHOOTING_STAR_MAX_INTERVAL = 5; // 流れ星が出現する最長間隔(秒)

const SHOOTING_STAR_MIN_DURATION = 0.5; // 流れ星が画面を横切る最短時間(秒)
const SHOOTING_STAR_MAX_DURATION = 1.5; // 流れ星が画面を横切る最長時間(秒)

const SHOOTING_STAR_MIN_LENGTH = 10; // 流れ星の尾の最小長さ(px)
const SHOOTING_STAR_MAX_LENGTH = 100; // 流れ星の尾の最大長さ(px)

const SHOOTING_STAR_MIN_DISTANCE = 100; // 流れ星の最短移動距離(px)
const SHOOTING_STAR_MAX_DISTANCE = 500; // 流れ星の最長移動距離(px)

const SHOOTING_STAR_MIN_THICKNESS = 1; // 流れ星の最小太さ(px)
const SHOOTING_STAR_MAX_THICKNESS = 3; // 流れ星の最大太さ(px)

const COLORS = [
  'rgba(255,255,255,0.9)',
  'rgba(255,250,220,0.9)',
  'rgba(255,235,150,0.85)',
  'rgba(255,220,80,0.8)',
]; // 星と流れ星に使用する色

const SHAPES = [
  '50%',
  '10%',
  '0%',
]; // 通常の星に使用する形状

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function randomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function createParticle(container: HTMLElement) {
  const particle = document.createElement('span');

  const size = random(MIN_SIZE, MAX_SIZE);
  const duration = random(MIN_DURATION, MAX_DURATION);
  const delay = random(MIN_DELAY, MAX_DELAY);
  const opacity = random(MIN_OPACITY, MAX_OPACITY);
  const rotation = `${random(-45, 45)}deg`;

  particle.className = 'background-particle';

  particle.style.setProperty('--particle-x', `${random(0, 100)}%`);
  particle.style.setProperty('--particle-y', `${random(0, 100)}%`);
  particle.style.setProperty('--particle-size', `${size}px`);
  particle.style.setProperty('--particle-duration', `${duration}s`);
  particle.style.setProperty('--particle-delay', `${delay}s`);
  particle.style.setProperty('--particle-opacity', opacity.toString());
  particle.style.setProperty('--particle-color', randomItem(COLORS));
  particle.style.setProperty('--particle-radius', randomItem(SHAPES));
  particle.style.setProperty('--particle-rotation', rotation);

  container.appendChild(particle);
}

function scheduleShootingStar(container: HTMLElement) {
  const delay = random(
    SHOOTING_STAR_MIN_INTERVAL * 1000,
    SHOOTING_STAR_MAX_INTERVAL * 1000
  );

  window.setTimeout(() => {
    createShootingStar(container);
    scheduleShootingStar(container);
  }, delay);
}

function createShootingStar(container: HTMLElement) {
  const star = document.createElement('span');

  const duration = random(
    SHOOTING_STAR_MIN_DURATION,
    SHOOTING_STAR_MAX_DURATION
  );

  const length = random(
    SHOOTING_STAR_MIN_LENGTH,
    SHOOTING_STAR_MAX_LENGTH
  );

  const distance = random(
    SHOOTING_STAR_MIN_DISTANCE,
    SHOOTING_STAR_MAX_DISTANCE
  );

  const thickness = random(
    SHOOTING_STAR_MIN_THICKNESS,
    SHOOTING_STAR_MAX_THICKNESS
  );

  const angle = random(0, 360);
  const radians = (angle * Math.PI) / 180;

  const dx = Math.cos(radians) * distance;
  const dy = Math.sin(radians) * distance;

  star.className = 'shooting-star';

  star.style.setProperty('--shooting-star-x', `${random(0, 100)}%`);
  star.style.setProperty('--shooting-star-y', `${random(0, 100)}%`);
  star.style.setProperty('--shooting-star-length', `${length}px`);
  star.style.setProperty('--shooting-star-thickness', `${thickness}px`);
  star.style.setProperty('--shooting-star-angle', `${angle}deg`);
  star.style.setProperty('--shooting-star-dx', `${dx}px`);
  star.style.setProperty('--shooting-star-dy', `${dy}px`);
  star.style.setProperty('--shooting-star-color', randomItem(COLORS));
  star.style.setProperty('--shooting-star-duration', `${duration}s`);

  container.appendChild(star);

  star.addEventListener('animationend', () => {
    star.remove();
  }, { once: true });
}

function setupBackgroundParticles(
  containerId: string,
  particleCount: number
) {
  const container = document.getElementById(containerId);

  if (!container || container.dataset.initialized === 'true') return;

  for (let i = 0; i < particleCount; i++) {
    createParticle(container);
  }

  container.dataset.initialized = 'true';
  scheduleShootingStar(container);
}

function setupAllBackgroundParticles() {
  setupBackgroundParticles('background-particles', PARTICLE_COUNT);
  setupBackgroundParticles('mobile-menu-particles', MOBILE_PARTICLE_COUNT);
}

export function initBackgroundParticles(): void {
  setupAllBackgroundParticles();
}
