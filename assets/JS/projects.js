// Select Elements
const allProjects = document.querySelectorAll('#projects-list > li');
const numberOfProjects = allProjects.length;
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const bulletsContainer = document.getElementById('slider-bullets');

// Set Variables
let start = 1;

// Create Slider Bullets
function create_bullets() {
  let bulletsUl = document.createElement('ul');
  bulletsUl.id = 'the-bullets';
  for (let i = 1; i <= numberOfProjects; i++) {
    let bulletsLi = document.createElement('li');
    bulletsLi.setAttribute('data-number', i);
    bulletsUl.append(bulletsLi);
  }
  bulletsContainer.append(bulletsUl);
}
create_bullets();

const allBulllets = document.querySelectorAll('#the-bullets > li');

allBulllets.forEach((bullet) => {
  bullet.addEventListener('click', function () {
    start = parseInt(this.dataset.number);
    sliderHandler();
  });
});

function removeActiveClasses(arrayOfElements) {
  arrayOfElements.forEach((element) => {
    element.classList.remove('active');
  });
}

function addActiveClass(arrayOfElements) {
  arrayOfElements[start - 1].classList.add('active');
}

function show_hide_btns() {
  if (start == 1) {
    if (!prevBtn.classList.contains('hide')) {
      prevBtn.classList.add('hide');
    }
  } else {
    prevBtn.classList.remove('hide');
    prevBtn.classList.add('show');
  }
  if (start == numberOfProjects) {
    nextBtn.classList.add('hide');
  } else {
    nextBtn.classList.remove('show');
  }
}

function sliderHandler() {
  removeActiveClasses(allProjects);
  addActiveClass(allProjects);
  removeActiveClasses(allBulllets);
  addActiveClass(allBulllets);
  show_hide_btns();
}

nextBtn.addEventListener('click', () => {
  if (nextBtn.classList.contains('hide')) {
    return;
  } else {
    start++;
    sliderHandler();
  }
});

prevBtn.addEventListener('click', () => {
  if (nextBtn.classList.contains('hide')) {
    nextBtn.classList.remove('hide');
  }
  if (prevBtn.classList.contains('hide')) {
    return;
  } else {
    start--;
    sliderHandler();
  }
});
