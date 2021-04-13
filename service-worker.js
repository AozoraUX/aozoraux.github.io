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
    "revision": "398e704d877bf904b632fd4926fe096d"
  },
  {
    "url": "about.html",
    "revision": "c28d425672d8d5f34fb57a778c9b0592"
  },
  {
    "url": "access.html",
    "revision": "095708664e3004952a92adf41e0dea25"
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
    "revision": "b9012f03a52353deafcc34f2effbfed3"
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
    "revision": "e58ac2d1cf653073826a95624b10f01b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.96afccfb.js",
    "revision": "750a2ee8d9eb59e34804936d29e801f8"
  },
  {
    "url": "assets/js/11.b9b23b47.js",
    "revision": "2a689862b73b89412aff3dd821eb6606"
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
    "url": "assets/js/7.9336a7d6.js",
    "revision": "16f4c0f8766d5982bd1b501224ca1894"
  },
  {
    "url": "assets/js/8.e7ef8816.js",
    "revision": "29fac65b7b915debfeb1be88dc5e9a74"
  },
  {
    "url": "assets/js/9.5733b9c6.js",
    "revision": "66cbaaf11be0107e54c42086f9c4e878"
  },
  {
    "url": "assets/js/app.ae994acd.js",
    "revision": "f0c76ba785ca7a02c26a53aed0b4889c"
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
    "revision": "5ec05f508442b700a8a4bd38a7f4e94c"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "0d8f047838b7ab3a7293bc066ffab806"
  },
  {
    "url": "report.html",
    "revision": "bc4c5533fbe762886c3f9c21a5a27ea6"
  },
  {
    "url": "works.html",
    "revision": "a71dfd32e2e3dd9d6c73334c35f80972"
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
