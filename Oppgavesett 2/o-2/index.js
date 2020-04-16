const lengde = prompt ("hva er lengden?")
const bredde = prompt ("hva er bredden?")

function leggSammen(lengde, bredde) {
    const t1 = Number(lengde);
    const t2 = Number(bredde);
    
    const sum = t1 * t2;
    return sum; 
}

const summen = leggSammen(lengde, bredde);

document.write(summen);



//function leggSammen(a, b) {
//     return a * b;
//   }
// const c = leggSammen (5, 4)
// document.write(c); 