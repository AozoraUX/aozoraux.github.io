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
    "revision": "2c4705613c44a5a97b64b390c9788689"
  },
  {
    "url": "about.html",
    "revision": "6ba7ad124d208af9350789da8f73d4ea"
  },
  {
    "url": "access.html",
    "revision": "1db5198023acaf0161367bef5fda8714"
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
    "url": "assets/js/11.40c82b46.js",
    "revision": "0881bacc7087b195cdd0de9a4c697d05"
  },
  {
    "url": "assets/js/12.443bf8fe.js",
    "revision": "046a326ae26c8ba144db75735651cb19"
  },
  {
    "url": "assets/js/13.15e7af0c.js",
    "revision": "2dd9f9bdb4866c2a47e9bafa3ab58993"
  },
  {
    "url": "assets/js/14.a126ac66.js",
    "revision": "ceaf441d0795e6d556cbab3ce712d57e"
  },
  {
    "url": "assets/js/15.059ef3f4.js",
    "revision": "d09deaf9510076bead171cbb4d371735"
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
    "url": "assets/js/6.7ff1ded7.js",
    "revision": "86e3a3be268e73f0d7ac01a164b5bdf2"
  },
  {
    "url": "assets/js/7.9336a7d6.js",
    "revision": "16f4c0f8766d5982bd1b501224ca1894"
  },
  {
    "url": "assets/js/8.ceae94c0.js",
    "revision": "74a8a9897571ac2da40ec76cdea0b9e1"
  },
  {
    "url": "assets/js/9.f9988161.js",
    "revision": "8f56804ceae1dc33e9d2a819ce48d2cb"
  },
  {
    "url": "assets/js/app.de71d1f4.js",
    "revision": "2ae21dea2e9f8f672ca4b4e4d3d45791"
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
    "revision": "753c10515ae4faa76e6639eb3e1221f9"
  },
  {
    "url": "cinfo.html",
    "revision": "b0f6260088c8f6051e305c16c70f9214"
  },
  {
    "url": "index.html",
    "revision": "255306d12fb2851371c240adb666de35"
  },
  {
    "url": "linfo.html",
    "revision": "89bfe1da4ced4a758d3b118698f6b0d4"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "65f7d3f3b3708c39236156152b43b402"
  },
  {
    "url": "qanda.html",
    "revision": "328c4c3557d8e85e734f78423d171e86"
  },
  {
    "url": "report.html",
    "revision": "034b9d5c363f7686c048ad216cbcc987"
  },
  {
    "url": "works.html",
    "revision": "93268d629a39a4fe1f9c3c22191572f4"
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
