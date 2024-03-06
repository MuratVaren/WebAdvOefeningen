let antwoord = prompt("Sport jij graag");
switch (antwoord){
    case "ja":
        document.getElementById("antwoord").innerText = "Just do it";
        break;
    case "nee":
        document.getElementById("antwoord").innerText = "Jammer";
        break;
    default:
        document.getElementById("antwoord").innerText = "Dat was niet duidelijk, antwoord je vanuit je luie zetel";
}