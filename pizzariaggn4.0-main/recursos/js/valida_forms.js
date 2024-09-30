function validarFormulario() {
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("nome").value.trim();
    var telefone = document.getElementById("telefone").value.trim();
    var endereco = document.getElementById("endereco").value.trim();
    var cidade = document.getElementById("cidade").value.trim();
    var erroMensagem = document.getElementById("erroMensagem");

    // Limpa a mensagem de erro antes de cada validação
    erroMensagem.innerHTML = "";

    // Valida o campo nome
    if (nome === "") {
        erroMensagem.innerHTML = "Por favor, insira seu nome.";
        return false;
    }

    // Valida o telefone (pode usar expressões regulares para validar números de telefone)
    var telefoneRegex = /^\d{10,11}$/; // Exemplo para validar telefone com 10 ou 11 dígitos
    if (!telefoneRegex.test(telefone)) {
        erroMensagem.innerHTML = "Por favor, insira um número de telefone válido (apenas números, 10 ou 11 dígitos).";
        return false;
    }

    // Valida o endereço
    if (endereco === "") {
        erroMensagem.innerHTML = "Por favor, insira seu endereço.";
        return false;
    }

    // Valida a cidade
    if (cidade === "") {
        erroMensagem.innerHTML = "Por favor, insira sua cidade.";
        return false;
    }

    // Se tudo estiver correto, o formulário será enviado
    return true;
}
