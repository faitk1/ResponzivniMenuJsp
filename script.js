
const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")
 

// menuIcon.addEventListener("click", () => {
//     console.log("Bylo kliknuto")
// })

 menuIcon.addEventListener("click", () => {  //mam mene nez 600px (jinak se mi nezobrazila ikona) a kliknu na menu-icon
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("fa-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block"
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark")
        menuList.style.display = "none"
    }
})

window.addEventListener("resize", () => {
    // console.log(window.innerWidth)

    if (window.innerWidth > 600) {
        menuList.style.display = "block"
         console.log(window.innerWidth)
    } else {
        menuList.style.display = "none"
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark")
    }

})
