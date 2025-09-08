const prompt = require("prompt-sync")();

function elecciones() {
    let votos = {
        candidato1: 0,
        candidato2: 0,
        candidato3: 0,
        blanco: 0
    };

    let totalVotantes = 50;
    let votaron = 0;
    let claveCierre = "1234"; 
    let cerrado = false;

    
        console.log("MENU ELECCIONES 2025");
        console.log("1. Candidato uno");
        console.log("2. Candidato dos");
        console.log("3. Candidato tres");
        console.log("4. Blanco");
        console.log("5. cerrar eleciones");

        let opcion = prompt("ingrese su opcion: ");

        switch (opcion) {
            case "1":
                votos.candidato1++;
                votaron++;
                break;
            case "2":
                votos.candidato2++;
                votaron++;
                break;
            case "3":
                votos.candidato3++;
                votaron++;
                break;
            case "4":
                votos.blanco++;
                votaron++;
                break;
            case "5":
                let clave = prompt("ingrese la clave del cierre: ");
                if (clave === 1234) {
                    cerrado = true;
                } else {
                    console.log("lave incorrecta, continuan las elecciones");
                }
                break;
            default:
                console.log("opcion invlida intente de nuevo");
                break;
        }
    console.log("elecciones finalizadas");
    console.log("numero de personas que votaron: ", votaron);
    console.log("votos Candidato uno: ", votos.candidato1);
    console.log("votos Candidato dos: ", votos.candidato2);
    console.log("votos Candidato tres: ", votos.candidato3);
    console.log("votos en Blanco: ", votos.blanco);
}
elecciones();