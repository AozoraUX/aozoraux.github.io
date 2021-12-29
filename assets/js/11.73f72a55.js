(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(t,e,a){"use strict";a.r(e);var s=a(28),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"卒論のためのtex環境構築方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卒論のためのtex環境構築方法"}},[t._v("#")]),t._v(" 卒論のためのTeX環境構築方法")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#こちらのページについて"}},[t._v("こちらのページについて")])]),a("li",[a("a",{attrs:{href:"#前提とするpcの環境"}},[t._v("前提とするPCの環境")])]),a("li",[a("a",{attrs:{href:"#ダウンロードしインストールするソフトウェアは2つ"}},[t._v("ダウンロードしインストールするソフトウェアは２つ")]),a("ul",[a("li",[a("a",{attrs:{href:"#注意点"}},[t._v("注意点")])]),a("li",[a("a",{attrs:{href:"#ダウンロードおよびインストールの方法"}},[t._v("ダウンロードおよびインストールの方法")])])])]),a("li",[a("a",{attrs:{href:"#pcの設定"}},[t._v("PCの設定")]),a("ul",[a("li",[a("a",{attrs:{href:"#ファイル名拡張子と隠しファイルの表示"}},[t._v("ファイル名拡張子と隠しファイルの表示")])]),a("li",[a("a",{attrs:{href:"#latexmkrcの作成と格納"}},[t._v(".latexmkrcの作成と格納")])])])]),a("li",[a("a",{attrs:{href:"#vscodeの設定"}},[t._v("VSCodeの設定")]),a("ul",[a("li",[a("a",{attrs:{href:"#日本語化"}},[t._v("日本語化")])]),a("li",[a("a",{attrs:{href:"#tex-workshopのインストール"}},[t._v("TeX Workshopのインストール")])]),a("li",[a("a",{attrs:{href:"#setting-jsonの書き換え"}},[t._v("setting.jsonの書き換え")])]),a("li",[a("a",{attrs:{href:"#vscodeでtexファイルを開くための作業"}},[t._v("VSCodeでTeXファイルを開くための作業")])])])]),a("li",[a("a",{attrs:{href:"#vscodeでのtexの編集方法"}},[t._v("VSCodeでのTeXの編集方法")])]),a("li",[a("a",{attrs:{href:"#vscodeでのtex編集時のエラー対処法"}},[t._v("VSCodeでのTeX編集時のエラー対処法")])]),a("li",[a("a",{attrs:{href:"#参考サイト"}},[t._v("参考サイト")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"こちらのページについて"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#こちらのページについて"}},[t._v("#")]),t._v(" こちらのページについて")]),t._v(" "),a("p",[t._v("こちらのページでは、香川大学造形メディアデザインコースの卒論をTeXで作成したい人のために、その環境構築方法について簡単に説明します。\nなお、こちらで紹介する方法が唯一無二ではございません。")]),t._v(" "),a("h2",{attrs:{id:"前提とするpcの環境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提とするpcの環境"}},[t._v("#")]),t._v(" 前提とするPCの環境")]),t._v(" "),a("p",[t._v("Windows10もしくはmacOS Monterey")]),t._v(" "),a("p",[t._v("※　動作確認済のOSです。macOSの場合はもう少し古くても大丈夫かもしれません。")]),t._v(" "),a("h2",{attrs:{id:"ダウンロードしインストールするソフトウェアは2つ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ダウンロードしインストールするソフトウェアは2つ"}},[t._v("#")]),t._v(" ダウンロードしインストールするソフトウェアは２つ")]),t._v(" "),a("ul",[a("li",[t._v("Windows10の場合はTeX LiveとVisual Studio Code（以下、VSCode）")]),t._v(" "),a("li",[t._v("macOSの場合はMacTeXとVisual Studio Code（以下、VSCode）")])]),t._v(" "),a("h3",{attrs:{id:"注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),a("p",[t._v("TeX Liveのインストールにはかなりの時間を要します。MPDコース４回生に所有者の多いLet'snoteだと7時間超えの報告も受けてます。\nそのため、就寝前に電源オプションでスリープしない設定をしたのちにインストールすることをおすすめします。")]),t._v(" "),a("h3",{attrs:{id:"ダウンロードおよびインストールの方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ダウンロードおよびインストールの方法"}},[t._v("#")]),t._v(" ダウンロードおよびインストールの方法")]),t._v(" "),a("p",[t._v("TeX Live、MacTeX、VSCodeのインストールについては、さまざまなサイトで解説されているので、ここではとりあげません。\n（そのうちこちらでも解説するかもしれませんが・・・）")]),t._v(" "),a("p",[t._v("ちなみに、"),a("a",{attrs:{href:"https://www.russyi.com/tech-latex-vscode/amp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("私が参考にしたサイトはこちら"),a("OutboundLink")],1),t._v("です。インストールまでに関しては、こちらのサイトを見ながら進めていって大丈夫です。インストール以外の細かい設定は下記を参考にするとうまくいきます。")]),t._v(" "),a("h2",{attrs:{id:"pcの設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pcの設定"}},[t._v("#")]),t._v(" PCの設定")]),t._v(" "),a("h3",{attrs:{id:"ファイル名拡張子と隠しファイルの表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ファイル名拡張子と隠しファイルの表示"}},[t._v("#")]),t._v(" ファイル名拡張子と隠しファイルの表示")]),t._v(" "),a("p",[t._v("ファイル名拡張子と隠しファイルが表示されるようにしてください。\n「ファイル名拡張子と隠しファイルの表示」で検索すればすぐに出てきます。")]),t._v(" "),a("p",[t._v("ちなみにWindows10の場合は、窓キー→「エクスプローラー」と入力→出てきたウィンドウメニューの表示にある「ファイル名拡張子」「隠しファイル」にチェックをいれます。")]),t._v(" "),a("h3",{attrs:{id:"latexmkrcの作成と格納"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#latexmkrcの作成と格納"}},[t._v("#")]),t._v(" .latexmkrcの作成と格納")]),t._v(" "),a("ol",[a("li",[t._v("メモ帳（macOSの場合はテキストエディット）を開いて、下記のコードをコピペしてください。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".latexmkrc\n#!/usr/bin/env perl\n\n# LaTeX\n$latex = 'platex -synctex=1 -halt-on-error -file-line-error %O %S';\n$max_repeat = 5;\n\n# BibTeX\n$bibtex = 'pbibtex %O %S';\n$biber = 'biber --bblencoding=utf8 -u -U --output_safechars %O %S';\n\n# index\n$makeindex = 'mendex %O -o %D %S';\n\n# DVI / PDF\n$dvipdf = 'dvipdfmx %O -o %D %S';\n$pdf_mode = 3;\n\n# preview\n$pvc_view_file_via_temporary = 0;\nif ($^O eq 'linux') {\n    $dvi_previewer = \"xdg-open %S\";\n    $pdf_previewer = \"xdg-open %S\";\n} elsif ($^O eq 'darwin') {\n    $dvi_previewer = \"open %S\";\n    $pdf_previewer = \"open %S\";\n} else {\n    $dvi_previewer = \"start %S\";\n    $pdf_previewer = \"start %S\";\n}\n\n# clean up\n$clean_full_ext = \"%R.synctex.gz\"\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("メモ帳の場合は、ファイル→名前をつけて保存をクリックしてください。ファイル名は"),a("code",[t._v(".latexmkrc")]),t._v("です。なお、ファイルの種類は「すべての種類」とします。保存場所は左のナビゲーションウィンドウからLocal Disk(C:)をクリック、ユーザーをクリック、PCに名付けているユーザ名をクリックした所です。")])]),t._v(" "),a("h2",{attrs:{id:"vscodeの設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscodeの設定"}},[t._v("#")]),t._v(" VSCodeの設定")]),t._v(" "),a("h3",{attrs:{id:"日本語化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日本語化"}},[t._v("#")]),t._v(" 日本語化")]),t._v(" "),a("p",[t._v("VSCodeの日本語化は拡張機能で簡単に実現します。下図に示す流れの通り、VSCodeの左側のアイコンの一番下をクリックし、出てきたテキストボックスにJapanと入力、一番上に出てきたのをInstall後、VSCodeを再起動すれば日本語化されているのを確認できます。")]),t._v(" "),a("img",{attrs:{src:"assets/img/teximages/vscode_nihongoka.png",width:"600",alt:"VSCodeの日本語化"}}),t._v(" "),a("h3",{attrs:{id:"tex-workshopのインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tex-workshopのインストール"}},[t._v("#")]),t._v(" TeX Workshopのインストール")]),t._v(" "),a("p",[t._v("上記日本語化と同じ要領でTeX Workshopをインストールし、VSCodeを再起動してください。\n"),a("img",{attrs:{src:"assets/img/teximages/tex_workshop.png",width:"600",alt:"VSCodeの日本語化"}})]),t._v(" "),a("h3",{attrs:{id:"setting-jsonの書き換え"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-jsonの書き換え"}},[t._v("#")]),t._v(" setting.jsonの書き換え")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("左下の歯車アイコンをクリックし、設定を選択してください。")])]),t._v(" "),a("li",[a("p",[t._v("次の画像の赤枠のアイコンをクリックしてください。\n"),a("img",{attrs:{src:"assets/img/teximages/vscode_setting_json.png",width:"600",alt:"VSCodeの日本語化"}})])]),t._v(" "),a("li",[a("p",[t._v("出てきた{}setting.jsonを次のコードをに書き換えてください。こちらもコピペで問題ないです。")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "latex-workshop.latex.recipes": [\n    {\n        "name": "ptex2pdf",\n        "tools": [\n            "ptex2pdf"\n        ]\n    }\n],\n"latex-workshop.latex.tools": [\n    {\n        "name": "ptex2pdf",\n        "command": "ptex2pdf",\n        "args": [\n            "-l",\n            "-ot",\n            "-kanji=utf8 -synctex=1",\n            "%DOC%"\n        ]\n    }\n],\n"latex-workshop.view.pdf.viewer": "tab",\n}\n')])])]),a("h3",{attrs:{id:"vscodeでtexファイルを開くための作業"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscodeでtexファイルを開くための作業"}},[t._v("#")]),t._v(" VSCodeでTeXファイルを開くための作業")]),t._v(" "),a("p",[t._v("こちらからは、香川大学創造工学部造形・メディアデザインコースの卒論用TeXセット"),a("code",[t._v("thesis_style_mpd.zip")]),t._v("がお手元にある前提の話になります。こちらに関しては各自ご準備ください（許可が出たらこちらのサイトでも配布します）。")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("thesis_style_mpd.zip")]),t._v("を解凍（右クリックメニューで「すべて展開」）し、デスクトップやドキュメントなど好きな場所に置いてください")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("thesis_style_mpd")]),t._v("ファルダ→"),a("code",[t._v("thesis_style")]),t._v("ファルダ内の"),a("code",[t._v("thesis.tex")]),t._v("を右クリックし、「プログラムから開く」→「別のプログラムを選択(C)」→Visual Studio Codeを選択、「常にこのアプリを使って.texファイルを開く」にチェックを入れ、OKボタンを押下してください")])]),t._v(" "),a("li",[a("p",[t._v("すると下図のような画面が表示されるはずです。されなかったら読み飛ばしても大丈夫です。\n"),a("img",{attrs:{src:"assets/img/teximages/vscode_shinrai1.png",width:"600",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("上部の管理ボタンを押すと、下図の画面になります。")])])]),t._v(" "),a("img",{attrs:{src:"assets/img/teximages/vscode_shinrai2.png",width:"600",alt:""}}),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("上図のように、「信頼する」を選択し、編集したい"),a("code",[t._v("thesis_style_mpd")]),t._v("ファルダを選択してください。")])]),t._v(" "),a("p",[t._v("これですべての環境設定は終了です。")]),t._v(" "),a("h2",{attrs:{id:"vscodeでのtexの編集方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscodeでのtexの編集方法"}},[t._v("#")]),t._v(" VSCodeでのTeXの編集方法")]),t._v(" "),a("p",[t._v("こちらからは、具体的な操作方法について簡単に述べていきます。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("まず、下図に示す２つの箇所をクリックしてください\n"),a("img",{attrs:{src:"assets/img/teximages/vscode_tex1.png",width:"600",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("サンプルとして用意されている画面が見えてきましたね。試しに、「象の卵のデザイン」のところを適当に変え、Ctrl+S（MacならCommand+S）で保存してみてください。しばらく待つと右に表示されているPDFに変化がみられるはずです。")])])]),t._v(" "),a("p",[t._v("その他、数式や90度回転させた大きな表など、卒論内で表現したいことについて、いろいろ試すとよいでしょう。TeXは先人による膨大な情報がネット上に転がってます。検索すれば何らかの解が見つかるでしょうし、詳しそうな教員や先輩、同期などに質問してください。本サイトでも余裕があれば追記していきます。")]),t._v(" "),a("h2",{attrs:{id:"vscodeでのtex編集時のエラー対処法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscodeでのtex編集時のエラー対処法"}},[t._v("#")]),t._v(" VSCodeでのTeX編集時のエラー対処法")]),t._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[t._v("下図に示す箇所をクリックしておいてください")])]),t._v(" "),a("img",{attrs:{src:"assets/img/teximages/vscode_tex2.png",width:"600",alt:""}}),t._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[t._v("こんな感じになります")])]),t._v(" "),a("img",{attrs:{src:"assets/img/teximages/vscode_tex3.png",width:"600",alt:""}}),t._v(" "),a("ol",[a("li",[t._v("当たり前ですが、TeXは誤った命令を下すとエラーが発生してPDFを生成しません。ためしに、13行目の"),a("code",[t._v("\\date")]),t._v("を"),a("code",[t._v("\\dat")]),t._v("にしてCtrl+Sしてみましょう。下図の左下のようにBuildが長い間終わらない状態になります")])]),t._v(" "),a("img",{attrs:{src:"assets/img/teximages/vscode_tex_error1.png",width:"600",alt:""}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("このようになった場合、下図に示す「□Terminate current complication」を何回か連打します。次に、右下に出現したウィンドウの「Open compiler log」をクリックしてください")])]),t._v(" "),a("img",{attrs:{src:"assets/img/teximages/vscode_tex_error2.png",width:"600",alt:""}}),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("すると、下図のようにおかしい箇所を指摘してくれます。なお、問題タブにも色々でてきますが、基本的にPDFの出力がうまく行ってるのなら無視しても構いません。")])]),t._v(" "),a("img",{attrs:{src:"assets/img/teximages/vscode_tex_error3.png",width:"600",alt:""}}),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("修正後、「□Terminate current complication」の下の「Recipe:ptex2pdf」をクリックし、うまくいったか確かめます。")])]),t._v(" "),a("h2",{attrs:{id:"参考サイト"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考サイト"}},[t._v("#")]),t._v(" 参考サイト")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.russyi.com/tech-latex-vscode/amp/",title:"VSCodeでLaTeX環境構築（Win, Mac対応, BigSur対応） - とりあえずいろんな情報記（仮）",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCodeでLaTeX環境構築（Win, Mac対応, BigSur対応） - とりあえずいろんな情報記（仮）"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);