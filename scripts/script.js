//Scroll meny logik.....................................................
const nav = document.getElementById("header");
let scrollPrev = 0;
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll >= 150) {
    nav.style.transition = "opacity 0.2s ease";
    nav.style.opacity = "0";
    nav.style.backgroundColor = "#00000095";
    setTimeout(() => {
      nav.style.display = "none";
    }, 200);
  }

  if (scrollPrev > scroll) {
    nav.style.transition = "opacity 0.2s ease";
    nav.style.opacity = "1";
    setTimeout(() => {
      nav.style.display = "flex";
    }, 200);
  }

  if (scroll <= 290) {
    nav.style.marginTop = "50px";
    nav.style.backgroundColor = "transparent";
  } else {
    nav.style.marginTop = "0";
  }

  scrollPrev = scroll;
});
//......................................................................

//Mat meny kategori logik...............................................
document.addEventListener("DOMContentLoaded", function () {
  const startersBtn = document.getElementById("starters-button");
  const mainsBtn = document.getElementById("mains-button");
  const dessertsBtn = document.getElementById("desserts-button");

  const startersContainer = document.querySelector(
    ".menu-items-container.starters"
  );
  const mainsContainer = document.querySelector(".menu-items-container.mains");
  const dessertsContainer = document.querySelector(
    ".menu-items-container.desserts"
  );

  startersBtn.addEventListener("click", () => Show("starters"));
  mainsBtn.addEventListener("click", () => Show("mains"));
  dessertsBtn.addEventListener("click", () => Show("desserts"));

  function Show(catagory) {
    startersContainer.classList.remove("show-catagory");
    mainsContainer.classList.remove("show-catagory");
    dessertsContainer.classList.remove("show-catagory");
    startersBtn.classList.remove("underline");
    mainsBtn.classList.remove("underline");
    dessertsBtn.classList.remove("underline");
    startersContainer.style.opacity = "0";
    dessertsContainer.style.opacity = "0";
    if (catagory === "mains") {
      mainsContainer.classList.add("show-catagory");
      mainsBtn.classList.add("underline");
      startersContainer.style.opacity = "0";
      dessertsContainer.style.opacity = "0";
      setTimeout(() => {
        mainsContainer.style.opacity = "1";
      }, 300);
    } else if (catagory === "starters") {
      startersContainer.classList.add("show-catagory");
      startersBtn.classList.add("underline");
      mainsContainer.style.opacity = "0";
      dessertsContainer.style.opacity = "0";
      setTimeout(() => {
        startersContainer.style.opacity = "1";
      }, 300);
    } else if (catagory === "desserts") {
      dessertsContainer.classList.add("show-catagory");
      dessertsBtn.classList.add("underline");
      mainsContainer.style.opacity = "0";
      startersContainer.style.opacity = "0";
      setTimeout(() => {
        dessertsContainer.style.opacity = "1";
      }, 300);
    }
  }
});
//......................................................................
//Buffé / Al la carte selekt logik .....................................
const buffetSelect = document.getElementById("buffet-select");
const carteSelect = document.getElementById("carte-select");
const carteContainer = document.getElementById("carte-container");
const buffetContainer = document.getElementById("buffet-container");

buffetSelect.addEventListener("click", () => {
  carteSelect.classList.add("apply-shadow-inverse");
  buffetSelect.classList.remove("apply-shadow");
  carteContainer.classList.add("hide-container");
  buffetContainer.classList.remove("hide-container");
});

carteSelect.addEventListener("click", () => {
  carteSelect.classList.remove("apply-shadow-inverse");
  buffetSelect.classList.add("apply-shadow");
  carteContainer.classList.remove("hide-container");
  buffetContainer.classList.add("hide-container");
});
