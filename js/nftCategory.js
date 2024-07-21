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
    console.log(btnText);
    if (btnText == "Kreator") {
      loadKreatorCards(category["Kreator"]);
    } else {
      loadNft(btnText);
    }
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
  ],
  Kreator: [
    {
      bgUrl: "assets/NFTs/kreator/bg/1.png",
      profileUrl: "profile.html?nav2/1",
      pfpUrl: "assets/NFTs/kreator/pfp/1.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/2.png",
      profileUrl: "profile.html?nav2/2",
      pfpUrl: "assets/NFTs/kreator/pfp/2.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/3.png",
      profileUrl: "profile.html?nav2/3",
      pfpUrl: "assets/NFTs/kreator/pfp/3.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/4.png",
      profileUrl: "profile.html?nav2/4",
      pfpUrl: "assets/NFTs/kreator/pfp/4.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/5.png",
      profileUrl: "profile.html?nav2/5",
      pfpUrl: "assets/NFTs/kreator/pfp/5.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/6.png",
      profileUrl: "profile.html?nav2/6",
      pfpUrl: "assets/NFTs/kreator/pfp/6.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/7.png",
      profileUrl: "profile.html?nav2/7",
      pfpUrl: "assets/NFTs/kreator/pfp/7.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/8.png",
      profileUrl: "profile.html?nav2/8",
      pfpUrl: "assets/NFTs/kreator/pfp/8.png",
      name: "CryptoPunks",
      balance: "100.7K",
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
  Olahraga: [
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
      bgUrl: "assets/NFTs/kreator/bg/9.png",
      profileUrl: "profile.html?nav2/9",
      pfpUrl: "assets/NFTs/kreator/pfp/9.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/10.png",
      profileUrl: "profile.html?nav2/10",
      pfpUrl: "assets/NFTs/kreator/pfp/10.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/11.png",
      profileUrl: "profile.html?nav2/11",
      pfpUrl: "assets/NFTs/kreator/pfp/11.png",
      name: "CryptoPunks",
      balance: "100.7K",
    },
    {
      bgUrl: "assets/NFTs/kreator/bg/12.png",
      profileUrl: "profile.html?nav2/12",
      pfpUrl: "assets/NFTs/kreator/pfp/12.png",
      name: "CryptoPunks",
      balance: "100.7K",
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
    if (categoryGlobalVar == "Kreator") {
      loadKreatorCardsExtra(categoryExtra[categoryGlobalVar]);
    } else {
      loadExtra(categoryExtra[categoryGlobalVar]);
    }
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

const loadKreatorCards = (Infos) => {
  const JConn = document.getElementById("jelajahi-container");
  JConn.innerHTML = "";

  Infos.forEach((card) => {
    JConn.innerHTML += `
    <div
  class="kreator-card bg-[#2B2B3E] rounded-[18px] 2xl:rounded-[24px] max-w-[420px] min-w-[300px] 2xl:w-[100%] px-[1rem] py-[1rem] items-center"
>
  <div class="relative img-con">
    <img class="pasar-card-img" src="${card.bgUrl}" alt="" />

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
const loadKreatorCardsExtra = (Infos) => {
  const JConn = document.getElementById("jelajahi-container");

  Infos.forEach((card) => {
    JConn.innerHTML += `
    <div
  class="kreator-card bg-[#2B2B3E] rounded-[18px] 2xl:rounded-[24px] max-w-[420px] min-w-[300px] 2xl:w-[100%] px-[1rem] py-[1rem] items-center"
>
  <div class="relative img-con">
    <img class="pasar-card-img" src="${card.bgUrl}" alt="" />

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
