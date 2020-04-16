const inpPenger = document.querySelector ("#inpPenger")
const btn = document.querySelector ("#btn")
const taUt = document.querySelector ("#taUt")
const add = document.querySelector ("#add")


let penger = 500

function konto(evt) {

const KnappeID =evt.target.id
const belop = Number(inpPenger.value)

if(KnappeID==="add"){
    console.log ("Du klikket på add")
    penger+=belop
    taUt.innerText =`Du har nå ${penger}kr på kontoen`
    return
}

penger -= belop
taUt.innerText=`Du har nå ${penger}kr på konto`

if (belop>penger) {
    taUt.innerText ="Du har ikke nok penger"
    }
}

btn.onclick=konto
add.onclick=konto