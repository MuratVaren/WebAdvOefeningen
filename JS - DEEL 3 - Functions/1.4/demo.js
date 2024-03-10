const startMetHallo = (zin) => {
    if(zin.toLowerCase().startsWith("hallo")){
        return zin;
    }
    else{
        // array maken split in alle woorden
        let zinSplit = zin.split(' ');
        zinSplit[0] = zinSplit[0].charAt(0).toLowerCase() + zinSplit[0].slice(1);
        zinSplit.unshift("Hallo,")
        return zinSplit.join(' ');
    }
}
let zin = prompt("Geef een random zin in");
document.getElementById("result").innerText = startMetHallo(zin);