let btnVergroot = document.getElementById('btnVergroot');
let btnVerklein = document.getElementById('btnVerklein"');
btnVergroot.addEventListener('click',(event) => {
    document.querySelector("h1").style.fontSize = "48px";
    document.querySelectorAll("p").forEach(para => {
        para.style.fontSize = "24px"
    })
})
btnVerklein.addEventListener('click',() => {
    document.querySelector("h1").style.fontSize = "22px";
    document.querySelectorAll("p").forEach(para => {
        para.style.fontSize = "14px"
    })
})