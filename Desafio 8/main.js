const discos = [
    { id: 1, name: "Let Go", price: 300 },
    { id: 2, name: "Under My Skin", price: 500 },
    { id: 3, name: "The Best Damn Thing", price: 700 },
    { id: 4, name: "Goodbye Lullaby", price: 900 },
    { id: 5, name: "Avril Lavigne", price: 1100 },
    { id: 6, name: "Head Above Water", price: 1300 },
];

for (const producto of discos) {
    let listado = document.createElement("div");

    listado.innerHTML = `<h2> Disco: ${producto.name}</h2>
                         <p> $ ${producto.price}</p>`;
    document.body.appendChild(listado);
}