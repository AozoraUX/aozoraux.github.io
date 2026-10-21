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
├─ report.md        活動報告の一覧ページ（中身は自動）
├─ report/          活動報告の記事（1記事 = 1ファイル）
├─ works.md         成果（researchmap から自動取得 ＋ 手書き分）
├─ access.md        アクセス
├─ tex.md / tex_lua.md   卒論TeX環境構築
└─ .vuepress/
   ├─ config.js     サイト設定（ナビゲーション、プラグイン等）
   ├─ plugins/      活動報告（report.js）・成果（works.js）の仕組み
   ├─ components/   活動報告の一覧（ReportList.vue）
   ├─ layouts/      活動報告の記事ページ（Post.vue）
   ├─ data/researchmap.json  researchmap から取得した業績（自動更新）
   ├─ styles/index.scss  独自スタイル（配色・マーカー）
   └─ public/       画像やzip等（/assets/img/... としてそのまま公開）
```

## よくある更新

### 活動報告を追加する（`docs/report/`）

`docs/report/` に `日付.md`（例: `2026-10-20.md`）を1つ作るだけで、一覧・タグ・前後の記事リンクに自動で反映されます。同じ日に2本目を書くときは `2026-10-20-2.md` のようにします。

```md
---
title: "タイトル"
date: 2026-10-20
tags: [学会発表, 受賞]
cover: /assets/img/images/report/2026_10_example.jpg
---

本文

![写真の説明](/assets/img/images/report/2026_10_example.jpg "写真の説明")
```

| 項目 | 説明 |
| --- | --- |
| `title` | 記事のタイトル（必須） |
| `date` | 出来事の日付。一覧はこの新しい順に並びます（必須） |
| `period` | 「2026年10月20-21日」のように期間で表示したいとき（任意） |
| `tags` | タグ。既存のもの：学会発表・受賞・研究室・イベント・メディア・出版・卒業・修了・オープンキャンパス・授業・PBL（新しく作ってもOK） |
| `cover` | 一覧のカードに出す写真（任意。無ければロゴ） |
| `draft` | `true` にすると一覧に出しません（下書き） |

写真は `docs/.vuepress/public/assets/img/images/report/` に置きます。
旧ページの `report.html#見出し` へのリンクは、該当する記事へ自動で移動します（記事の `legacy_id`）。

### 成果（Works）を更新する

成果ページは、**researchmap（https://researchmap.jp/tktmr）の登録内容を自動で取り込み**、`docs/works.md` に手書きした分と合わせて表示します。

- 論文・発表・受賞・外部資金・社会貢献・メディアなどは **researchmap に登録すれば** 載ります。サイトは push 時と毎週月曜の朝に自動で作り直されるので、遅くとも1週間で反映されます（急ぐときは GitHub の Actions → Deploy site → Run workflow）。
- researchmap に無いもの（学生の受賞、卒業論文・修士論文など）は、これまでどおり `docs/works.md` の「## 2026年」「### 受賞」…の下に箇条書きで書きます。
- 同じ実績が両方にあるときは **手書きのほうが優先** され、researchmap 側は表示されません。表記を整えたいものは手書きしておけば確実です。
- 載せたくない researchmap の項目は、`works.md` の先頭にある `researchmap_hide` に項目ID（researchmap の各項目URLの末尾の数字）を追加します。

### トップページの更新情報（`docs/README.md`）

「## 更新情報」のリストの先頭（`<MoreList>` の下）に1行追加します。最初の20件だけが表示され、それより古いものは「続きを読む」で表示されます。`<MoreList>` と `</MoreList>` の行、その前後の空行は消さないでください。

### 文字に蛍光ペン風マーカーを引く

```md
<span class="marker_yellow_hoso">強調したい文</span>
```

## 手元でプレビュー・ビルドする

Node.js 20 以上が必要です。

```sh
npm install          # 初回のみ
npm run docs:dev     # http://localhost:8080 でプレビュー（保存すると自動反映）
npm run docs:build   # researchmap から最新データを取得してから docs/.vuepress/dist に出力
npm run researchmap  # researchmap のデータ取得だけ行う
```

## メモ

- 2026年10月、PCクラッシュ後に旧PCのバックアップ（`Documents/aozoraUX/aozorauxlab/docs`）から原稿を回収し、VuePress 2.0.0-rc.31 に移行しました。2024年9〜12月に追記された Works の内容（未公開だったもの）もここで初めて公開されます。
- 2026年10月、活動報告を記事ごとのブログ形式にし、成果ページを researchmap と連動させました。
- 以前は `docs` が GitHub に上がらない別リポジトリ（サブモジュール）になっていたのが原稿消失の原因です。今後は原稿もこのリポジトリの `master` で管理されます。
