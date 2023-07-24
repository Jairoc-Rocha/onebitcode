let idade = 18;
let cnh = true;

if (idade >= 18 && cnh !== true) {
  console.log("Você é maior de idade porém não tem CNH então não pode dirigir");
} else if (idade >= 18 && cnh) {
  console.log("Você é maior de idade e tem CNH então pode dirigir");
} else {
  console.log("Você é menor de idade então não pode dirigir");
}
