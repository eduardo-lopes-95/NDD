const date = new Date();

let anoAtual = date.getFullYear()

let anoNascimento = parseInt(prompt("Em que ano você nasceu?"));

let idade = anoAtual - anoNascimento

document.getElementById("greeting").innerHTML = `Sua idade é ${idade - 1} ou ${idade} anos`;