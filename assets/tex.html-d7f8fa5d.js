import{_ as r,a as u,b as c,c as v,d as m,e as p}from"./vscode_tex1-2fb2aeab.js";import{_ as h,r as d,o as b,c as _,a as e,b as n,w as l,d as i,e as a}from"./app-14cb1539.js";const q="/assets/img/teximages/vscode_tex2.png",x="/assets/img/teximages/vscode_tex3.png",f="/assets/img/teximages/vscode_tex_error1.png",g="/assets/img/teximages/vscode_tex_error2.png",w="/assets/img/teximages/vscode_tex_error3.png",S="/assets/img/teximages/vscode_tex_error4.png",C="/assets/img/teximages/vscode_tex_error5.png",k={},V=e("h1",{id:"卒論のためのtex環境構築方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#卒論のためのtex環境構築方法","aria-hidden":"true"},"#"),i(" 卒論のためのTeX環境構築方法")],-1),T={class:"table-of-contents"},X=e("h2",{id:"こちらのページについて",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#こちらのページについて","aria-hidden":"true"},"#"),i(" こちらのページについて")],-1),y=e("span",{style:{color:"red"}},[e("strong",null,"こちらのサイトは古いです。初見の方は")],-1),$=a('<p>こちらのページでは、香川大学造形メディアデザインコースの卒論をTeX（テフ）で作成したい人のために、その環境構築方法について簡単に説明します。 なお、ここで紹介する方法が唯一無二ではございません。</p><h2 id="前提とするpcの環境" tabindex="-1"><a class="header-anchor" href="#前提とするpcの環境" aria-hidden="true">#</a> 前提とするPCの環境</h2><p>Windows10もしくはmacOS Monterey</p><p>※　動作確認済のOSです。macOSの場合はもう少し古くても大丈夫かもしれません。</p><h2 id="ダウンロードしインストールするソフトウェアは2つ" tabindex="-1"><a class="header-anchor" href="#ダウンロードしインストールするソフトウェアは2つ" aria-hidden="true">#</a> ダウンロードしインストールするソフトウェアは２つ</h2><ul><li>Windows10の場合はTeX LiveとVisual Studio Code（以下、VSCode）</li><li>macOSの場合はMacTeXとVisual Studio Code（以下、VSCode）</li></ul><h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h3><p>TeX Liveのインストールにはかなりの時間を要します。MPDコース４回生に所有者の多いLet&#39;s noteだと<span style="color:red;"><strong>7時間超え</strong></span>の報告も受けています。 そのため、就寝前に電源オプションでスリープしない設定をしたのちにインストールすることをおすすめします。</p><h3 id="ダウンロードおよびインストールの方法" tabindex="-1"><a class="header-anchor" href="#ダウンロードおよびインストールの方法" aria-hidden="true">#</a> ダウンロードおよびインストールの方法</h3><p>TeX Live、MacTeX、VSCodeのインストールについては、さまざまなサイトで解説されているので、ここではとりあげません。 （そのうちこちらでも解説するかもしれませんが・・・）</p>',10),L={href:"https://www.russyi.com/tech-latex-vscode/amp/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.russyi.com/tech-latex-vscode/amp/",target:"_blank",rel:"noopener noreferrer"},M=a(`<h2 id="pcの設定" tabindex="-1"><a class="header-anchor" href="#pcの設定" aria-hidden="true">#</a> PCの設定</h2><h3 id="ファイル名拡張子と隠しファイルの表示" tabindex="-1"><a class="header-anchor" href="#ファイル名拡張子と隠しファイルの表示" aria-hidden="true">#</a> ファイル名拡張子と隠しファイルの表示</h3><p>ファイル名拡張子と隠しファイルが表示されるようにしてください。 「ファイル名拡張子と隠しファイルの表示」で検索すればすぐに出てきます。</p><p>ちなみにWindows10の場合は、窓キー→「エクスプローラー」と入力→出てきたウィンドウメニューの表示にある「ファイル名拡張子」「隠しファイル」にチェックをいれます。</p><h3 id="latexmkrcの作成と格納" tabindex="-1"><a class="header-anchor" href="#latexmkrcの作成と格納" aria-hidden="true">#</a> .latexmkrcの作成と格納</h3><ol><li>メモ帳（macOSの場合はテキストエディット）を開いて、下記のコードをコピペしてください。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.latexmkrc
#!/usr/bin/env perl

# LaTeX
$latex = &#39;platex -synctex=1 -halt-on-error -file-line-error %O %S&#39;;
$max_repeat = 5;

# BibTeX
$bibtex = &#39;pbibtex %O %S&#39;;
$biber = &#39;biber --bblencoding=utf8 -u -U --output_safechars %O %S&#39;;

# index
$makeindex = &#39;mendex %O -o %D %S&#39;;

# DVI / PDF
$dvipdf = &#39;dvipdfmx %O -o %D %S&#39;;
$pdf_mode = 3;

# preview
$pvc_view_file_via_temporary = 0;
if ($^O eq &#39;linux&#39;) {
    $dvi_previewer = &quot;xdg-open %S&quot;;
    $pdf_previewer = &quot;xdg-open %S&quot;;
} elsif ($^O eq &#39;darwin&#39;) {
    $dvi_previewer = &quot;open %S&quot;;
    $pdf_previewer = &quot;open %S&quot;;
} else {
    $dvi_previewer = &quot;start %S&quot;;
    $pdf_previewer = &quot;start %S&quot;;
}

# clean up
$clean_full_ext = &quot;%R.synctex.gz&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>メモ帳の場合は、ファイル→名前をつけて保存をクリックしてください。ファイル名は<code>.latexmkrc</code>です。なお、ファイルの種類は「すべての種類」とします。保存場所は左のナビゲーションウィンドウからLocal Disk(C:)をクリック、ユーザーをクリック、PCに名付けているユーザー名をクリックした所です。Macの場合は、<code>$HOME</code> すなわち<code> /Users/&lt;ユーザー名&gt;</code> に保存してください。</li></ol><h2 id="vscodeの設定" tabindex="-1"><a class="header-anchor" href="#vscodeの設定" aria-hidden="true">#</a> VSCodeの設定</h2><h3 id="日本語化" tabindex="-1"><a class="header-anchor" href="#日本語化" aria-hidden="true">#</a> 日本語化</h3><p>VSCodeの日本語化は拡張機能で簡単に実現します。下図に示す流れの通り、VSCodeの左側のアイコンの一番下をクリックし、出てきたテキストボックスにJapanと入力、一番上に出てきたのをInstall後、VSCodeを再起動すれば日本語化されているのを確認できます。</p><img src="`+r+'" width="600" alt="VSCodeの日本語化"><h3 id="tex-workshopのインストール" tabindex="-1"><a class="header-anchor" href="#tex-workshopのインストール" aria-hidden="true">#</a> TeX Workshopのインストール</h3><p>上記日本語化と同じ要領でTeX Workshopをインストールし、VSCodeを再起動してください。 <img src="'+u+'" width="600" alt="VSCodeの日本語化"></p><h3 id="setting-jsonの書き換え" tabindex="-1"><a class="header-anchor" href="#setting-jsonの書き換え" aria-hidden="true">#</a> setting.jsonの書き換え</h3><ol><li><p>左下の歯車アイコンをクリックし、設定を選択してください。</p></li><li><p>次の画像の赤枠のアイコンをクリックしてください。 <img src="'+c+`" width="600" alt="VSCodeの日本語化"></p></li><li><p>出てきた{}setting.jsonを次のコードに書き換えてください。こちらもコピペで問題ないです。</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;latex-workshop.latex.recipes&quot;: [
    {
        &quot;name&quot;: &quot;ptex2pdf&quot;,
        &quot;tools&quot;: [
            &quot;ptex2pdf&quot;
        ]
    }
],
&quot;latex-workshop.latex.tools&quot;: [
    {
        &quot;name&quot;: &quot;ptex2pdf&quot;,
        &quot;command&quot;: &quot;ptex2pdf&quot;,
        &quot;args&quot;: [
            &quot;-l&quot;,
            &quot;-ot&quot;,
            &quot;-kanji=utf8 -synctex=1&quot;,
            &quot;-interaction=nonstopmode&quot;, // エラー発生時に自動でビルド停止
            &quot;%DOC%&quot;
        ]
    }
],
&quot;latex-workshop.view.pdf.viewer&quot;: &quot;tab&quot;,
&quot;security.workspace.trust.untrustedFiles&quot;: &quot;open&quot;,
// コンパイル後に補助ファイルを削除
&quot;latex-workshop.latex.clean.subfolder.enabled&quot;: true,
&quot;latex-workshop.latex.clean.fileTypes&quot;: [
    // &quot;*.aux&quot;,  // label使う上で必要
    &quot;*.bbl&quot;,
    &quot;*.blg&quot;,
    &quot;*.idx&quot;,
    &quot;*.ind&quot;,
    &quot;*.lof&quot;,
    &quot;*.lot&quot;,
    &quot;*.out&quot;,
    &quot;*.toc&quot;,
    &quot;*.acn&quot;,
    &quot;*.acr&quot;,
    &quot;*.alg&quot;,
    &quot;*.glg&quot;,
    &quot;*.glo&quot;,
    &quot;*.gls&quot;,
    &quot;*.ist&quot;,
    &quot;*.fls&quot;,
    &quot;*.log&quot;,
    &quot;*.fdb_latexmk&quot;,
    &quot;*.gz&quot;,
],
// いつ削除するか
&quot;latex-workshop.latex.autoClean.run&quot;: &quot;onFailed&quot;,
// 使用済みパッケージのコマンドと環境を補完
&quot;latex-workshop.intellisense.package.enabled&quot;: true,
// \\をタイプ時にunimathシンボルを表示
&quot;latex-workshop.intellisense.unimathsymbols.enabled&quot;: true,
// 各種math環境のホバープレビューのカーソル色
&quot;latex-workshop.hover.preview.cursor.color&quot;: &quot;cyan&quot;,
// pdf viewerのデフォルトのズームレベル
&quot;latex-workshop.view.pdf.zoom&quot;: &quot;auto&quot;,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscodeでtexファイルを開くための作業" tabindex="-1"><a class="header-anchor" href="#vscodeでtexファイルを開くための作業" aria-hidden="true">#</a> VSCodeでTeXファイルを開くための作業</h3><p>ここからは、香川大学創造工学部造形・メディアデザインコースの卒論用TeXセット<code>thesis_style_mpd.zip</code>がお手元にある前提の話になります。こちらに関しては各自ご準備ください（許可が出たらこちらのサイトでも配布します）。ちなみに現在最新のセットは<code>thesis_style_mpd_v8.zip</code>です。</p><ol><li><p><code>thesis_style_mpd.zip</code>を解凍（右クリックメニューで「すべて展開」）し、デスクトップやドキュメントなど好きな場所に置いてください</p></li><li><p><code>thesis_style_mpd</code>フォルダ→<code>thesis_style</code>フォルダ内の<code>thesis.tex</code>を右クリックし、「プログラムから開く」→「別のプログラムを選択(C)」→Visual Studio Codeを選択、「常にこのアプリを使って.texファイルを開く」にチェックを入れ、OKボタンを押下してください</p></li><li><p>すると下図のような画面が表示されるはずです。されなかったら読み飛ばしても大丈夫です。 <img src="`+v+'" width="600" alt=""></p></li><li><p>上部の管理ボタンを押すと、下図の画面になります。</p></li></ol><img src="'+m+'" width="600" alt=""><ol start="5"><li>上図のように、「信頼する」を選択し、編集したい<code>thesis_style_mpd</code>フォルダを選択してください。その後、上部のワークスペースの信頼タブを閉じてください。</li></ol><p>これですべての環境設定は終了です。</p><h2 id="vscodeでのtexの編集方法" tabindex="-1"><a class="header-anchor" href="#vscodeでのtexの編集方法" aria-hidden="true">#</a> VSCodeでのTeXの編集方法</h2><p>ここからは、具体的な操作方法について簡単に述べていきます。</p><ol><li><p>まず、下図に示す２つの箇所をクリックしてください <img src="'+p+'" width="600" alt=""></p></li><li><p>サンプルとして用意されている画面が見えてきましたね。試しに、「象の卵のデザイン」のところを適当に変え、Ctrl+S（MacならCommand+S）で保存してみてください。しばらく待つと右に表示されているPDFに変化がみられるはずです（うまく反映されない場合は、もう一度Ctrl+S（MacならCommand+S）するとうまくいくことがあります）。</p></li><li><p>ちなみに、<code>%</code>はコメントアウトです。生成されるPDFには反映されません。修正前の文章やメモを残しておきたい場合にはとても役に立ちます。こちら、複数行を選択してCtrl+/（キーボードの&quot;め&quot;）でまとめてコメントアウトができます。</p></li></ol><h2 id="図の画像形式について" tabindex="-1"><a class="header-anchor" href="#図の画像形式について" aria-hidden="true">#</a> 図の画像形式について</h2><p>図の画像形式についてはJpegやPNGなどでも問題ないですが、印刷するとぼやけた絵が出力される可能性があります。 できればAdobeのソフトを用いてEPS形式を利用するようにしましょう。</p><h2 id="その他" tabindex="-1"><a class="header-anchor" href="#その他" aria-hidden="true">#</a> その他</h2><p>まずはサンプルの日本語の箇所や図表から変更し、どうなるのか試していってください。その後、数式や90度回転させた大きな表など、卒論内で表現したいことについて、いろいろ試すとよいでしょう。TeXは先人による膨大な情報がネット上に転がっています。検索すれば何らかの解が見つかるでしょうし、詳しそうな教員や先輩、同期などに質問してください。本サイトでも余裕があれば追記していきます。</p><h2 id="vscodeでのtex編集時のエラー対処法" tabindex="-1"><a class="header-anchor" href="#vscodeでのtex編集時のエラー対処法" aria-hidden="true">#</a> VSCodeでのTeX編集時のエラー対処法</h2><ol start="0"><li>下図に示す箇所をクリックしておいてください</li></ol><img src="'+q+'" width="600" alt=""><ol start="0"><li>こんな感じになります</li></ol><img src="'+x+'" width="600" alt=""><ol><li>当たり前ですが、TeXは誤った命令を下すとエラーが発生してPDFを生成しません。ためしに、14行目の<code>\\date</code>を<code>\\dat</code>にしてCtrl+S（MacならCommand+S）で保存してみましょう。左下に×印が出現します（下図（2））。 次に、右下に出現したウィンドウの「Open compiler log」をクリックしてください（下図（3））。</li></ol><img src="'+f+'" width="600" alt=""><ol start="2"><li><p>出力結果を表示するウィンドウが開きます。下図に示すとおり、[問題]をクリックすると… <img src="'+g+'" width="600" alt=""></p></li><li><p>おかしい箇所が指摘されています。 <img src="'+w+'" width="600" alt=""></p></li><li><p>ちなみに、下図のように青いiマークの部分については、PDFの出力がうまくいっているのなら無視して構いません。 <img src="'+S+'" width="600" alt=""></p></li><li><p>修正後、下図の「Recipe:ptex2pdf」をクリックし、うまくいったか確かめます。うまく反映されない場合はもう一度クリックしてみましょう。 <img src="'+C+'" width="600" alt=""></p></li></ol><p>以上です。まだ粗い説明の箇所もあり、随時更新中です。香川大MPDコースの方は気軽に質問やコメントください。</p><h2 id="参考サイト" tabindex="-1"><a class="header-anchor" href="#参考サイト" aria-hidden="true">#</a> 参考サイト</h2>',40),P={href:"https://www.russyi.com/tech-latex-vscode/amp/",title:"VSCodeでLaTeX環境構築（Win, Mac対応, BigSur対応） - とりあえずいろんな情報記（仮）",target:"_blank",rel:"noopener noreferrer"},D={href:"https://blog.loliver.net/2020/07/17/texlive-installation/#toc8",title:"LaTeX + VSCode ではじめる美文書作成入門【導入編】 | Golden Memories",target:"_blank",rel:"noopener noreferrer"};function W(j,F){const t=d("router-link"),o=d("RouterLink"),s=d("ExternalLinkIcon");return b(),_("div",null,[V,e("nav",T,[e("ul",null,[e("li",null,[n(t,{to:"#こちらのページについて"},{default:l(()=>[i("こちらのページについて")]),_:1})]),e("li",null,[n(t,{to:"#前提とするpcの環境"},{default:l(()=>[i("前提とするPCの環境")]),_:1})]),e("li",null,[n(t,{to:"#ダウンロードしインストールするソフトウェアは2つ"},{default:l(()=>[i("ダウンロードしインストールするソフトウェアは２つ")]),_:1}),e("ul",null,[e("li",null,[n(t,{to:"#注意点"},{default:l(()=>[i("注意点")]),_:1})]),e("li",null,[n(t,{to:"#ダウンロードおよびインストールの方法"},{default:l(()=>[i("ダウンロードおよびインストールの方法")]),_:1})])])]),e("li",null,[n(t,{to:"#pcの設定"},{default:l(()=>[i("PCの設定")]),_:1}),e("ul",null,[e("li",null,[n(t,{to:"#ファイル名拡張子と隠しファイルの表示"},{default:l(()=>[i("ファイル名拡張子と隠しファイルの表示")]),_:1})]),e("li",null,[n(t,{to:"#latexmkrcの作成と格納"},{default:l(()=>[i(".latexmkrcの作成と格納")]),_:1})])])]),e("li",null,[n(t,{to:"#vscodeの設定"},{default:l(()=>[i("VSCodeの設定")]),_:1}),e("ul",null,[e("li",null,[n(t,{to:"#日本語化"},{default:l(()=>[i("日本語化")]),_:1})]),e("li",null,[n(t,{to:"#tex-workshopのインストール"},{default:l(()=>[i("TeX Workshopのインストール")]),_:1})]),e("li",null,[n(t,{to:"#setting-jsonの書き換え"},{default:l(()=>[i("setting.jsonの書き換え")]),_:1})]),e("li",null,[n(t,{to:"#vscodeでtexファイルを開くための作業"},{default:l(()=>[i("VSCodeでTeXファイルを開くための作業")]),_:1})])])]),e("li",null,[n(t,{to:"#vscodeでのtexの編集方法"},{default:l(()=>[i("VSCodeでのTeXの編集方法")]),_:1})]),e("li",null,[n(t,{to:"#図の画像形式について"},{default:l(()=>[i("図の画像形式について")]),_:1})]),e("li",null,[n(t,{to:"#その他"},{default:l(()=>[i("その他")]),_:1})]),e("li",null,[n(t,{to:"#vscodeでのtex編集時のエラー対処法"},{default:l(()=>[i("VSCodeでのTeX編集時のエラー対処法")]),_:1})]),e("li",null,[n(t,{to:"#参考サイト"},{default:l(()=>[i("参考サイト")]),_:1})])])]),X,e("p",null,[y,n(o,{to:"/tex_lua.html",title:"卒論のためのTeX環境構築方法紹介ページ"},{default:l(()=>[i("卒論のためのTeX環境構築方法紹介ページ@LuaLateX版")]),_:1}),i("を御覧ください。")]),$,e("p",null,[i("ちなみに、"),e("a",L,[i("今回参考にしたサイトはこちら"),n(s)]),i("です。 ダウンロードからインストールまでに関しては、"),e("a",O,[i("こちらのサイト"),n(s)]),i("などを見ながら進めていって大丈夫です。インストールから先の細かい設定は下記を参考にするとうまくいくはずです。")]),M,e("ul",null,[e("li",null,[e("a",P,[i("VSCodeでLaTeX環境構築（Win, Mac対応, BigSur対応） - とりあえずいろんな情報記（仮）"),n(s)])]),e("li",null,[e("a",D,[i("LaTeX + VSCode ではじめる美文書作成入門【導入編】 | Golden Memories"),n(s)])])])])}const E=h(k,[["render",W],["__file","tex.html.vue"]]);export{E as default};
