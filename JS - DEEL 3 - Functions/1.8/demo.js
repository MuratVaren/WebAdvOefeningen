const telDeKlinkers = (zin) => {
    let klinkerArray = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for (let i = 0; i < zin.length; i++) {
        for(let j = 0; j < klinkerArray.length; j++){
            if (zin.charAt(i).toLowerCase() === klinkerArray[j]) {
                counter++;
                break;
            }
        }

    }
    return counter;
}
console.log(telDeKlinkers("Pxl leuk school 0_0"));
