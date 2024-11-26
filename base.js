let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listitemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
  showSlider("next");
};
prevDom.onclick = function () {
  showSlider("prev");
};
let timerunning = 2000;
let timeauto = 7000;
let runtimeout;
let runauto = setTimeout(() => {
  nextDom.click();
}, timeauto);
function showSlider(type) {
  let itemslider = document.querySelectorAll(".carousel .list .item");
  let itemthumbimages = document.querySelectorAll(".carousel .thumbnail .item");
  if (type === "next") {
    listitemDom.appendChild(itemslider[0]);
    thumbnailDom.appendChild(itemthumbimages[0]);
    // append child here will add the item to the last as its behaviour for the existing element. it just adjust its position to the last to avoid redundancy. to use append child to add new object, first create and then append it
    carouselDom.classList.add("next");
  } else {
    let position = itemslider.length - 1;
    listitemDom.prepend(itemslider[position]);
    thumbnailDom.prepend(itemthumbimages[position]);
    carouselDom.classList.add("prev");
  }
  //it is place before to ensure to each run time start from beginning
  clearTimeout(runtimeout);
  runtimeout = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timerunning);
  clearTimeout(runauto);
}
