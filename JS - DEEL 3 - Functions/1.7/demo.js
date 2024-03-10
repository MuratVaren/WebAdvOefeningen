const alleWoordenStartenMetHoofdletter = (zin) => {
    let array = zin.split(' ');
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].substring(0,1).toUpperCase() + array[i].substring(1);
    }
    return console.log(array.join(' '));
}
alleWoordenStartenMetHoofdletter("Deze oefeningen zijn héél leuk");