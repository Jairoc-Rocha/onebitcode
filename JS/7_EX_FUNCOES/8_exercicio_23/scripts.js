function tamanhoTexto(texto = "") {
  if (texto.length > 10) {
    return console.log("Texto muito longo");
  }
  return console.log("Texto dentro do limite");
}

tamanhoTexto("Jairo Cordeiro da Rocha");
tamanhoTexto("Jairo");
