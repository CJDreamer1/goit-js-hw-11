import{S as a,i as l}from"./assets/vendor-f3f87f24.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(o){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"43041849-c8f652645a26d9036757deffe",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${s}?${r}`;return fetch(n).then(e=>e.json()).then(e=>(console.log(e),e.hits)).catch(e=>{console.error("Помилка під час виконання запиту:",e)})}function u(o){const s=o.map(r=>`<div class="modal">
          <a class="gallery-link" href="${r.webformatURL}">
            <img class="gallery-image" src="${r.largeImageURL}" data-source="${r.webformatURL}" alt="${r.tags}">
          </a>
          <div class="div-info">
            <p class="p-info"><span class="p-span">Likes</span> ${r.likes}</p>
            <p class="p-info"><span class="p-span">Views</span> ${r.views}</p>
            <p class="p-info"><span class="p-span">Coments</span> ${r.comments}</p>
            <p class="p-info"><span class="p-span">Downloads</span> ${r.downloads}</p>
          </div>
        </div>`).join("");return new a(".gallery a",{captionsData:"alt",captionDelay:250}),s}const i={formEl:document.querySelector(".form"),pictureContainer:document.querySelector(".picture-container"),gallery:document.querySelector(".gallery")};i.formEl.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.query.value;console.log(s),p(s).then(r=>{const n=u(r);i.pictureContainer.insertAdjacentHTML("beforeend",n)}).catch(r=>{console.error("Помилка при отриманні картинок:",r),l.error({title:"Помилка",message:"Не вдалося отримати картинки"})})});
//# sourceMappingURL=commonHelpers.js.map
