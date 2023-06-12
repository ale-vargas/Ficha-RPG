// FORÇA
var modFOR = document.querySelector('div#mod-for')
modFOR.innerHTML = '0';
var txtFOR = document.querySelector('input#text-for')
var resFOR  = 0;
txtFOR.addEventListener('input',function() {
    var numFOR = parseInt(txtFOR.value)
    var resFOR = Math.floor((numFOR - 10) / 2)
    modFOR.innerHTML = `${resFOR}`  
})

// DESTREZA
var modDES = document.querySelector('div#mod-des')
modDES.innerHTML = '0';
var txtDES = document.querySelector('input#text-des')
var resDES = 0;
txtDES.addEventListener('input',function() {
    var numDES = parseInt(txtDES.value)
    var resDES = Math.floor((numDES - 10) / 2)
    modDES.innerHTML = `${resDES}`  
})

// CONSTITUIÇÃO
var modCON = document.querySelector('div#mod-con')
modCON.innerHTML = '0';
var txtCON = document.querySelector('input#text-con')
var resCON = 0;
txtCON.addEventListener('input',function() {
    var numCON = parseInt(txtCON.value)
    var resCON = Math.floor((numCON - 10) / 2)
    modCON.innerHTML = `${resCON}`  
})

// INTELIGÊNCIA
var modINT = document.querySelector('div#mod-int')
modINT.innerHTML = '0';
var txtINT = document.querySelector('input#text-int')
var resINT = 0;
txtINT.addEventListener('input',function() {
    var numINT = parseInt(txtINT.value)
    var resINT = Math.floor((numINT - 10) / 2)
    modINT.innerHTML = `${resINT}`  
})

// SABEDORIA
var modSAB = document.querySelector('div#mod-sab')
modSAB.innerHTML = '0';
var txtSAB = document.querySelector('input#text-sab')
var resSAB = 0;
txtSAB.addEventListener('input',function() {
    var numSAB = parseInt(txtSAB.value)
    var resSAB = Math.floor((numSAB - 10) / 2)
    modSAB.innerHTML = `${resSAB}`  
})

// CARISMA
var modCAR = document.querySelector('div#mod-car')
modCAR.innerHTML = '0';
var txtCAR = document.querySelector('input#text-car')
var resCAR = 0;
txtCAR.addEventListener('input',function() {
    var numCAR = parseInt(txtCAR.value)
    var resCAR = Math.floor((numCAR - 10) / 2)
    modCAR.innerHTML = `${resCAR}`  
})