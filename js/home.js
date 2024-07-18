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

const extraJNFTs = document.getElementById("extra-jelajahi-nft");
const extraBtn = document.getElementById("extra-jelajahi-nft-btn");
const extraCon = document.getElementById("extra-container");
const jelajahiCon = document.getElementById("jelajahi-container");
let Resetjelajahi;
extraBtn.addEventListener("click", () => {
  if (!extraBtn.classList.contains("jelajahi-extended")) {
    Resetjelajahi = jelajahiCon.innerHTML;

    extraBtn.classList.toggle("jelajahi-extended");
    // jelajahiCon.innerHTML += extraCon.innerHTML;
    loadExtra();
  } else {
    jelajahiCon.innerHTML = Resetjelajahi;
    extraBtn.classList.toggle("jelajahi-extended");
  }
});

const loadExtra = () => {
  ExtraJelajahiNFTs = [
    {
      imageUrl: "assets/NFTs/koleksi/9.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/koleksi/10.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/koleksi/11.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/koleksi/12.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ];
  ExtraJelajahiNFTs.forEach((card) => {
    if (card.up) {
      jelajahiCon.innerHTML += `
            <div
          class="card rounded-[18px] 2xl:rounded-[24px] w-[300px] 2xl:w-[400px] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
        >
          <div class="img-container relative">
            <img src="${card.imageUrl}" alt="" />
            <div
              class="time-btn absolute bottom-[15px] left-1/2 transform -translate-x-1/2"
            >
             
            </div>
            <button
              class="ajukan-btn opacity-0 w-[200px] 2xl:w-[270px] px-[20px] 2x:px-[30px] py-[15px] text-[14px] 2xl-[text-20px] bg-[#4639FA] rounded-[8px] absolute bottom-1/2 left-1/2 transform -translate-x-1/2"
            >
              Ajukan Penawaran
            </button>
          </div>
        
          <div>
            <h3 class="text-[20px] 2xl:text-[24px] font-semibold mt-[20px]">
              ${card.title}
            </h3>
            <p class="text-[#879CB5] text-[14px] 2xl:text-[16px]">Koleksi nusaNFT</p>
          </div>
        
          <div class="mt-[20px] flex justify-between items-center">
            <div class="items-center">
              <p class="text-[14px] text-[#15BFFD]">Tawaran saat ini</p>
              <div class="flex items-center">
                <span
                  ><img src="assets/cards/eth.png" alt="" class="w-[20px] mr-[5px]"
                /></span>
                <span class="text-[20px] text-[#15BFFD] font-extrabold"
                  >${card.price}</span
                >
                <span class="text-[20px] text-[#15BFFD] font-extrabold">ETH</span>
              </div>
            </div>
            <div class="flex justify-between w-[120px] 2xl:w-[150px]">
              <div>
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[16px] 2xl:text-[20px]">Rp.</span> ${card.rupiah}
                  <span class="text-[12px]">,00</span>
                </p>
        
                
                <div class="flex items-center justify-end">
                  <span
                    ><img src="assets/cards/green.png" alt="" class="w-[15px]" />
                  </span>
                  <h3 class="text-[16px] ml-[5px] text-[#24FF00]">${card.volatility}</h3>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        
            `;
    } else {
      jelajahiCon.innerHTML += `
            <div
          class="card rounded-[18px] 2xl:rounded-[24px] w-[300px] 2xl:w-[400px] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
        >
          <div class="img-container relative">
            <img src="${card.imageUrl}" alt="" />
            <div
              class="time-btn absolute bottom-[15px] left-1/2 transform -translate-x-1/2"
            >
              
            </div>
            <button
              class="ajukan-btn opacity-0 w-[200px] 2xl:w-[270px] px-[20px] 2x:px-[30px] py-[15px] text-[14px] 2xl-[text-20px] bg-[#4639FA] rounded-[8px] absolute bottom-1/2 left-1/2 transform -translate-x-1/2"
            >
              Ajukan Penawaran
            </button>
          </div>
        
          <div>
            <h3 class="text-[20px] 2xl:text-[24px] font-semibold mt-[20px]">
              ${card.title}
            </h3>
            <p class="text-[#879CB5] text-[14px] 2xl:text-[16px]">Koleksi nusaNFT</p>
          </div>
        
          <div class="mt-[20px] flex justify-between items-center">
            <div class="items-center">
              <p class="text-[14px] text-[#15BFFD]">Tawaran saat ini</p>
              <div class="flex items-center">
                <span
                  ><img src="assets/cards/eth.png" alt="" class="w-[20px] mr-[5px]"
                /></span>
                <span class="text-[20px] text-[#15BFFD] font-extrabold"
                  >${card.price}</span
                >
                <span class="text-[20px] text-[#15BFFD] font-extrabold">ETH</span>
              </div>
            </div>
            <div class="flex justify-between w-[120px] 2xl:w-[150px]">
              <div>
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[16px] 2xl:text-[20px]">Rp.</span> ${card.rupiah}
                  <span class="text-[12px]">,00</span>
                </p>
        
              
                <div class="flex items-center justify-end">
                  <span
                    ><img src="assets/cards/red.png" alt="" class="w-[15px]" />
                  </span>
                  <h3 class="text-[16px] ml-[5px] text-[#EB1414]">${card.volatility}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        `;
    }
  });
  console.log(extraConn);
};
