// no money for dad jokes api
// so diff api gg
fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the joke to the console
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
    });
