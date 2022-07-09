const profile = document.querySelector(".card__profile")
const share = document.querySelector(".share-modal");
const shareBtnActive = document.querySelector("#shareBtnActive")
const shareBtnUnactive = document.querySelector("#shareBtnUnactive")


shareBtnUnactive.addEventListener("click", () => {
   share.classList.toggle("flex")
})


shareBtnActive.addEventListener("click", () => {
    share.classList.remove("flex")

   
})


// Main issue the button