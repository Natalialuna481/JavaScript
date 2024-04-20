function exibirTabuada() {
  const numInput = document.getElementById("num")
  const tabuadaSelect = document.getElementById("tabuada")
  const respostaDiv = document.getElementById("resposta")

  const numero = parseInt(numInput.value)
  tabuadaSelect.innerHTML = "" // Limpa as opções anteriores

  if (!isNaN(numero)) {
      for (let i = 1; i <= 10; i++) {
          const resultado = numero * i
          const option = document.createElement("option")
          option.value = resultado;
          option.textContent = `${numero} x ${i} = ${resultado}`
          tabuadaSelect.appendChild(option)
      }
      respostaDiv.textContent = ""// Limpa a resposta anterior
  } else {
      respostaDiv.textContent = "Digite um número válido."
  }
}