let menu = document.querySelector(".top-menu")
let menuBtn = document.querySelector(".open__top-menu")
let menuBtnIcon = document.querySelector(".open__top-menu i")

let closeMenu = document.querySelector(".close__top-menu")
let closeBtnMenu = document.querySelector(".close__top-menu i")

menuBtn.addEventListener("click", function() {
    if (menuBtnIcon.classList.contains("fa-burger")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-188px"
        menuBtnIcon.classList = "fa-solid fa-burger"
    }
})

closeBtnMenu.addEventListener("click", function() {
    if (closeBtnMenu.classList.contains("fa-times")){
        menu.style.left = "-188px"
        menuBtnIcon.classList = "fa-solid fa-burger"
    }
})