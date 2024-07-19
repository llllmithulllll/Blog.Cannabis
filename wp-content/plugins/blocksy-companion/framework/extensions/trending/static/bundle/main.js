!function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function n(n){return function(e){if(Array.isArray(e))return t(e)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c=[],i=!0,a=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){a=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return c}}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var i={},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({el:null,action:null},t),t.el&&t.action&&!t.el.classList.contains("ct-loading")){var e=parseInt(t.el.dataset.page,10);if(("prev"!==t.action||1!==e)&&!(t.el.querySelectorAll(".ct-trending-block-item").length<4&&1===e||t.el.dataset.page.indexOf("last")>-1&&"next"===t.action)){t.el.querySelectorAll(".ct-trending-block-item").forEach((function(t,e){t.style.opacity=0,t.style.transform="translateY(3px)",t.style.transitionDelay="".concat(e?.15*e-.05:0,"s")}));var a,l="prev"===t.action?e-1:e+1;Promise.all([new Promise((function(t){requestAnimationFrame((function(){setTimeout((function(){return t()}),650)}))})),(a="".concat(ct_localizations.ajax_url,"?action=blocksy_get_trending_posts&page=").concat(l),i[a]?new Promise((function(t){t(i[a]),window.ct_customizer_localizations||(i[a]=i[a].clone())})):new Promise((function(t){return fetch(a).then((function(e){t(e),window.ct_customizer_localizations||(i[a]=e.clone())}))}))).then((function(t){return t.json()}))]).then((function(e){var o=r(e,2),c=(o[0],o[1]),i=c.success,a=c.data;if(i){var s=a.posts,u=s.is_last_page,f=s.posts;t.el.dataset.page="".concat(l).concat(u?":last":""),n(t.el.querySelectorAll(".ct-trending-block-item")).map((function(t){return t.remove()})),f.map((function(e,n){return t.el.insertAdjacentHTML("beforeend",'<div class="ct-trending-block-item" style="opacity: 0; transform: translateY(3px); transition-delay: '.concat(n?.15*n-.05:0,'s;">\n\t\t\t\t\t').concat(e.image,'\n\n\t\t\t\t\t<div class="ct-trending-block-item-content">\n\t\t\t\t\t\t').concat(e.taxonomy,'\n\t\t\t\t\t\t<a href="').concat(e.url,'" class="ct-post-title">\n\t\t\t\t\t\t\t').concat(e.title,"\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t").concat(e.price,"\n\t\t\t\t\t</div>\n\t\t\t\t</a>"))})),setTimeout((function(){t.el.querySelectorAll(".ct-trending-block-item").forEach((function(t,e){t.style.opacity=1,t.style.transform="translateY(0)",t.style.transitionDelay="".concat(e?.15*e-.05:0,"s")})),requestAnimationFrame((function(){setTimeout((function(){t.el.querySelectorAll(".ct-trending-block-item").forEach((function(t){t.removeAttribute("style")}))}),650)}))}),50)}}))}}};(0,window.ctFrontend.registerDynamicChunk)("blocksy_ext_trending",{mount:function(t,e){e.event;var n=t.closest("[data-page]");t.classList.contains("ct-arrow-left")&&a({el:n,action:"prev"}),t.classList.contains("ct-arrow-right")&&a({el:n,action:"next"})}})}();