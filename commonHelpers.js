import{S as c,i as p}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(s){const t="https://pixabay.com/api/",o=new URLSearchParams({key:"43041849-c8f652645a26d9036757deffe",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${t}?${o}`;return fetch(n).then(e=>e.json()).then(e=>e.hits).catch(e=>{console.error("Помилка під час виконання запиту:",e)})}function f(s,t){if(s.length===0)console.log(error);else{const o=s.map(e=>`<li class="modal">
          <a class="gallery-link" href="${e.webformatURL}">
            <img class="gallery-image" src="${e.largeImageURL}" data-source="${e.webformatURL}" alt="${e.tags}">
          </a>
          <div class="div-info">
            <p class="p-info"><span class="p-span">Likes</span> ${e.likes}</p>
            <p class="p-info"><span class="p-span">Views</span> ${e.views}</p>
            <p class="p-info"><span class="p-span">Coments</span> ${e.comments}</p>
            <p class="p-info"><span class="p-span">Downloads</span> ${e.downloads}</p>
          </div>
        </li>`).join("");return new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),o}}const i=document.querySelector(".gallery"),m=document.querySelector(".form"),l=document.querySelector(".loader");m.addEventListener("submit",s=>{s.preventDefault(),l.classList.remove("loader-hidden"),i.innerHTML="";const t=s.target.elements.query.value;u(t).then(o=>{const n=f(o);i.insertAdjacentHTML("beforeend",n)}).catch(o=>{p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}).finally(()=>{l.classList.add("loader-hidden")})})});
//# sourceMappingURL=commonHelpers.js.map
