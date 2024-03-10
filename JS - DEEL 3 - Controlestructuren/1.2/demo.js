let antwoord = prompt("Sport jij graag");
if(antwoord.toLowerCase() === "ja")
    document.getElementById("antwoord").innerText = "Just do it";
else if (antwoord.toLowerCase() === "nee")
    document.getElementById("antwoord").innerText = "Jammer";
else
    document.getElementById("antwoord").innerText = "Niet een geldig antwoord";