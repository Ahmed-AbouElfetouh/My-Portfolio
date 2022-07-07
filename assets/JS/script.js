// Select Elements
const iconsHeader = document.querySelector('.col-2 .pages-head');
const iconsHeaderSVG = document.querySelector('.col-2 .pages-head svg');
const sectionTwoIcons = document.querySelector('.col-2 .portfolio-icons');


// Show and Hide Links
iconsHeader.addEventListener('click', () => {
  iconsHeaderSVG.classList.toggle('rotate-0-90');
  sectionTwoIcons.classList.toggle('show-hide')
});