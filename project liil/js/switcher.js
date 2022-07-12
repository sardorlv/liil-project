// toggler switcher
const styleSwitcherToggele = document.querySelector(".style-switcher-toggler");
styleSwitcherToggele.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");

})

// hide on scroll

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){

        document.querySelector(".style-switcher").classList.remove("open");    
    }
    
})

// theme colors

const alternateStyles = document.querySelector(".alternate-style");

function setActiveStyle(color){

    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })

}


// dark light modes 

const dayNight = document.querySelector("day-night");

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

