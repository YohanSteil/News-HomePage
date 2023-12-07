
const objet = {

}


const openButton = document.querySelector(".openMenu img")
const closeButton = document.querySelector(".closeMenu img")
const menu = document.querySelector(".menuBar")
console.log(menu)

openButton.addEventListener('click', openMenuBar)
closeButton.addEventListener('click', closeMenuBar)

function openMenuBar(){
    menu.style.display = "flex"
    openButton.style.display = "none"
    
}

function closeMenuBar(){
    menu.style.display="none"
    openButton.style.display="flex"
}