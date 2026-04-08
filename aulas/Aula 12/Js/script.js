const lista = ["leite", "café", "arroz"]
const body = document.getElementsByTagName('body')
const ul = document.createElement('ul')


function lerTexto(){
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li')
        li.textContent = lista[i]
        ul.appendChild(li)
    }
}

lerTexto()
body[0].appendChild(ul)
console.log(body[0])