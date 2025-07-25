var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
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
    let offset = scrollY - triggerPoint;
    
    let tigerScale = Math.min( offset * 0.0005, 2);  
    let astroScale = Math.max( offset * 0.0005, 1.5); 

    tiger.style.transform = `scale(${tigerScale})`;
    astro.style.transform = `scale(${astroScale})`;
  } 
  else {
    tiger.style.transform = `scale(0.3)`;
    astro.style.transform = `scale(0.8)`;
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
