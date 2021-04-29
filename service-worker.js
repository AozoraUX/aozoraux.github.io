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
    "revision": "a677c0e5418e274bfdca4377ae30b612"
  },
  {
    "url": "about.html",
    "revision": "aa0ce09c4e22946e35791162d840d0d1"
  },
  {
    "url": "access.html",
    "revision": "f8c3c1a240c1f0adb9af70c927abc9cd"
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
    "url": "assets/img/images/about_interface.png",
    "revision": "91c4b23f0e5941100eb98ac183d1f10f"
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
    "url": "assets/img/images/ResearchFlow.png",
    "revision": "c2bf11db480b75046f1b10a22a1b219c"
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
    "url": "assets/js/10.a9165ccf.js",
    "revision": "3c60b6767f7750612abb29c764d71c66"
  },
  {
    "url": "assets/js/11.0b834f2d.js",
    "revision": "34dcec0b7106562f7f61912ff0d23eae"
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
    "url": "assets/js/6.df1ba90d.js",
    "revision": "97252414c169d5d6702032ba7bda95f9"
  },
  {
    "url": "assets/js/7.1eb43222.js",
    "revision": "ff993dd10177ca08ca3155b8741109db"
  },
  {
    "url": "assets/js/8.b4f8e4e1.js",
    "revision": "d42470d0ff0ef2db54575303b3c01926"
  },
  {
    "url": "assets/js/9.d6e2e5e8.js",
    "revision": "69e5b1dae34e7fd2e797180362d5900c"
  },
  {
    "url": "assets/js/app.3ebfaebd.js",
    "revision": "f041e9ebac25de8997eed6649bf6f72e"
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
    "revision": "b64e160088cf6dcbf9a4b721afd1cd9d"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "33ed0849dcb769bb760471c75de1b7e5"
  },
  {
    "url": "report.html",
    "revision": "ee60fbf27ac720268c4a5b12edaf1e0b"
  },
  {
    "url": "works.html",
    "revision": "71202f0b1624b4e4bad9fcb0a0ebab6d"
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
