/*  
    O Desafio: "Simulador de Vida"
    /Você deve criar um script que gerencie os dados de um usuário. O desafio mistura Objetos, Arrays, Cálculos e Condicionais.

    Requisitos:
    Objeto Usuário: Crie um objeto chamado usuario com: nome, anoNascimento, salario e uma lista (array) chamada compras.
    Função de Idade: Uma função que calcule a idade dele (baseado no ano atual 2026) e adicione essa informação dentro do objeto usuario.
    Função de Reajuste: Uma função que receba um valor de porcentagem e aumente o salario do objeto.
    Função de Compras: Uma função que receba o nome de um item e o valor dele.
    Ela deve adicionar o item no array compras.
    Ela deve subtrair o valor do item do salario do usuário.
    Relatório Final: Use um único console.log (usando Template Strings) para mostrar:
    "O usuário [nome] tem [idade] anos. Após as compras de [lista de compras], seu saldo restante é R$[salario]." 
*/



class usuario{
    constructor(nome, anoNascimento, salario) {
        this.nome = nome
        this.anoNascimento = anoNascimento
        this.salario = salario
        this.compras = []
        this.idade = 0
    }

    calculaIdade() {
        this.idade = 2026 - this.anoNascimento 
    }
    
    reajusteSalarial(porcentagem) {
        this.salario *= (1 + porcentagem  / 100)
    }
    
    registrarCompra(nomeItem,valor) {
        this.compras.push (nomeItem) 
        this.salario -= valor
    }
    
    exibirRelatorio() {
        console.log(`O usuário ${this.nome} tem ${this.idade} anos. Após as compras de ${this.compras.join(", ")}, seu saldo restante é R$ ${this.salario.toFixed(2)}.`);
    }
    
}

const laerte = new usuario("Laerte", 2006, 3000);

laerte.calculaIdade();
laerte.reajusteSalarial(15); // Aumento de 15%
laerte.registrarCompra("Monitor", 800);
laerte.registrarCompra("Mouse", 150);

laerte.exibirRelatorio();