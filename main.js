const profile = document.querySelector(".card__profile")
const share = document.querySelector(".share-modal");
const popUpShare = document.querySelector(".pop-up")
const shareBtnActive = document.querySelector("#shareBtnActive")
const shareBtnUnactive = document.querySelector("#shareBtnUnactive")


shareBtnUnactive.addEventListener("click", () => {
    if (window.innerWidth < 767) {
        profile.style.display = "none"
        share.style.display = "flex"
        popUpShare.style.display = "none"
    }
})

shareBtnActive.addEventListener("click", () => {
    if (window.innerWidth < 767) {
        profile.style.display = "flex"
        share.style.display = "none"
        popUpShare.style.display = "none"
    }
})


shareBtnUnactive.addEventListener("click", () => {
    if (window.innerWidth > 767) {
        if (popUpShare.style.display === "none") {
            popUpShare.style.display = "flex";
            share.style.display = "none"
        } else {
            popUpShare.style.display = "none";
            share.style.display = "none"
        }
    }
})




//  if (window.innerWidth > 767)

// It seems that the "share" element's button is a different button