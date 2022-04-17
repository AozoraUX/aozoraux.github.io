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
    "revision": "77a7e7d90b02dc4a1bcdc20d8700db2f"
  },
  {
    "url": "about.html",
    "revision": "f578153dfbc79bdc8de8de154a05a75f"
  },
  {
    "url": "access.html",
    "revision": "dc6445cc775834a214932a3176dd4d6c"
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
    "url": "assets/img/images/kitamura2.png",
    "revision": "ee6460f822f4be922b798159304a7efe"
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
    "url": "assets/img/images/report/2021_10_withzizo.png",
    "revision": "62bf2f95b44337f32f1502f7d5994550"
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
    "url": "assets/img/images/report/2022_3_goods.jpg",
    "revision": "06af8054b9eff98919681d3cd7d19ae6"
  },
  {
    "url": "assets/img/images/report/2022_3_sotsuten.jpg",
    "revision": "8bd49e1e0e7aa904ae81f3a19ebbdf42"
  },
  {
    "url": "assets/img/images/report/2022_3_sotugyo.jpg",
    "revision": "05eb9bc03524a1708476ecd623c1e9a6"
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
    "url": "assets/img/teximages/vscode_tex_error1.png",
    "revision": "e78b95537260f451d9803b918246913a"
  },
  {
    "url": "assets/img/teximages/vscode_tex_error2.png",
    "revision": "1e971ecd9600eecc6b8efee39a76f6cc"
  },
  {
    "url": "assets/img/teximages/vscode_tex_error3.png",
    "revision": "af8814090700fbf58d96fe635ca3e533"
  },
  {
    "url": "assets/img/teximages/vscode_tex_error4.png",
    "revision": "b765e17137e27bd7cc60e9564b7b4f8b"
  },
  {
    "url": "assets/img/teximages/vscode_tex_error5.png",
    "revision": "e062389214465ce3be0314d54ebe2e74"
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
    "url": "assets/js/10.cfe5149d.js",
    "revision": "8ddd35a5161a2efa8cf9f822fcebfc2e"
  },
  {
    "url": "assets/js/11.ab02b105.js",
    "revision": "a52f1b65728d17a69662d2d9aa77ce98"
  },
  {
    "url": "assets/js/12.38c05266.js",
    "revision": "1560b1a05ea63125fd104743913c99e2"
  },
  {
    "url": "assets/js/13.c9ad4f97.js",
    "revision": "85fffdd845a305dde965c0b3477f84fa"
  },
  {
    "url": "assets/js/14.93239359.js",
    "revision": "a143d8643c2bc16f177b82f6b7a7eeea"
  },
  {
    "url": "assets/js/2.9aa958e6.js",
    "revision": "1831a8542730173276ccf90ad60985a8"
  },
  {
    "url": "assets/js/3.3297fc0d.js",
    "revision": "ce5b3cdface5c48104023b20cf4bdd48"
  },
  {
    "url": "assets/js/4.ecf403a0.js",
    "revision": "985aea2aab15ae77acea3d16e7b59b7f"
  },
  {
    "url": "assets/js/5.03d391e3.js",
    "revision": "82404984af8e61dca6230fbe6e78cd21"
  },
  {
    "url": "assets/js/6.264f8217.js",
    "revision": "5ac6a56acee7ce9da8cf23aff5b8dc2b"
  },
  {
    "url": "assets/js/7.e4db9ddc.js",
    "revision": "269fd5cf6691e5bf2b6f31cc0fa32c22"
  },
  {
    "url": "assets/js/8.7b11d2f6.js",
    "revision": "9f11bdb3b25f4859eae67a99d25d9d11"
  },
  {
    "url": "assets/js/9.cbcff165.js",
    "revision": "a93f674706769407a439b70ffc0f8a89"
  },
  {
    "url": "assets/js/app.25679cdd.js",
    "revision": "b6109ec76687eb013f02b0e7d632c8ce"
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
    "revision": "dc50166f24fdd19dc35fd720ef074279"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "d4198e9b562b51e2fd981232edbc60c6"
  },
  {
    "url": "report.html",
    "revision": "4e9c0f1088bd2a7b7f648b337c7bf4ce"
  },
  {
    "url": "tex_lua.html",
    "revision": "a3fbdb961dabfe4c82ecbba639067c4a"
  },
  {
    "url": "tex.html",
    "revision": "18d17efb779f0664231ba6ac3a830a8f"
  },
  {
    "url": "works.html",
    "revision": "e051a34d6fdcf280acb90cc5f87f4647"
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
