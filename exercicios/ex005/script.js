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