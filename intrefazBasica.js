"use strict";
function enviarMision(xmen) {
    console.log("Enviar a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviar al cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
