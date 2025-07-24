var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let lip = document.querySelector("#lip");
window.addEventListener("scroll",()=>
{
  let scrollY = window.scrollY;
  let triggerPoint =lip.offsetTop - window.innerHeight;

  if (scrollY >= triggerPoint) {
    let moveAmount = (scrollY );
    lip.style.height = moveAmount * 0.3 + "px";
  }
   else 
  {
    lip.style.Height = "30vw";
  }
})