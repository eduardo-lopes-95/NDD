let ultimoSobrenome = prompt("Qual seu último sobrenome?");

document.getElementById("greeting").innerHTML= `Olá ${ultimoSobrenome.toUpperCase()}. Seu sobrenome contém ${ultimoSobrenome.length} letras`;
