// テーマ変更リスナー
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'changeTheme') {
        console.log(`[Theme Debug] Changing theme to: ${message.theme}`);
        applyTheme(message.theme);
    }
});

// 初回ロード時にテーマを適用
chrome.storage.sync.get(['selectedTheme'], (result) => {
    const theme = result.selectedTheme || 'minimal-modern';
    console.log(`[Theme Debug] Initial theme load: ${theme}`);
    applyTheme(theme);
});

// テーマを適用する関数
function applyTheme(themeName) {
    console.log(`[Theme Debug] Applying theme: ${themeName}`);
    
    // 現在のテーマCSSを削除
    const existingLink = document.querySelector('link[data-theme-style]');
    if (existingLink) {
        console.log('[Theme Debug] Removing existing theme link');
        existingLink.remove();
    }
    
    // 新しいテーマCSSを追加
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL(`themes/${themeName}.css`);
    link.setAttribute('data-theme-style', 'true');
    document.head.appendChild(link);
    
    console.log(`[Theme Debug] Theme CSS URL: ${link.href}`);
    
    // HTMLにテーマクラスを追加
    document.documentElement.className = `chatwork-theme-${themeName}`;
    console.log(`[Theme Debug] Added theme class to HTML: ${document.documentElement.className}`);
    
    // CSSが適用されたか確認
    setTimeout(() => {
        const appliedStyles = window.getComputedStyle(document.body);
        console.log('[Theme Debug] Background color:', appliedStyles.backgroundColor);
    }, 1000);
}

// DOM要素のチェック
document.addEventListener('DOMContentLoaded', () => {
    console.log('[Theme Debug] DOM loaded, checking elements...');
    console.log('[Theme Debug] Body:', document.body ? '✓' : '✗');
    console.log('[Theme Debug] Headers found:', document.querySelectorAll('header').length);
});

// 既に読み込み済みかチェック
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('[Theme Debug] DOMContentLoaded fired');
    });
} else {
    console.log('[Theme Debug] DOM already ready');
}

console.log('[Theme Debug] Content script loaded successfully');