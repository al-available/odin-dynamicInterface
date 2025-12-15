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