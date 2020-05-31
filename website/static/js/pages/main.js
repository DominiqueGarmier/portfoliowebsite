var ScrollDownPrompt = document.getElementById("scroll-down-prompt")

var myScrollFunc = function() {
    var y = window.scrollY;
    ScrollDownPrompt.style.bottom = Math.round(y / 20).toString() + '%'
    ScrollDownPrompt.style.opacity = Math.max(1 - y / 400, 0).toString()
}

window.addEventListener("scroll", myScrollFunc)