
const miHeros = [];

fetch('http://localhost:8080/api/characters')
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (heroes) {
        heroes.forEach(hero => {
            console.log("Heroe nuevo añadido");
            miHeros.push(hero);

            //YO PUEDO LLAMAR A CUALQUIER FUNCION MIA QUE PINTE EN EL DOM O QUE ME META LOS DATOS EN UN ARRAY MIO
        });

    })
    .catch((response) => {
        console.log("ERROOOOOORRRR!!!!!!")
    })
    .finally(() => {
        console.log("He terminado bien o mal, pero he terminado");
        console.log(miHeros);
    });

