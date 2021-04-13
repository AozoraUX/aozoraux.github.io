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
    "revision": "e7ff9bfeb85c782a431ee6dbf8583a9e"
  },
  {
    "url": "about.html",
    "revision": "5df30f17d82ba8773c8645dd9ac18794"
  },
  {
    "url": "access.html",
    "revision": "bb15d5eae91f1193987e6013ec3dfe1f"
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
    "url": "assets/js/10.f66ef2e9.js",
    "revision": "4522fd5ac470db8feed4325f45ebf994"
  },
  {
    "url": "assets/js/11.787e2f47.js",
    "revision": "4f309a9025a2b48606eee51555cb7d66"
  },
  {
    "url": "assets/js/12.5fca15c1.js",
    "revision": "64085f744cc7add3bc7cb9f76664fba2"
  },
  {
    "url": "assets/js/13.4014581f.js",
    "revision": "bab2b3b14ee202a37ed1c07dfa761908"
  },
  {
    "url": "assets/js/14.6987a525.js",
    "revision": "7bf1ad7f4a50a43dd78c924fb076eeac"
  },
  {
    "url": "assets/js/15.6363ba5e.js",
    "revision": "53a31ff10d66ed33d769e257902a4972"
  },
  {
    "url": "assets/js/16.3e1538bf.js",
    "revision": "936164b71dd7fc5c5c73789cad453a31"
  },
  {
    "url": "assets/js/2.9aa958e6.js",
    "revision": "1831a8542730173276ccf90ad60985a8"
  },
  {
    "url": "assets/js/3.bb122fe5.js",
    "revision": "47e6046b318c2a19609dd2f040c8e584"
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
    "url": "assets/js/6.131ffe94.js",
    "revision": "5e4edb49917441788f79db25f140c815"
  },
  {
    "url": "assets/js/7.9336a7d6.js",
    "revision": "16f4c0f8766d5982bd1b501224ca1894"
  },
  {
    "url": "assets/js/8.16a70d9d.js",
    "revision": "f820c484c61bc2bfb949c0570bba79a3"
  },
  {
    "url": "assets/js/9.f9988161.js",
    "revision": "8f56804ceae1dc33e9d2a819ce48d2cb"
  },
  {
    "url": "assets/js/app.c29daa95.js",
    "revision": "1a9c9b58943afecf18897e640851b34b"
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
    "url": "award.html",
    "revision": "6334390e51bf443c8a725c11998ffcca"
  },
  {
    "url": "cinfo.html",
    "revision": "7de76232a0fa80dc89062596329526c1"
  },
  {
    "url": "index.html",
    "revision": "38c64a0ed245aae5a82aa66b7b73d907"
  },
  {
    "url": "linfo.html",
    "revision": "a1e3d7f6685d5763477200d4a1739561"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "6cf4fad4cc449e1236a2b94ca7904338"
  },
  {
    "url": "qanda.html",
    "revision": "ffb77e7de7b209c17afb1461878b6209"
  },
  {
    "url": "report.html",
    "revision": "3f7f715adea0b2e8ecc4019a521f7617"
  },
  {
    "url": "works.html",
    "revision": "c1eb13144ea32fc8fe3cf0660ab61017"
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
