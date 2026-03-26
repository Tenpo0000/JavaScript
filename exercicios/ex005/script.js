/* O Desafio: "Sistema Bancário"
    Você deve criar um script que gerencie uma conta bancária e suas transações.
    Requisitos:

    Objeto ContaBancaria:
    Crie um objeto 'conta' com:
    - titular
    - saldo
    - um array 'extrato'

    Função de Depósito:
    Crie uma função que receba um valor.
    1. Deve adicionar ao saldo.
    2. Deve registrar no extrato: "Depósito de R$ X".

    Função de Saque:
    Recebe um valor.
    1. Deve verificar se há saldo suficiente.
    2. Se não houver, mostrar mensagem de erro.
    3. Se houver:
        - Subtrair do saldo
        - Registrar no extrato: "Saque de R$ X"

    Função de Transferência:
    Recebe um valor e uma conta de destino.
    1. Deve verificar saldo suficiente.
    2. Se não houver, mostrar erro.
    3. Se houver:
        - Subtrair da conta atual
        - Adicionar na conta destino
        - Registrar no extrato das duas contas:
            "Transferência de R$ X para [destinatário]"
            "Transferência de R$ X recebida de [remetente]"

    Relatório Final:
    Use um único console.log (Template Strings) para mostrar:
    "O cliente [titular] possui saldo de R$ [X].
     Extrato: [lista de operações]"
*/

class ContaBancaria{
    constructor(titular,saldo) {
        this.titular = titular
        this.saldo = saldo
        this.extrato = []
    }

    getTitular() {
        return this.titular
    }

    getSaldo() {
        return this.saldo
    }
    
    getExtrato() {
        return this.extrato
    }

    deposito(valor) {
        this.saldo += valor
        this.extrato.push(`Deposito com valor de R$${valor} Realizado com sucesso!!!`)
    } 

    saque(valor) {
        if(valor <= 0) {
            console.log(`Você não tem saldo suficiente para realizar o saque no valor de R$${valor} \n Seu saldo atual: R$${saldo}`)
            return
        }

        this.saldo -= valor
        this.extrato.push(`Saque com valor de R$${valor} Realizado com sucesso!!!`)
    }

    transferencia(contaDestino,saldo) {
        if(saldo > this.saldo) {
            console.log(`Saldo insuficiente para fazer essa transferencia`)
            return
        }
        
        this.saldo -= saldo
        contaDestino.saldo += saldo
        this.extrato.push(`Transferência de R$${saldo.toFixed(2)} para ${contaDestino.titular}`)
        contaDestino.extrato.push(`Transferência de R$${saldo.toFixed(2)} recebida de ${this.titular}`)
    }
}
const conta1 = new ContaBancaria("João", 100)
const conta2 = new ContaBancaria("Maria", 50)

conta1.transferencia(conta2, 40)

console.log(conta1.saldo) // 60
console.log(conta2.saldo) // 90
console.log(conta1.extrato) // ["Transferência de R$ 40 para Maria"]
console.log(conta2.extrato) //