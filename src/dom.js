const menuIcon =document.getElementById('menu')
const aside =document.getElementById('aside')
const menuClose=document.getElementById('menuClose')

function asideNav(){
if(aside.style.display==="none"|| !aside.style.display){
    aside.style.display='block'
}
else{
    aside.style.display='none'
}
}
function navClose(){
if(menuClose.style.display==="none"|| !menuClose.style.display){
    menuClose.style.display='block'
}
else{
    menuClose.style.display='none'
}
}
function navCloseuP(){
if(menuClose.style.display==="block"|| !menuClose.style.display){
    menuClose.style.display='none'
}
else{
    menuClose.style.display='block'
}
}
function navopen(){
if(menuIcon.style.display==="block"|| !menuIcon.style.display){
  menuIcon.style.display='none'
}
else{
menuIcon.style.display='block'
}
}


menuIcon.addEventListener('click',()=>{
    asideNav()
    navClose()
    navopen()
})

menuClose.addEventListener('click',()=>{
    asideNav()
    navopen()
    navCloseuP()
})

export{menuIcon,menuClose}

// image slider 

let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

// Function to show a specific slide
function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    currentIndex = index;
    
    slides.style.left = -100 * currentIndex + '%';
    
    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Next/prev handler
function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Jump to specific slide
function goToSlide(index) {
    showSlide(index);
}

// Set up event listeners
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'));
        goToSlide(slideIndex);
    });
});

// Auto-advance every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Initialize the first slide
showSlide(currentIndex);