const audiofluet = document.querySelector("#audiofluet")
const audiohorn = document.querySelector("#audiohorn")
const audiotrumpet= document.querySelector("#audiotrumpet")
const knappene =document.querySelector ("#knappene")


function spillLyd(evt){
  const knapp=evt.target
  const lyd=knapp.dataset.lyd

  const lydelement= document.querySelector(`#${lyd}`)

  lydelement.currenttime = 0;
  lydelement.play();
}

knappene.onclick=spillLyd