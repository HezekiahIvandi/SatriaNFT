const menuOpen = document.querySelector("#mobile-menu-open");
const menuClose = document.querySelector("#mobile-menu-close");
const navMenu = document.querySelector("#side-bar");

menuOpen.addEventListener("click", () => {
  navMenu.classList.remove("hide");
});

menuClose.addEventListener("click", () => {
  navMenu.classList.add("hide");
});

//popup wallet
let resetDom;
const walletBtn = document.getElementById("hubungkan-wallet");
const walletBtnMobile = document.getElementById("hubungkan-wallet-mobile");
const walletCloseBtn = document.getElementById("wallet-close");
const popup1 = document.getElementById("popup-1");
const nav = document.getElementById("navbar");
const home = document.getElementById("home");

const openPopupWallet = () => {
  popup1.classList.toggle("active");
  resetDom = document.getElementById("popup-inner-container").innerHTML;
  home.classList.add("blur-effect");
  nav.classList.add("blur-effect");
};
const closePopupWallet = () => {
  popup1.classList.toggle("active");
  document.getElementById("popup-inner-container").innerHTML = resetDom;
  document.getElementById("popup-title").innerText = "Hubungkan Wallet";
  addEventWalletButton();
  home.classList.remove("blur-effect");
  nav.classList.remove("blur-effect");
};

walletBtn.addEventListener("click", openPopupWallet);
walletBtnMobile.addEventListener("click", openPopupWallet);
walletCloseBtn.addEventListener("click", closePopupWallet);

const addEventWalletButton = () => {
  //wallet button
  // Select all buttons with the class 'wallet-button'
  const buttons = document.querySelectorAll(".wallet-button");

  // Iterate over each button and attach a click event listener
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the image URL and paragraph text content of the clicked button
      const imageUrl = button
        .querySelector(".wallet-image")
        .getAttribute("src");
      const paragraphContent = button.querySelector(".wallet-text").textContent;

      // Log the image URL and paragraph content to the console
      console.log("Image URL:", imageUrl);
      console.log("Paragraph Content:", paragraphContent);
      DOMpopupBarcode(imageUrl, paragraphContent);
    });
  });
};

const addEventBarcode = () => {
  document.getElementById("barcode-btn").addEventListener("click", () => {
    //loading effect
    document.getElementById("popup-title").innerText = "Menghubungkan";
    document.getElementById("popup-inner-container").innerHTML = `
    <div class="flex justify-center w-full mt-[20px]">
      <div class="loader"></div>
    </div>
    <h3 class="text-center text-[24px] mt-[40px] mb-[20px]" >Menghubungkan Wallet</h3>
    <p class="text-center text-[16px]" >Sambungkan wallet untuk menyetujui transaksi</p>
    `;
    //INSERT CONTENT
    setTimeout(DOMdetailAkun, 3000);
  });
};

const DOMpopupBarcode = (url, text) => {
  document.getElementById("popup-inner-container").innerHTML = `
    <div class="flex justify-between mb-[25px]">
      <h3 class="text-[16px]">Pilih Wallet</h3>
      <button><img src="assets/up.png" alt="" class="w-[24px]" /></button>
    </div>
    <div class="barcode-div-1 flex flex-wrap gap-[10px]">
      <img src="${url}" alt="" class="h-[36px]" />
      <p class="text-[24px]">${text}</p>
    </div>

    <div class="flex justify-between mt-[25px]">
      <h3 class="text-[16px]">Pindai Barcode</h3>
      <button id="down-btn" ><img src="assets/down.png" alt=""  /></button>
    </div>
    <button id='barcode-btn' class="flex justify-center items-center py-[30px] w-full">
      <img src="assets/barcode.png" alt="barcode" class="h-[100px]" />
    </button>
  `;
  addEventBarcode();
};

const DOMdetailAkun = () => {
  document.getElementById("popup-title").innerText = "Detail Akun";
  document.getElementById("popup-inner-container").innerHTML = `  
  <div id="detail-akun">
      <div class="flex justify-between flex-wrap"
        <span>
          <img id="gradient-circle" src="assets/circle-gradient.png" alt="" />
        </span>
        <span class="w-full flex flex-wrap" ><p class="w-fit overflow-hidden" >0x05c41sa5cfas....5c12a11178a1c5wa12</p></span>
      </div>
      <div class="flex gap-[30px] mt-[30px]">
        <div class="detail-div">
          <img src="assets/Copy.png" alt="">
          <p class="" >Salin alamat</p>
        </div>
        <div class="detail-div">
          <img src="assets/Document.png" alt="" >
          <p class="" >Lihat detail</p>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-[20px] items-center ">
      <h3 class="" >Terhubung dengan Metamask</h3>
      <button id="lepas-btn" >
        Lepas
      </button>
    </div>
  `;
};

addEventWalletButton();
