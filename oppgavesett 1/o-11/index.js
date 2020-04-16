const prisUtenMoms =Number(prompt ("Hva er prisen"))
const moms = prisUtenMoms * 0.25
const prisMoms = prisUtenMoms + moms 

document.write(`
    <p> Pris uten moms: ${prisUtenMoms} </p>
    <p> Moms: ${moms}</p>
    <p> Pris med moms: ${prisMoms}</p>
`)