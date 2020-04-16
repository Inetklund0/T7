
const inpNavn = document.querySelector("#inpNavn");
const inpEtter =document.querySelector("#inpEtter")
const btn = document.querySelector("#btn");


function visNavn() {
  document.body.innerHTML += `<h3>Hallo ${inpNavn.value} ${inpEtter.value}</h3>`;
}

btn.addEventListener("click", visNavn);
