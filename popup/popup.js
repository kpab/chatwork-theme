// テーマデータを直接定義
const themes = [
    "minimal-modern",
    "dark-professional",
    "ocean-blue",
    "nature-green",
    "warm-comfort",
    "sakura-pink",
    "dark-pink"
];

// 現在適用中のテーマを取得
async function getCurrentTheme() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(['selectedTheme'], (result) => {
            resolve(result.selectedTheme || 'minimal-modern');
        });
    });
}

// テーマを保存
async function saveTheme(themeName) {
    return new Promise((resolve) => {
        chrome.storage.sync.set({ selectedTheme: themeName }, () => {
            resolve();
        });
    });
}

// サイトに通知を送信
function notifyContentScript(themeName) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'changeTheme', theme: themeName });
        }
    });
}

// 初期化
document.addEventListener('DOMContentLoaded', async () => {
    const currentTheme = await getCurrentTheme();

    // 現在のテーマをハイライト
    const themeCards = document.querySelectorAll('.theme-card');
    themeCards.forEach(card => {
        if (card.dataset.theme === currentTheme) {
            card.classList.add('selected');
        }
    });

    // テーマカードにクリックイベントを追加
    themeCards.forEach(card => {
        card.addEventListener('click', async () => {
            const selectedTheme = card.dataset.theme;

            // 選択スタイルを更新
            themeCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            // テーマを保存して適用
            await saveTheme(selectedTheme);
            notifyContentScript(selectedTheme);
        });
    });
});