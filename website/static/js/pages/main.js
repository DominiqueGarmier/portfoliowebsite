var MovingBanner = document.getElementById("moving-banner")

var BannerScrolling = function() {
    var y = window.scrollY;
    MovingBanner.style.top = -Math.round(y / 10).toString() + '%'
    MovingBanner.style.opacity = Math.max(1 - y / 400, 0).toString()
}

window.addEventListener("scroll", BannerScrolling)