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
    "revision": "1ef0f37b2f9a50174676e37960068151"
  },
  {
    "url": "about.html",
    "revision": "99fd2e6041b3cc5ef2ff9740e07ebe58"
  },
  {
    "url": "access.html",
    "revision": "efa337e83e6fa400e120e3546e88936f"
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
    "url": "assets/js/10.592eebf4.js",
    "revision": "93a6772543a57166e77b4e560730d2e6"
  },
  {
    "url": "assets/js/11.e3f17d63.js",
    "revision": "b754875bc68375e10c4c1b7cd04896fa"
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
    "url": "assets/js/6.f228a8b3.js",
    "revision": "a6faf4f677aa818622f733eff1c22d91"
  },
  {
    "url": "assets/js/7.c6e4c334.js",
    "revision": "d4867d34f6a7a29b0be9f803a1f4956f"
  },
  {
    "url": "assets/js/8.b4f8e4e1.js",
    "revision": "d42470d0ff0ef2db54575303b3c01926"
  },
  {
    "url": "assets/js/9.77cc366c.js",
    "revision": "a1f6e6d0c3affc678cd223c8327e0a1b"
  },
  {
    "url": "assets/js/app.8dd667ad.js",
    "revision": "6c628fbfe0eb969e9544b2fd5037501d"
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
    "revision": "a0543701b3caf084db08f0edc53bce6a"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "f72e91909b2089ecf83ecbee6043a13c"
  },
  {
    "url": "report.html",
    "revision": "994e524e159e236e4a16c48eed5fae07"
  },
  {
    "url": "works.html",
    "revision": "0d558d3b18f6c63b3c23437e3829b674"
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
