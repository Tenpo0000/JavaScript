/* O Desafio: "Controle de Viagem"
    Você deve criar um script que gerencie os dados de um veículo e suas viagens.

    Requisitos:
    Objeto Veiculo: Crie um objeto 'carro' com: modelo, tanqueCapacidade, kmPorLitro e um array 'destinos'.
    Função de Abastecimento: Uma função que calcule quantos litros faltam para encher o tanque (baseado em um nível atual
    passado por parâmetro) e retorne o custo (litro a R$ 5.80).
    Função de Viagem: Recebe o nome da 'cidade' e a 'distancia' em km.
    1. Deve adicionar a cidade ao array 'destinos'.
    2. Deve calcular o consumo e subtrair o combustível do tanque (considere que ele começou cheio).
    Relatório Final: Use um único console.log (Template Strings) para mostrar:
    "O [modelo] viajou para [destinos]. O consumo total foi de [X] litros e ainda restam [Y] litros no tanque." 
*/

class Veiculo{
    constructor(modelo, tanqueCapacidade, nivelDoTanque, kmPorLitro) { 
        this.modelo = modelo
        this.tanqueCapacidade = tanqueCapacidade
        this.nivelDoTanque = nivelDoTanque
        this.kmPorLitro = kmPorLitro
        this.destinos = [] 

        if(this.nivelDoTanque >= this.tanqueCapacidade){
            this.nivelDoTanque = this.tanqueCapacidade
        }
    }

    getNivelDoTanque() {
        const armazenamentoLivreDoTanque = this.tanqueCapacidade - this.nivelDoTanque
        console.log(`O nivel do tanque é de ${this.nivelDoTanque} \nVocê ainda pode colocar: ${armazenamentoLivreDoTanque}`)
    }

    getTanqueCapacidade() {
        console.log(`A capacidade do tanque é de: ${this.tanqueCapacidade}`)
    }

    getModelo() {
        console.log(`Modelo: ${this.modelo}`)
    }

    getDestinos() {
        console.log(`Destinos: ${this.destinos}`)
    }

    getKmPorLitro() {
        console.log(`Quilometros por litro: ${this.kmPorLitro}`)
    }

    abastecimento(litros) {
        let armazenamentoLivreDoTanque = this.tanqueCapacidade - this.nivelDoTanque

        if(armazenamentoLivreDoTanque >= this.tanqueCapacidade) {
            console.log(`O tanque ja está cheio!!!`)
            return
        }

        if(litros > armazenamentoLivreDoTanque) {  
            litros = armazenamentoLivreDoTanque
            armazenamentoLivreDoTanque -= litros

        }

        let valor = litros *  5.80
        this.nivelDoTanque += litros

        console.log(`O valor ficou de R$ ${valor} para ${litros}lt de gasosa \n nivel do tanque atual: ${this.nivelDoTanque}lt`)
    }

    viagem(cidade,quilometragem) {
        if (this.destinos.includes(cidade)) {
            console.log(`A cidade ${cidade} já está na lista de destinos!`)
        }else{
            this.destinos.push(cidade)
        }

        
        let consumo = quilometragem / this.kmPorLitro
        let simulacao = this.nivelDoTanque
        simulacao -= consumo

        if (simulacao < 0) {
            console.log(`Com o nivel do tanque atual é impossivel fazer essa viagem!!! \n nivel do tanque atual: ${this.nivelDoTanque}`)
            console.log(`Para fazer essa viagem você precisa de ${consumo.toFixed(2)}lt no seu tanque`)
            return
        }

        console.log(`Viagem feita com sucesso!!!`)
        this.nivelDoTanque -= consumo
        console.log(`nivel do tanque atual: ${this.nivelDoTanque.toFixed(2)}`)
    } 
} 

const meuCarro = new Veiculo("Civic", 50, 10, 6)
meuCarro.getModelo()
meuCarro.getDestinos()
meuCarro.getKmPorLitro()
meuCarro.getNivelDoTanque()
meuCarro.getTanqueCapacidade()

meuCarro.viagem("FeiraDesantana", 100)
meuCarro.abastecimento(7)
meuCarro.viagem("FeiraDesantana", 100)
meuCarro.getDestinos()