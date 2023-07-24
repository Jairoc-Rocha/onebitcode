// let num = 4;
// let divisoes = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     divisoes++;
//   }
// }

// if (divisoes === 2) {
//   console.log(`Ò Número ${num} é primo`);
// } else {
//   console.log(`Ò Número ${num} não é primo`);
// }

function classificarNumero(num) {
  if (num > 0 && num % 2 === 0) {
    return console.log("Positivo e Par");
  } else if (num > 0 && num % 2 !== 0) {
    return console.log("Positivo e Impar");
  } else if (num < 0) {
    return console.log("Negativo");
  } else {
    return console.log("Neutro");
  }
}

classificarNumero(10);
classificarNumero(15);
classificarNumero(-5);
classificarNumero(0);
