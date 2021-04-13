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
    "revision": "5989b544b762f28207fd740d7b8f37c8"
  },
  {
    "url": "about.html",
    "revision": "12bc19af66ea0d9b5d4695add97ba704"
  },
  {
    "url": "access.html",
    "revision": "a55b83a2407292275ada1edb5c1358bf"
  },
  {
    "url": "assets/css/0.styles.c313d57e.css",
    "revision": "f2327b83b51310b3b3e81a619c794fef"
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
    "url": "assets/img/images/AozoraUxLogo.png",
    "revision": "5233ebb42f0e592507833b245988f0d9"
  },
  {
    "url": "assets/img/images/campass.jpg",
    "revision": "f1a64f0fb9af6806e413866e6fab5adb"
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
    "revision": "b963179a16e52489b5631cb1248a790f"
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
    "url": "assets/js/11.b75d7bf8.js",
    "revision": "bcbb7ee9e9bd9042e264e89be462d457"
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
    "url": "assets/js/6.131ffe94.js",
    "revision": "5e4edb49917441788f79db25f140c815"
  },
  {
    "url": "assets/js/7.7f678afb.js",
    "revision": "4bc35e34056262221bf7b7cb5dc99504"
  },
  {
    "url": "assets/js/8.e92be8c9.js",
    "revision": "63d17cbdde3d61e8e8d14de7d4d51e56"
  },
  {
    "url": "assets/js/9.52050cdf.js",
    "revision": "7b4df21730a10d4e01ec0699414884a5"
  },
  {
    "url": "assets/js/app.ba8da4c4.js",
    "revision": "01e56db4e83ff443a7e1e8f308a74f31"
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
    "url": "index.html",
    "revision": "60f08a1854631fb5095a242e8f17bb43"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "8976415535e2ed0c90666d827acdb37e"
  },
  {
    "url": "report.html",
    "revision": "cad82ca9da5557f221afe8d7777c75bf"
  },
  {
    "url": "works.html",
    "revision": "6024b0b8f0231520ca27230fb3ade927"
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
