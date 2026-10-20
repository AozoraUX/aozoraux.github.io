# 現象デザイン研究室 Webサイト

https://aozoraux.github.io/ のソースです（VuePress 2 / デフォルトテーマ）。

## ブランチ構成

| ブランチ | 中身 |
| --- | --- |
| `master` | 原稿（Markdown）と設定。**編集するのはこちら** |
| `main` | ビルド済みHTML。GitHub Actions が自動で上書きするので直接編集しない |

`master` に push すると GitHub Actions（`.github/workflows/deploy.yml`）がビルドし、`main` に反映 → 数分でサイトが更新されます。

## フォルダ構成

```
docs/
├─ README.md        トップページ（更新情報・TIPもここ）
├─ about.md         研究室の紹介
├─ member.md        メンバー
├─ report.md        活動報告
├─ works.md         成果
├─ access.md        アクセス
├─ tex.md / tex_lua.md   卒論TeX環境構築
└─ .vuepress/
   ├─ config.js     サイト設定（ナビゲーション、プラグイン等）
   ├─ styles/index.scss  独自スタイル（配色・マーカー）
   └─ public/       画像やzip等（/assets/img/... としてそのまま公開）
```

## よくある更新

### 活動報告を追加する（`docs/report.md`）

目次 `[[toc]]` の直後に新しい記事を追加します。`::: theorem` と `:::` は必ず対にしてください。

```md
## 2026年10月20日 タイトル

::: theorem 掲載日時:2026-10-20

本文

![写真の説明](/assets/img/images/report/2026_10_example.jpg "写真の説明")

:::
```

写真は `docs/.vuepress/public/assets/img/images/report/` に置きます。

### トップページの更新情報（`docs/README.md`）

「## 更新情報」のリストの先頭に1行追加します。

### 文字に蛍光ペン風マーカーを引く

```md
<span class="marker_yellow_hoso">強調したい文</span>
```

## 手元でプレビュー・ビルドする

Node.js 20 以上が必要です。

```sh
npm install          # 初回のみ
npm run docs:dev     # http://localhost:8080 でプレビュー（保存すると自動反映）
npm run docs:build   # docs/.vuepress/dist に出力
```

## メモ

- 2026年10月、PCクラッシュ後に旧PCのバックアップ（`Documents/aozoraUX/aozorauxlab/docs`）から原稿を回収し、VuePress 2.0.0-rc.31 に移行しました。2024年9〜12月に追記された Works の内容（未公開だったもの）もここで初めて公開されます。
- 以前は `docs` が GitHub に上がらない別リポジトリ（サブモジュール）になっていたのが原稿消失の原因です。今後は原稿もこのリポジトリの `master` で管理されます。
