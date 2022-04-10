const pa = {
    a1: parseInt(prompt("1º termo da P.A")),
    r: parseInt(prompt("razão da P.A"))
}

let arr = Array.apply(0, Array(10)).map((value, index) => value = pa.a1 + index * pa.r)

document.getElementById("greeting").innerText = `P.A = ${arr}`
