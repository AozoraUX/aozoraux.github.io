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
    "revision": "ae4dead544c5c8bc99ea6ec30b2038b0"
  },
  {
    "url": "about.html",
    "revision": "bee053c835cf067f72733f37e2ecc688"
  },
  {
    "url": "access.html",
    "revision": "6a3562a039e89a0f6f23b4bd86266b4f"
  },
  {
    "url": "assets/css/0.styles.c313d57e.css",
    "revision": "f2327b83b51310b3b3e81a619c794fef"
  },
  {
    "url": "assets/img/images/_1.jpg",
    "revision": "8cd7c409ee6bd8f9d5c2a31a4769dd76"
  },
  {
    "url": "assets/img/images/1.jpg",
    "revision": "194e99cbb090b997fe6a4000d923349b"
  },
  {
    "url": "assets/img/images/2.jpg",
    "revision": "4f4ed2e0147cc61e5f90e176da704d11"
  },
  {
    "url": "assets/img/images/AozoraUxLogo.png",
    "revision": "5233ebb42f0e592507833b245988f0d9"
  },
  {
    "url": "assets/img/images/labmemlogo.png",
    "revision": "ff9d67e28a9d2a006fd559f19bd2db2e"
  },
  {
    "url": "assets/img/images/labplate.jpg",
    "revision": "7c8dee3ba4821369738324f01b4a7993"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d21af517.js",
    "revision": "bee1c2a2c94a053f51eaf92df03c8fbd"
  },
  {
    "url": "assets/js/11.efaf341b.js",
    "revision": "82005cd4c8da28776ac8c6dc766346f1"
  },
  {
    "url": "assets/js/12.f383569c.js",
    "revision": "a1037a0d829748fedacceb6bf6345722"
  },
  {
    "url": "assets/js/13.15e7af0c.js",
    "revision": "2dd9f9bdb4866c2a47e9bafa3ab58993"
  },
  {
    "url": "assets/js/14.bbd6394e.js",
    "revision": "af5cbca3494ee4adfcff1413fd720819"
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
    "url": "assets/js/6.b47f1746.js",
    "revision": "bb71f62bd2848e7c5fd91a25b9842f96"
  },
  {
    "url": "assets/js/7.5754dd7d.js",
    "revision": "76af66eaaa7f9974b65b014493e35fba"
  },
  {
    "url": "assets/js/8.e7ef8816.js",
    "revision": "29fac65b7b915debfeb1be88dc5e9a74"
  },
  {
    "url": "assets/js/9.e84a2de3.js",
    "revision": "1820196196f7936a3234f24b8fba201c"
  },
  {
    "url": "assets/js/app.a0a4f544.js",
    "revision": "0cfd5812e5558d3e7f567eaa6372248e"
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
    "revision": "95333989add32aa47aa6501041253006"
  },
  {
    "url": "cinfo.html",
    "revision": "7e1dec6f0269cb4619763eff8daf9202"
  },
  {
    "url": "index.html",
    "revision": "2bf752796e8b9d23885969a5c0e6ef8a"
  },
  {
    "url": "linfo.html",
    "revision": "98922d7e9efec9193211852c551bd5f3"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "a6530bde823b0eb0df9a85c1d16f9d61"
  },
  {
    "url": "qanda.html",
    "revision": "e1e41c45cc73ce275128b46d26153b7f"
  },
  {
    "url": "report.html",
    "revision": "07a1bd7ff7eb042046ca0e3dd55c6a64"
  },
  {
    "url": "works.html",
    "revision": "f998441ae650823d627f48e6b097a4e4"
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
