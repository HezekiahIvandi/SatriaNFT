const jualNftCon = document.getElementById("jual-nft-con");
const deskBtn = document.getElementById("desk-btn");
const penBtn = document.getElementById("penawaran-btn");
const hasilBtn = document.getElementById("hasil-btn");
const JualBtns = document.querySelectorAll(".jual-btn");
const loadDeskripsi = () => {
  jualNftCon.innerHTML = `
<div class="flex justify-between w-full">
  <div class="w-[25%]">
    <ul class="flex flex-col gap-[15px]">
      <li class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px]">
        Kreator
      </li>
      <li class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px]">
        Alamat Kontrak
      </li>
      <li class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px]">
        ID token
      </li>
      <li class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px]">
        Token Standar
      </li>
      <li class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px]">
        Blockchain
      </li>
      <li class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px]">
        Tawaran saat ini
      </li>
      <li class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px]">
        Harga dalam rupiah
      </li>
    </ul>
  </div>
  <div class="w-[18%]">
    <ul class="flex flex-col gap-[15px]">
      <li
        class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px] font-light text-right"
      >
        Kreator
      </li>
      <li
        class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px] font-light text-right"
      >
        0x49cf...a28b
      </li>
      <li
        class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px] font-light text-right"
      >
        2232
      </li>
      <li
        class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px] font-light text-right"
      >
        WIN-279
      </li>
      <li
        class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px] font-light text-right"
      >
        Ethreum
      </li>
      <li
        class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px] font-light text-right"
      >
        6.89 ETH
      </li>
      <li
        class="text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[36px] font-light text-right"
      >
        Rp 52.211,00
      </li>
    </ul>
  </div>
  <div class="w-[30%] flex flex-col justify-center gap-[15px]">
    <h2
      class="text-center text-[32px] md:text-[36px] lg:text-[42px] 2xl:text-[48px]"
    >
      Pratinjau NFT
    </h2>
    <div
      class="card rounded-[18px] 2xl:rounded-[24px] min-w-[300px] 2xl:w-[100%] px-[1.5rem] py-[1.5rem] 2xl:py-[2rem] items-center"
    >
      <div class="img-container relative">
        <img src="assets/cards/3.png" alt="" />

        <button
          class="ajukan-btn opacity-0 w-[200px] 2xl:w-[270px] px-[20px] 2x:px-[30px] py-[15px] text-[14px] 2xl-[text-20px] bg-[#4639FA] rounded-[8px] absolute bottom-1/2 left-1/2 transform -translate-x-1/2"
        >
          Ajukan Penawaran
        </button>
      </div>

      <div>
        <h3 class="text-[20px] 2xl:text-[24px] font-semibold mt-[20px]">
          Selebrasi Nyepi
        </h3>
        <p class="text-[#879CB5] text-[14px] 2xl:text-[16px]">
          Koleksi nusaNFT
        </p>
      </div>

      <div class="mt-[20px] flex justify-between items-center">
        <div class="items-center">
          <p class="text-[14px] text-[#15BFFD]">Tawaran saat ini</p>
          <div class="flex items-center">
            <span
              ><img src="assets/cards/eth.png" alt="" class="w-[20px] mr-[5px]"
            /></span>
            <span class="text-[20px] text-[#15BFFD] font-extrabold">6.89</span>
            <span class="text-[20px] text-[#15BFFD] font-extrabold">ETH</span>
          </div>
        </div>
        <div class="flex justify-between w-[120px] 2xl:w-[150px]">
          <div>
            <p class="text-[16px] 2xl:text-[20px]">
              <span class="text-[16px] 2xl:text-[20px]">Rp52.311</span>
              <span class="text-[12px]">,00</span>
            </p>

            <div class="flex items-center justify-end">
              <span
                ><img src="assets/cards/green.png" alt="" class="w-[15px]" />
              </span>
              <h3 class="text-[16px] ml-[5px] text-[#24FF00]">30.8%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

`;
};

const loadPenawaran = () => {
  jualNftCon.innerHTML = `
     <div class="grid-cols-1 grid 2xl:grid-cols-2 gap-[20px]">
            <div
              class="flex justify-between rounded-[10px] border-[#4639FA] border-[1px] border-solid px-[20px] 2xl:px-[30px] py-[15px] 2xl:py-[25px] items-center"
            >
              <div class="flex gap-[15px]">
                <img src="assets/JualNFT/1.png" alt="" class="w-[100px]" />
                <div class="hidden sm:flex flex-col gap-[5px]">
                  <h3
                    class="text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]"
                  >
                    Marchella
                  </h3>
                  <p class="text-[grey] text-[14px] 2xl:text-[20px]">
                    Mengajukan penawaran 8 jam lalu
                  </p>
                </div>
              </div>

              <div class="items-center">
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[24px] 2xl:text-[32px] font-semibold"
                    >Rp.52.211</span
                  >
                  <span class="text-[20px] 2xl:text-[24px]">,00</span>
                </p>
                <div class="flex items-center">
                  <span
                    ><img
                      src="assets/cards/eth.png"
                      alt=""
                      class="w-[20px] mr-[5px]"
                  /></span>
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >278.2</span
                  >
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >ETH</span
                  >
                </div>
              </div>
            </div>
            <div
              class="flex justify-between rounded-[10px] border-[#4639FA] border-[1px] border-solid px-[20px] 2xl:px-[30px] py-[15px] 2xl:py-[25px] items-center"
            >
              <div class="flex gap-[15px]">
                <img src="assets/JualNFT/2.png" alt="" class="w-[100px]" />
                <div class="hidden sm:flex flex-col gap-[5px]">
                  <h3
                    class="text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]"
                  >
                    Angelina
                  </h3>
                  <p class="text-[grey] text-[14px] 2xl:text-[20px]">
                    Mengajukan penawaran 8 jam lalu
                  </p>
                </div>
              </div>

              <div class="items-center">
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[24px] 2xl:text-[32px] font-semibold"
                    >Rp.52.211</span
                  >
                  <span class="text-[20px] 2xl:text-[24px]">,00</span>
                </p>
                <div class="flex items-center">
                  <span
                    ><img
                      src="assets/cards/eth.png"
                      alt=""
                      class="w-[20px] mr-[5px]"
                  /></span>
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >278.2</span
                  >
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >ETH</span
                  >
                </div>
              </div>
            </div>
            <div
              class="flex justify-between rounded-[10px] border-[#4639FA] border-[1px] border-solid px-[20px] 2xl:px-[30px] py-[15px] 2xl:py-[25px] items-center"
            >
              <div class="flex gap-[15px]">
                <img src="assets/JualNFT/3.png" alt="" class="w-[100px]" />
                <div class="hidden sm:flex flex-col gap-[5px]">
                  <h3
                    class="text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]"
                  >
                    Hezekiah
                  </h3>
                  <p class="text-[grey] text-[14px] 2xl:text-[20px]">
                    Mengajukan penawaran 8 jam lalu
                  </p>
                </div>
              </div>

              <div class="items-center">
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[24px] 2xl:text-[32px] font-semibold"
                    >Rp.52.211</span
                  >
                  <span class="text-[20px] 2xl:text-[24px]">,00</span>
                </p>
                <div class="flex items-center">
                  <span
                    ><img
                      src="assets/cards/eth.png"
                      alt=""
                      class="w-[20px] mr-[5px]"
                  /></span>
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >278.2</span
                  >
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >ETH</span
                  >
                </div>
              </div>
            </div>
            <div
              class="flex justify-between rounded-[10px] border-[#4639FA] border-[1px] border-solid px-[20px] 2xl:px-[30px] py-[15px] 2xl:py-[25px] items-center"
            >
              <div class="flex gap-[15px]">
                <img src="assets/JualNFT/4.png" alt="" class="w-[100px]" />
                <div class="hidden sm:flex flex-col gap-[5px]">
                  <h3
                    class="text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]"
                  >
                    Ivandi
                  </h3>
                  <p class="text-[grey] text-[14px] 2xl:text-[20px]">
                    Mengajukan penawaran 8 jam lalu
                  </p>
                </div>
              </div>

              <div class="items-center">
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[24px] 2xl:text-[32px] font-semibold"
                    >Rp.52.211</span
                  >
                  <span class="text-[20px] 2xl:text-[24px]">,00</span>
                </p>
                <div class="flex items-center">
                  <span
                    ><img
                      src="assets/cards/eth.png"
                      alt=""
                      class="w-[20px] mr-[5px]"
                  /></span>
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >278.2</span
                  >
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >ETH</span
                  >
                </div>
              </div>
            </div>
            <div
              class="flex justify-between rounded-[10px] border-[#4639FA] border-[1px] border-solid px-[20px] 2xl:px-[30px] py-[15px] 2xl:py-[25px] items-center"
            >
              <div class="flex gap-[15px]">
                <img src="assets/JualNFT/5.png" alt="" class="w-[100px]" />
                <div class="hidden sm:flex flex-col gap-[5px]">
                  <h3
                    class="text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]"
                  >
                    Darius
                  </h3>
                  <p class="text-[grey] text-[14px] 2xl:text-[20px]">
                    Mengajukan penawaran 8 jam lalu
                  </p>
                </div>
              </div>

              <div class="items-center">
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[24px] 2xl:text-[32px] font-semibold"
                    >Rp.52.211</span
                  >
                  <span class="text-[20px] 2xl:text-[24px]">,00</span>
                </p>
                <div class="flex items-center">
                  <span
                    ><img
                      src="assets/cards/eth.png"
                      alt=""
                      class="w-[20px] mr-[5px]"
                  /></span>
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >278.2</span
                  >
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >ETH</span
                  >
                </div>
              </div>
            </div>
            <div
              class="flex justify-between rounded-[10px] border-[#4639FA] border-[1px] border-solid px-[20px] 2xl:px-[30px] py-[15px] 2xl:py-[25px] items-center"
            >
              <div class="flex gap-[15px]">
                <img src="assets/JualNFT/6.png" alt="" class="w-[100px]" />
                <div class="hidden sm:flex flex-col gap-[5px]">
                  <h3
                    class="text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]"
                  >
                    Ananda
                  </h3>
                  <p class="text-[grey] text-[14px] 2xl:text-[20px]">
                    Mengajukan penawaran 8 jam lalu
                  </p>
                </div>
              </div>

              <div class="items-center">
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[24px] 2xl:text-[32px] font-semibold"
                    >Rp.52.211</span
                  >
                  <span class="text-[20px] 2xl:text-[24px]">,00</span>
                </p>
                <div class="flex items-center">
                  <span
                    ><img
                      src="assets/cards/eth.png"
                      alt=""
                      class="w-[20px] mr-[5px]"
                  /></span>
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >278.2</span
                  >
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >ETH</span
                  >
                </div>
              </div>
            </div>
            <div
              class="flex justify-between rounded-[10px] border-[#4639FA] border-[1px] border-solid px-[20px] 2xl:px-[30px] py-[15px] 2xl:py-[25px] items-center"
            >
              <div class="flex gap-[15px]">
                <img src="assets/JualNFT/7.png" alt="" class="w-[100px]" />
                <div class="hidden sm:flex flex-col gap-[5px]">
                  <h3
                    class="text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]"
                  >
                    Harris
                  </h3>
                  <p class="text-[grey] text-[14px] 2xl:text-[20px]">
                    Mengajukan penawaran 8 jam lalu
                  </p>
                </div>
              </div>

              <div class="items-center">
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[24px] 2xl:text-[32px] font-semibold"
                    >Rp.52.211</span
                  >
                  <span class="text-[20px] 2xl:text-[24px]">,00</span>
                </p>
                <div class="flex items-center">
                  <span
                    ><img
                      src="assets/cards/eth.png"
                      alt=""
                      class="w-[20px] mr-[5px]"
                  /></span>
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >278.2</span
                  >
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >ETH</span
                  >
                </div>
              </div>
            </div>
            <div
              class="flex justify-between rounded-[10px] border-[#4639FA] border-[1px] border-solid px-[20px] 2xl:px-[30px] py-[15px] 2xl:py-[25px] items-center"
            >
              <div class="flex gap-[15px]">
                <img src="assets/JualNFT/8.png" alt="" class="w-[100px]" />
                <div class="hidden sm:flex flex-col gap-[5px]">
                  <h3
                    class="text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]"
                  >
                    Budiman
                  </h3>
                  <p class="text-[grey] text-[14px] 2xl:text-[20px]">
                    Mengajukan penawaran 8 jam lalu
                  </p>
                </div>
              </div>

              <div class="items-center">
                <p class="text-[16px] 2xl:text-[20px]">
                  <span class="text-[24px] 2xl:text-[32px] font-semibold"
                    >Rp.52.211</span
                  >
                  <span class="text-[20px] 2xl:text-[24px]">,00</span>
                </p>
                <div class="flex items-center">
                  <span
                    ><img
                      src="assets/cards/eth.png"
                      alt=""
                      class="w-[20px] mr-[5px]"
                  /></span>
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >278.2</span
                  >
                  <span class="text-[20px] text-[#15BFFD] font-extrabold"
                    >ETH</span
                  >
                </div>
              </div>
            </div>
          </div>`;
};

const loadHasil = () => {
  jualNftCon.innerHTML = `
       <div
            class="w-full relative flex justify-center items-center py-[50px]"
          >
            <img
              src="assets/JualNFT/Price-History.png"
              alt=""
              class="w-[90%]"
            />
          </div>
  `;
};
deskBtn.addEventListener("click", () => {
  loadDeskripsi();
  JualBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  deskBtn.classList.toggle("active");
});

penBtn.addEventListener("click", () => {
  loadPenawaran();
  JualBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  penBtn.classList.toggle("active");
});

hasilBtn.addEventListener("click", () => {
  loadHasil();
  JualBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  hasilBtn.classList.toggle("active");
});

loadDeskripsi();
