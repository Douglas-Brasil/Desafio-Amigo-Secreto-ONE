let amigos = []
function adicionarAmigo(){
     amigo_digitado = document.getElementById("amigo").value

     // Verifica se o campo de nome foi preenchido ou se contém apenas numeros
     if (amigo_digitado == [] || !isNaN(amigo_digitado)) {
          alert("Insira um nome válido")
     } else {
          // Cria o elemento <li> e adiciona ele na estrutura do html da página
          amigos.push(amigo_digitado)
          let linha = document.createElement("li")
          linha.innerHTML = amigo_digitado
          document.getElementById("listaAmigos").append(linha)

          //Limpa o campo de nome caso o nome for válido
          document.getElementById("amigo").value = null
     }

}