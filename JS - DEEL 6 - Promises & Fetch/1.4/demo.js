fetch("https://api.chucknorris.io/jokes/random")
.then(response => response.json())
.then(data => document.getElementById("jokeParagraph").innerText = data.value);

const addJoke = () => {
    let divJokes = document.getElementById('divJokes');
    if(divJokes.children.length < 5){
        let p = document.createElement('p');
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => p.innerText = data.value);
        divJokes.appendChild(p);
    }
    else{
        alert("Max 5 jokes.");
    }
}

let btnAddQuote = document.getElementById('addTextButton');
btnAddQuote.addEventListener('click',addJoke);
