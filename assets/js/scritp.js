

function validar() {
    do { /* validar eleccion de palabra */
        eleccion = prompt("Escriba su opcion: piedra, papel o tijera");
        eleccion = eleccion.toUpperCase();
        if ((eleccion === "PIEDRA") || (eleccion === "PAPEL") || (eleccion === "TIJERA")) {
            alert(`Usted eligio ${eleccion}`);
            valida1 = 1;
        } else {
            valida1 = 1;
            alert(`¡Debe ingresar una opcion valida!`);
            valida1 = 0;
        }
    } while (valida1 == 0);
    return eleccion;
}



alert(`--Juego del Cachipum ---`);
jugadas = prompt("Indique el numero de veces que jugara");
jugadas = parseInt(jugadas);

for (i = 1; i <= jugadas; i++) {


    jugador = validar();




}









