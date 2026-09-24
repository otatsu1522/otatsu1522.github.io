const GALLERY_SPEED = 70; // 横スクロール速度(px/秒)

let animationFrame = 0;
let resizeHandler: (() => void) | null = null;
let cleanupHandler: (() => void) | null = null;

export function setupGallery() {
  const viewport = document.getElementById('gallery-viewport');
  const track = document.getElementById('gallery-track');
  const firstSet = document.getElementById('gallery-set');

  if (!viewport || !track || !firstSet) return;

  if (cleanupHandler) {
    cleanupHandler();
  }

  let position = 0;
  let previousTime = performance.now();
  let loopWidth = 0;
  let started = false;

  const updateDimensions = () => {
    loopWidth = firstSet.getBoundingClientRect().width;

    if (loopWidth > 0) {
      if (!started) {
        position = 0;
      } else {
        position %= loopWidth;

        if (position > 0) {
          position -= loopWidth;
        }
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;
    }
  };

  const animate = (time: number) => {
    const delta = time - previousTime;
    previousTime = time;

    if (loopWidth > 0) {
      position -= GALLERY_SPEED * delta / 1000;

      if (position <= -loopWidth) {
        position += loopWidth;
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;
    }

    animationFrame = requestAnimationFrame(animate);
  };

  resizeHandler = updateDimensions;
  window.addEventListener('resize', resizeHandler);

  updateDimensions();

  if (loopWidth > 0) {
    started = true;
    previousTime = performance.now();
    animationFrame = requestAnimationFrame(animate);
  }

  firstSet.querySelectorAll('img').forEach((image) => {
    image.addEventListener('load', updateDimensions, { once: true });
  });

  cleanupHandler = () => {
    cancelAnimationFrame(animationFrame);

    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler);
    }

    resizeHandler = null;
    cleanupHandler = null;
  };
}
