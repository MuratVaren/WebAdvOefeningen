let buttonTonen = document.querySelectorAll("button")[0];
let buttonWissen = document.querySelectorAll("button")[1];
let paragraaf = document.getElementById('uitvoer');
buttonTonen.addEventListener("click",(event) =>{
    let nieuweTekst = document.getElementById("tekstvak").value;

    let span = document.createElement("span");
    span.style.color = "red";
    span.style.fontWeight = "bold";
    span.innerText = nieuweTekst + " ";

    document.querySelectorAll("span").forEach(span => {
        span.style.color = "black";
        span.style.fontWeight = "normal";
    })
    paragraaf.insertBefore(span,paragraaf.firstChild);
});
buttonWissen.addEventListener("click",(event) =>{
    paragraaf.innerHTML = "";
});
