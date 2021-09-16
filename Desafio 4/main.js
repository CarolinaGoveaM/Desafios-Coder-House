const sumaPrecios = (a,b) => a + b;

let precioProductoUno  = parseInt(prompt("Ingrese el precio del Primer producto"));
let precioProductoDos = parseInt(prompt("Ingrese el precio del Segundo producto"));

let resutado = sumaPrecios (precioProductoUno, precioProductoDos);

console.log("El valor de su compra es de " + resutado);

let descuento = 20; 

const descuentoPrecio = (a,b) => a - b;

let resultadoConDescuento = descuentoPrecio(sumaPrecios(precioProductoUno, precioProductoDos), descuento);

console.log("El valor de su compra con descuento es de " + resultadoConDescuento);

const iva   = (iva) => iva * 1.21;

let precioConIva = iva(resultadoConDescuento);

console.log("El valor de su compra con IVA es de " + precioConIva);