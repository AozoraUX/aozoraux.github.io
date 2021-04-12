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
    "revision": "e7c22bf15fe0e0da1b0e8c1158f31e2b"
  },
  {
    "url": "about.html",
    "revision": "663b06ab1f681f59fd1ebf510a642003"
  },
  {
    "url": "access.html",
    "revision": "ac776f1ebc2a518ed0ea7e30bc472206"
  },
  {
    "url": "assets/css/0.styles.c313d57e.css",
    "revision": "f2327b83b51310b3b3e81a619c794fef"
  },
  {
    "url": "assets/img/2019-06-10laboebent.jpg",
    "revision": "e6be3dcee55139a72f6a120b524813c1"
  },
  {
    "url": "assets/img/crecore5f.png",
    "revision": "db0f7f628d77a4b6bd5a9c35f3169c92"
  },
  {
    "url": "assets/img/crecore7f.png",
    "revision": "76127243852af299b66594ef52e766f0"
  },
  {
    "url": "assets/img/curriculum.png",
    "revision": "742ee2307a39dd0c9ef0521976e54927"
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
    "url": "assets/img/staffs/fukumoto.png",
    "revision": "6c911a0f37bab936ae857c8580558c75"
  },
  {
    "url": "assets/img/staffs/hattori.png",
    "revision": "344958be9c584ea2c32eb168a1e51dc3"
  },
  {
    "url": "assets/img/staffs/izumi.png",
    "revision": "88b4075b84c1a62ae678693908bb199b"
  },
  {
    "url": "assets/img/staffs/kitamuraTakayoshi.png",
    "revision": "a9f8749a0c74f5a4e5d3cc6e6e4e529b"
  },
  {
    "url": "assets/img/staffs/kitamuraYoshinobu.png",
    "revision": "3f3f750475acc8226d953a791c69b80f"
  },
  {
    "url": "assets/img/staffs/kuwabara.png",
    "revision": "b7d4c8d91cd2d58685410930dfb3acfc"
  },
  {
    "url": "assets/img/staffs/maeda.png",
    "revision": "84c654c64328816de5783e010943893e"
  },
  {
    "url": "assets/img/staffs/mondheera.jpg",
    "revision": "99fff54ceef1f3f033e25f7c2f03ffea"
  },
  {
    "url": "assets/img/staffs/mondheera.png",
    "revision": "ca51409926a362bd4dfe82bf6db68cbb"
  },
  {
    "url": "assets/img/staffs/murakami.jpg",
    "revision": "e25875d34ff6c1e5f66f8f4da173c52a"
  },
  {
    "url": "assets/img/staffs/murakami.png",
    "revision": "01d851bed0937e76ad15b2e152b2dbc4"
  },
  {
    "url": "assets/img/staffs/nakatani.png",
    "revision": "98966e7fc9319e9162b448af61f80b0c"
  },
  {
    "url": "assets/img/staffs/nishihara.png",
    "revision": "f35c29493c1fc6bd494d9a4c06467a0a"
  },
  {
    "url": "assets/img/staffs/ogawa.png",
    "revision": "045dc65f9df46675ac81495c61792868"
  },
  {
    "url": "assets/img/staffs/pop_coming_soon.png",
    "revision": "ceb7c4ad2a1bc2c05b2125785ee960ac"
  },
  {
    "url": "assets/img/staffs/whiteblock.png",
    "revision": "3896ebd0361d52b988f0eca68da330ae"
  },
  {
    "url": "assets/img/ws/1.jpg",
    "revision": "9383b63a1e3edfe61146ce759625f852"
  },
  {
    "url": "assets/img/ws/2.jpg",
    "revision": "7d1bccd5db3f6ad264ff4b2b8a661238"
  },
  {
    "url": "assets/img/ws/3.jpg",
    "revision": "d0d4266ee3109518eb26eed76d708412"
  },
  {
    "url": "assets/js/10.b94c5db9.js",
    "revision": "ab879e20f606c11728c34db65d16bdb2"
  },
  {
    "url": "assets/js/11.40c82b46.js",
    "revision": "0881bacc7087b195cdd0de9a4c697d05"
  },
  {
    "url": "assets/js/12.d859e399.js",
    "revision": "d540cf35204587d1b7784ace862532fd"
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
    "url": "assets/js/15.d862a70a.js",
    "revision": "48141a4d309ed2bd129a846ff8c50901"
  },
  {
    "url": "assets/js/16.cbd41118.js",
    "revision": "4cc21a24618fe25b2981b6f6ea2b05f1"
  },
  {
    "url": "assets/js/2.6f255aeb.js",
    "revision": "920eed121ceecd9a1e0f6048291c5f94"
  },
  {
    "url": "assets/js/3.4ac4b2ba.js",
    "revision": "40b1df350ff167d235d685c9b8ff9171"
  },
  {
    "url": "assets/js/4.d8a726dc.js",
    "revision": "1c114916ea43b6baeb7b22ac00f71b87"
  },
  {
    "url": "assets/js/5.8e7e2c0f.js",
    "revision": "050a91cd6142a3009f697799c104d7bc"
  },
  {
    "url": "assets/js/6.43096247.js",
    "revision": "57e02e462298a90cd49b00390f808932"
  },
  {
    "url": "assets/js/7.5754dd7d.js",
    "revision": "76af66eaaa7f9974b65b014493e35fba"
  },
  {
    "url": "assets/js/8.28a990bf.js",
    "revision": "15186b057cc4f9de990d0f1f15978463"
  },
  {
    "url": "assets/js/9.360b327e.js",
    "revision": "c550f8b98c9c75e91448b27eadc13ad6"
  },
  {
    "url": "assets/js/app.e5424fb0.js",
    "revision": "81080ff5b9d2ee4242b9531f7b615f3b"
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
    "url": "assets/mov/courseExercises480_1.png",
    "revision": "bc456cac9f701cf82bc4739556495488"
  },
  {
    "url": "assets/mov/courseExercises480_2.png",
    "revision": "8c639d0fe23cd7806fc55c4ccea02595"
  },
  {
    "url": "assets/mp4/intro_pprog.png",
    "revision": "064c3817f927f27c76f4a69cef6381b9"
  },
  {
    "url": "assets/mp4/intro_pprog2.png",
    "revision": "4bb52ce853a1dee8be9403fa51e1d85a"
  },
  {
    "url": "assets/mp4/intro_ss2.png",
    "revision": "411dd01c1f8ea5d4d2d900f944a28ac7"
  },
  {
    "url": "award.html",
    "revision": "4eff24404c4b3f652886a3636571f4e0"
  },
  {
    "url": "cinfo.html",
    "revision": "0b0c4100c494ceeda8c72a409a4c3c4f"
  },
  {
    "url": "index.html",
    "revision": "6c25f16f5cd6356fd3404c4feacd5723"
  },
  {
    "url": "linfo.html",
    "revision": "fa1c604b521b3b851a65e39da9218d8d"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "193ac4066010a7dd87ad59be1b7698d8"
  },
  {
    "url": "qanda.html",
    "revision": "bc800287565753c2170b2fa08790b013"
  },
  {
    "url": "report.html",
    "revision": "afdcb7ffdf8484b409fbd74de5569ba6"
  },
  {
    "url": "works.html",
    "revision": "736ae1a4bc95aaa00a24c17fc999ad84"
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
