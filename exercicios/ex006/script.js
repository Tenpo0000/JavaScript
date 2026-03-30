let botaoH1 = document.getElementById("botaoH1")
let texto = document.getElementById("texto")

let botaoParagrafo = document.getElementById("botaoParagrafo")
let paragrafo = document.getElementById("paragrafo")

let nome = document.getElementById("nome")
let btnMostrar = document.getElementById("btnMostrar")
let resultado = document.getElementById("resultado")

let btnContadorDeClicks = document.getElementById("btnContadorDeClicks")
let numeroDeClicks = document.getElementById ("numeroDeClicks")
let clicks = 0

let BtnToglle = document.getElementById("BtnToglle")

let textValidacao = document.getElementById("textValidacao")
let btnValidacao = document.getElementById("btnValidacao")

let nomeParaAdicionarNaLista = document.getElementById("nomeParaAdicionarNaLista")
let btnAdicionar = document.getElementById("btnAdicionar")
let lista = document.getElementById("lista")
let array = []

function trocarTexto() {
    texto.textContent = "eu alterei seu texto"
}

function trocarCor() {
    paragrafo.style.color = "blue"
    paragrafo.style.fontSize = "20px"
}

function mostrarNome() {
    resultado.textContent = `Olá ${nome.value}`
}

function contadorDeClicks() {
    clicks++
    numeroDeClicks.textContent = `Numero de clicks: ${clicks}`
}

function toglle() {
    if(BtnToglle.style.color === ""){
        BtnToglle.style.color = "red"
    } else if(BtnToglle.style.color === "red") {
        BtnToglle.style.color = ""
    }
}

function Validacao() {
    if(textValidacao.value === ""){
        alert("Você não respondeu a pergunta")
    } else if (textValidacao != "") {
        alert("Ok!")
    }
}

function adicionarNaLista() { /* Estudar mais sobre este assunto */ 
    let novoItem = nomeParaAdicionarNaLista.value.trim()

    if (novoItem === ""){
        alert("Por favor, digite um nome!")
        return
    }

    array.push(novoItem)

    let novaLi = document.createElement("li")
    novaLi.textContent = novoItem

    lista.appendChild(novaLi)

    nomeParaAdicionarNaLista.value = ""
    nomeParaAdicionarNaLista.focus()
}

botaoH1.addEventListener("click", trocarTexto)
botaoParagrafo.addEventListener("click", trocarCor)
btnMostrar.addEventListener("click", mostrarNome)
btnContadorDeClicks.addEventListener("click", contadorDeClicks)
BtnToglle.addEventListener("click", toglle)
btnValidacao.addEventListener("click", Validacao)
btnAdicionar.addEventListener("click", adicionarNaLista)