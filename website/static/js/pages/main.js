var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

var MovingBanner = document.getElementById("moving-banner")

var AboutText = document.getElementById("about-text")
var AboutImage = document.getElementById("about-img")

var ProjectsText = document.getElementById("projects-text")
var ProjectsImage = document.getElementById("projects-img")


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
    var yAbout = AboutText.getBoundingClientRect().top
    var yProjects = ProjectsText.getBoundingClientRect().top

    var AboutAnimProgress = Math.min(Math.max(3*(vh - yAbout)/vh - 0.33, 0), 1)
    var ProjectsAnimProgress = Math.min(Math.max(3*(vh - yProjects)/vh - 0.33, 0), 1)

    AboutText.style.opacity = AboutAnimProgress
    AboutImage.style.opacity = AboutAnimProgress

    ProjectsText.style.opacity = ProjectsAnimProgress
    ProjectsImage.style.opacity = ProjectsAnimProgress

    console.log(AboutAnimProgress)
    console.log(y, yAbout, vh)
}

// animation check on relaod
window.addEventListener("load", getViewportSize)
window.addEventListener("load", BannerScrolling)
window.addEventListener("load", ParagraphScrollIn)

window.addEventListener("resize", getViewportSize)
window.addEventListener("scroll", BannerScrolling)
window.addEventListener("scroll", ParagraphScrollIn)