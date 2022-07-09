const profile = document.querySelector(".card__profile")
const share = document.querySelector(".card__share");
const shareProfileBtn = document.querySelector("#shareProfileBtn")
const sharePromptBtn = document.querySelector("#sharePromptBtn")


sharePromptBtn.addEventListener("click", () => {
   share.classList.toggle("flex")
})


shareProfileBtn.addEventListener("click", () => {
    share.classList.remove("flex")

   
})


// Main issue the button