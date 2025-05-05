# Modern Themes for Chatwork

非公式の Chatwork 用テーマ拡張機能です。モダンな配色で Chatwork をカスタマイズできます。

## 特徴

6 種類のテーマから選択可能:

- **Minimal Modern**: モダンな薄色系
- **Dark Professional**: ダーク寄り
- **Ocean Blue**: 青基調
- **Nature Green**: 緑基調
- **Warm Comfort**: 暖色系
- **Sakura Pink**: 桜ピンク

## インストール方法

1. 本リポジトリをダウンロードするか、クローンします
2. Chrome で `chrome://extensions/` を開きます
3. 右上の「デベロッパーモード」を有効にします
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. このディレクトリを選択します

## 使い方

1. 拡張機能をインストール後、Chrome の拡張機能アイコンをクリック
2. お好きなテーマを選択します
3. テーマが即座に適用されます

## プロジェクト構造

```
chatwork-theme/
├── manifest.json
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── content/
│   └── content.js
├── themes/
│   ├── themes.json
│   ├── minimal-modern.css
│   ├── dark-professional.css
│   ├── ocean-blue.css
│   ├── nature-green.css
│   ├── warm-comfort.css
│   └── sakura-pink.css
└── icons/
    └── icon-{16,48,128}.png
```

## 新しいテーマの追加方法

1. `themes/` ディレクトリに新しい CSS ファイルを作成
2. `themes/themes.json` に新しいテーマ情報を追加
3. `popup/popup.html` にテーマカードを追加
4. `popup/popup.css` にプレビュースタイルを追加

## 注意事項

この拡張機能は非公式プロダクトです。Chatwork 社とは関係ありません。

## ライセンス

MIT License

## 作者

Developed by kpab

## バージョン履歴

- v1.0.0: 初回リリース
