if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bdcf60e91aaba1b0cfad606dadc700a7"},{url:"/_next/static/chunks/209-870d7aa703a1b1ce.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/376-dfb5962631cc35fb.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/60efc914-9c6c43be9d63975f.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/977-c55fcb77ae4b2c49.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/app/_not-found/page-9ed57ca11d21e8d8.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/app/api/route-e5033c6544677421.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/app/layout-d9d094cb52d6205e.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/app/page-5422014c4a9c8d62.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/framework-36299e4fd9068ae4.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/main-501164b20a4674e2.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/main-app-fe9eae024ba2febd.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/pages/_app-2645039105216a61.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/pages/_error-ec65bbe7f0669c51.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-742025fbcde70df5.js",revision:"hhuDxhZdSREFqitGoe8Vt"},{url:"/_next/static/css/118c088f92cd9e1e.css",revision:"118c088f92cd9e1e"},{url:"/_next/static/hhuDxhZdSREFqitGoe8Vt/_buildManifest.js",revision:"cd6e27b1424a7197e3fb09d0fe5e295d"},{url:"/_next/static/hhuDxhZdSREFqitGoe8Vt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/app-128.png",revision:"a7f68acf36c847705af924b58c0c2847"},{url:"/icons/app-144.png",revision:"a4977d36e54afe5398f3b35f9d7f7318"},{url:"/icons/app-152.png",revision:"cc8bcb7c3d44bbb83e07c4d263c4db98"},{url:"/icons/app-16.png",revision:"c13fa3cff96edb881d5d6d54c3cef66a"},{url:"/icons/app-180.png",revision:"00ca7a37afeac3e605af5e47a7b0240a"},{url:"/icons/app-192.png",revision:"7a77b78acae1617ed7e04a461cc536bd"},{url:"/icons/app-256.png",revision:"b622391ee09c553eff9dfe3ebb5a9ccc"},{url:"/icons/app-48.png",revision:"951177a22b40c3b1bb7793f7678e685c"},{url:"/icons/app-512.png",revision:"bf510fb409ba924f422cc1dc2c2cbc9d"},{url:"/icons/app-64.png",revision:"6718f0b52982cb0eea5bc2ef5e94c7fa"},{url:"/icons/app-72.png",revision:"9b34d38ed46b8e0f206e75d807ddd368"},{url:"/icons/app-96.png",revision:"3e388624f0b72034a40de252f0303b51"},{url:"/manifest.json",revision:"00237f1b986ccc58bdfa2643bcccc419"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
