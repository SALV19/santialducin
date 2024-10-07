function change_darkMode() {
  if (bg_shown == 1) {
    bg.style.backgroundImage = "url(./imgs/bg2.jpg)";
    dm_btn.innerHTML = "light_mode";
    dark_mode.style.backgroundColor = "rgb(60, 60, 60)";
    dark_mode.style.color = "white";
    bg_shown = 0;
  }
  else {
    bg.style.backgroundImage = "url(./imgs/bg1.png)";
    dm_btn.innerHTML = "dark_mode";
    dark_mode.style.backgroundColor = "rgb(255, 255, 255)";
    dark_mode.style.color = "black";
    bg_shown = 1;
  }
}

function change23D () {
  if(D23_img_shown) {
    D2.src = "./imgs/zoot.jpg"
    btn_D2.innerHTML = "2D";
    D23_img_shown = 0;
  }
  else {
    D2.src = "./imgs/minishcap.webp"
    btn_D2.innerHTML = "3D";
    D23_img_shown = 1;
  }
}

function next_img_fn() {
  img_shown = (img_shown + 1) % img_gallery.length;
  img.src = img_gallery[img_shown];
  console.log(img_shown);
}
function prev_img_fn() {
  img_shown = (img_shown - 1 + img_gallery.length) % 5;
  img.src = img_gallery[img_shown];
  console.log(img_shown);
  // console.log(img_gallery.length);
}

const bg = document.querySelector("body");
const dm_btn = document.querySelector("#dark-mode-btn");
let bg_shown = 1;
let D23_img_shown = 1;

const dark_mode = document.querySelector("#dark-mode");

const D2 = document.querySelector("#D2_img");
const btn_D2 = document.querySelector("#D23");

const next_img = document.querySelector('#btn-next');
const prev_img = document.querySelector("#btn-prev");
const img = document.querySelector("#gallery");
let img_shown = 0;


dark_mode.addEventListener('click', change_darkMode);
btn_D2.addEventListener('click', change23D);
next_img.addEventListener('click', next_img_fn);
prev_img.addEventListener('click', prev_img_fn);


const img_gallery = [
  "./imgs/ds.jpg",
  "./imgs/skyrim.avif",
  "./imgs/witcher.jpg",
  "./imgs/sh.avif",
  "./imgs/dark_s.jpg",
]

