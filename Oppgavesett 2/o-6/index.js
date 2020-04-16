const fir= document.querySelector ("#fir")
const inpX= document.querySelector ("#inpX")
const inpY= document.querySelector ("#inpY")
const inpBredde = document.querySelector("#inpBredde")
const inpHoyde = document.querySelector("#inpHoyde")
const inpHjorne = document.querySelector("#inpHjorne")

function beveg(){
    
    const left = Number(inpX.value)
    const top = Number(inpY.value)        
    
    fir.style.left = `${left}px`;
    fir.style.top = `${top}px`;
}

inpX.oninput = beveg;
inpY.oninput = beveg;


function skaler() {
    const bredde = Number(inpBredde.value)
    const hoyde = Number(inpHoyde.value)
    
    fir.style.width = `${bredde}px`
    fir.style.height = `${hoyde}px`
}

inpHoyde.oninput = skaler;
inpBredde.oninput = skaler;


function avrund() {
    const avrunding = Number(inpHjorne.value)
    fir.style.borderRadius = `${avrunding}%`
}

inpHjorne.oninput = avrund;