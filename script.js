// Pegando o formulário pelo ID  do HTML
let formulario = document.getElementById("meuFormulario");


formulario.addEventListener("submit", function(evento) {
    
    
    evento.preventDefault();

    // Pegando os valores que a pessoa digitou nas caixas
    let nome = document.getElementById("campo-nome").value;
    let email = document.getElementById("campo-email").value;
    let mensagem = document.getElementById("campo-mensagem").value;

    // 1. Validando se tem algum campo em branco
    if (nome == "" || email == "" || mensagem == "") {
        alert("Ops! Por favor, preencha todos os campos antes de enviar.");
        return; 
    }

    // 2. Validando se o e-mail parece válido (se tem @ e ponto)
    // Criei uma regra simples de busca na string para validar o formato usuario@exemplo.com
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Este e-mail não parece certo. Digite um formato válido (ex: usuario@exemplo.com).");
        return; 
    }

    // 3. Simulação de sucesso
    // Se passar pelas duas validações acima, o envio deu certo.
    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

    
    formulario.reset();
});