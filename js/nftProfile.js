const profBtns = document.querySelectorAll(".profile-btn");

profBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    loadNftHtml(profileInfos[btn.querySelector("div h3").innerText]);
    profBtns.forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.toggle("active");
  });
});

profileInfos = {
  "Buatan Kreator": [
    {
      imageUrl: "assets/NFTs/koleksi/1.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/koleksi/2.png",
      title: "Pesona Tegallalang",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/koleksi/3.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/koleksi/4.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/koleksi/5.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/koleksi/6.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/koleksi/7.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/koleksi/8.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
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
  ],
  Dimiliki: [
    {
      imageUrl: "assets/NFTs/ilustrasi/1.png",
      title: "Ilustrasi",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/2.png",
      title: "Pesona Tegallalang",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/3.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/4.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/5.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/6.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/7.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/8.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/9.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/10.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/11.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/12.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  "NFTs Terlaris": [
    {
      imageUrl: "assets/NFTs/lukisan/1.png",
      title: "Ilustrasi",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/2.png",
      title: "Pesona Tegallalang",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/lukisan/3.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/4.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/lukisan/5.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/6.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/lukisan/7.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/lukisan/8.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/9.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/10.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/11.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/12.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
};

const loadNftHtml = (Infos) => {
  const Pcon = document.getElementById("profile-nft-container");
  Pcon.innerHTML = "";
  //load NFT
  Infos.forEach((card) => {
    if (card.up) {
      Pcon.innerHTML += `
            <div
          class="card rounded-[18px] 2xl:rounded-[24px] min-w-[300px] 2xl:w-[100%] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
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
      Pcon.innerHTML += `
            <div
          class="card rounded-[18px] 2xl:rounded-[24px] min-w-[300px] 2xl:w-[100%] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
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
};

loadNftHtml(profileInfos["Buatan Kreator"]);

const heartBtn = document.getElementById("heart-btn");

heartBtn.addEventListener("click", () => {
  if (!heartBtn.classList.contains("active")) {
    heartBtn.querySelector("img").src = "assets/profile/heart-filled.png";
    heartBtn.classList.toggle("active");
  } else {
    heartBtn.querySelector("img").src = "assets/profile/heart.png";
    heartBtn.classList.toggle("active");
  }
});
