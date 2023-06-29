// Input dos atributos
function identificarInput(txtSelector, atributo) {
    var txtElem = document.querySelector(txtSelector)
    txtElem.addEventListener('input', function() {
      var num = parseInt(txtElem.value)
      calcularModificador(num, atributo)
    })
  }
  
  // Cálculo do modificador
  function calcularModificador(valor, atributo) {
    var resVal = Math.floor((valor - 10) / 2)
    escreverModificador(resVal, atributo)
    armazenarModificador(resVal, atributo)
  }
  
  // Escreve o modificador em sua div
  function escreverModificador(valor, atributo) {
    var modElem = document.querySelector(`div#mod-${atributo}`)
    modElem.innerHTML = `${valor}`
  }
  
  // Armazena Valor do atributo (ex.: valorFOR, valorDES)
  function armazenarModificador(valor, atributo) {
        window[`valor${atributo.toUpperCase()}`] = valor
  }
  
  // FORÇA
  identificarInput('input#text-for', 'for')
  
  // DESTREZA
  identificarInput('input#text-des', 'des')
  
  // CONSTITUIÇÃO
  identificarInput('input#text-con', 'con')
  
  // INTELIGÊNCIA
  identificarInput('input#text-int', 'int')
  
  // SABEDORIA
  identificarInput('input#text-sab', 'sab')
  
  // CARISMA
  identificarInput('input#text-car', 'car')