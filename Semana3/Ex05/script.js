let arr = new Array();
arr[0] = prompt("Seu sobrenome é?");
arr[1] = prompt("Seu nome é?");

let nome = `, ${arr[1]} ${arr[0]}`;

let idGreeting = document.getElementById("greeting").innerHTML.valueOf().concat(nome);

document.getElementById("greeting").innerHTML = idGreeting