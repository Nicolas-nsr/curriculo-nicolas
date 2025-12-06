// Aguarda o HTML carregar completamente antes de rodar o JS
document.addEventListener("DOMContentLoaded", function () {

    //------------------------------------------
    // 1. ADICIONA AUTOMATICAMENTE O ANO NO RODAPÉ
    //------------------------------------------
    document.getElementById("ano").textContent = new Date().getFullYear();

    //------------------------------------------
    // 2. CAPTURA ELEMENTOS DO FORMULÁRIO
    //------------------------------------------
    const form = document.getElementById("formContato");
    const feedback = document.getElementById("feedback");

    //------------------------------------------
    // 3. EVENTO PRINCIPAL DO FORMULÁRIO
    //------------------------------------------
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const msg = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !msg) {
            mostrarFeedback("Preencha todos os campos.", true);
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            mostrarFeedback("Digite um email válido.", true);
            return;
        }

        mostrarFeedback("Mensagem enviada com sucesso! (Simulação)", false);
        form.reset();
    });

    //------------------------------------------
    // 4. FUNÇÃO QUE EXIBE AS MENSAGENS
    //------------------------------------------
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

});
