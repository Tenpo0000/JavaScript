/*
    Desafio 2: "Sistema com Trava de Segurança"
    Você vai evoluir a sua classe usuario. O objetivo é impedir que o usuário gaste o que não tem e criar um sistema de "Status".

    Novos Requisitos:
    Limite de Crédito: Adicione uma propriedade limite no constructor (além do salário).
    Validação de Compra: Altere o método registrarCompra(item, valor):
    SE o valor da compra for maior que o (salario + limite), não faça a compra e mostre um console.warn dizendo: "Saldo insuficiente para comprar [item]".
    CASO CONTRÁRIO, subtraia o valor (primeiro do salário, e se acabar, do limite) e adicione o item ao array.
    Método de Status: Crie um método chamado verificarSaudeFinanceira():
    Se o saldo for maior que 1000, retorne a string: "Estável".
    Se for entre 0 e 1000, retorne: "Alerta".
    Se estiver negativo (usando o limite), retorne: "Endividado".
    Relatório Atualizado: No relatório, inclua a "Saúde Financeira" do usuário
*/