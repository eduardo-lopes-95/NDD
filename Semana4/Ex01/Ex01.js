let fasesVida = (idade) => ({
    [idade < 16] : "Jovem",
    [idade >= 16 && idade < 65] : "Adulto",
    [idade >= 65] : "Idoso"
})[true]

console.log(fasesVida(65));