var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let lip = document.querySelector("#lip");
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let triggerPoint = lip.offsetTop - window.innerHeight;

  if (scrollY >= triggerPoint) {
    let moveAmount = scrollY;
    lip.style.height = -10 + moveAmount * 0.17 + "px";
  } else {
    lip.style.Height = "30vw";
  }
});

let tiger = document.querySelector("#tiger");
let astro = document.querySelector("#astro");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let triggerPoint = tiger.offsetTop - window.innerHeight;

  if (scrollY >= triggerPoint) {
    let moveAmount = scrollY;
    tiger.style.height = moveAmount * 0.1 + "px";
    astro.style.height = moveAmount * 0.1 + "px";
  } else {
    tiger.style.height = "270px";
    astro.style.height = "270px";
  }
});

let chain = document.querySelector("#chain");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let triggerPoint = chain.offsetTop - window.innerHeight;

  if (scrollY >= triggerPoint) {
    let tilt = Math.sin(scrollY * 0.01) * 6;

    chain.style.transform = `rotateZ(${tilt}deg)`;
  }
});
