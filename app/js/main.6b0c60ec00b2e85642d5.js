(()=>{"use strict";var e={353:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var o=s(370),r=s.n(o),n=new URL(s(7),s.b);const a='<!DOCTYPE html> <html> <head> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width,initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="ie=edge"/> <title>NewsPortal</title> </head> <body> <header class="header"> <h1>News Portal</h1> <div class="menu__ico"> <span></span> </div> <nav class="menu__body"></nav> </header> <main> <div class="sources buttons"></div> <div class="news"></div> </main> <template id="sourceItemTemp"> <div class="source__item"> <span class="source__item-name"></span> </div> </template> <template id="newsItemTemp"> <div class="news__item"> <div class="news__meta"> <div class="news__meta-photo"></div> <ul class="news__meta-details"> <li class="news__meta-author"></li> <li class="news__meta-date"></li> </ul> </div> <div class="news__description"> <h2 class="news__description-title"></h2> <h3 class="news__description-source"></h3> <p class="news__description-content"></p> <p class="news__read-more"> <a href="#">Read More</a> </p> </div> </div> </template> <footer class="footer"> <p class="author"> <a class="author_name" href="https://github.com/Bam6ycha" target="_blank">Bam6ycha</a> </p> <p class="copyright"> Copyright <a href="https://newsapi.org">NewsAPI</a> </p> <p class="rs__logo"> <a href="https://rs.school/" target="_blank"> <img src="'+r()(n)+'" alt="rsLogo"/> </a> </p> </footer> </body> </html> '},370:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},552:(e,t,s)=>{s.r(t)},485:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.burgerMenu=void 0;t.burgerMenu=new class{constructor(){this.icon=document.querySelector(".menu__ico"),this.menuBody=document.querySelector(".menu__body"),this.show(),this.hide()}show(){this.icon&&this.icon.addEventListener("click",(()=>{document.body.classList.toggle("_lock"),this.icon.classList.toggle("_active"),this.menuBody.classList.toggle("_active"),this.hideMenuOnLinksClick()}))}hide(){this.icon.classList.contains("_active")&&(document.body.classList.remove("_lock"),this.icon.classList.remove("_active"),this.menuBody.classList.remove("_active"))}hideMenuOnLinksClick(){[...document.getElementsByClassName("source__item")].forEach((e=>e.addEventListener("click",(()=>this.hide()))))}}},627:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(s(432)),n=s(894);t.default=class{constructor(){this.controller=new r.default,this.view=new n.AppView}start(){document.querySelector(".menu__body").addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}}},837:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(s(961));class n extends r.default{constructor(){super("https://newsapi.org/v2/",{apiKey:"a8ac38dc4157435ba38c741838c8af19"})}}t.default=n},432:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(908),n=o(s(837));class a extends n.default{getSources(e){super.getResp({endpoint:r.EndPoints.Sources},e)}getNews(e,t){if(e.target){let s=e.target;const o=e.currentTarget;if(o)for(;s!==o;){if(s.classList.contains("source__item")){const e=s.getAttribute("data-source-id");return void(o.getAttribute("data-source")!==e&&e&&(o.setAttribute("data-source",e),super.getResp({endpoint:r.EndPoints.Everything,options:{sources:e}},t)))}s=s.parentNode}}}}t.default=a},961:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=s(371);t.default=class{constructor(e,t){this.baseLink=e,this.options=t}getResp({endpoint:e,options:t={}},s=(()=>{console.error("No callback for GET response")})){this.load("GET",e,s,t)}errorHandler(e){if(!e.ok)throw e.status!==o.ResponseStatus.Unauthorized&&e.status!==o.ResponseStatus.NotFound||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,t){const s=Object.assign(Object.assign({},this.options),e);let o=`${this.baseLink}${t}?`;return Object.keys(s).forEach((e=>{o+=`${e}=${s[e]}&`})),o.slice(0,-1)}load(e,t,s,o){fetch(this.makeUrl(o,t),{method:e,headers:{Upgrade:"HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11"}}).then(this.errorHandler).then((e=>e.json())).then((e=>s(e))).catch((e=>console.error(e)))}}},908:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EndPoints=void 0,function(e){e.Everything="everything",e.Sources="sources"}(t.EndPoints||(t.EndPoints={}))},371:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ResponseStatus=void 0,function(e){e[e.NotFound=404]="NotFound",e[e.Unauthorized=401]="Unauthorized",e[e.Ok=200]="Ok",e[e.TooManyRequests=429]="TooManyRequests",e[e.ServerError=500]="ServerError"}(t.ResponseStatus||(t.ResponseStatus={}))},894:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AppView=void 0;const r=o(s(755)),n=o(s(583));class a{constructor(){this.news=new r.default,this.sources=new n.default}drawNews(e){const t=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(t)}drawSources(e){const t=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(t)}}t.AppView=a,t.default=a},755:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{draw(e){const t=e.length>=10?e.filter(((e,t)=>t<10)):e,s=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");t.forEach(((e,t)=>{const r=o.content.cloneNode(!0);if(t%2){r.querySelector(".news__item").classList.add("alt")}r.querySelector(".news__meta-photo").style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"})`;r.querySelector(".news__meta-author").textContent=e.author||e.source.name;r.querySelector(".news__meta-date").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-");r.querySelector(".news__description-title").textContent=e.title;r.querySelector(".news__description-source").textContent=e.source.name;r.querySelector(".news__description-content").textContent=e.description;r.querySelector(".news__read-more a").setAttribute("href",e.url),s.append(r)}));const r=document.querySelector(".news");r.innerHTML="",r.appendChild(s)}}},583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{draw(e){const t=document.createDocumentFragment(),s=document.querySelector("#sourceItemTemp");e.forEach((e=>{const o=s.content.cloneNode(!0);o.querySelector(".source__item-name").textContent=e.name;o.querySelector(".source__item").setAttribute("data-source-id",e.id),t.append(o)}));document.querySelector(".menu__body").append(t)}}},944:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),s(353),s(552);const r=s(485);(new(o(s(627)).default)).start(),r.burgerMenu},7:(e,t,s)=>{e.exports=s.p+"./img/rs.ad178c0df28bc133be34.svg"}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,s),n.exports}s.m=e,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../"})(),s.b=document.baseURI||self.location.href;s(944)})();