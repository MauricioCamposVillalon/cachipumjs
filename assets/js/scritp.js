
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

function ganador(ma, hu){ /* Aqui se verifica las jugadas */
    if ((ma === "PIEDRA") && (hu === "PAPEL")){
        gan = 1;
        alert("Gana el jugador humano");
    }
    if ((ma === "PIEDRA") && (hu === "TIJERA")){
        gan = 0;
        alert("Gana la maquina");
    }
    if ((ma === "PAPEL") && (hu === "TIJERA")){
        gan = 1;
        alert("Gana el jugador humano");
    }
    if ((ma === "PAPEL") && (hu === "PIEDRA")){
        gan = 0;
        alert("Gana la maquina");
    }
    if ((ma === "TIJERA") && (hu === "PAPEL")){
        gan = 0;
        alert("Gana la maquina");
    }
    if ((ma === "TIJERA") && (hu === "PIEDRA")){
        gan = 1;
        alert("Gana el jugador humano");
    }
    if ((ma === "TIJERA") && (hu === "TIJERA")){
        gan = 2;
    }
    if ((ma === "PAPEL") && (hu === "PAPEL")){
        gan = 2;
    }
    if ((ma === "PIEDRA") && (hu === "PIEDRA")){
        gan = 2;
    }
    return gan;
}


alert(`--Juego del Cachipum ---`);
jugadas = prompt("Indique el numero de veces que jugara");
jugadas = parseInt(jugadas);

for (i = 1; i <= jugadas; i++) {

    jugador = validar();
    jcpu = Math.trunc((Math.random()* 3) +1);
    jugCpu = cpu(jcpu);
    alert(`La maquina eligio ${jugCpu}`);
    final = ganador(jugCpu, jugador);
    if (final === 1){
        alert(`"Felicitaciones usted a ganado la partida..."`);

    }else if (final === 0){
        alert(`¡Lo siento la maquina ha ganado esta partida!`);
    }else{
        alert(`WOW fue un empate contra la maquina`);
    }

}









