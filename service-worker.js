if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),c={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"taiwan_climate"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/644.7062509d.css",revision:null},{url:"/css/app.20dfc1f8.css",revision:null},{url:"/img/climate_sample.11c61a6e.png",revision:null},{url:"/index.html",revision:"5ed773cf3124e66b766cded5f522fd75"},{url:"/js/644.3c0e9e1d.js",revision:null},{url:"/js/about.4245ac5b.js",revision:null},{url:"/js/app.e03957c8.js",revision:null},{url:"/js/chunk-vendors.4a3506b9.js",revision:null},{url:"/manifest.json",revision:"2aa2ad588df153d0e07c521341a4a877"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
