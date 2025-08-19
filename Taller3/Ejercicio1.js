const generador = {
  mayus: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  minus: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  digitos: ["0","1","2","3","4","5","6","7","8","9"],
  simbolos: ["@","#","$","%","&","(",")","=","?","¿","*","+","[","]","{","}"],

  aleatorioDe: function (tipo) {
    let arr = this[tipo]; 
    let pos = Math.floor(Math.random() * arr.length);
    return arr[pos];
  }
};
function generarPassword() {
  let partes = [];

  for (let i = 0; i < 2; i++) {
    partes.push(generador.aleatorioDe("mayus"));
  }

  for (let i = 0; i < 2; i++) {
    partes.push(generador.aleatorioDe("minus"));
  }

  for (let i = 0; i < 2; i++) {
    partes.push(generador.aleatorioDe("digitos"));
  }

  for (let i = 0; i < 2; i++) {
    partes.push(generador.aleatorioDe("simbolos"));
  }
  return partes.join("");
}
console.log(generarPassword());

