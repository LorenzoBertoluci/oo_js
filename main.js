
class Funcionario {
    constructor(nome, cargo, salario, cargaHoraria) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.cargaHoraria = cargaHoraria;
    }

    apresentar() {
        console.log(`Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$ ${this.salario.toFixed(2)}, Carga Horária: ${this.cargaHoraria} horas`);
    }

    realizarTarefa() {
        console.log(`${this.nome} está realizando uma tarefa.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, setor, salario, cargaHoraria) {
        super(nome, 'Gerente', salario, cargaHoraria);
        this.setor = setor;
    }

    coordenarEquipe() {
        console.log(`${this.nome} está coordenando a equipe do setor ${this.setor}.`);
    }
}

class Analista extends Funcionario {
    constructor(nome, projeto, salario, cargaHoraria) {
        super(nome, 'Analista', salario, cargaHoraria);
        this.projeto = projeto;
    }

    analisarDados() {
        console.log(`${this.nome} está analisando dados para o projeto ${this.projeto}.`);
    }
}


const gerente1 = new Gerente('João Silva', 'Vendas', 8000, 40);
const analista1 = new Analista('Maria Oliveira', 'Desenvolvimento', 5000, 35);
const gerente2 = new Gerente('Carlos Souza', 'Marketing', 9000, 38);

gerente1.apresentar();
gerente1.coordenarEquipe();
analista1.apresentar();
analista1.realizarTarefa();
gerente2.apresentar();
gerente2.coordenarEquipe();
