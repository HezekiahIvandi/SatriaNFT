const cardsCon = document.querySelector(".cards-container");
const content = Array.from(cardsCon.children);

content.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  cardsCon.appendChild(duplicatedItem);
});

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
