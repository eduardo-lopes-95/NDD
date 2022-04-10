const date = new Date()
let hour = `${date.getHours()}: ${date.getMinutes()}`
document.getElementById("greeting").innerHTML = `Agora são ${hour} horas`;