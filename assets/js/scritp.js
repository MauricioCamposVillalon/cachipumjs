
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

function cpu(numj){
    if (numj === 1){
        reslt = "PIEDRA";
    }else if (numj === 2){
        reslt = "PAPEL";
    }else if (numj === 3){
        reslt = "TIJERA";
    }
    return reslt;
}


alert(`--Juego del Cachipum ---`);
jugadas = prompt("Indique el numero de veces que jugara");
jugadas = parseInt(jugadas);

for (i = 1; i <= jugadas; i++) {


    jugador = validar();
    jcpu = Math.trunc((Math.random()* 3) +1);
    jugCpu = cpu(jcpu);
    




}









