const input = document.getElementById('input')
const bold = document.getElementById('bold')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const italic = document.getElementById('italic')
const und = document.getElementById('und')
const strike = document.getElementById('strike')
const copy = document.getElementById('copy')
const wipe = document.getElementById('wipe')

bold.addEventListener('click', () => textBold())
upper.addEventListener('click', () => textUpper())
lower.addEventListener('click', () => textLower())
italic.addEventListener('click', () => textItalic())
und.addEventListener('click', () => textUnd())
strike.addEventListener('click', () => textStrike())
copy.addEventListener('click', () => textCopy())
wipe.addEventListener('click', () => wipeAll())

function textBold(){
    input.classList.toggle('bold')
}
function textUpper(){
    input.classList.toggle('upper')
}
function textLower(){
    input.classList.toggle('lower')
}
function textItalic(){
    input.classList.toggle('italic')
}
function textUnd(){
    input.classList.toggle('und')
}
function textStrike(){
    input.classList.toggle('strike')
}
function textCopy(){
    input.select()
    document.execCommand('copy')  
}
function wipeAll(){
    input.select()
    document.execCommand('delete')
}