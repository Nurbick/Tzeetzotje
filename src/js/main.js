const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    mousewheel: true,
    keyboard: true,
    autoplay: true,
});

let button = document.querySelector(".home__button");
let overlay = document.querySelector(".overlay");
let exitButton = document.querySelector(".overlay__exit");
const overlayView = ()=>{
    overlay.style.display="flex";
};
const overlayExit = ()=>{
    overlay.style.display="none";
};

let person = {
    name:"",
    email:"",
    text:""
};




button.addEventListener("click", ()=>overlayView());
exitButton.addEventListener("click", ()=>overlayExit());

