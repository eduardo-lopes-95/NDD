let promt = prompt("Seu nome é?");
let nome = document.createTextNode(promt)
let h2 = document.createElement("h2").appendChild(nome);
let box = document.getElementById("greeting").appendChild(h2);