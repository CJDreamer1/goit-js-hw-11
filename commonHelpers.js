import{i as l}from"./assets/vendor-bee2f3af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(n){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"43041849-c8f652645a26d9036757deffe",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${r}?${s}`;return fetch(o).then(e=>e.json()).then(e=>(console.log(e),e.hits)).catch(e=>{console.error("Помилка під час виконання запиту:",e)})}function u(n){return n.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:c,downloads:i})=>`<div class="modal">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${s}" data-source="${r}" alt="${o}">
          </a>
          <div class="div-info">
          <p class="p-info"><span class="p-span">Likes</span> ${e}</p>
          <p class="p-info"><span class="p-span">Views</span> ${t}</p>
          <p class="p-info"><span class="p-span">Coments</span> ${c}</p>
          <p class="p-info"><span class="p-span">Downloads</span> ${i}</p>
          </div>
        </div>`).join("")}const a={formEl:document.querySelector(".form"),pictureContainer:document.querySelector(".picture-container")};a.formEl.addEventListener("submit",n=>{n.preventDefault();const r=n.target.elements.query.value;console.log(r),p(r).then(s=>{const o=u(s);a.pictureContainer.insertAdjacentHTML("beforeend",o)}).catch(s=>{console.error("Помилка при отриманні картинок:",s),l.error({title:"Помилка",message:"Не вдалося отримати картинки"})})});
//# sourceMappingURL=commonHelpers.js.map
