function capitalDePais(pais) {
    let mapa = new Map();
    mapa.set("colombia", "bogota");
    mapa.set("suiza", "berna");
    mapa.set("camboya", "nom pen");
    mapa.set("paises bajos", "amsterdam");
    mapa.set("australia", "canberra");
    mapa.set("canadá", "ottawa");
    mapa.set("japon", "Tokio");
    mapa.set("china", "Pekin");
    mapa.set("rusia", "mocu");
    mapa.set("sudáfrica", "pretoria");

    return mapa.get(pais);
}

console.log(capitalDePais("suiza"));
console.log(capitalDePais("australia"));
console.log(capitalDePais("colombia"));