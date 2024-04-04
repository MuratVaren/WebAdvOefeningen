let button = document.querySelector("button");
const wow = () =>{
    let paragraaf = document.getElementById("uitvoer");
    let inputValue = document.getElementById("tekstvak").value;
    paragraaf.innerText = inputValue;
}
button.onclick = wow;
