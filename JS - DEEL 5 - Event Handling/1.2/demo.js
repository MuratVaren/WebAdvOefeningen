let button = document.querySelector("button");
const wow = () =>{
    let div = document.querySelectorAll("div")[0];
    let paragraaf = document.createElement("p");
    let inputValue = document.getElementById("tekstvak").value;
    paragraaf.innerText = inputValue;
    div.appendChild(paragraaf);
}
button.onclick = wow;
