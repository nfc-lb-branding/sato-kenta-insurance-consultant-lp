# 佐藤健太 - 保険代理店LP

NFCカードからアクセスする、保険代理店オーナー「佐藤健太」のブランディングランディングページ（デモ用）

## 📋 概要

- **ペルソナ**: 佐藤 健太（Kenta Sato）
- **職業**: 〇〇生命保険 代理店オーナー / トップセールス
- **実績**: 5年連続全国TOP10 / 顧客満足度98%
- **エリア**: 仙台・東北エリア

## 🎨 デザイン

- **スタイル**: ミニマル、モダン、高級感
- **カラー**:
  - ネイビーブルー `#1a2b4a` (メイン)
  - ゴールドアクセント `#c9a961`
  - オフホワイト `#fafafa` (背景)
- **レスポンシブ**: モバイルファースト設計

## 🚀 クイックスタート

### 1. ファイル構成の確認

```
kenta-sato-insurance-lp/
├── index.html          # メインHTML
├── styles.css          # スタイルシート
├── script.js           # JavaScript（vCard生成等）
├── images/
│   └── hero-photo.jpg  # プロフィール写真（要差し替え）
└── README.md           # このファイル
```

### 2. プロフィール写真の準備

`images/hero-photo.jpg` を実際の顔写真に差し替えてください。

**推奨仕様**:
- サイズ: 400×400px以上（正方形）
- フォーマット: JPG または PNG
- 容量: 200KB以下（読み込み速度重視）

### 3. ローカルでの確認

HTMLファイルをブラウザで直接開くか、ローカルサーバーを起動します。

#### 方法1: ブラウザで直接開く
```bash
# Windowsの場合
start index.html

# Macの場合
open index.html
```

#### 方法2: Pythonの簡易サーバー
```bash
# Python 3系
python -m http.server 8000

# ブラウザで http://localhost:8000 にアクセス
```

#### 方法3: VS Code Live Server
VS Codeの拡張機能「Live Server」をインストールして使用

## ⚙️ カスタマイズ方法

### 1. 個人情報の変更

#### `index.html` の編集箇所

```html
<!-- 名前 -->
<h1 class="name">佐藤 健太<span class="name-en">Kenta Sato</span></h1>

<!-- 肩書き -->
<p class="title">〇〇生命保険 代理店オーナー / トップセールス</p>

<!-- キャッチコピー -->
<p class="catchphrase">お客様の未来を、共に設計する</p>

<!-- 実績バッジ -->
<span class="badge">5年連続全国TOP10</span>
<span class="badge">顧客満足度98%</span>

<!-- エリア -->
<p class="location">📍 仙台・東北エリア</p>
```

#### `script.js` の編集箇所（vCard情報）

```javascript
const vCardData = {
    name: {
        firstName: '健太',      // 名前（名）
        lastName: '佐藤'        // 名前（姓）
    },
    company: '〇〇生命保険',    // 会社名
    title: '代理店オーナー / トップセールス',
    tel: '090-1234-5678',      // 電話番号（実際の番号に変更）
    email: 'kenta.sato@example.com',  // メールアドレス
    url: window.location.href,
    address: {
        city: '仙台市',
        region: '宮城県',
        country: '日本'
    }
};
```

### 2. LINE連携の設定

`index.html` の以下の部分を編集:

```html
<a href="https://line.me/R/ti/p/@example" class="btn btn-primary" target="_blank">
    💬 LINEで相談する
</a>
```

**LINE公式アカウントのURL取得方法**:
1. LINE公式アカウントにログイン
2. 「ホーム」→「友だち追加」→「URL」をコピー
3. 上記の `@example` 部分を置き換え

### 3. サービス内容の変更

`index.html` のサービスカードセクションを編集:

```html
<a href="#service-detail-page" class="service-card">
    <div class="card-icon">🛡️</div>
    <h3 class="card-title">サービス名</h3>
    <p class="card-description">サービスの説明文</p>
    <span class="card-arrow">→</span>
</a>
```

- `href`: 遷移先のページURL（現在は `#` で仮設定）
- `card-icon`: 絵文字アイコン
- `card-title`: サービス名
- `card-description`: サービス説明

### 4. カラーのカスタマイズ

`styles.css` の `:root` セクションで色を変更:

```css
:root {
    --navy-blue: #1a2b4a;      /* メインカラー */
    --gold-accent: #c9a961;    /* アクセントカラー */
    --off-white: #fafafa;      /* 背景色 */
    --pure-white: #ffffff;
    --text-primary: #1a2b4a;
    --text-secondary: #4a5568;
}
```

## 📱 NFCカード連携

### 1. NFCカードへのURL書き込み

NFCカードにこのLPのURLを書き込みます。

**推奨アプリ**:
- iOS: 「NFC Tools」
- Android: 「NFC Tools」または「NFC TagWriter」

### 2. 書き込み手順

1. アプリを開く
2. 「書き込み」を選択
3. 「URL/URI」を選択
4. デプロイしたLPのURLを入力
5. NFCカードをスマホに近づけて書き込み

## 🌐 デプロイ方法

### Vercelでのデプロイ（推奨）

```bash
# Vercel CLIのインストール
npm install -g vercel

# プロジェクトフォルダでデプロイ
vercel

# 本番環境へのデプロイ
vercel --prod
```

### Netlifyでのデプロイ

1. [Netlify](https://www.netlify.com/)にログイン
2. 「New site from Git」を選択
3. リポジトリを選択（またはドラッグ&ドロップ）
4. デプロイ設定はデフォルトのままでOK
5. 「Deploy site」をクリック

### GitHub Pagesでのデプロイ

```bash
# リポジトリ作成後
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# Settings → Pages → Source を「main」ブランチに設定
```

## 🔧 機能一覧

### ✅ 実装済み機能

- ✅ レスポンシブデザイン（モバイル/タブレット/デスクトップ）
- ✅ vCard生成・ダウンロード機能
- ✅ スムーススクロール
- ✅ カードホバーエフェクト
- ✅ LINE連携ボタン
- ✅ パフォーマンス最適化
- ✅ アクセシビリティ対応

### 🔮 拡張可能な機能

- [ ] サービス詳細ページ（4つのサービスごと）
- [ ] お問い合わせフォーム
- [ ] Google Analytics連携
- [ ] チャットボット統合
- [ ] 多言語対応（英語/中国語等）
- [ ] ダークモード切り替え

## 📊 パフォーマンス最適化

- **軽量設計**: バニラJavaScript使用（フレームワーク不要）
- **画像最適化**: WebP形式推奨
- **遅延読み込み**: Intersection Observer実装済み
- **キャッシュ戦略**: 静的ファイルのみ
- **NFCタップ後の高速表示**: 最小限のリソース

## 🛡️ セキュリティ

- 外部リンクに `rel="noopener noreferrer"` を設定済み
- XSS対策のため、ユーザー入力は使用していない
- HTTPS配信を推奨

## 📞 サポート

質問や不具合があれば、プロジェクト管理者にお問い合わせください。

## 📄 ライセンス

このプロジェクトは個人使用を目的としたデモです。

---

**制作日**: 2025年11月3日
**バージョン**: 1.0.0
**対象**: NFCカードブランディング用LP
