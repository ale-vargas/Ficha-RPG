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

// Calcular PV e PM por nivel de acordo com tipo de criatura
function calcularPVePM (){
  var nivelInput = document.getElementById('nivel-personagem')
  var selectTipo = document.getElementById('tipo-criatura')
  var resultadoPV = document.querySelector('.ponto-vida')
  var resultadoPM = document.querySelector('.ponto-mana')

  var tipoCriatura = selectTipo.value
  var nivel = parseInt(nivelInput.value)

    if (tipoCriatura === 'animal'){
      var valorVida = (4 + valorCON) * nivel
      var valorMana = 'N/A'
    } else if (tipoCriatura === 'constructo'){
      var valorVida = (5 + valorCON) * nivel
      var valorMana = 1 * nivel
    } else if (tipoCriatura === 'espirito'){
      var valorVida = (4 + valorCON) * nivel
      var valorMana = 1 * nivel
    } else if (tipoCriatura === 'humanoide'){
      var valorVida = (2 + valorCON) * nivel
      var valorMana = 1 * nivel
    } else if (tipoCriatura === 'monstro'){
      var valorVida = (10 + valorCON) * nivel
      var valorMana = 1 * nivel
    } else if (tipoCriatura === 'mortovivo'){
      var valorVida = (4 + valorCON) * nivel
      var valorMana = 1 * nivel
    }

  resultadoPV.innerHTML = `${valorVida}`
  resultadoPM.innerHTML = `${valorMana}`
  }

  var selectTipo = document.getElementById('tipo-criatura')
  var nivelInput = document.getElementById('nivel-personagem')
  var CONinput = document.getElementById('text-con')

  selectTipo.addEventListener('change', calcularPVePM)
  nivelInput.addEventListener('input', calcularPVePM)
  CONinput.addEventListener('input', calcularPVePM)


  // Adicionar novo ataque
  var botaoAdicionar = document.getElementById('adicionar')
  botaoAdicionar.addEventListener('click', function() {
    var fieldsetOriginal = document.querySelector('.ataques')
    var novoFieldset = fieldsetOriginal.cloneNode(true)
  
    // Gerar um número único para os IDs dos elementos no novo fieldset
    var numeroUnico = Date.now()

    // Alterar os IDs dos elementos no novo fieldset
    novoFieldset.id = 'ataques-' + numeroUnico
    novoFieldset.querySelector('#iconeAtaque').id = 'iconeAtaque-' + numeroUnico
    novoFieldset.querySelector('#tipo-ataque').id = 'tipo-ataque-' + numeroUnico
    novoFieldset.querySelector('#nome-ataque').id = 'nome-ataque-' + numeroUnico
    novoFieldset.querySelector('#num-dano').id = 'num-dano-' + numeroUnico
    // Continue alterando os outros IDs conforme necessário
  
    // Limpa os valores dos campos de entrada do novo fieldset
    var inputs = novoFieldset.querySelectorAll('input')
    inputs.forEach(function(input) {
      input.value = ''
    })
    
    novoFieldset.classList.add('menor-espacamento')

    // Adiciona o novo fieldset abaixo do fieldset original
    fieldsetOriginal.insertAdjacentElement('afterend', novoFieldset)
  
    // Chama a função de alteração de ícone para o novo fieldset
    var novoSelectAtaque = novoFieldset.querySelector('#tipo-ataque-' + numeroUnico)
    var novoImg = novoFieldset.querySelector('#iconeAtaque-' + numeroUnico)
    novoSelectAtaque.addEventListener('change', function() {
      alterarIcone(novoSelectAtaque, novoImg)
    });
  });
  
  function alterarIcone(selectAtaque, img) {
    var tipoAtaque = selectAtaque.value
  
    if (tipoAtaque === 'corpo') {
      img.src = 'Imagens/espada.png'
    } else if (tipoAtaque === 'distancia') {
      img.src = 'Imagens/arco.png'
    } else if (tipoAtaque === 'magia') {
      img.src = 'Imagens/cajado.png'
    }
  }
  
  // Chama a função de alteração de ícone para o fieldset original
  var selectAtaqueOriginal = document.getElementById('tipo-ataque')
  var imgOriginal = document.getElementById('iconeAtaque')
  selectAtaqueOriginal.addEventListener('change', function() {
    alterarIcone(selectAtaqueOriginal, imgOriginal)
  });

// Remover linha de ataque
var botaoRemover = document.getElementById('remover')
botaoRemover.addEventListener('click', function() {
  var fieldsets = document.querySelectorAll('.ataques')
  var ultimoFieldset = fieldsets[fieldsets.length - 1]

  if (fieldsets.length > 1) {
    ultimoFieldset.remove()
  }
});