const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let isRunning = false;

async function initTyping() {
  const target = document.getElementById('typing-text');
  if (!target || isRunning) return;
  isRunning = true;

  target.textContent = '';

  // 確定済みテキスト用と変換中テキスト用の要素を生成（下線スタイル指定なし）
  const confirmedEl = document.createElement('span');
  const convertingEl = document.createElement('span');

  target.appendChild(confirmedEl);
  target.appendChild(convertingEl);

  // 1文字ずつタイプする内部関数
  const typeText = async (str: string, speed = 80) => {
    for (const char of str) {
      convertingEl.textContent += char;
      await sleep(speed);
    }
  };

  // --- アニメーション シーケンス ---

  // Step 1: "tabibito" タイプ
  await typeText('tabibito');
  await sleep(200);

  // Step 2: 「たびびと」に仮変換
  convertingEl.textContent = 'たびびと';
  await sleep(350);

  // Step 3: 「旅人」に変換して確定
  confirmedEl.textContent += '旅人';
  convertingEl.textContent = '';
  await sleep(250);

  // Step 4: "otatsu" タイプ
  await typeText('otatsu');
  await sleep(200);

  // Step 5: 「おたつ」に変換して確定
  convertingEl.textContent = 'おたつ';
  await sleep(300);

  confirmedEl.textContent += 'おたつ';
  convertingEl.textContent = '';

  // 完了後に変換用要素を削除
  convertingEl.remove();
  isRunning = false;
}

// 実行タイミング制御
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTyping);
} else {
  initTyping();
}

document.addEventListener('astro:page-load', initTyping);
