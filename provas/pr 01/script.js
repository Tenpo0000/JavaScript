const API = "http://localhost:3000/alunos";

const lista = document.getElementById("listaAlunos");
const modal = document.getElementById("modal");
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cursoInput = document.getElementById("curso");
const btnNovo = document.getElementById("btnNovo");
const btnCancelar = document.getElementById("cancelar");
const btnSalvar = document.getElementById("salvar");
let numID = 1

let alunoEditando = null;

function abrirModal(aluno = null) {
    modal.classList.remove("hidden");

    if (aluno) {
        nomeInput.value = aluno.nome;
        idadeInput.value = aluno.idade;
        cursoInput.value = aluno.curso;
        alunoEditando = aluno;
    } else {
        nomeInput.value = "";
        idadeInput.value = "";
        cursoInput.value = "";
        alunoEditando = null;
    }
}

function fecharModal() {
    modal.classList.add("hidden");
}

async function carregarAlunos() {
    const res = await fetch(API);
    const dados = await res.json();

    lista.innerHTML = "";

    dados.forEach(aluno => {
        const card = document.createElement("div");
        card.classList.add("card");

        if (!aluno.ativo) {
            card.classList.add("inativo");
        }

        card.innerHTML = `
            <h3>${aluno.nome}</h3>
            <p>Idade: ${aluno.idade}</p>
            <p>Curso: ${aluno.curso}</p>

            <div class="acoes">
                <button onclick="editarAluno('${aluno.id}')">Editar</button>
                <button onclick="excluirAluno('${aluno.id}')">Excluir</button>
                <label>
                    <input type="checkbox" ${aluno.ativo ? "checked" : ""} 
                    onchange="alternarStatus(${aluno.id}, this.checked)">
                    Ativo
                </label>
            </div>
        `;

        lista.appendChild(card);
    });
}

async function criarAluno() {
    const aluno = {
        nome: nomeInput.value,
        idade: Number(idadeInput.value),
        curso: cursoInput.value,
        ativo: true
    };

    if (alunoEditando) {
        await fetch(`${API}/${alunoEditando.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aluno)
        });
    } else {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aluno)
        });
    }
    fecharModal();
    carregarAlunos();
}

async function editarAluno(id) {
    const res = await fetch(`${API}/${id}`);
    const aluno = await res.json();

    abrirModal(aluno);
}

async function excluirAluno(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    carregarAlunos();
}

async function alternarStatus(id, ativo) {
    await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ativo })
    });

    carregarAlunos();
}

btnNovo.addEventListener("click", () => abrirModal());
btnCancelar.addEventListener("click", fecharModal);
btnSalvar.addEventListener("click", criarAluno);

carregarAlunos();