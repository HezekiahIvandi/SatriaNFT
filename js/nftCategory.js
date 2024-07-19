const cateBtns = document.querySelectorAll(".category-btn");
let categoryGlobalVar = "Koleksi";
cateBtns.forEach((btn) => {
  const btnText = btn.innerText;
  btn.addEventListener("click", () => {
    cateBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    btn.classList.toggle("active");
    extraBtn.classList.remove("jelajahi-extended");
    categoryGlobalVar = btnText;
    loadNft(btnText);
  });
});

const loadNft = (text) => {
  console.log(text);
  if (category[text] == null) return null;
  loadNftHtml(category[text]);
};

category = {
  Koleksi: [
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
  ],
  Ilustrasi: [
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
  ],
  Lukisan: [
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
  ],
};
categoryExtra = {
  Koleksi: [
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
  Ilustrasi: [
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
  Lukisan: [
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
  const JConn = document.getElementById("jelajahi-container");
  JConn.innerHTML = "";
  //load NFT
  Infos.forEach((card) => {
    console.log(card.imageUrl);
    if (card.up) {
      JConn.innerHTML += `
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
      JConn.innerHTML += `
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

const extraJNFTs = document.getElementById("extra-jelajahi-nft");
const extraBtn = document.getElementById("extra-jelajahi-nft-btn");
const extraCon = document.getElementById("extra-container");
const jelajahiCon = document.getElementById("jelajahi-container");
let Resetjelajahi;

extraBtn.addEventListener("click", () => {
  console.log(categoryGlobalVar);
  if (!extraBtn.classList.contains("jelajahi-extended")) {
    Resetjelajahi = document.getElementById("jelajahi-container").innerHTML;
    extraBtn.classList.toggle("jelajahi-extended");
    if (categoryExtra[categoryGlobalVar] == null) return null;
    loadExtra(categoryExtra[categoryGlobalVar]);
  } else {
    jelajahiCon.innerHTML = Resetjelajahi;
    extraBtn.classList.toggle("jelajahi-extended");
  }
});

const loadExtra = (Extra) => {
  Extra.forEach((card) => {
    if (card.up) {
      jelajahiCon.innerHTML += `
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
      jelajahiCon.innerHTML += `
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
