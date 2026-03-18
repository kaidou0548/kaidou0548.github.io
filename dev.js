// ===============================
// MENSAGEM
// ===============================
function mostrarMensagem() {
    alert("Bem-vindo! Você está aprendendo JavaScript 🚀");
}

// ===============================
// CONTADOR DE CLIQUES
// ===============================
let contador = 0;

function contarCliques() {
    contador++;
    let contadorEl = document.getElementById("contador");
    if (contadorEl) {
        contadorEl.innerText = contador;
    }
}

// ===============================
// MODO ESCURO
// ===============================
function alternarTema() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
}

// ===============================
// CARREGAMENTO INICIAL
// ===============================
window.onload = function () {
    let temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
    }

    carregarNome();
};

// ===============================
// FORMULÁRIO
// ===============================
function enviarFormulario() {
    let nomeEl = document.getElementById("nome");
    let emailEl = document.getElementById("email");

    if (!nomeEl || !emailEl) return;

    let nome = nomeEl.value;
    let email = emailEl.value;

    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido!");
        return;
    }

    alert("Formulário enviado com sucesso!");

    localStorage.setItem("nomeUsuario", nome);
    carregarNome();
}

// ===============================
// MOSTRAR NOME
// ===============================
function carregarNome() {
    let nome = localStorage.getItem("nomeUsuario");
    let elemento = document.getElementById("usuario");

    if (nome && elemento) {
        elemento.innerText = "Olá, " + nome + " 👋";
    }
}