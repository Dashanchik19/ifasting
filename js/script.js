/* Burger menu */

const burgerMenu = document.querySelector(".header__burger-menu");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("active");
}

burgerMenu.addEventListener("click", toggleMenu);

document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideBurger = burgerMenu.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideBurger) {
    menu.classList.remove("active");
  }
});

/* Carousell users*/

const blocks = document.querySelectorAll(".users__block");
const leftButton = document.querySelector(".btn-left");
const rightButton = document.querySelector(".btn-right");

let currentIndex = 0;
let startX = 0;
let endX = 0;

// Функція для відображення активного блоку
function showActiveBlock(index) {
  blocks.forEach((block, i) => {
    block.classList.toggle("active", i === index);
  });
}

leftButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? blocks.length - 1 : currentIndex - 1;
  showActiveBlock(currentIndex);
});

rightButton.addEventListener("click", () => {
  currentIndex = currentIndex === blocks.length - 1 ? 0 : currentIndex + 1;
  showActiveBlock(currentIndex);
});

showActiveBlock(currentIndex);

// Функція для відслідковування свайпів
function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  endX = event.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  if (startX > endX + 50) {
    currentIndex = currentIndex === blocks.length - 1 ? 0 : currentIndex + 1;
  } else if (startX < endX - 50) {
    currentIndex = currentIndex === 0 ? blocks.length - 1 : currentIndex - 1;
  }
  showActiveBlock(currentIndex);
}

blocks.forEach((block) => {
  block.addEventListener("touchstart", handleTouchStart);
  block.addEventListener("touchend", handleTouchEnd);
});

// Функція для відслідковування свайпів features

document.addEventListener("DOMContentLoaded", function () {
  const leftButton = document.querySelector(".btn-left-2");
  const rightButton = document.querySelector(".btn-right-2");
  const blocks = document.querySelectorAll(".benefits__block");
  let currentIndex = 0;

  function showBlock(index) {
    // Прибираємо клас "active" з усіх блоків
    blocks.forEach((block) => block.classList.remove("active"));
    // Додаємо клас "active" до блоку за індексом
    blocks[index].classList.add("active");
  }

  leftButton.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = blocks.length - 1;
    }
    showBlock(currentIndex);
  });

  rightButton.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= blocks.length) {
      currentIndex = 0;
    }
    showBlock(currentIndex);
  });
});

/* Change theame */

document.getElementById("theme-toggle").addEventListener("click", function () {
  const background = document.querySelector(".background");
  background.classList.toggle("light");

  // Змінюємо текст кнопки при зміні теми
  const button = this;
  if (background.classList.contains("light")) {
    button.textContent = "dark theme";
  } else {
    button.textContent = "light theme";
  }
});
