var typed = new Typed("#typing", { 
strings: ["DeadlyAnurag", "Creative Developer", "Website Creator"],
typeSpeed: 60,
backSpeed: 30,
backDelay: 1500,
loop: true
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

let scrollY = window.pageYOffset;

sections.forEach(sec => {

let sectionHeight = sec.offsetHeight;
let sectionTop = sec.offsetTop - 150;
let sectionId = sec.getAttribute("id");

if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){

navLinks.forEach(link => link.classList.remove("active"));

let activeLink = document.querySelector('.menu a[href="#'+sectionId+'"]');

if(activeLink){
activeLink.classList.add("active");
}

}

});

});

