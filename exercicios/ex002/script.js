// 1. Boas-vindas personalizadas
// Crie uma variável chamada nome e atribua seu nome completo. Depois, use
// console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de
// JavaScript!"

function boasVindas (){
    let nome = 'Laerte'
    console.log(`Olá ${nome} seja bem-vindo(a) ao curso de JavaScrpit!`) 
}

boasVindas()

// 2. Cálculo de idade
// Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo
// os valores e exiba no console: "Você tem [idade] anos."

function calcularIdade(){
    let anoAtual = 2026
    let anoNascimento = 2006
    let idade = anoAtual - anoNascimento
    console.log(`Você tem ${idade} anos.`)
}

calcularIdade()

// 3. Mensagem de localização
// Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida,
// mostre no console: "Você está em Cidade - Estado, País."

function localizacao() {
    let cidade = 'Feira de Santana'
    let estado = 'Bahia'
    let pais = 'Brasil'
    console.log(`Você está em ${cidade} - ${estado}, ${pais}.`)
}

localizacao()

// 4. Tipo da variável:
// Crie uma variável chamada temCarteira com valor true ou false. Use
// console.log(typeof temCarteira) para mostrar o tipo dessa variável.

function carteira() {
    let temCarteira = false
    console.log(typeof temCarteira)     
}

carteira()

// 5. Simulação bancária simples:
// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um
// saque de 50. Mostre o saldo final no console com uma frase explicando.
function simulacaoBancaria(){
    let saldo = 0
    let deposito = 200
    let saque = 50

    console.log(`Seu saldo atual: R$${saldo}`)
    console.log(`Deposito de R$200 reais realizado com sucesso!`)
    saldo = deposito
    console.log(`Seu saldo atual: R$${saldo}`)
    console.log(`Solicitação de saque no valor de R$50 realizado com sucesso!`)
    saldo = saldo - saque
    console.log(`Seu saldo atual: R$${saldo}`)
}

simulacaoBancaria()

// 6. Média de notas:
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas
// respectivas notas. Calcule e mostre a média final com uma mensagem.
function mediaNotas() {
    let notaMatematica = 10
    let notaPortugues = 6
    let notaCiencias = 8
    let media = (notaCiencias + notaMatematica + notaPortugues)  /3
    console.log(`Suas notas:  Ciencias: ${notaCiencias}, Portugues: ${notaPortugues}, Matematica: ${notaMatematica}`)
    console.log (`Sua media: ${media}`)
}

mediaNotas()

// 7. Reajuste de salário:
// Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e
// mostre o novo salário com uma frase explicando o motivo.
function reajsuteSalario(){
    let salario = 3000
    let reajuste = salario / 10
    salario = salario + reajuste
    console.log(`${salario}`)
}

reajsuteSalario()

// 8. Contador de cliques:
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e
// incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.
function contadorClicks() {
    let click = 0   

    for (let i = 0; i < 10; i++){
        click++
        console.log(`você clicou!`)
    }

    console.log(`Total de clicks: ${click}`)
}

contadorClicks()


// 9. Constantes não podem ser alteradas
// Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o
// erro gerado. Depois, explique por que isso acontece.
function pi(){
    const pi = 3.14
    console.log(`Valor de pi: ${pi}`)
    // pi = 2 
    // console.log(`Valor de pi: ${pi}`)

    /*
        Pesquisa feita com Inteligencia artificial, 
        IA usada: Google Gemini.

        Por que isso acontece? A palavra-chave const (abreviação de constante) foi introduzida no JavaScript (ES6) 
        para criar identificadores que não podem ser reatribuídos.Imutabilidade de Referência: 
        Quando você declara algo como const, você está dizendo ao computador: 
        "Reserve este espaço na memória e não permita que ninguém coloque um valor diferente aqui depois".
        Segurança do Código: Usamos constantes para valores que sabemos que não devem mudar durante a execução do programa 
        (como o valor de $\pi$, configurações de API ou nomes de pastas). Isso evita que você ou outro programador
        mude um valor importante por acidente.Performance e Leitura: O motor do JavaScript consegue otimizar melhor o código 
        quando sabe que aquele valor é fixo, e quem lê seu código entende de cara que aquele dado é estável.Um detalhe importante 
        (Pegadinha)Embora você não possa reatribuir o valor de uma const, se a constante for um Objeto ou um Array, 
        você ainda consegue alterar o conteúdo interno deles (adicionar itens na lista, por exemplo), mas nunca substituir a lista inteira por outra.
    */
}

pi()

// 10. Concatenando tipos diferentes
// Crie uma variável mensagem contendo uma string e outra numero contendo um
// número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no
// console usando typeof.

function concatenando(){
    let nome = 'Laerte'
    let idade = 10
    let concatenando = nome + idade
    console.log(`${concatenando}`)
    console.log(typeof concatenando)
}

concatenando()  