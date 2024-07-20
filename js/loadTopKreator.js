const topKC = document.getElementById("top-kreator-page-con");
console.log(topKC);
topKreatorInfos = [
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
  {
    imageUrl: "assets/kreator/8.png",
    kreator: "BABYBLUES",
    price: "239.56",
    volatility: "12.8%",
    up: false,
  },
  {
    imageUrl: "assets/kreator/9.png",
    kreator: "NickeyNFT",
    price: "0.99",
    volatility: "30.8%",
    up: false,
  },
  {
    imageUrl: "assets/kreator/10.png",
    kreator: "NetworkNFT",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/11.png",
    kreator: "SiOpengNFT",
    price: "0.99",
    volatility: "42.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/12.png",
    kreator: "SiOpeng2NFT",
    price: "175.26",
    volatility: "18.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/13.png",
    kreator: "MusicalodyNFT",
    price: "0.99",
    volatility: "23.8%",
    up: false,
  },
  {
    imageUrl: "assets/kreator/14.png",
    kreator: "Life Goes On",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/15.png",
    kreator: "NFTMe",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/16.png",
    kreator: "NFT Si Dudung",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/17.png",
    kreator: "LILAC GIRL",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
  {
    imageUrl: "assets/kreator/18.png",
    kreator: "REDHAT NFT",
    price: "0.99",
    volatility: "32.8%",
    up: true,
  },
];
//load kreator
topKreatorInfos.forEach((info, index) => {
  if (info.up) {
    topKC.innerHTML += `
   <div
  class="w-[100%] min-w-[380px] px-[40px] lg:px-[50px] py-[20px] rounded-[8px] flex justify-between border-[1px] border-solid border-[#1286B0] items-center"
>
  <div class="w-fit gap-[30px] flex justify-between items-center">
    <h2 class="text-[20px] md:text-[24px] 2xl:text-[36px]">${index + 1}</h2>
    <img
      src="${info.imageUrl}"
      alt=""
      class="aspect-square w-[70px] 2xl:w-[100px] mr-[10px]"
    />
    <h2 class="text-[20px] md:text-[24px] 2xl:text-[32px]">${info.kreator}</h2>
  </div>
  <div class="flex justify-between w-fit gap-[30px]">
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center">
        <span><img src="assets/cards/eth.png" alt="" class="w-[22px]" /></span>
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
      class="flex items-center justify-center border-[1px] border-solid border-[#196000] bg-[#10362B] w-[100px] 2xl:w-[138px] px-[10px] py-[12px] rounded-[40px]"
    >
      <span class="mr-[5px]"
        ><img src="assets/cards/green.png" alt="" class="w-[23px]" />
      </span>
      <h3 class="text-[20px] 2xl:text-[24px] ml-[5px] text-[#24FF00]">
        ${info.volatility}
      </h3>
    </div>
  </div>
</div>



`;
  } else {
    topKC.innerHTML += `<div
  class="w-[100%] min-w-[380px] px-[40px] lg:px-[50px] py-[20px] rounded-[8px] flex justify-between border-[1px] border-solid border-[#1286B0] items-center"
>
  <div class="w-fit gap-[30px] flex justify-between items-center">
    <h2 class="text-[20px] md:text-[24px] 2xl:text-[36px]">${index + 1}</h2>
    <img
      src="${info.imageUrl}"
      alt=""
      class="aspect-square w-[70px] 2xl:w-[100px] mr-[10px]"
    />
    <h2 class="text-[20px] md:text-[24px] 2xl:text-[32px]">${info.kreator}</h2>
  </div>
  <div class="flex justify-between w-fit gap-[30px]">
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center">
        <span><img src="assets/cards/eth.png" alt="" class="w-[22px]" /></span>
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
      class="flex items-center justify-center border-[1px] border-solid border-[#94356A] bg-[#350E3B] w-[100px] 2xl:w-[138px] px-[10px] py-[12px] rounded-[40px]"
    >
      <span class="mr-[5px]"
        ><img src="assets/cards/red.png" alt="" class="w-[23px]" />
      </span>
      <h3 class="text-[20px] 2xl:text-[24px] ml-[5px] text-[#EB1414]">
        ${info.volatility}
      </h3>
    </div>
  </div>
</div>

`;
  }
});
