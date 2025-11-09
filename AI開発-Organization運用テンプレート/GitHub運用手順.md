# GitHub & Vercel Workflow Guidelines

このドキュメントは、TSAI Link のメインアカウント（`tsailink0611`）を基点に、各ビジネスカテゴリを GitHub の Organization で整理し、Vercel と連携して LP サイトをデプロイするための標準手順をまとめたものです。

## 全体ポリシー

- **個人アカウントは `tsailink0611` を唯一のログイン拠点とする。**
- **ビジネスカテゴリごとに Organization を作成**（例：`nfc-lb-branding`）。
- 各プロジェクトは該当 Organization 配下にリポジトリを作成。
- デプロイは Vercel の同一チーム（`tsailink0611's projects`）で管理。
- 認証はすべて `tsailink0611` の Personal Access Token（PAT）で行い、他アカウントを増やさない。

## 1. GitHub リポジトリ作成フロー

1. GitHub で `tsailink0611` としてログイン。
2. 対象 Organization ページに移動し、**New repository** を選択。
3. Repository name に案件名（例：`finance-consult-landing-Test`）を入力。
4. Visibility は必要に応じて Public / Private を選択。
5. 初期化オプションは空のままで問題ありません。
6. **Create repository** を押して完了。

> CLI を使う場合
> ```powershell
> gh repo create nfc-lb-branding/<repo-name> --public --confirm
> ```

## 2. ローカルリポジトリ設定

1. ローカルでプロジェクトディレクトリを用意し、必要な初期ファイルを配置。
2. `git init` → `git add .` → `git commit -m "Initial commit"` を実行。
3. Organization のリポジトリをリモートに設定。
   ```powershell
   git remote add origin https://github.com/nfc-lb-branding/<repo-name>.git
   ```
4. 最初の push で `main` ブランチを公開。
   ```powershell
   git push -u origin main
   ```

### 認証に関する注意

- push 時は **`tsailink0611` の Classic PAT（`repo` 権限）** を使用。
- 403 が出る場合は、Windows 資格情報マネージャーで `git:https://github.com` の資格情報を削除し、再度 push して PAT を入力。
- PAT は使い回さず、用途ごとに分けて保管する。不要になったら GitHub の設定画面で revoke。

## 3. Vercel へのインポート

1. <https://vercel.com/t/tsailink0611s-projects> にアクセス。
2. 右上 **Add New → Project** をクリック。
3. GitHub Integration で Organization のリポジトリを選択し **Import**。
   - もしリポジトリが表示されなければ、`Settings → Git` で `All repositories` または対象リポジトリを追加。
4. Build 設定は基本デフォルト（Static サイトの場合、Build Command/Output の指定は不要）。
5. **Deploy** を押してビルド完了を待つ。
6. 完了後に表示される URL を関係者と共有。

## 4. トラブルシューティングメモ

| 症状 | 対処 |
|------|------|
| `Permission denied` / `403` | 資格情報マネージャーで GitHub 資格情報を削除し、`tsailink0611` の PAT で再 push |
| Vercel の Import 画面にリポジトリが出ない | Vercel の `Settings → Git` でアクセス対象に追加するか、GitHub Integration を再インストール |
| PAT が入力できる欄が見当たらない | 認証ダイアログで **Token** タブを選択し、PAT を貼り付けて Sign in |

## 5. 運用ベストプラクティス

- プロジェクト開始前に **Organization 名 → リポジトリ名 → Vercel プロジェクト名** を決めておく。
- ドキュメント用ディレクトリ（`docs/`）に、案件ごとの補足情報や要件を書き残す。
- コミットは明確なメッセージで、main に直接 push する場合も変更内容を整理してから実行。
- 資格情報を PC 間で共有しない。必要に応じて新しい PAT を発行。
- プロジェクトルートに `.claude/PROJECT.md` を配置し、AI開発ツールに運用ルールを認識させる。

## 6. 複数ビジネス展開時の Organization 管理

### Organization 構成例

```
tsailink0611 (個人アカウント)
├── nfc-lb-branding (NFCカード × LPビジネス)
│   ├── finance-consult-landing-Test
│   ├── beauty-salon-landing
│   └── law-office-landing
│
├── real-estate-ai-chatbot (不動産AI対話システム)
│   └── line-dify-integration
│
└── future-business-category (将来のビジネス)
    └── (新規プロジェクト)
```

### 新規ビジネスカテゴリ立ち上げ手順

1. GitHub で `tsailink0611` としてログイン
2. 右上のプロフィール → **Your organizations** → **New organization**
3. Organization 名を入力（例：`digital-marketing-suite`）
   - ビジネス内容を反映した明確な名前にする
   - 後から変更が困難なため慎重に決定
4. Free プランで作成（プライベートリポジトリが必要な場合は有料プラン検討）
5. 最初のリポジトリを作成し、上記手順 1～3 に従ってデプロイ

### Organization 間の切り替え

- GitHub / Vercel の左上ドロップダウンで Organization を切り替え
- すべて `tsailink0611` の認証で統一されているため、アカウント切り替え不要
- Organization ごとに PAT を分ける必要はなし（1つの PAT で全 Organization にアクセス可能）

---

この手順をテンプレートとして、今後の LP／サイト制作も同じワークフローで進めてください。

---

## 使い方

1. このファイルをプロジェクトの `docs/` フォルダに配置
2. `.claude/PROJECT.md` と組み合わせて使用
3. Claude Code、Cursor、Windsurf などで開発する際に参照
4. 新規プロジェクト開始時にこのファイルをコピーして再利用
