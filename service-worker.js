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
    "revision": "6d7ef948a88dd097e7d66ba672d2ee84"
  },
  {
    "url": "about.html",
    "revision": "c072a71abb658a591fdc5c092bc378f3"
  },
  {
    "url": "access.html",
    "revision": "b30a777273c2c5ebb48be1b17d7b623c"
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
    "url": "assets/img/logo2.png",
    "revision": "e58ac2d1cf653073826a95624b10f01b"
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
    "url": "assets/js/11.40c82b46.js",
    "revision": "0881bacc7087b195cdd0de9a4c697d05"
  },
  {
    "url": "assets/js/12.78324aca.js",
    "revision": "125eca4ba92f6b73635fbe8985f22a3d"
  },
  {
    "url": "assets/js/13.62e9fa62.js",
    "revision": "b324e5fefabbcf0ff1db2268da588692"
  },
  {
    "url": "assets/js/14.e5ef9684.js",
    "revision": "f0412776b5e9f8c2b9e8bcec47c8a4fd"
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
    "url": "assets/js/6.88074073.js",
    "revision": "039c9c1e85bcacb787d3de06b6432c3d"
  },
  {
    "url": "assets/js/7.48c14d02.js",
    "revision": "21d192413f06fd3ea653d499823c2149"
  },
  {
    "url": "assets/js/8.4c731f9b.js",
    "revision": "3639057b928eac32269c909deae9c923"
  },
  {
    "url": "assets/js/9.e7667dfe.js",
    "revision": "964df83aa46b1cb7e70a024702180e86"
  },
  {
    "url": "assets/js/app.940f4f16.js",
    "revision": "34f02b8b18f65abc6976c5abee6c8359"
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
    "revision": "e8560cf084e6312b00038192df44f5e4"
  },
  {
    "url": "cinfo.html",
    "revision": "bc8936d80dc08c8a3865d609dfdf77c5"
  },
  {
    "url": "index.html",
    "revision": "54731b3fb7064b2e38c41967d3351a41"
  },
  {
    "url": "linfo.html",
    "revision": "efc64d1f2176a9ab22f94af63611f6d2"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "3d1c24fdd79c412bc8e3db13694819e5"
  },
  {
    "url": "qanda.html",
    "revision": "ac4b9df723c2e53dc3d9c401c877c6e0"
  },
  {
    "url": "report.html",
    "revision": "eaa9622fbd5f7b411379375f894fd5d4"
  },
  {
    "url": "works.html",
    "revision": "ad9462bad5975dc1bba1c3426ee68c02"
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
