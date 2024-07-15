const cardsCon = document.querySelector(".cards-container");
const content = Array.from(cardsCon.children);
//duplicate slides child
content.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  cardsCon.appendChild(duplicatedItem);
});

const autoplays = document.querySelectorAll(".autoplay");
autoplays.forEach((autoplay) => {
  const content = Array.from(autoplay.children);
  content.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    autoplay.appendChild(duplicatedItem);
  });
});
//duplicate autoplay child

//onscroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

//targetkan element langkah button
const animatedElements = document.querySelectorAll(".langkah-button");
animatedElements.forEach((element) => {
  observer.observe(element);
});
//targetkan element wallet button
const animatedElements2 = document.querySelectorAll(".wallet-button");
animatedElements2.forEach((element) => {
  observer.observe(element);
});

/////////////////////Carousel script

const carousel = document.querySelector(".carousel");
const carouselContainer = document.querySelector(".carousel-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const gap = 20;
let width = carousel.offsetWidth;
const scrollAmount = width + gap;

prev.addEventListener("click", () => {
  carousel.scrollBy(-scrollAmount, 0);
});
next.addEventListener("click", () => {
  carousel.scrollBy(scrollAmount, 0);
});

// Calculate the middle scroll position
const middleScrollPosition = carousel.scrollWidth / 2 - width / 2;

function scrollToMiddle() {
  carousel.scroll({
    left: middleScrollPosition,
    behavior: "smooth",
  });
}

scrollToMiddle();

window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

setInterval(() => {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const currentScrollLeft = carousel.scrollLeft;
  if (currentScrollLeft == maxScrollLeft) {
    // If at the end, scroll to the previous item
    carousel.scrollBy(-maxScrollLeft, 0);
  } else {
    // Otherwise, scroll to the next item
    carousel.scrollBy(scrollAmount, 0);
  }
}, 6000);
