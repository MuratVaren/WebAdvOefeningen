let btnAdd = document.getElementById("buttonAdd");
let input = document.querySelector('input');
let ul = document.querySelector('ul');

btnAdd.addEventListener('click',() => {
    let paragraaf = document.createElement('p');
    paragraaf.innerText = input.value;

    let buttonDelete = document.createElement('button');
    buttonDelete.innerText = "Delete this item";
    buttonDelete.addEventListener('click',(event) => {
        buttonDelete.parentElement.parentElement.remove();
    })

    let div = document.createElement('div');
    div.appendChild(paragraaf);
    div.appendChild(buttonDelete);

    let listItem = document.createElement('li');
    listItem.appendChild(div);

    ul.appendChild(listItem);

})