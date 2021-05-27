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
    "revision": "59024b8ed5a8edb76c364ac81074cbdd"
  },
  {
    "url": "about.html",
    "revision": "b7daf42aae8d0cd271ef643427321d8b"
  },
  {
    "url": "access.html",
    "revision": "05f4c04a893ecafcbea459b627debddb"
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
    "url": "assets/js/10.b3698920.js",
    "revision": "940a1522a3d236bf578f783b0560dea6"
  },
  {
    "url": "assets/js/11.005a4334.js",
    "revision": "5f7c57a1a0bbe6a6045f7ba0320727f2"
  },
  {
    "url": "assets/js/12.fb488285.js",
    "revision": "3f32bdffab5e5a2098401bb48598d29d"
  },
  {
    "url": "assets/js/2.5d905cc1.js",
    "revision": "5566b38b2e36b04b27ea4e221f3ff2d1"
  },
  {
    "url": "assets/js/3.6ba4c0b1.js",
    "revision": "fe84c6ece88b3de1880160524626be81"
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
    "url": "assets/js/6.638ba944.js",
    "revision": "b5636409103107892acca987236cee12"
  },
  {
    "url": "assets/js/7.8576eda9.js",
    "revision": "24f3119e74af029f65cb4c243f1726e6"
  },
  {
    "url": "assets/js/8.acd69465.js",
    "revision": "417d84e565a2ff59e4221c8f9f0bfc6c"
  },
  {
    "url": "assets/js/9.1c700be2.js",
    "revision": "cbe2ea052a794bb92f66082cad67e0c9"
  },
  {
    "url": "assets/js/app.d30e7a3a.js",
    "revision": "ba8195b685991f142beea0a659ce4aaa"
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
    "revision": "7548f2d96f458df33a0f47a3e8684661"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "8be8e28e8986f420a8080382ff71c657"
  },
  {
    "url": "report.html",
    "revision": "0bf8c1de31a7b3755051ef9ff9436a54"
  },
  {
    "url": "works.html",
    "revision": "eefe00d3eeaf41838aa8b84dc46d0956"
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
