// FORÇA
var modfor = document.querySelector('div#mod-for')
modfor.innerHTML = '0';
var tfor = document.querySelector('input#text-for')
var resfor  = 0;
tfor.addEventListener('input',function() {
    var nfor = parseInt(tfor.value)
    var resfor = Math.floor((nfor - 10) / 2)
    modfor.innerHTML = `${resfor}`  
})

// DESTREZA
var moddes = document.querySelector('div#mod-des')
moddes.innerHTML = '0';
var tdes = document.querySelector('input#text-des')
var resdes = 0;
tdes.addEventListener('input',function() {
    var ndes = parseInt(tdes.value)
    var resdes = Math.floor((ndes - 10) / 2)
    moddes.innerHTML = `${resdes}`  
})

// CONSTITUIÇÃO
var modcon = document.querySelector('div#mod-con')
modcon.innerHTML = '0';
var tcon = document.querySelector('input#text-con')
var rescon = 0;
tcon.addEventListener('input',function() {
    var ncon = parseInt(tcon.value)
    var rescon = Math.floor((ncon - 10) / 2)
    modcon.innerHTML = `${rescon}`  
})

// INTELIGÊNCIA
var modint = document.querySelector('div#mod-int')
modint.innerHTML = '0';
var tint = document.querySelector('input#text-int')
var resint = 0;
tint.addEventListener('input',function() {
    var nint = parseInt(tint.value)
    var resint = Math.floor((nint - 10) / 2)
    modint.innerHTML = `${resint}`  
})

// SABEDORIA
var modsab = document.querySelector('div#mod-sab')
modsab.innerHTML = '0';
var tsab = document.querySelector('input#text-sab')
var ressab = 0;
tsab.addEventListener('input',function() {
    var nsab = parseInt(tsab.value)
    var ressab = Math.floor((nsab - 10) / 2)
    modsab.innerHTML = `${ressab}`  
})

// CARISMA
var modcar = document.querySelector('div#mod-car')
modcar.innerHTML = '0';
var tcar = document.querySelector('input#text-car')
var rescar = 0;
tcar.addEventListener('input',function() {
    var ncar = parseInt(tcar.value)
    var rescar = Math.floor((ncar - 10) / 2)
    modcar.innerHTML = `${rescar}`  
})