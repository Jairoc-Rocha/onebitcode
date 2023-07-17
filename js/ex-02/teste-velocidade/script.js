let veiculo1 = prompt("Digite o nome do primeiro carro:");
let velocidade1 = parseFloat(prompt("Digite a velocidade do primeiro carro:"));

let veiculo2 = prompt("Digite o nome do segundo carro:");
let velocidade2 = parseFloat(prompt("Digite a velocidade do segundo carro:"));

if (velocidade1 > velocidade2) {
  alert("O veiculo 1 é mais rápido que o veiculo 2");
} else if (velocidade2 > velocidade1) {
  alert("O veiculo 2 é mais rápido que o veiculo 1");
} else {
  alert("A velocidade de ambos os veiculos são iguais");
}
