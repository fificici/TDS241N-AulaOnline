/*
A) Crie três variáveis booleanas: temIdadeParaDirigir, temCarteiraDeMotorista e temCarroProprio.
B) Atribua valores true ou false às variáveis para representar a situação de um adolescente em relação à possibilidade de dirigir.
C) Use os operadores lógicos para tomar decisões com base nas variáveis e exiba mensagens no console conforme as situações a seguir:
D) Se o adolescente tiver idade para dirigir e tiver carteira de motorista, exiba a mensagem: "Você pode dirigir legalmente!"
E) Se o adolescente tiver um carro próprio ou tiver carteira de motorista, exiba a mensagem: "Você pode dirigir, mas seja cuidadoso!"
F) Se o adolescente não tiver idade para dirigir ou não tiver carteira de motorista, exiba a mensagem: "Você não pode dirigir."
*/

let temIdadeParaDirigir = true
let temCarteiraDeMotorista = true
let temCarroProprio = false

if (temIdadeParaDirigir === true && temCarteiraDeMotorista === true) {
    console.log('Você pode dirigir legalmente!')
} else if (temCarroProprio === true || temCarteiraDeMotorista) {
    console.log('Você pode dirigir, mas seja cuidadoso!')
} else {
    ('Você não pode dirigir.')
}