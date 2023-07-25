function tipoDado(valor) {
  if (typeof valor === "number") {
    return console.log(`O valor passado ${valor} foi um number`);
  } else if (typeof valor === "boolean") {
    return console.log(`O valor passado ${valor} foi um boolean`);
  } else if (typeof valor === "string") {
    return console.log(`O valor passado ${valor} foi uma string`);
  } else {
    return console.log(`O valor passado ${valor} é inválido`);
  }
}

tipoDado("Jairo");
tipoDado(41);
tipoDado(true);
tipoDado(Number);
