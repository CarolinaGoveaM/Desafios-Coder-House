let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");

if(nombre && apellido){
    alert("Su nombre y apellido es " + nombre + " " + apellido);
} else{
    alert("Error: Debe Ingresado su nombre y apellido");
}

let edad = parseInt(prompt("Ingrese su edad"));

if(edad >= 18){
    alert("Su edad es " + edad + "\nEs mayor de edad");
} else{
    alert("Su edad es " + edad + "\nEs menor de edad");
}

let compraMinima = parseInt(prompt("Ingrese monto mínimo"));
let compraMaxima = parseInt(prompt("Ingrese monto máximo"));

if(compraMinima >= 100 && compraMaxima <= 500){
    alert("Verificado: El monto de su compra se encuentra entre los valores " + compraMinima + " y " + compraMaxima);
} else{
    alert("Error: El monto de su compra debe ser Mínimo de 100 y máximo de 500")
}