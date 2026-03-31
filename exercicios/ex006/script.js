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
let btnAdicionarNaLista = document.getElementById("btnAdicionarNaLista")
let listaDeItens = document.getElementById("listaDeItens")

let inputNomeParaListaConclusao = document.getElementById("inputNomeParaListaConclusao")
let BtnadicionarNaListaConclusao = document.getElementById("BtnadicionarNaListaConclusao")
let ListaConclusao = document.getElementById("ListaConclusao")

let ListaParaTrocarCor = document.getElementById("ListaParaTrocarCor")
let btnTrocarCor = document.getElementById("btnTrocarCor")
let teste1 = document.getElementById("teste1")
let valorDaLista = 0

let remover = document.getElementById("remover")
let ListaParaRemover = document.getElementById("ListaParaRemover")

let meuFormulario = document.getElementById("meuFormulario")
let inputNome = document.getElementById("inputNome")
let inputEmail = document.getElementById("inputEmail")
let submit = document.getElementById("submit")

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
    BtnToglle.style.color =
            BtnToglle.style.color === "red" ? "" : "red"
}

function Validacao() {
    if(textValidacao.value === ""){
        alert("Você não respondeu a pergunta")
    } else if (textValidacao != "") {
        alert("Ok!")
    }
}

function alerta(){
     alert("Digite um nome para adicionar a lista!!!")
}

function adicionarNaLista() {
    const valor = nomeParaAdicionarNaLista.value
    if(valor !== "") {
        const novoLi = document.createElement("li")
        const btnExcluir = document.createElement("button")
        btnExcluir.textContent = "Excluir"
        btnExcluir.style.margin = "8px"
        btnExcluir.addEventListener("click", function(){
            listaDeItens.removeChild(novoLi)
        })
        novoLi.textContent = valor
        novoLi.appendChild(btnExcluir)
        listaDeItens.appendChild(novoLi)

        nomeParaAdicionarNaLista.value = ""
    } else {
      alerta()
    }
}

function listaConclusao() {
    const valor = inputNomeParaListaConclusao.value
    if(valor !== "") {
        const novoLi = document.createElement("li")
        const btnExcluir = document.createElement("button")
        const btnConcluir = document.createElement("button")

        btnExcluir.textContent = "Excluir"
        btnExcluir.style.margin = "8px"

        btnConcluir.textContent = "Concluir"
        btnConcluir.style.margin = "8px"

        btnExcluir.addEventListener("click", function() {
            ListaConclusao.removeChild(novoLi)
        })

        btnConcluir.addEventListener("click", function() {
            novoLi.style.textDecoration =
                novoLi.style.textDecoration === "line-through" ? "none" : "line-through" //estudar mais sobre essa maneira de decidir verdadeiro ou falso 
        })

        novoLi.textContent = valor
        novoLi.appendChild(btnConcluir)
        novoLi.appendChild(btnExcluir)
        ListaConclusao.appendChild(novoLi)

        inputNomeParaListaConclusao.value = ""
    } else {
        alerta()
    }
}

function trocarCorLista() {  
    const itens = ListaParaTrocarCor.querySelectorAll("li")

    itens.forEach(function (item){
        item.style.color =
            item.style.color === "" ? "blue" : ""
    })
}

function contarItensDaLista() {
    const lista = ListaParaTrocarCor.querySelectorAll("li")
    valorDaLista = lista.length

    teste1.textContent = "Numero de itens na lista: " + valorDaLista
    valorDaLista = 0
}

function RemoverItensDaLista() {
    ListaParaRemover.innerHTML = ""
}

function formularioTeste(e) {
    e.preventDefault();

    const nome = inputNome.value
    const email = inputEmail.value
    console.log(nome)
    console.log(email)
}

botaoH1.addEventListener("click", trocarTexto)  
botaoParagrafo.addEventListener("click", trocarCor)
btnMostrar.addEventListener("click", mostrarNome)
btnContadorDeClicks.addEventListener("click", contadorDeClicks)
BtnToglle.addEventListener("click", toglle)
btnValidacao.addEventListener("click", Validacao)
btnAdicionarNaLista.addEventListener("click", adicionarNaLista)
BtnadicionarNaListaConclusao.addEventListener("click", listaConclusao)
btnTrocarCor.addEventListener("click", trocarCorLista)
btnTrocarCor.addEventListener("click", contarItensDaLista)
remover.addEventListener("click", RemoverItensDaLista)
submit.addEventListener("submit", formularioTeste)