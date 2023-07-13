let firstName = prompt("Digite o primeiro nome do recruta:");
let lastName = prompt("Digite o último nome do recruta:");
let fieldStudy = prompt("Didigite o campo de estudo:");
let birthDate = parseInt(prompt("Digite o ano de nascimento:"));

let age = 2023 - birthDate;

let personalDates = `Nome completo do recruta: ${firstName} ${lastName}.
                       Campo de Estudos: ${fieldStudy}.
                        Idade do recruta: ${age} anos `;

alert(personalDates);
