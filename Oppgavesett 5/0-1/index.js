const inpPass =document.querySelector ("#inpPass")
const inpPassord =document.querySelector ("#inpPassord")
const beskjed= document.querySelector ("#beskjed")


function sjekkpassord (){

if (inpPass.value === ""){
    beskjed.innerText= "Fyll inn begge"
    return 
}  


if (inpPassord.value === ""){
    beskjed.innerText= "Gjenta passord"
    return
}  


if (inpPass.value === inpPassord.value){
    beskjed.innerText= "Passordene er like";
    console.log("Passord er like")
}  
else {
    beskjed.innerText = "Passord er ikke like"
}

}

inpPassord.oninput=sjekkpassord;
inpPass.oninput=sjekkpassord;