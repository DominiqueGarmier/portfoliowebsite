console.log('test message')

// pause animation
var SlideInMenu = document.getElementById("slide-in-menu")
var OpenMenuBtn = document.getElementById("open-menu-btn")
var CloseMenuBtn = document.getElementById("close-menu-btn")

function OpenMenu() {
    // switch to animtion slide-in
    SlideInMenu.classList.remove("anim-slide-out")
    SlideInMenu.classList.add("anim-slide-in")

    SlideInMenu.style.animationPlayState = "running"

    // switch the displayed button
    OpenMenuBtn.style.visibility = "hidden"
    CloseMenuBtn.style.visibility = "visible"
}

function CloseMenu() {
    // switch to animtion slide-out
    SlideInMenu.classList.remove("anim-slide-in")
    SlideInMenu.classList.add("anim-slide-out")
    
    SlideInMenu.style.animationPlayState = "running"

    // switch the displayed button
    CloseMenuBtn.style.visibility = "hidden"
    OpenMenuBtn.style.visibility = "visible"
}