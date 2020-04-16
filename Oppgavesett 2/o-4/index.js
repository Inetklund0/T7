const inpX= document.querySelector ("#inpX")
const inpY= document.querySelector ("#inpY")
const abs = document.getElementById ("absolutt")

abs.style.backgroundColor ="lightgreen";
abs.style.width= "50px"; 
abs.style.height= "50px";

function beveg (){
    
    const left = Number(inpX.value)
    const top = Number(inpY.value)        
    
    abs.style.left = `${left}px`;
    abs.style.top = `${top}px`;
    
}

inpX.oninput = beveg;
inpY.oninput = beveg;