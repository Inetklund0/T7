const font= document.querySelector ("#font")
const type =document.querySelector ("#type")

function endreskrifttype() {
    document.body.style.fontFamily = font.value;
}

function endre(){
    let type = document.getElementById("#type")
    document.body.style.fontStyle =type.value;
    document.body.style.fontWeight =type.value;
}

type.onchange =endre;
font.onchange = endreskrifttype;