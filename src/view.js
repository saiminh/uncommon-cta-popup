var root = document.querySelector(':root');

window.addEventListener('DOMContentLoaded', function() {
  const popup = document.querySelector('.uncommon-cta-popup');
  popup.style.opacity = 0;
})
window.addEventListener('load', function() {
  const trigger = document.querySelector('.uncommon-cta-popup-title');
  const popup = document.querySelector('.uncommon-cta-popup');
  const popupcontent = document.querySelector('.uncommon-cta-popup-content');
  
  root.style.setProperty('--popup-height', popupcontent.offsetHeight + 'px');
  
  popup.classList.add('uncommon-cta-popup--inactive');

  trigger.addEventListener('click', function() {
    popup.classList.toggle('uncommon-cta-popup--active')
    popup.classList.toggle('uncommon-cta-popup--inactive')
  })

  popup.style.transitionProperty = 'all';
  popup.style.opacity = 1;
})