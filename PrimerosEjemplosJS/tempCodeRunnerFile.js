fetch('http://localhost:8080/api/characters').then(function (response) {
    return response.json()
}).then(heroes.forEach(element => {
    console.log(element)
}));