const fornavn =prompt ("Hva er fornavnet ditt?")
const etternavn =prompt ("Hva er etternavnet ditt?")
const stilling =prompt ("Hvilken stilling har du?")
const url =prompt ("Legg inn en URL link til bildet av deg?")


document.write(`
    <article>
        <h2>${fornavn} ${etternavn}</h2>
        <p> Stilling: ${stilling}</p>
        <img src="${url}">
    </article>
`)
