const resultado = document.getElementById("result"); // procura o lugar pra colocar o resultado
const botao = document.querySelectorAll("button"); // usa querySelectorAll pra selecionar todos os botões

botao.forEach(button => { // adiciona pra cada botão
  button.addEventListener("click", () => { // adiciona o eventListener
    const value = button.textContent; //ve oque ta escrito no botão

    if (value === "C") { //pra limpar
      resultado.value = "";
    } else if (value === "=") {
      try { //try catch para o caso de não ter digitado algum numero
        resultado.value = eval(resultado.value); //eval transforma o "5+5" em de fato 5+5
      } catch {
        resultado.value = "Erro";
      }
    } else { // adiciona no resultado
      resultado.value += value;
    }
  });
});
