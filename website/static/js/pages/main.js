var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

var MovingBanner = document.getElementById("moving-banner")

var AboutText = document.getElementById("about-text")
var AboutImage = document.getElementById("about-img")

var ProjectsText = document.getElementById("projects-text")
var ProjectsImage = document.getElementById("projects-img")

var ContactText = document.getElementById("contact-text")
var ContactImage = document.getElementById("contact-img")

var getViewportSize = function() {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
}

var BannerScrolling = function() {
    var y = window.scrollY
    MovingBanner.style.top = -Math.round(y / 10).toString() + '%'
    MovingBanner.style.opacity = Math.max(1 - y / 400, 0).toString()
}

var ParagraphScrollIn = function() {
    var yAboutText = AboutText.getBoundingClientRect().top
    var yProjectsText = ProjectsText.getBoundingClientRect().top
    var yContactText = ContactText.getBoundingClientRect().top

    var yAboutImage = AboutImage.getBoundingClientRect().top
    var yProjectsImage = ProjectsImage.getBoundingClientRect().top
    var yContactImage = ContactImage.getBoundingClientRect().top

    var a = 3
    var b = 0.33

    var AboutTextAnimProgress = Math.min(Math.max(a*(vh - yAboutText)/vh - b, 0), 1)
    var ProjectsTextAnimProgress = Math.min(Math.max(a*(vh - yProjectsText)/vh - b, 0), 1)
    var ContactTextAnimProgress = Math.min(Math.max(a*(vh - yContactText)/vh - b, 0), 1)

    var AboutImageAnimProgress = Math.min(Math.max(a*(vh - yAboutImage)/vh - b, 0), 1)
    var ProjectsImageAnimProgress = Math.min(Math.max(a*(vh - yProjectsImage)/vh - b, 0), 1)
    var ContactImageAnimProgress = Math.min(Math.max(a*(vh - yContactImage)/vh - b, 0), 1)

    AboutText.style.opacity = AboutTextAnimProgress
    AboutImage.style.opacity = AboutImageAnimProgress

    ProjectsText.style.opacity = ProjectsTextAnimProgress
    ProjectsImage.style.opacity = ProjectsImageAnimProgress

    ContactText.style.opacity = ContactTextAnimProgress
    ContactImage.style.opacity = ContactImageAnimProgress
}

// animation check on relaod
window.addEventListener("load", getViewportSize)
window.addEventListener("load", BannerScrolling)
window.addEventListener("load", ParagraphScrollIn)

window.addEventListener("resize", getViewportSize)
window.addEventListener("scroll", BannerScrolling)
window.addEventListener("scroll", ParagraphScrollIn)