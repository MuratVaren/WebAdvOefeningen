let getal = parseInt(prompt("Geef een getal tussen 0 en 10"));
if (getal >= 0 && getal <= 10) {
    let symbool = "#";
    let space = " ";
    for (let i = 1; i <= getal; i++) {
        console.log(space.repeat(getal - i) + symbool.repeat(i) + symbool.repeat(i - 1));
    }
} else {
    alert("Niet mogelijk");
}