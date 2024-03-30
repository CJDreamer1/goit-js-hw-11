import{S as c,i as p}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(t){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"43041849-c8f652645a26d9036757deffe",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${o}?${s}`;return fetch(n).then(e=>e.json()).then(e=>e.hits).catch(e=>{console.error("Помилка під час виконання запиту:",e)})}function f(t,o){if(t.length===0)console.log(error);else{const s=t.map(e=>`<li class="modal">
          <a class="gallery-link" href="${e.webformatURL}">
            <img class="gallery-image" src="${e.largeImageURL}" data-source="${e.webformatURL}" alt="${e.tags}">
          </a>
          <div class="div-info">
            <p class="p-info"><span class="p-span">Likes</span> ${e.likes}</p>
            <p class="p-info"><span class="p-span">Views</span> ${e.views}</p>
            <p class="p-info"><span class="p-span">Coments</span> ${e.comments}</p>
            <p class="p-info"><span class="p-span">Downloads</span> ${e.downloads}</p>
          </div>
        </li>`).join("");return i.innerHTML=s,l.classList.add("loader-hidden"),new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),s}}const i=document.querySelector(".gallery"),m=document.querySelector(".form"),l=document.querySelector(".loader");m.addEventListener("submit",t=>{t.preventDefault(),l.classList.remove("loader-hidden"),i.innerHTML="";const o=t.target.elements.query.value;u(o).then(s=>{f(s)}).catch(s=>{p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
