//Scroll meny logik.....................................................
const nav = document.getElementById("header");
let scrollPrev = 0;
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll >= 150) {
    nav.style.transition = "opacity 0.2s ease";
    nav.style.opacity = "0";
  }

  if (scrollPrev > scroll) {
    nav.style.transition = "opacity 0.2s ease";
    nav.style.opacity = "1";
  }

  if (scroll <= 290) {
    nav.style.marginTop = "50px";
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
