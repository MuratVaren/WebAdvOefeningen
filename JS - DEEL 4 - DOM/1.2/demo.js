const changeFont = () => {
    document.body.style.fontFamily = "Arial, Verdana, sans-serif";
    document.querySelector("h1").style.color = "darkgreen";
    document.querySelector("h1").style.textDecoration = "underline";
    document.querySelector('p').style.fontWeight = "bolder";
    document.querySelector("p").style.fontStyle = "italic"
}
document.addEventListener("DOMContentLoaded",function(){
    changeFont();
})
