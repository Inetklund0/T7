// const fav1 = prompt ("Hva er dine favoritt retter?")
// const fav2 = prompt ("Din andre favoritt rett?")
// const fav3 = prompt ("Din tredje favoritt rett?")

// document.write (`
// <div>
//     <ul>
//         <li> Fiskeboller </li>
//         <li> ${fav1} </li>
//         <li> ${fav2} </li>
//         <li> ${fav3} </li>
//     </ul>
// </div>
// `)

const middager = document.querySelector("#middager");

const inpRett = document.querySelector("#inpRett");

function leggTilRett() {
    middager.innerHTML += `<li>${inpRett.value}</li>`;
}

inpRett.onchange = leggTilRett;