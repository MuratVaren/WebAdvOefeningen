let geboorteJaar;
while(isNaN(geboorteJaar)){
    geboorteJaar = parseInt(prompt("Geef uw geboorte jaar"));
}
let date = new Date();
if(date.getFullYear() - geboorteJaar >= 20){
    alert("Je bent oud genoeg");
}
else{
    alert("BABY lol");
}