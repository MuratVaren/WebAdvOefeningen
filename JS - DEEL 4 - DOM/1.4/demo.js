let boekenArray =
    [
        {title: "Theory of everything",autheur: "Stephenb hawking", gelezen : "ja"},
        {title: "12 rules of life", autheur: "jordan peterson", gelezen: "Nee"}
    ];
const voegList = () => {
    boekenArray.forEach(x => {
        let listitem = document.createElement("li");
        listitem.innerText = `title: ${x.title} - autheur: ${x.autheur} - gelezen: ${x.gelezen}`;
        document.getElementById('superList').appendChild(listitem)
    })
}
voegList();