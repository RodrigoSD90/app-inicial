function verificarVaga() {
    // Captura os valores dos inputs
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
// Comentário teste de versionamento
    // Lógica de verificação: Idade >= 18 E Altura >= 1.70
    if (idade >= 18 && altura >= 1.70) {
        resultado.style.color = "green";
        resultado.innerText = `Parabéns, ${nome}! Você pode prosseguir no processo para a vaga!`;
    } else {
        resultado.style.color = "red";
        resultado.innerText = "Infelizmente você não é apto à vaga.";
    }
}