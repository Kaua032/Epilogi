let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

// Inputs Cadastrar
let emailInputCadastro = document.getElementById("cadastrarEmail")
let senhaInputCadastro = document.getElementById("cadastrarSenha")

// Inputs Login
let emailInputLogin = document.getElementById("entrarEmail")
let senhaInputLogin = document.getElementById("entrarSenha")

let modalLogin = document.getElementById("backgroundLogin")
let modalCriar = document.getElementById("backgroundCadastrar")




// Botão para abrir o modal de login
document.getElementById("entrar").addEventListener("click", () =>{
    modalLogin.style.display = "flex"
})

// Botão para abria o modal de criar conta
document.getElementById("criar").addEventListener("click", () =>{
    modalCriar.style.display = "flex"
})

// Sair quando clicar fora da div
window.onclick = function(e){
    if(e.target == modalLogin){
        modalLogin.style.display = "none"
    }
    else if(e.target == modalCriar){
        modalCriar.style.display = "none"
    }
}


// Analisando os dados do criar
document.getElementById("btnCadastrar").addEventListener("click", (e) =>{
    e.preventDefault()
    if(emailRegex.test(emailInputCadastro.value) == false & passwordRegex.test(senhaInputCadastro.value) == false){
        emailInputCadastro.style.borderColor = "red"
        senhaInputCadastro.style.borderColor = "red"
    }
    else if(emailRegex.test(emailInputCadastro.value) == true & passwordRegex.test(senhaInputCadastro.value) == false){
        senhaInputCadastro.style.borderColor = "red"
    }

    else if(emailRegex.test(emailInputCadastro.value) == false & passwordRegex.test(senhaInputCadastro.value) == true){
        emailInputCadastro.style.borderColor = "red"
    }
})

// Analisando os dados do Entrar
document.getElementById("btnEntrar").addEventListener("click", (e) =>{
    e.preventDefault()
    if(emailRegex.test(emailInputLogin.value) == false & passwordRegex.test(senhaInputLogin.value) == false){
        emailInputLogin.style.borderColor = "red"
        senhaInputLogin.style.borderColor = "red"
    }
    else if(emailRegex.test(emailInputLogin.value) == true & passwordRegex.test(senhaInputLogin.value) == false){
        senhaInputCadastro.style.borderColor = "red"
    }

    else if(emailRegex.test(emailInputLogin.value) == false & passwordRegex.test(senhaInputLogin.value) == true){
        emailInputLogin.style.borderColor = "red"
    }
})


// Mudando a cor da linha para preto caso clique no input
function mudarCor(id){
    document.getElementById(`${id}`).style.borderColor = "#000"
}
