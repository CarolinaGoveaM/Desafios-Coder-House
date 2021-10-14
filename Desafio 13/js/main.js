const discos = [
    { id: 1,  nombre: "Let Go", cantante: "Avril Lavigne", genero: "Pop/Rock", precio: 550 },
    { id: 2,  nombre: "Overexposed", cantante: "Maroon 5", genero: "Pop", precio: 575 },
    { id: 3,  nombre: "Evolve", cantante: "Imagine Dragons", genero: "Rock", precio: 595 },
    { id: 4,  nombre: 25, cantante: "Adele", genero: "Pop", precio: 530 },
    { id: 5,  nombre: "Dividir", cantante: "Ed Sheran", genero: "Pop", precio: 525 },
    { id: 6,  nombre: "Confident", cantante: "Demi Lovato", genero: "Pop", precio: 515 },
];


for (const producto of discos) {
    $("#listado").append(`  <div id="bloqueListado">
                            <h2> ID del disco: ${producto.id}</h2>
                            <p> Disco: ${producto.nombre}</p>
                            <p> Cantante: ${producto.cantante}</p>
                            <p> Genero del Disco: ${producto.genero}</p>
                            <p> Su precio es $ ${producto.precio}</p>
                            <button id="btn${producto.id}">Comprar</button></div>`);

$(`#btn${producto.id}`).click (function () {
$(`#agregar`).append(` - Agregaste el disco ${producto.nombre} de ${producto.cantante}`);
});                  
}

$(`h1`).animate({  opacity:'0.5' },
"slow").slideDown(1000);