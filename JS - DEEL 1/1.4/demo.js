
let eindDatum = new Date("2024-03-07");
let currentDate = new Date();
const oneDay = 1000 * 60 * 60 * 24;
const diffDays = Math.ceil(Math.abs((currentDate - eindDatum) / oneDay));

let naam = prompt("Wat is uw naam");
document.getElementById('naam').innerText = naam;

document.getElementById('aantalDagen').innerText = diffDays;

document.getElementById('quote').innerText = "Hallo ik ben een quote";