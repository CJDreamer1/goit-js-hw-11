import{S as i,i as c}from"./assets/vendor-acbca2f4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function l(o){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"43041849-c8f652645a26d9036757deffe",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${s}?${r}`;return fetch(n).then(e=>e.json()).then(e=>e.hits).catch(e=>{console.error("Помилка під час виконання запиту:",e)})}function p(o,s){const r=o.map(e=>`<li class="modal">
          <a class="gallery-link" href="${e.webformatURL}">
            <img class="gallery-image" src="${e.largeImageURL}" data-source="${e.webformatURL}" alt="${e.tags}">
          </a>
          <div class="div-info">
            <p class="p-info"><span class="p-span">Likes</span> ${e.likes}</p>
            <p class="p-info"><span class="p-span">Views</span> ${e.views}</p>
            <p class="p-info"><span class="p-span">Coments</span> ${e.comments}</p>
            <p class="p-info"><span class="p-span">Downloads</span> ${e.downloads}</p>
          </div>
        </li>`).join("");return new i(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),r}const f=document.querySelector(".gallery"),u=document.querySelector(".form");u.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.query.value;l(s).then(r=>{const n=p(r);f.insertAdjacentHTML("beforeend",n)}).catch(r=>{console.error("Помилка при отриманні картинок:",r),c.error({title:"Помилка",message:"Не вдалося отримати картинки"})})});
//# sourceMappingURL=commonHelpers.js.map
