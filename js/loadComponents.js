cardsInfo = [
  {
    imageUrl: "assets/cards/1.png",
    time: "03 : 10 : 21 : 05",
    title: "Pria Maluku",
    rupiah: "12.900",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/cards/2.png",
    time: "14 : 07 : 46 : 03",
    title: "Pesona Tegallalang",
    rupiah: "36.800",
    price: "3.99",
    volatility: "32.8%",
    up: false,
  },
  {
    imageUrl: "assets/cards/3.png",
    time: "14 : 07 : 46 : 03",
    title: "Selebrasi Nyepi",
    rupiah: "52.211",
    price: "3.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/cards/4.png",
    time: "14 : 07 : 46 : 03",
    title: "Hari Kemerdekaan",
    rupiah: "160.100",
    price: "12.00",
    volatility: "57.4%",
    up: true,
  },
  {
    imageUrl: "assets/cards/5.png",
    time: "14 : 07 : 46 : 03",
    title: "Puru Ulun Danu Bratan",
    rupiah: "19.340",
    price: "0.09",
    volatility: "20.1%",
    up: false,
  },
  {
    imageUrl: "assets/cards/6.png",
    time: "14 : 07 : 46 : 03",
    title: "Pria Maluku",
    rupiah: "24.100",
    price: "3.99",
    volatility: "32.8%",
    up: false,
  },
  {
    imageUrl: "assets/cards/7.png",
    time: "14 : 07 : 46 : 03",
    title: "Candi Borobudur",
    rupiah: "49.900",
    price: "1.12",
    volatility: "12.9%",
    up: true,
  },
  {
    imageUrl: "assets/cards/8.png",
    time: "14 : 07 : 46 : 03",
    title: "Reog Ponorogo",
    rupiah: "52.211",
    price: "3.99",
    volatility: "32.8%",
    up: false,
  },
];

const cardCon = document.getElementById("card-container");
//load cards slide
cardsInfo.forEach((card) => {
  if (card.up) {
    cardCon.innerHTML += `
    <div
  class="card rounded-[18px] 2xl:rounded-[24px] w-[300px] 2xl:w-[400px] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
>
  <div class="img-container relative">
    <img src="${card.imageUrl}" alt="" />
    <div
      class="time-btn absolute bottom-[15px] left-1/2 transform -translate-x-1/2"
    >
      <div
        class="rounded-[16px] bg-[#0F182E] w-[192px] flex px-[3px] py-[7px] justify-center"
      >
        <img src="assets/cards/fire.png" alt="" class="w-[18px] mr-[5px]" />
        <span>${card.time}</span>
      </div>
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
    cardCon.innerHTML += `
    <div
  class="card rounded-[18px] 2xl:rounded-[24px] w-[300px] 2xl:w-[400px] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
>
  <div class="img-container relative">
    <img src="${card.imageUrl}" alt="" />
    <div
      class="time-btn absolute bottom-[15px] left-1/2 transform -translate-x-1/2"
    >
      <div
        class="rounded-[16px] bg-[#0F182E] w-[192px] flex px-[3px] py-[7px] justify-center"
      >
        <img src="assets/cards/fire.png" alt="" class="w-[18px] mr-[5px]" />
        <span>${card.time}</span>
      </div>
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

const carouselCon = document.getElementById("carousel-con");
carouselInfo = [
  {
    imageUrl: "assets/carousel/1.png",
    time: "03 : 10 : 21 : 05",
    title: "Selebrasi Nyepi",
    rupiah: "12.900",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/carousel/2.png",
    time: "14 : 07 : 46 : 03",
    title: "COOOOLGUYZ",
    rupiah: "36.800",
    price: "3.99",
    volatility: "32.8%",
    up: false,
  },
  {
    imageUrl: "assets/carousel/3.png",
    time: "14 : 07 : 46 : 03",
    title: "RICH MONKEY #1223",
    rupiah: "52.211",
    price: "3.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/carousel/4.png",
    time: "14 : 07 : 46 : 03",
    title: "MONKEY OR TIGER? #2367",
    rupiah: "160.100",
    price: "12.00",
    volatility: "57.4%",
    up: true,
  },
  {
    imageUrl: "assets/carousel/5.png",
    time: "14 : 07 : 46 : 03",
    title: "UNMASKED",
    rupiah: "19.340",
    price: "0.09",
    volatility: "20.1%",
    up: false,
  },
  {
    imageUrl: "assets/cards/5.png",
    time: "14 : 07 : 46 : 03",
    title: "Puru Ulun Danu Bratan",
    rupiah: "19.340",
    price: "0.09",
    volatility: "20.1%",
    up: false,
  },
  {
    imageUrl: "assets/cards/6.png",
    time: "14 : 07 : 46 : 03",
    title: "Pria Maluku",
    rupiah: "24.100",
    price: "3.99",
    volatility: "32.8%",
    up: false,
  },
  {
    imageUrl: "assets/cards/7.png",
    time: "14 : 07 : 46 : 03",
    title: "Candi Borobudur",
    rupiah: "49.900",
    price: "1.12",
    volatility: "12.9%",
    up: true,
  },
  {
    imageUrl: "assets/cards/8.png",
    time: "14 : 07 : 46 : 03",
    title: "Reog Ponorogo",
    rupiah: "52.211",
    price: "3.99",
    volatility: "32.8%",
    up: false,
  },
];
//load carousel
carouselInfo.forEach((card) => {
  if (card.up) {
    carouselCon.innerHTML += `
      <div
    class="card rounded-[18px] 2xl:rounded-[24px] w-[300px] 2xl:w-[400px] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
  >
    <div class="img-container relative">
      <img src="${card.imageUrl}" alt="" />
      <div
        class="time-btn absolute bottom-[15px] left-1/2 transform -translate-x-1/2"
      >
        <div
          class="rounded-[16px] bg-[#0F182E] w-[192px] flex px-[3px] py-[7px] justify-center"
        >
          <img src="assets/cards/fire.png" alt="" class="w-[18px] mr-[5px]" />
          <span>${card.time}</span>
        </div>
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
    carouselCon.innerHTML += `
      <div
    class="card rounded-[18px] 2xl:rounded-[24px] w-[300px] 2xl:w-[400px] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
  >
    <div class="img-container relative">
      <img src="${card.imageUrl}" alt="" />
      <div
        class="time-btn absolute bottom-[15px] left-1/2 transform -translate-x-1/2"
      >
        <div
          class="rounded-[16px] bg-[#0F182E] w-[192px] flex px-[3px] py-[7px] justify-center"
        >
          <img src="assets/cards/fire.png" alt="" class="w-[18px] mr-[5px]" />
          <span>${card.time}</span>
        </div>
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

langkahInfo = [
  {
    imgUrl: "assets/langkah/1.png",
    langkah: "LANGKAH 1",
    title: "Hubungkan Wallet",
  },
  {
    imgUrl: "assets/langkah/2.png",
    langkah: "LANGKAH 2",
    title: "Jelajahi NFTs",
  },
  { imgUrl: "assets/langkah/3.png", langkah: "LANGKAH 3", title: "Pembayaran" },
  {
    imgUrl: "assets/langkah/4.png",
    langkah: "LANGKAH 4",
    title: "Terima NFTs Anda",
  },
];
const langkahCon = document.getElementById("langkah-button-container");
//load langkah button
langkahInfo.forEach((info) => {
  langkahCon.innerHTML += `
    <button
  class="langkah-button neon-btn3 aspect-square w-[232px] 2xl:w-[389px] px-[10px] py-[10px] flex flex-col justify-center items-center bg-[#2B2B3E] relative"
>
  <img src="${info.imgUrl}" alt="" class="object-cover h-[92px] 2xl:h-[120px]" />
  <h2 class="text-[#15BFFD] text-[24px] font-bold text-center mt-[8px] 2xl:text-[36px]"">${info.langkah}</h2>
  <p class="text-white text-center font-medium text-[20px] mt-[8px] 2xl:text-[32px]">
    ${info.title}
  </p>
</button>

    `;
});

const walletBtnn = document.getElementById("wallet-btn-con");
walletInfo = [
  { imgUrl: "assets/wallet/1.png", title: "Metamask" },
  { imgUrl: "assets/wallet/2.png", title: "Exodus" },
  {
    imgUrl: "assets/wallet/3.png",
    title: "Coinbase",
  },
  { imgUrl: "assets/wallet/4.png", title: "Argent" },
  {
    imgUrl: "assets/wallet/5.png",
    title: "imToken",
  },
];

// load wallet
walletInfo.forEach((info) => {
  walletBtnn.innerHTML += `
    <button
  class="wallet-button neon-btn4 relative w-[207px] 2xl:w-[303px] aspect-square px-[10px] py-[10px] flex flex-col justify-center items-center bg-[#2B2B3E]"
>
  <img src="${info.imgUrl}" alt="" class="w-[80px] 2xl:w-[110px]" />
  <p
    class="text-white text-center font-medium text-[24px] 2xl:text-[36px] mt-[8px]"
  >
    ${info.title}
  </p>
</button>

    `;
});

//load nfts
const jelajahiConn = document.getElementById("jelajahi-container");

JelajahiNFTs = [
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
];

JelajahiNFTs.forEach((card) => {
  if (card.up) {
    jelajahiConn.innerHTML += `
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
    jelajahiConn.innerHTML += `
        <div
      class="card card-size rounded-[18px] 2xl:rounded-[24px] min-w-[300px] 2xl:w-[100%] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
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

const kreatorConn = document.getElementById("top-kreator-con");
kreatorInfo = [
  {
    imageUrl: "assets/kreator/marchella.png",
    kreator: "Marchella",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/hezekiah.png",
    kreator: "Hezekiah",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/1.png",
    kreator: "NFTNusa",
    price: "239.56",
    volatility: "12.8%",
    up: false,
  },
  {
    imageUrl: "assets/kreator/2.png",
    kreator: "ARTIFY",
    price: "0.99",
    volatility: "30.8%",
    up: false,
  },
  {
    imageUrl: "assets/kreator/3.png",
    kreator: "CRYPTIX",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/4.png",
    kreator: "PixelPop",
    price: "0.99",
    volatility: "42.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/5.png",
    kreator: "NeoMint",
    price: "175.26",
    volatility: "18.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/6.png",
    kreator: "MetaCraft",
    price: "0.99",
    volatility: "23.8%",
    up: false,
  },
  {
    imageUrl: "assets/kreator/7.png",
    kreator: "ByteBrush",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
];

//load kreator
kreatorInfo.forEach((info, index) => {
  if (info.up) {
    kreatorConn.innerHTML += `
        <div
  class="w-[100%] min-w-[380px] px-[20px] py-[20px] rounded-[8px] flex justify-between border-[1px] border-solid border-[#1286B0] items-center"
>
  <h2 class="text-[20px] md:text-[24px] 2xl:text-[36px]">${index + 1}</h2>
  <img src="${
    info.imageUrl
  }" alt="" class="aspect-square  w-[70px] 2xl:w-[100px]  mr-[10px]" />
  <div class="flex flex-col items-center justify-center">
    <h2 class="text-[20px] md:text-[24px] 2xl:text-[32px]">${info.kreator}</h2>
    <div class="flex items-center">
      <span><img src="assets/cards/eth.png" alt="" class="w-[16px]" /></span>
      <span
        class="text-[20px] 2xl:text-[24px] text-[#15BFFD] font-extrabold mr-[5px]"
        >${info.price}
      </span>
      <span class="text-[20px] 2xl:text-[24px] text-[#15BFFD] font-extrabold"
        >ETH</span
      >
    </div>
  </div>
 
  <div
    class="hidden md:flex items-center justify-center border-[1px] border-solid border-[#196000] bg-[#10362B] w-[100px] 2xl:w-[138px] px-[10px] py-[12px] rounded-[40px]"
  >
    <span class="mr-[5px]"
      ><img src="assets/cards/green.png" alt="" class="w-[23px]" />
    </span>
    <h3 class="text-[20px] 2xl:text-[24px] ml-[5px] text-[#24FF00]">
      ${info.volatility}
    </h3>
  </div>
  
</div>

    
    `;
  } else {
    kreatorConn.innerHTML += `
         <div
  class="w-[100%] min-w-[380px] px-[20px] py-[20px] rounded-[8px] flex justify-between border-[1px] border-solid border-[#1286B0] items-center"
>
  <h2 class="text-[20px] md:text-[24px] 2xl:text-[36px]">${index + 1}</h2>
  <img src="${
    info.imageUrl
  }" alt="" class="aspect-square w-[70px] 2xl:w-[100px]  mr-[10px]" />
  <div class="flex flex-col items-center justify-center">
    <h2 class="text-[20px] md:text-[24px] 2xl:text-[32px]">${info.kreator}</h2>
    <div class="flex items-center">
      <span><img src="assets/cards/eth.png" alt="" class="w-[16px]" /></span>
      <span
        class="text-[20px] 2xl:text-[24px] text-[#15BFFD] font-extrabold mr-[5px]"
        >${info.price}
      </span>
      <span class="text-[20px] 2xl:text-[24px] text-[#15BFFD] font-extrabold"
        >ETH</span
      >
    </div>
  </div>

  <div
    class="hidden md:flex  items-center justify-center border-[1px] border-solid border-[#94356A] bg-[#350E3B] w-[100px] 2xl:w-[138px] px-[10px] py-[12px] rounded-[40px]"
  >
    <span class="mr-[5px]"
      ><img src="assets/cards/red.png" alt="" class="w-[23px]" />
    </span>
    <h3 class="text-[20px] 2xl:text-[24px] ml-[5px] text-[#EB1414]">
      ${info.volatility}
    </h3>
  </div>

</div>

    
    `;
  }
});
