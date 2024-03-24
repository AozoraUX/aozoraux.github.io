import{_ as s,a as r,b as u,c,d as h,e as p}from"./vscode_tex1-2fb2aeab.js";import{_ as m,r as o,o as v,c as x,a as e,b as i,w as l,d as a,e as d}from"./app-b61b53fd.js";const _={},b=e("h1",{id:"卒論のためのtex環境構築方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#卒論のためのtex環境構築方法","aria-hidden":"true"},"#"),a(" 卒論のためのTeX環境構築方法")],-1),q={class:"table-of-contents"},f=d('<h2 id="こちらのページについて" tabindex="-1"><a class="header-anchor" href="#こちらのページについて" aria-hidden="true">#</a> こちらのページについて</h2><p>こちらのページでは、香川大学造形メディアデザインコースの卒論をTeX（テフ）で作成したい人のために、その環境構築方法について簡単に説明します。 なお、ここで紹介する方法が唯一無二ではございません。</p><h2 id="前提とするpcの環境" tabindex="-1"><a class="header-anchor" href="#前提とするpcの環境" aria-hidden="true">#</a> 前提とするPCの環境</h2><p>Windows10、11もしくはmacOS Monterey</p><p>※　動作確認済のOSです。macOSの場合はもう少し古くても大丈夫かもしれません。</p><h2 id="ダウンロードしインストールするソフトウェアは2つ" tabindex="-1"><a class="header-anchor" href="#ダウンロードしインストールするソフトウェアは2つ" aria-hidden="true">#</a> ダウンロードしインストールするソフトウェアは２つ</h2><ul><li>Windows10、11の場合はTeX LiveとVisual Studio Code（以下、VSCode）</li><li>macOSの場合はMacTeXとVisual Studio Code（以下、VSCode）</li></ul><h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h3><p>TeX Liveのインストールにはかなりの時間を要します。MPDコース４回生に所有者の多いLet&#39;s noteだと<span style="color:red;"><strong>7時間超え</strong></span>の報告も受けています。 そのため、就寝前に電源オプションでスリープしない設定をしたのちにインストールすることをおすすめします。</p><h3 id="ダウンロードおよびインストールの方法" tabindex="-1"><a class="header-anchor" href="#ダウンロードおよびインストールの方法" aria-hidden="true">#</a> ダウンロードおよびインストールの方法</h3><p>TeX Live、MacTeX、VSCodeのインストールについては、さまざまなサイトで解説されているので、ここではとりあげません。 （そのうちこちらでも解説するかもしれませんが・・・）</p>',11),C={href:"https://qiita.com/SuzuTomo2001/items/07c3ba6ff9f29ebf6282",target:"_blank",rel:"noopener noreferrer"},S=d(`<h2 id="pcの設定" tabindex="-1"><a class="header-anchor" href="#pcの設定" aria-hidden="true">#</a> PCの設定</h2><h3 id="ファイル名拡張子と隠しファイルの表示" tabindex="-1"><a class="header-anchor" href="#ファイル名拡張子と隠しファイルの表示" aria-hidden="true">#</a> ファイル名拡張子と隠しファイルの表示</h3><p>ファイル名拡張子と隠しファイルが表示されるようにしてください。 「ファイル名拡張子と隠しファイルの表示」で検索すればすぐに出てきます。</p><p>ちなみにWindows10、11の場合は、窓キー→「エクスプローラー」と入力→出てきたウィンドウメニューの表示にある「ファイル名拡張子」「隠しファイル」にチェックをいれます。</p><p>macOSの場合は、「Finder」から隠しファイルを開きたいフォルダを開き、「command」＋「shift」＋「.」 キーを同時押しです。</p><h3 id="latexmkrcの作成と格納" tabindex="-1"><a class="header-anchor" href="#latexmkrcの作成と格納" aria-hidden="true">#</a> .latexmkrcの作成と格納</h3><ol><li>メモ帳（macOSの場合はテキストエディット）を開いて、下記のコードをコピペしてください。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env perl
$latex = &#39;lualatex -synctex=1 %O %S&#39;;
$bibtex = &#39;pbibtex %O %B&#39;;
$pdflatex = &#39;lualatex -shell-escape&#39;;
$makeindex = &#39;mendex %O -o %D %S&#39;;
$pvc_view_file_via_temporary = 0;
$max_repeat = 5;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>メモ帳の場合は、ファイル→名前をつけて保存をクリックしてください。ファイル名は<code>.latexmkrc</code>です。なお、ファイルの種類は「すべての種類」とします。保存場所は左のナビゲーションウィンドウからLocal Disk(C:)をクリック、ユーザーをクリック、PCに名付けているユーザー名をクリックした所です。Macの場合は、<code>$HOME</code> すなわち<code> /Users/&lt;ユーザー名&gt;</code> に保存してください。</li></ol><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>macOSのテキストエディットではそのまま保存するとrft形式になってしまいます。そのためにうまくいかなかった人の報告をうけました。必ずtxt形式に保存してから拡張子を消しましょう(方法は検索するとすぐにでてきます)。それでもうまくいかない場合は、後述のVSCodeで作成してください。</p></div><h2 id="vscodeの設定" tabindex="-1"><a class="header-anchor" href="#vscodeの設定" aria-hidden="true">#</a> VSCodeの設定</h2><h3 id="日本語化" tabindex="-1"><a class="header-anchor" href="#日本語化" aria-hidden="true">#</a> 日本語化</h3><p>VSCodeの日本語化は拡張機能で簡単に実現します。下図に示す流れの通り、VSCodeの左側のアイコンの一番下をクリックし、出てきたテキストボックスにJapanと入力、一番上に出てきたのをInstall後、VSCodeを再起動すれば日本語化されているのを確認できます。</p><img src="`+s+'" width="600" alt="VSCodeの日本語化"><h3 id="tex-workshopのインストール" tabindex="-1"><a class="header-anchor" href="#tex-workshopのインストール" aria-hidden="true">#</a> TeX Workshopのインストール</h3><p>上記日本語化と同じ要領でTeX Workshopをインストールし、VSCodeを再起動してください。 <img src="'+r+'" width="600" alt="VSCodeの日本語化"></p><h3 id="setting-jsonの書き換え" tabindex="-1"><a class="header-anchor" href="#setting-jsonの書き換え" aria-hidden="true">#</a> setting.jsonの書き換え</h3><ol><li><p>左下の歯車アイコンをクリックし、設定を選択してください。</p></li><li><p>次の画像の赤枠のアイコンをクリックしてください。 <img src="'+u+`" width="600" alt="VSCodeの日本語化"></p></li><li><p>出てきた{}setting.jsonを次のコードに書き換えてください。こちらもコピペで問題ないです。</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;latex-workshop.latex.autoBuild.run&quot;: &quot;onFileChange&quot;,
    &quot;latex-workshop.latex.recipes&quot;: [
      {
        &quot;name&quot;: &quot;latexmk&quot;,
        &quot;tools&quot;: [&quot;latexmk&quot;]
      },
      {
        &quot;name&quot;: &quot;latexmk (latexmkrc)&quot;,
        &quot;tools&quot;: [&quot;latexmk_rconly&quot;]
      },
      {
        &quot;name&quot;: &quot;latexmk (lualatex)&quot;,
        &quot;tools&quot;: [&quot;lualatexmk&quot;]
      },
      {
        &quot;name&quot;: &quot;pdflatex ➞ bibtex ➞ pdflatex ^2&quot;,
        &quot;tools&quot;: [&quot;pdflatex&quot;, &quot;bibtex&quot;, &quot;pdflatex&quot;, &quot;pdflatex&quot;]
      }
    ],
    &quot;latex-workshop.latex.tools&quot;: [
      {
        &quot;name&quot;: &quot;latexmk&quot;,
        &quot;command&quot;: &quot;latexmk&quot;,
        &quot;args&quot;: [
          &quot;-synctex=1&quot;,
          &quot;-interaction=nonstopmode&quot;,
          &quot;-file-line-error&quot;,
          &quot;-pdfdvi&quot;,
          &quot;%DOC%&quot;
        ]
      }
    ],
    &quot;latex-workshop.view.pdf.viewer&quot;: &quot;tab&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscodeでtexファイルを開くための作業" tabindex="-1"><a class="header-anchor" href="#vscodeでtexファイルを開くための作業" aria-hidden="true">#</a> VSCodeでTeXファイルを開くための作業</h3><p>ここからは、香川大学創造工学部造形・メディアデザインコースの卒論用TeXセット<code>thesis_mpd_lualatex.zip</code>がお手元にある前提の話になります。<s>こちらに関しては各自ご準備ください（許可が出たらこちらのサイトでも配布します）。</s></p><p>（許可が出たので）<a href="/assets/zip/thesis_mpd_lualatex_v2023.zip" title="ここからDLできます">ここからDLできます</a>。最新版はthesis_mpd_lualatex_v2023.zipです。</p><ol><li><code>thesis_mpd_lualatex.zip</code>を解凍（右クリックメニューで「すべて展開」）し、デスクトップやドキュメントなど好きな場所に置いてください</li></ol><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>TeX Workshopのバージョンによっては，Windowsの日本語版との相性が悪い時があります．そのような場合は，編集したいTeXファイルを　C:texlive　などの中に適当なフォルダを作り，その中で作業をするとよいかもしれません．</p></div><ol start="2"><li><p><code>thesis_style_mpd</code>フォルダ→<code>thesis_style</code>フォルダ内の<code>thesis.tex</code>を右クリックし、「プログラムから開く」→「別のプログラムを選択(C)」→Visual Studio Codeを選択、「常にこのアプリを使って.texファイルを開く」にチェックを入れ、OKボタンを押下してください</p></li><li><p>すると下図のような画面が表示されるはずです。されなかったら読み飛ばしても大丈夫です。 <img src="`+c+'" width="600" alt=""></p></li><li><p>上部の管理ボタンを押すと、下図の画面になります。</p></li></ol><img src="'+h+'" width="600" alt=""><ol start="5"><li>上図のように、「信頼する」を選択し、編集したい<code>thesis_style_mpd</code>フォルダを選択してください。その後、上部のワークスペースの信頼タブを閉じてください。</li></ol><p>これですべての環境設定は終了です。</p><h2 id="vscodeでのtexの編集方法" tabindex="-1"><a class="header-anchor" href="#vscodeでのtexの編集方法" aria-hidden="true">#</a> VSCodeでのTeXの編集方法</h2><p>ここからは、具体的な操作方法について簡単に述べていきます。</p><ol><li><p>まず、下図に示す２つの箇所をクリックしてください <img src="'+p+'" width="600" alt=""></p></li><li><p>サンプルとして用意されている画面が見えてきましたね。試しに、「象の卵のデザイン」のところを適当に変え、Ctrl+S（MacならCommand+S）で保存してみてください。しばらく待つと右に表示されているPDFに変化がみられるはずです（うまく反映されない場合は、もう一度Ctrl+S（MacならCommand+S）するとうまくいくことがあります）。</p></li><li><p>ちなみに、<code>%</code>はコメントアウトです。生成されるPDFには反映されません。修正前の文章やメモを残しておきたい場合にはとても役に立ちます。こちら、複数行を選択してCtrl+/（キーボードの&quot;め&quot;）でまとめてコメントアウトができます。</p></li></ol><h2 id="図の画像形式について" tabindex="-1"><a class="header-anchor" href="#図の画像形式について" aria-hidden="true">#</a> 図の画像形式について</h2><p>図の画像形式についてはPDF形式が望ましいですが、JpegやPNGなどでも問題ないです。あまり低画質ですと印刷時にぼやけますので注意しましょう。</p><h2 id="その他" tabindex="-1"><a class="header-anchor" href="#その他" aria-hidden="true">#</a> その他</h2><p>まずはサンプルの日本語の箇所や図表から変更し、どうなるのか試していってください。その後、数式や90度回転させた大きな表など、卒論内で表現したいことについて、いろいろ試すとよいでしょう。TeXは先人による膨大な情報がネット上に転がっています。検索すれば何らかの解が見つかるでしょうし、詳しそうな教員や先輩、同期などに質問してください。本サイトでも余裕があれば追記していきます。</p><p>以上です。まだ粗い説明の箇所もあり、随時更新中です。香川大MPDコースの方は気軽に質問やコメントください。</p><h2 id="参考サイト" tabindex="-1"><a class="header-anchor" href="#参考サイト" aria-hidden="true">#</a> 参考サイト</h2>',37),k={href:"https://www.russyi.com/tech-latex-vscode/amp/",title:"VSCodeでLaTeX環境構築（Win, Mac対応, BigSur対応） - とりあえずいろんな情報記（仮）",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.loliver.net/2020/07/17/texlive-installation/#toc8",title:"LaTeX + VSCode ではじめる美文書作成入門【導入編】 | Golden Memories",target:"_blank",rel:"noopener noreferrer"};function V(w,T){const t=o("router-link"),n=o("ExternalLinkIcon");return v(),x("div",null,[b,e("nav",q,[e("ul",null,[e("li",null,[i(t,{to:"#こちらのページについて"},{default:l(()=>[a("こちらのページについて")]),_:1})]),e("li",null,[i(t,{to:"#前提とするpcの環境"},{default:l(()=>[a("前提とするPCの環境")]),_:1})]),e("li",null,[i(t,{to:"#ダウンロードしインストールするソフトウェアは2つ"},{default:l(()=>[a("ダウンロードしインストールするソフトウェアは２つ")]),_:1}),e("ul",null,[e("li",null,[i(t,{to:"#注意点"},{default:l(()=>[a("注意点")]),_:1})]),e("li",null,[i(t,{to:"#ダウンロードおよびインストールの方法"},{default:l(()=>[a("ダウンロードおよびインストールの方法")]),_:1})])])]),e("li",null,[i(t,{to:"#pcの設定"},{default:l(()=>[a("PCの設定")]),_:1}),e("ul",null,[e("li",null,[i(t,{to:"#ファイル名拡張子と隠しファイルの表示"},{default:l(()=>[a("ファイル名拡張子と隠しファイルの表示")]),_:1})]),e("li",null,[i(t,{to:"#latexmkrcの作成と格納"},{default:l(()=>[a(".latexmkrcの作成と格納")]),_:1})])])]),e("li",null,[i(t,{to:"#vscodeの設定"},{default:l(()=>[a("VSCodeの設定")]),_:1}),e("ul",null,[e("li",null,[i(t,{to:"#日本語化"},{default:l(()=>[a("日本語化")]),_:1})]),e("li",null,[i(t,{to:"#tex-workshopのインストール"},{default:l(()=>[a("TeX Workshopのインストール")]),_:1})]),e("li",null,[i(t,{to:"#setting-jsonの書き換え"},{default:l(()=>[a("setting.jsonの書き換え")]),_:1})]),e("li",null,[i(t,{to:"#vscodeでtexファイルを開くための作業"},{default:l(()=>[a("VSCodeでTeXファイルを開くための作業")]),_:1})])])]),e("li",null,[i(t,{to:"#vscodeでのtexの編集方法"},{default:l(()=>[a("VSCodeでのTeXの編集方法")]),_:1})]),e("li",null,[i(t,{to:"#図の画像形式について"},{default:l(()=>[a("図の画像形式について")]),_:1})]),e("li",null,[i(t,{to:"#その他"},{default:l(()=>[a("その他")]),_:1})]),e("li",null,[i(t,{to:"#参考サイト"},{default:l(()=>[a("参考サイト")]),_:1})])])]),f,e("p",null,[a("ちなみに、「TeX Liveのインストール時間がない」という方には"),e("a",C,[a("こちらのサイト"),i(n)]),a("の方法が参考になるかもしれません（私は試していませんので自己責任でお願いします）。")]),S,e("ul",null,[e("li",null,[e("a",k,[a("VSCodeでLaTeX環境構築（Win, Mac対応, BigSur対応） - とりあえずいろんな情報記（仮）"),i(n)]),a("（リンク切れ）")]),e("li",null,[e("a",g,[a("LaTeX + VSCode ではじめる美文書作成入門【導入編】 | Golden Memories"),i(n)])])])])}const M=m(_,[["render",V],["__file","tex_lua.html.vue"]]);export{M as default};
