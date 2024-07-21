const ddownBtn = document.getElementById("ddown-button");
const ddownMenu = document.getElementById("ddown-menu");
const ddownItems = document.querySelectorAll(".ddown-items");
ddownBtn.addEventListener("click", () => {
  ddownMenu.classList.toggle("hidden");
});

ddownItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    ddownItems.forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.toggle("active");
    ddownBtn.querySelector("p").innerText = btn.innerText;

    const infos = pasarInfo[btn.innerText];
    if (infos == null) return null;
    if (btn.innerText == "Kreator") {
      console.log(infos);
      loadKreatorCard(infos);
    } else {
      loadPasarNftHtml(infos);
    }

    //tutup menu
    ddownMenu.classList.toggle("hidden");
    document.getElementById("extra-pasar-nft-btn").classList.remove("extended");
  });
});

const loadPasarNftHtml = (Infos) => {
  const pasarCon = document.getElementById("pasar-jual-container");
  pasarCon.innerHTML = "";
  //load NFT
  Infos.forEach((card) => {
    if (card.up) {
      pasarCon.innerHTML += `
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
      pasarCon.innerHTML += `
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
const loadPasarNftHtmlExtra = (Infos) => {
  const pasarCon = document.getElementById("pasar-jual-container");
  //load NFT
  Infos.forEach((card) => {
    if (card.up) {
      pasarCon.innerHTML += `
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
      pasarCon.innerHTML += `
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

const loadKreatorCard = (Infos) => {
  const pasarCon = document.getElementById("pasar-jual-container");
  pasarCon.innerHTML = "";

  Infos.forEach((card) => {
    pasarCon.innerHTML += `
    <div
  class="kreator-card bg-[#2B2B3E] rounded-[18px] 2xl:rounded-[24px] max-w-[420px] min-w-[300px] 2xl:w-[100%] px-[1rem] py-[1rem] items-center"
>
  <div class="relative img-con">
    <img class="pasar-card-img w-full h-auto" src="${card.bgUrl}" alt="" />

    <a href="${card.profileUrl}">
      <button
        class="kreator-card-btn opacity-0 w-[200px] 2xl:w-[270px] px-[20px] 2x:px-[30px] py-[15px] text-[14px] 2xl-[text-20px] bg-[#4639FA] rounded-[8px] absolute bottom-1/2 left-1/2 transform -translate-x-1/2"
      >
        Kunjungi Profile
      </button>
    </a>

    <div class="absolute mx-auto left-0 right-0 w-fit bottom-[-54px]">
      <img src="${card.pfpUrl}" alt="" class="rounded-full w-[108px]" />
    </div>
  </div>

  <div
    class="mt-[60px] flex flex-col justify-center items-center w-full mb-[20px]"
  >
    <h3 class="text-[20px] 2xl:text-[24px] font-semibold mt-[20px]">
      ${card.name}
    </h3>
    <div class="flex items-center w-full justify-center gap-[4px]">
      <span><img src="assets/cards/eth.png" alt="" class="w-[20px]" /></span>
      <span class="text-[20px] text-[#15BFFD] font-bold">${card.balance}</span>
      <span class="text-[20px] text-[#15BFFD] font-bold">ETH</span>
    </div>
  </div>
</div>

    `;
  });
};
const loadKreatorCardExtra = (Infos) => {
  const pasarCon = document.getElementById("pasar-jual-container");

  Infos.forEach((card) => {
    pasarCon.innerHTML += `
    <div
  class="kreator-card bg-[#2B2B3E] rounded-[18px] 2xl:rounded-[24px] max-w-[420px] min-w-[300px] 2xl:w-[100%] px-[1rem] py-[1rem] items-center"
>
  <div class="relative img-con">
    <img class="pasar-card-img w-full h-auto" src="${card.bgUrl}" alt="" />

    <a href="${card.profileUrl}">
      <button
        class="kreator-card-btn opacity-0 w-[200px] 2xl:w-[270px] px-[20px] 2x:px-[30px] py-[15px] text-[14px] 2xl-[text-20px] bg-[#4639FA] rounded-[8px] absolute bottom-1/2 left-1/2 transform -translate-x-1/2"
      >
        Kunjungi Profile
      </button>
    </a>

    <div class="absolute mx-auto left-0 right-0 w-fit bottom-[-54px]">
      <img src="${card.pfpUrl}" alt="" class="rounded-full w-[108px]" />
    </div>
  </div>

  <div
    class="mt-[60px] flex flex-col justify-center items-center w-full mb-[20px]"
  >
    <h3 class="text-[20px] 2xl:text-[24px] font-semibold mt-[20px]">
      ${card.name}
    </h3>
    <div class="flex items-center w-full justify-center gap-[4px]">
      <span><img src="assets/cards/eth.png" alt="" class="w-[20px]" /></span>
      <span class="text-[20px] text-[#15BFFD] font-bold">${card.balance}</span>
      <span class="text-[20px] text-[#15BFFD] font-bold">ETH</span>
    </div>
  </div>
</div>

    `;
  });
};

pasarInfo = {
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
  Olahraga: [
    {
      imageUrl: "assets/NFTs/olahraga/1.png",
      title: "Ilustrasi",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/2.png",
      title: "Pesona Tegallalang",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/olahraga/3.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/4.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/olahraga/5.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/6.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/olahraga/7.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/olahraga/8.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/9.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/10.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/11.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/12.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  Video: [
    {
      imageUrl: "assets/NFTs/video/1.png",
      title: "Ilustrasi",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/2.png",
      title: "Pesona Tegallalang",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/video/3.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/4.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/video/5.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/6.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/video/7.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/video/8.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/9.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/10.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/11.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/12.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  Animasi: [
    {
      imageUrl: "assets/NFTs/animasi/1.png",
      title: "Ilustrasi",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/2.png",
      title: "Pesona Tegallalang",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/animasi/3.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/4.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/animasi/5.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/6.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/animasi/7.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: false,
    },
    {
      imageUrl: "assets/NFTs/animasi/8.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/9.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/10.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/11.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/12.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  Kreator: [
    {
      bgUrl: "/assets/NFTs/kreator/bg/1.png",
      profileUrl: "profile.html?nav2/1",
      pfpUrl: "assets/NFTs/kreator/pfp/1.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/2.png",
      profileUrl: "profile.html?nav2/2",
      pfpUrl: "assets/NFTs/kreator/pfp/2.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/3.png",
      profileUrl: "profile.html?nav2/3",
      pfpUrl: "assets/NFTs/kreator/pfp/3.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/4.png",
      profileUrl: "profile.html?nav2/4",
      pfpUrl: "assets/NFTs/kreator/pfp/4.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/5.png",
      profileUrl: "profile.html?nav2/5",
      pfpUrl: "assets/NFTs/kreator/pfp/5.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/6.png",
      profileUrl: "profile.html?nav2/6",
      pfpUrl: "assets/NFTs/kreator/pfp/6.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/7.png",
      profileUrl: "profile.html?nav2/7",
      pfpUrl: "assets/NFTs/kreator/pfp/7.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/8.png",
      profileUrl: "profile.html?nav2/8",
      pfpUrl: "assets/NFTs/kreator/pfp/8.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/9.png",
      profileUrl: "profile.html?nav2/9",
      pfpUrl: "assets/NFTs/kreator/pfp/9.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/10.png",
      profileUrl: "profile.html?nav2/10",
      pfpUrl: "assets/NFTs/kreator/pfp/10.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/11.png",
      profileUrl: "profile.html?nav2/11",
      pfpUrl: "assets/NFTs/kreator/pfp/11.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/12.png",
      profileUrl: "profile.html?nav2/12",
      pfpUrl: "assets/NFTs/kreator/pfp/12.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
  ],
};
pasarInfoExtra = {
  Koleksi: [
    {
      imageUrl: "assets/NFTs/koleksi/13.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/koleksi/14.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/koleksi/15.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/koleksi/16.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  Ilustrasi: [
    {
      imageUrl: "assets/NFTs/ilustrasi/13.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/14.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/15.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/ilustrasi/16.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  Lukisan: [
    {
      imageUrl: "assets/NFTs/lukisan/13.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/14.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/15.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/lukisan/16.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  Olahraga: [
    {
      imageUrl: "assets/NFTs/olahraga/13.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/14.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/15.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/olahraga/16.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  Video: [
    {
      imageUrl: "assets/NFTs/video/13.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/14.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/15.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/video/16.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  Animasi: [
    {
      imageUrl: "assets/NFTs/animasi/13.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/14.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/15.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
    {
      imageUrl: "assets/NFTs/animasi/16.png",
      title: "Pria Maluku",
      rupiah: "24.100",
      price: "3.99",
      volatility: "32.8%",
      up: true,
    },
  ],
  Kreator: [
    {
      bgUrl: "/assets/NFTs/kreator/bg/13.png",
      profileUrl: "profile.html?nav2/13",
      pfpUrl: "assets/NFTs/kreator/pfp/13.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/14.png",
      profileUrl: "profile.html?nav2/14",
      pfpUrl: "assets/NFTs/kreator/pfp/14.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/15.png",
      profileUrl: "profile.html?nav2/15",
      pfpUrl: "assets/NFTs/kreator/pfp/15.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "/assets/NFTs/kreator/bg/16.png",
      profileUrl: "profile.html?nav2/16",
      pfpUrl: "assets/NFTs/kreator/pfp/16.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
  ],
};

let resetPasar;
const extraPasarBtn = document.getElementById("extra-pasar-nft-btn");
extraPasarBtn.addEventListener("click", () => {
  if (!extraPasarBtn.classList.contains("extended")) {
    resetPasar = document.getElementById("pasar-jual-container").innerHTML;
    extraPasarBtn.classList.toggle("extended");
    if (ddownBtn.querySelector("p").innerText == "Kreator") {
      loadKreatorCardExtra(
        pasarInfoExtra[ddownBtn.querySelector("p").innerText]
      );
    } else {
      loadPasarNftHtmlExtra(
        pasarInfoExtra[ddownBtn.querySelector("p").innerText]
      );
    }
  } else {
    document.getElementById("pasar-jual-container").innerHTML = resetPasar;
    extraPasarBtn.classList.toggle("extended");
  }
});

loadPasarNftHtml(pasarInfo["Koleksi"]);
