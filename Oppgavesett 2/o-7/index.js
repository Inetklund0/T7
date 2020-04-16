const inpskriftfarge = document.querySelector ("#inpskriftfarge");

function endreskriftfarge() {
    document.body.style.color = inpskriftfarge.value;
    
}
inpskriftfarge.onchange = endreskriftfarge;


const inpbak = document.querySelector ("#inpbak");

function endrebak() {
    document.body.style.backgroundColor = inpbak.value;
}
inpbak.onchange = endrebak;



const inpfont = document.querySelector ("#inpfont");

function endrefont() {
    document.body.style.fontFamily = inpfont.value;
    
}
inpfont.onchange = endrefont;



const inpFontsize = document.querySelector ("#inpFontsize");

function endresize() {
    document.body.style.fontSize = inpFontsize.value;
}
inpFontsize.onchange = endresize;