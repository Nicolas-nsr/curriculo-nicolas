//------------------------------------------
// 1. ADICIONA AUTOMATICAMENTE O ANO NO RODAPÉ
//------------------------------------------

// Seleciona o elemento <span id="ano"> no footer
// e insere o ano atual (ex.: 2025)
document.getElementById("ano").textContent = new Date().getFullYear();



//------------------------------------------
// 2. CAPTURA ELEMENTOS DO FORMULÁRIO
//------------------------------------------

// Obtém o formulário pela ID
const form = document.getElementById("formContato");

// Div onde serão exibidas mensagens (erro ou sucesso)
const feedback = document.getElementById("feedback");



//------------------------------------------
// 3. EVENTO PRINCIPAL DO FORMULÁRIO
//------------------------------------------

// Quando o usuário clicar em "Enviar", esta função será executada
form.addEventListener("submit", function (e) {
    // Impede que a página recarregue (comportamento padrão do formulário)
    e.preventDefault();

    //----------------------------------
    // 3.1 PEGAR OS VALORES DOS CAMPOS
    //----------------------------------
    const nome = document.getElementById("nome").value.trim();       // Retira espaços do começo/fim
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("mensagem").value.trim();

    //----------------------------------
    // 3.2 VALIDAÇÃO: CAMPOS OBRIGATÓRIOS
    //----------------------------------
    if (!nome || !email || !msg) {
        mostrarFeedback("Preencha todos os campos.", true);
        return; // para a execução aqui
    }

    //----------------------------------
    // 3.3 VALIDAÇÃO BÁSICA DE EMAIL
    //----------------------------------
    // Verifica se o email contém @ e .
    if (!email.includes("@") || !email.includes(".")) {
        mostrarFeedback("Digite um email válido.", true);
        return;
    }

    //----------------------------------
    // 3.4 SIMULAÇÃO DE ENVIO (SEM BACKEND)
    //----------------------------------
    mostrarFeedback("Mensagem enviada com sucesso! (Simulação)", false);

    // Limpa todos os campos após o envio
    form.reset();
});



//------------------------------------------
// 4. FUNÇÃO QUE EXIBE AS MENSAGENS
//------------------------------------------
// texto  → mensagem para o usuário
// erro   → se TRUE, estiliza como erro; se FALSE, mostra sucesso
//------------------------------------------
function mostrarFeedback(texto, erro = false) {

    // Exibe a div (ela inicia como hidden no HTML)
    feedback.hidden = false;

    // Coloca o texto escolhido
    feedback.textContent = texto;

    // Estilos visuais personalizados
    if (erro) {
        // Estilo para ERRO
        feedback.style.background = "#ffe5e5";
        feedback.style.border = "1px solid #ffa6a6";
        feedback.style.color = "#8b0000";
    } else {
        // Estilo para SUCESSO
        feedback.style.background = "#e8ffe8";
        feedback.style.border = "1px solid #8be19c";
        feedback.style.color = "#013d0c";
    }
}
