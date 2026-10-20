---
title: 卒論のためのTeX環境構築方法
prev: ./
next: ./about
---

# 卒論のためのTeX環境構築方法
[[toc]]

## こちらのページについて
<span style="color: red; ">**こちらのサイトは古いです。初見の方は**</span>[卒論のためのTeX環境構築方法紹介ページ@LuaLateX版](tex_lua.html "卒論のためのTeX環境構築方法紹介ページ")を御覧ください。


こちらのページでは、香川大学造形メディアデザインコースの卒論をTeX（テフ）で作成したい人のために、その環境構築方法について簡単に説明します。
なお、ここで紹介する方法が唯一無二ではございません。

## 前提とするPCの環境
Windows10もしくはmacOS Monterey

※　動作確認済のOSです。macOSの場合はもう少し古くても大丈夫かもしれません。

## ダウンロードしインストールするソフトウェアは２つ
* Windows10の場合はTeX LiveとVisual Studio Code（以下、VSCode）
* macOSの場合はMacTeXとVisual Studio Code（以下、VSCode）

### 注意点
TeX Liveのインストールにはかなりの時間を要します。MPDコース４回生に所有者の多いLet's noteだと<span style="color: red; ">**7時間超え**</span>の報告も受けています。
そのため、就寝前に電源オプションでスリープしない設定をしたのちにインストールすることをおすすめします。

### ダウンロードおよびインストールの方法
TeX Live、MacTeX、VSCodeのインストールについては、さまざまなサイトで解説されているので、ここではとりあげません。
（そのうちこちらでも解説するかもしれませんが・・・）

ちなみに、[今回参考にしたサイトはこちら](https://www.russyi.com/tech-latex-vscode/amp/ "")です。
ダウンロードからインストールまでに関しては、[こちらのサイト](https://www.russyi.com/tech-latex-vscode/amp/ "")などを見ながら進めていって大丈夫です。インストールから先の細かい設定は下記を参考にするとうまくいくはずです。


## PCの設定
### ファイル名拡張子と隠しファイルの表示
ファイル名拡張子と隠しファイルが表示されるようにしてください。
「ファイル名拡張子と隠しファイルの表示」で検索すればすぐに出てきます。

ちなみにWindows10の場合は、窓キー→「エクスプローラー」と入力→出てきたウィンドウメニューの表示にある「ファイル名拡張子」「隠しファイル」にチェックをいれます。

### .latexmkrcの作成と格納
1. メモ帳（macOSの場合はテキストエディット）を開いて、下記のコードをコピペしてください。

```
.latexmkrc
#!/usr/bin/env perl

# LaTeX
$latex = 'platex -synctex=1 -halt-on-error -file-line-error %O %S';
$max_repeat = 5;

# BibTeX
$bibtex = 'pbibtex %O %S';
$biber = 'biber --bblencoding=utf8 -u -U --output_safechars %O %S';

# index
$makeindex = 'mendex %O -o %D %S';

# DVI / PDF
$dvipdf = 'dvipdfmx %O -o %D %S';
$pdf_mode = 3;

# preview
$pvc_view_file_via_temporary = 0;
if ($^O eq 'linux') {
    $dvi_previewer = "xdg-open %S";
    $pdf_previewer = "xdg-open %S";
} elsif ($^O eq 'darwin') {
    $dvi_previewer = "open %S";
    $pdf_previewer = "open %S";
} else {
    $dvi_previewer = "start %S";
    $pdf_previewer = "start %S";
}

# clean up
$clean_full_ext = "%R.synctex.gz"
```

2. メモ帳の場合は、ファイル→名前をつけて保存をクリックしてください。ファイル名は` .latexmkrc `です。なお、ファイルの種類は「すべての種類」とします。保存場所は左のナビゲーションウィンドウからLocal Disk(C:)をクリック、ユーザーをクリック、PCに名付けているユーザー名をクリックした所です。Macの場合は、`$HOME` すなわち` /Users/<ユーザー名>` に保存してください。

## VSCodeの設定
### 日本語化
VSCodeの日本語化は拡張機能で簡単に実現します。下図に示す流れの通り、VSCodeの左側のアイコンの一番下をクリックし、出てきたテキストボックスにJapanと入力、一番上に出てきたのをInstall後、VSCodeを再起動すれば日本語化されているのを確認できます。

<img src="/assets/img/teximages/vscode_nihongoka.png" width="600" alt="VSCodeの日本語化"/>



### TeX Workshopのインストール
上記日本語化と同じ要領でTeX Workshopをインストールし、VSCodeを再起動してください。
<img src="/assets/img/teximages/tex_workshop.png" width="600" alt="VSCodeの日本語化"/>



### setting.jsonの書き換え
1. 左下の歯車アイコンをクリックし、設定を選択してください。
2. 次の画像の赤枠のアイコンをクリックしてください。
<img src="/assets/img/teximages/vscode_setting_json.png" width="600" alt="VSCodeの日本語化"/>

3. 出てきた{}setting.jsonを次のコードに書き換えてください。こちらもコピペで問題ないです。

```
{
  "latex-workshop.latex.recipes": [
    {
        "name": "ptex2pdf",
        "tools": [
            "ptex2pdf"
        ]
    }
],
"latex-workshop.latex.tools": [
    {
        "name": "ptex2pdf",
        "command": "ptex2pdf",
        "args": [
            "-l",
            "-ot",
            "-kanji=utf8 -synctex=1",
            "-interaction=nonstopmode", // エラー発生時に自動でビルド停止
            "%DOC%"
        ]
    }
],
"latex-workshop.view.pdf.viewer": "tab",
"security.workspace.trust.untrustedFiles": "open",
// コンパイル後に補助ファイルを削除
"latex-workshop.latex.clean.subfolder.enabled": true,
"latex-workshop.latex.clean.fileTypes": [
    // "*.aux",  // label使う上で必要
    "*.bbl",
    "*.blg",
    "*.idx",
    "*.ind",
    "*.lof",
    "*.lot",
    "*.out",
    "*.toc",
    "*.acn",
    "*.acr",
    "*.alg",
    "*.glg",
    "*.glo",
    "*.gls",
    "*.ist",
    "*.fls",
    "*.log",
    "*.fdb_latexmk",
    "*.gz",
],
// いつ削除するか
"latex-workshop.latex.autoClean.run": "onFailed",
// 使用済みパッケージのコマンドと環境を補完
"latex-workshop.intellisense.package.enabled": true,
// \をタイプ時にunimathシンボルを表示
"latex-workshop.intellisense.unimathsymbols.enabled": true,
// 各種math環境のホバープレビューのカーソル色
"latex-workshop.hover.preview.cursor.color": "cyan",
// pdf viewerのデフォルトのズームレベル
"latex-workshop.view.pdf.zoom": "auto",
}
```


### VSCodeでTeXファイルを開くための作業
ここからは、香川大学創造工学部造形・メディアデザインコースの卒論用TeXセット`thesis_style_mpd.zip`がお手元にある前提の話になります。こちらに関しては各自ご準備ください（許可が出たらこちらのサイトでも配布します）。ちなみに現在最新のセットは`thesis_style_mpd_v8.zip`です。

1. `thesis_style_mpd.zip`を解凍（右クリックメニューで「すべて展開」）し、デスクトップやドキュメントなど好きな場所に置いてください
2. `thesis_style_mpd`フォルダ→`thesis_style`フォルダ内の`thesis.tex`を右クリックし、「プログラムから開く」→「別のプログラムを選択(C)」→Visual Studio Codeを選択、「常にこのアプリを使って.texファイルを開く」にチェックを入れ、OKボタンを押下してください
3. すると下図のような画面が表示されるはずです。されなかったら読み飛ばしても大丈夫です。
<img src="/assets/img/teximages/vscode_shinrai1.png" width="600" alt=""/>

4. 上部の管理ボタンを押すと、下図の画面になります。

<img src="/assets/img/teximages/vscode_shinrai2.png" width="600" alt=""/>

5. 上図のように、「信頼する」を選択し、編集したい`thesis_style_mpd`フォルダを選択してください。その後、上部のワークスペースの信頼タブを閉じてください。

これですべての環境設定は終了です。


## VSCodeでのTeXの編集方法
ここからは、具体的な操作方法について簡単に述べていきます。

1. まず、下図に示す２つの箇所をクリックしてください
<img src="/assets/img/teximages/vscode_tex1.png" width="600" alt=""/>

2. サンプルとして用意されている画面が見えてきましたね。試しに、「象の卵のデザイン」のところを適当に変え、Ctrl+S（MacならCommand+S）で保存してみてください。しばらく待つと右に表示されているPDFに変化がみられるはずです（うまく反映されない場合は、もう一度Ctrl+S（MacならCommand+S）するとうまくいくことがあります）。

3. ちなみに、`%`はコメントアウトです。生成されるPDFには反映されません。修正前の文章やメモを残しておきたい場合にはとても役に立ちます。こちら、複数行を選択してCtrl+/（キーボードの"め"）でまとめてコメントアウトができます。


## 図の画像形式について
図の画像形式についてはJpegやPNGなどでも問題ないですが、印刷するとぼやけた絵が出力される可能性があります。
できればAdobeのソフトを用いてEPS形式を利用するようにしましょう。

## その他
まずはサンプルの日本語の箇所や図表から変更し、どうなるのか試していってください。その後、数式や90度回転させた大きな表など、卒論内で表現したいことについて、いろいろ試すとよいでしょう。TeXは先人による膨大な情報がネット上に転がっています。検索すれば何らかの解が見つかるでしょうし、詳しそうな教員や先輩、同期などに質問してください。本サイトでも余裕があれば追記していきます。




## VSCodeでのTeX編集時のエラー対処法
0. 下図に示す箇所をクリックしておいてください

<img src="/assets/img/teximages/vscode_tex2.png" width="600" alt=""/>

0. こんな感じになります

<img src="/assets/img/teximages/vscode_tex3.png" width="600" alt=""/>

1. 当たり前ですが、TeXは誤った命令を下すとエラーが発生してPDFを生成しません。ためしに、14行目の`\date`を`\dat`にしてCtrl+S（MacならCommand+S）で保存してみましょう。左下に×印が出現します（下図（2））。
次に、右下に出現したウィンドウの「Open compiler log」をクリックしてください（下図（3））。


<img src="/assets/img/teximages/vscode_tex_error1.png" width="600" alt=""/>

2. 出力結果を表示するウィンドウが開きます。下図に示すとおり、[問題]をクリックすると…
<img src="/assets/img/teximages/vscode_tex_error2.png" width="600" alt=""/>

3. おかしい箇所が指摘されています。
<img src="/assets/img/teximages/vscode_tex_error3.png" width="600" alt=""/>


4. ちなみに、下図のように青いiマークの部分については、PDFの出力がうまくいっているのなら無視して構いません。
<img src="/assets/img/teximages/vscode_tex_error4.png" width="600" alt=""/>



5. 修正後、下図の「Recipe:ptex2pdf」をクリックし、うまくいったか確かめます。うまく反映されない場合はもう一度クリックしてみましょう。
<img src="/assets/img/teximages/vscode_tex_error5.png" width="600" alt=""/>


以上です。まだ粗い説明の箇所もあり、随時更新中です。香川大MPDコースの方は気軽に質問やコメントください。

## 参考サイト
- [VSCodeでLaTeX環境構築（Win, Mac対応, BigSur対応） - とりあえずいろんな情報記（仮）](https://www.russyi.com/tech-latex-vscode/amp/ "VSCodeでLaTeX環境構築（Win, Mac対応, BigSur対応） - とりあえずいろんな情報記（仮）")
- [LaTeX + VSCode ではじめる美文書作成入門【導入編】 | Golden Memories](https://blog.loliver.net/2020/07/17/texlive-installation/#toc8 "LaTeX + VSCode ではじめる美文書作成入門【導入編】 | Golden Memories")
