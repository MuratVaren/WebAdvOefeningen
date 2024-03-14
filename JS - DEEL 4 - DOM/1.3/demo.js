document.getElementById("red").style.color = "darkred";
document.getElementById("weg").remove();
let newH1 = document.createElement("h1");
newH1.innerText = "Welkom PandiX";
document.getElementById('header').append(newH1);
let newAside = document.createElement("aside");
newAside.innerHTML = `
    <h2>Adresgegevens Hogeschool PXL</h2>
    <p>Elfde-Liniestraat 24</p>
    <p>3500 Hasselt</p>
    <p>België</p>
`;
document.getElementById("main").append(newAside)