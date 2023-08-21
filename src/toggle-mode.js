let darkMode = true
const buttonToggle = document.querySelector(".toggle-mode")

function toggleMode() {
    document.documentElement.classList.toggle("light")
}

buttonToggle.addEventListener("click", toggleMode)