const btn = document.querySelector("#btn");
const skrift = document.querySelector("#skrift");
const bilde = document.querySelector("#bilde");
const nyheter = document.querySelector("#nyheter");


function visnyhet() {
  nyheter.innerHTML += `
  <article>
    <img src="${bilde.value}">
    <h1>${skrift.value}</h1>
  </article>
`;
}

btn.addEventListener("click", visnyhet);

