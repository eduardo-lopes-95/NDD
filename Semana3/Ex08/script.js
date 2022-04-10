const calc = {
    op1: parseInt(prompt("1º operador")),
    op2: parseInt(prompt("2º operador")),
    tipoOperacao: prompt("Escolha entre: + - * /"),
}

let realizaOpecoes = (num1, num2, op) => {
    const ops = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2,
    }

    return ops[op]?.(num1, num2) ?? "Operação não realizada";
}

document.getElementById("greeting").innerHTML = `o resultado da operação é ${realizaOpecoes(calc.op1, calc.op2, calc.tipoOperacao)}`;