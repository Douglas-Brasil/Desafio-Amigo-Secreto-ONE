let amigos = [];

function inserirItemHTML(itemInserirNoHTML) {
     // Cria o elemento <li> e adiciona ele na estrutura do html da página
     let linha = document.createElement("li");
     linha.innerHTML = itemInserirNoHTML;
     document.getElementById("listaAmigos").append(linha);

     //Limpa o campo de nome caso o nome for válido
     document.getElementById("amigo").value = null;

};

function removerListaAmigosHTML() {
     lista = document.getElementById("listaAmigos").innerHTML = '';
};

function aparecerResultadoSorteio (resultado) {
     document.getElementById("resultado").innerHTML = "O Resultado do Sorteio é: " + resultado;
}

function adicionarAmigo(){
     amigoDigitado = document.getElementById("amigo").value;
     // Verifica se o campo de nome foi preenchido ou se contém apenas numeros
     if (amigoDigitado == [] || !isNaN(amigoDigitado)) {
          alert("Insira um nome válido");
     } else {
          amigos.push(amigoDigitado);
          inserirItemHTML(amigoDigitado);
     }

};

function sortearAmigo() {
     //Pega a quantidade de amigos 
     quantidadeAmigos = amigos.length;
     // Math.random() gera um número entre 0 e 0.9999, então multiplicamos o numero gerado com a qauntidade de amigos
     // Math.floor() desconsidera o valor decimal do numero gerado, deixa apenas o valor inteiro
     amigoSorteado = Math.floor(Math.random() * quantidadeAmigos);

     removerListaAmigosHTML();
     aparecerResultadoSorteio(amigos[amigoSorteado]);

}