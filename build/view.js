(()=>{var t=document.querySelector(":root");window.addEventListener("DOMContentLoaded",(function(){document.querySelector(".uncommon-cta-popup").style.opacity=0})),window.addEventListener("load",(function(){const o=document.querySelector(".uncommon-cta-popup-title"),e=document.querySelector(".uncommon-cta-popup"),n=document.querySelector(".uncommon-cta-popup-content");t.style.setProperty("--popup-height",n.offsetHeight+"px"),t.style.setProperty("--popup-width",n.offsetWidth+100+"px"),e.classList.add("uncommon-cta-popup--inactive"),o.addEventListener("click",(function(){e.classList.toggle("uncommon-cta-popup--active"),e.classList.toggle("uncommon-cta-popup--inactive")})),e.style.transitionProperty="all",e.style.opacity=1}))})();