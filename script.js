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

  function calcularVida (){
    var nivelInput = document.getElementById('nivel-personagem')
    var selectTipo = document.getElementById('tipo-criatura')
    var resultadoPV = document.querySelector('.ponto-vida')

    var tipoCriatura = selectTipo.value
    var nivel = parseInt(nivelInput.value)

    if (tipoCriatura === 'animal'){
      var valorVida = (4 + valorCON) * nivel
    } else if (tipoCriatura === 'constructo'){
      var valorVida = (5 + valorCON) * nivel
    } else if (tipoCriatura === 'espirito'){
      var valorVida = (4 + valorCON) * nivel
    } else if (tipoCriatura === 'humanoide'){
      var valorVida = (2 + valorCON) * nivel
    } else if (tipoCriatura === 'monstro'){
      var valorVida = (10 + valorCON) * nivel
    } else if (tipoCriatura === 'mortovivo'){
      var valorVida = (4 + valorCON) * nivel
    }

    resultadoPV.innerHTML = `${valorVida}`
  }

  var selectTipo = document.getElementById('tipo-criatura')
  var nivelInput = document.getElementById('nivel-personagem')
  var CONinput = document.getElementById('text-con')

  selectTipo.addEventListener('change', calcularVida)
  nivelInput.addEventListener('input', calcularVida)
  CONinput.addEventListener('input', calcularVida)