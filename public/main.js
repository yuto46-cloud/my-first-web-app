// ここからコードを書いてください
import { setupTabs } from './js/tabs.js';
import { setupConverter } from './js/converter.js';

document.addEventListener("DOMContentLoaded", () => {
    // タブの表示/非表示を切り替える機能を有効化
    setupTabs();
    
    // 単位変換機能を初期化し、イベントリスナーを設定
    setupConverter();
});