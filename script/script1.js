let informations = document.getElementById("informationsUser")


document.getElementById("hamburguerAbrir").addEventListener("click", () =>{
    informations.style.display = "flex"
})
document.getElementById("voltar").addEventListener("click", () =>{
    informations.style.display = "none"
})