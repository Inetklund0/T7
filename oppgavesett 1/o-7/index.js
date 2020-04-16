const nettside = prompt("Hva vil du se bilde av?")
const size = prompt ("Hvor stort skal bildet være?")
const navn =prompt ("Velg navn på bildet")

document.write(`
    <img 
        src="${nettside}"
        style="width: ${size}px"
        title="${navn}"
    >
`)

