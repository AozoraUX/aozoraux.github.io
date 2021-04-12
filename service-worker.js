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
    "revision": "f745123ed24c71082a6ab1725b5c6daa"
  },
  {
    "url": "about.html",
    "revision": "c0331ea9cdf34774f4c132601507c709"
  },
  {
    "url": "access.html",
    "revision": "f805a3379044707f870e3a2257a42712"
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
    "url": "assets/js/10.98dc577f.js",
    "revision": "7ca65c44817fcc2be189469bdc3ee9fe"
  },
  {
    "url": "assets/js/11.3a5465e0.js",
    "revision": "8b42c837c4cb3712ed219eb87fbc58a2"
  },
  {
    "url": "assets/js/12.f383569c.js",
    "revision": "a1037a0d829748fedacceb6bf6345722"
  },
  {
    "url": "assets/js/13.4014581f.js",
    "revision": "bab2b3b14ee202a37ed1c07dfa761908"
  },
  {
    "url": "assets/js/14.eb94a875.js",
    "revision": "8d19fc38230cb0753a4bf642178efa36"
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
    "url": "assets/js/7.071df8cf.js",
    "revision": "7acee3bbb1d7c881d20e9bc4452d438f"
  },
  {
    "url": "assets/js/8.28a990bf.js",
    "revision": "15186b057cc4f9de990d0f1f15978463"
  },
  {
    "url": "assets/js/9.2ae3e004.js",
    "revision": "a2ab7b5737491dc1115a244d041344a0"
  },
  {
    "url": "assets/js/app.b7dc41e2.js",
    "revision": "10789b68a3bcf7764333e1058dcb9e01"
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
    "revision": "f383e3b93e770b651e9570f4f7c6ac34"
  },
  {
    "url": "cinfo.html",
    "revision": "e8426a86bebf1432f7da835261920d70"
  },
  {
    "url": "index.html",
    "revision": "c93e06d37ad211a7a9465b8c813a79e7"
  },
  {
    "url": "linfo.html",
    "revision": "51c33f75b2ce1a9bfad570c2ecbf665c"
  },
  {
    "url": "logo.png",
    "revision": "e89a015e3705c9ab215ec376dba125a6"
  },
  {
    "url": "member.html",
    "revision": "01d45cc3df49c5fcc140d174beaeacbe"
  },
  {
    "url": "qanda.html",
    "revision": "a4ca02c29603bbaa8fd329cc8b0b77d0"
  },
  {
    "url": "report.html",
    "revision": "ae1e0e05da8ad2379a3accb479bb78a9"
  },
  {
    "url": "works.html",
    "revision": "1beb18b0820ad11eda183e710920f8c9"
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
