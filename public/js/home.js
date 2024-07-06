const cardsCon = document.querySelector(".cards-container");
const content = Array.from(cardsCon.children);

console.log(content);
content.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  cardsCon.appendChild(duplicatedItem);
});
