/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "deda1e619dd89233da8d81ea50b9eb5c"
  },
  {
    "url": "about.html",
    "revision": "7f724430e6402c7dabea3cd213e27369"
  },
  {
    "url": "access.html",
    "revision": "f92b80bb8e763add55a21a5beddda916"
  },
  {
    "url": "assets/css/0.styles.43a58f46.css",
    "revision": "27d0ff8fad40ec4a84ca3da326387e1a"
  },
  {
    "url": "assets/img/images/1.jpg",
    "revision": "194e99cbb090b997fe6a4000d923349b"
  },
  {
    "url": "assets/img/images/2.jpg",
    "revision": "c7b1f5c6857f2ad72c641cde45ff36b6"
  },
  {
    "url": "assets/img/images/23-2hyoshi.jpg",
    "revision": "b628d60cfadf85aa0809035f61e062b5"
  },
  {
    "url": "assets/img/images/about_interface.png",
    "revision": "f9ffd1bd3c7be280e741bee1ae297361"
  },
  {
    "url": "assets/img/images/AozoraUxLogo.png",
    "revision": "5233ebb42f0e592507833b245988f0d9"
  },
  {
    "url": "assets/img/images/campass.jpg",
    "revision": "bdfd50da2150c3cd9c4af8299f8d7bef"
  },
  {
    "url": "assets/img/images/communicationMark.png",
    "revision": "94c43b55d90903acf658c26eaaaba760"
  },
  {
    "url": "assets/img/images/kitamura.png",
    "revision": "586655398faae617dbf9a0f3e441b3bf"
  },
  {
    "url": "assets/img/images/labmemlogo.png",
    "revision": "ff9d67e28a9d2a006fd559f19bd2db2e"
  },
  {
    "url": "assets/img/images/labplate.jpg",
    "revision": "939441ea3c298ab5d85cff2a3876115c"
  },
  {
    "url": "assets/img/images/report/2021_4guidance.jpg",
    "revision": "22470fc440055ebe64b6e6130a0d8c9e"
  },
  {
    "url": "assets/img/images/report/202105PBL.png",
    "revision": "2d4a2f9d660d38eb9d53bcae3d9ece10"
  },
  {
    "url": "assets/img/images/report/20210603PBL.png",
    "revision": "76a493f7f43f041b6cf98fb89247c55b"
  },
  {
    "url": "assets/img/images/report/20210806OC.png",
    "revision": "a01e41e657acc28836684e7998f7feb0"
  },
  {
    "url": "assets/img/images/report/20210923HIEssay.png",
    "revision": "da96edc2002d7bc34480bb3faf72f478"
  },
  {
    "url": "assets/img/images/ResearchFlow.png",
    "revision": "c2bf11db480b75046f1b10a22a1b219c"
  },
  {
    "url": "assets/img/images/span_of_UX.png",
    "revision": "1912beaeb97eaa0e50a62139ed0a2a84"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "48ca296d5d1488a7fc6dce5da86f238e"
  },
  {
    "url": "assets/img/logo2.png",
    "revision": "07f662b4f18288da9076d65e00f5189e"
  },
  {
    "url": "assets/img/logo3.png",
    "revision": "b3bd867893e1941fc7078999cdd7cf4f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/teximages/tex_workshop.png",
    "revision": "a7b4071cf9b113e2fd35f8721f701391"
  },
  {
    "url": "assets/img/teximages/vscode_nihongoka.png",
    "revision": "a037d3a2b349c3a4e8de36a5616cd04f"
  },
  {
    "url": "assets/img/teximages/vscode_setting_json.png",
    "revision": "46d3768ee5ff5e1fbb3a77381eb0e9be"
  },
  {
    "url": "assets/img/teximages/vscode_shinrai1.png",
    "revision": "1ec811aef840a4fa29c69defc06ae9eb"
  },
  {
    "url": "assets/img/teximages/vscode_shinrai2.png",
    "revision": "7f9149091ba9a41247a584b6bec7313b"
  },
  {
    "url": "assets/img/teximages/vscode_tex1.png",
    "revision": "8788cabb2fb97e05527d8a5a7d9d254c"
  },
  {
    "url": "assets/img/teximages/vscode_tex2.png",
    "revision": "b833462543cb031bf955f374e7374eb7"
  },
  {
    "url": "assets/img/teximages/vscode_tex3.png",
    "revision": "c689c5641a209af807b74b2031601274"
  },
  {
    "url": "assets/js/10.4c82e9b2.js",
    "revision": "02f9d3202b113002055f59babde11224"
  },
  {
    "url": "assets/js/11.ca4fbc31.js",
    "revision": "69c19a56d5adfa212befe182b8afc96f"
  },
  {
    "url": "assets/js/12.870ec829.js",
    "revision": "101f5145ee088dbe6d42c993587a8e6f"
  },
  {
    "url": "assets/js/13.759ae9d7.js",
    "revision": "8af775c89c8a60e834cc8afc8d0a7363"
  },
  {
    "url": "assets/js/2.5d905cc1.js",
    "revision": "5566b38b2e36b04b27ea4e221f3ff2d1"
  },
  {
    "url": "assets/js/3.3aa62346.js",
    "revision": "534f495fff9ff90f845e2dd9ce7b5ee7"
  },
  {
    "url": "assets/js/4.c312e209.js",
    "revision": "c2bc5e7fa51551eb49757f31b5f4169e"
  },
  {
    "url": "assets/js/5.03d391e3.js",
    "revision": "82404984af8e61dca6230fbe6e78cd21"
  },
  {
    "url": "assets/js/6.82ec6530.js",
    "revision": "b032e4fe3b76cfef4bdcf557005f3c87"
  },
  {
    "url": "assets/js/7.91e7de95.js",
    "revision": "e0cd6c167092eb9a5729a0529f147d36"
  },
  {
    "url": "assets/js/8.3f774cac.js",
    "revision": "421fba58307887b7d42a75614d6e18bc"
  },
  {
    "url": "assets/js/9.30789875.js",
    "revision": "0d522402f0f6f9dfd75994247adebe21"
  },
  {
    "url": "assets/js/app.c52ad4e4.js",
    "revision": "1612286386573ab3567abd65afc845d4"
  },
  {
    "url": "assets/js/zooming.js",
    "revision": "ff674ebed3da28035a9980816b6543d6"
  },
  {
    "url": "assets/js/zooming.min.js",
    "revision": "28e9c9d60ba131667e3a71582743494d"
  },
  {
    "url": "assets/js/zooming.module.js",
    "revision": "02f52b3552ad50992482586764a875b6"
  },
  {
    "url": "googlec7f604480c51e9da.html",
    "revision": "e390749236efd089314c5eb0d3edade7"
  },
  {
    "url": "index.html",
    "revision": "b29abad9a6d20830d3bb3141d843daab"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "7f0e15951a045a57bc1122a51394f20d"
  },
  {
    "url": "report.html",
    "revision": "bfb0cb8955b3877594aae5133b2a3d1f"
  },
  {
    "url": "tex.html",
    "revision": "3c96114d255a3c3e64f0a9ad7dc3c9ea"
  },
  {
    "url": "works.html",
    "revision": "3f673875c723b8072fceaf74ca694063"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
