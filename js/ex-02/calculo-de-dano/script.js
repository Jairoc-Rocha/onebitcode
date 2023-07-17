let x = parseFloat(prompt("informe o primeiro valor:"));
let y = parseFloat(prompt("Informe o segundo valor: "));

let soma = x + y;
let subtracao = x - y;
let multiplicacao = x * y;
let divisao = x / y;
let resto = x % y;

let resultado = `Soma: ${x} + ${y} = ${soma} 
                  Subtração: ${x} - ${y} = ${subtracao}
                  Multiplicação: ${x} * ${y} = ${multiplicacao}
                  Divisão: ${x} / ${y} = ${divisao}
                  Resto da divisão: ${x} % ${y} = ${resto}   `;

alert(resultado);
