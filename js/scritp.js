// Adiciona automaticamente o ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Captura elementos
const form = document.getElementById("formContato");
const feedback = document.getElementById("feedback");

// Função para validar e simular envio
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Pegando valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("mensagem").value.trim();

    // Validações obrigatórias da atividade
    if (!nome || !email || !msg) {
        mostrarFeedback("Preencha todos os campos.", true);
        return;
    }

    // Validação simples de e-mail
    if (!email.includes("@") || !email.includes(".")) {
        mostrarFeedback("Digite um email válido.", true);
        return;
    }

    // Simula envio
    mostrarFeedback("Mensagem enviada com sucesso! (Simulação)", false);

    form.reset();
});

// Exibe mensagens de sucesso/erro
function mostrarFeedback(texto, erro = false) {
    feedback.hidden = false;
    feedback.textContent = texto;

    if (erro) {
        feedback.style.background = "#ffe5e5";
        feedback.style.border = "1px solid #ffa6a6";
        feedback.style.color = "#8b0000";
    } else {
        feedback.style.background = "#e8ffe8";
        feedback.style.border = "1px solid #8be19c";
        feedback.style.color = "#013d0c";
    }
}
