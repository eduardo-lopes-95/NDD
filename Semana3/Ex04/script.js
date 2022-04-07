let arr = new Array();
arr[0] = prompt("Seu nome é?");
arr[1] = prompt("Sua idade é?");
arr[2] = confirm("Você pratica algum esportes?");

arr.forEach(ele => {
    console.log(ele);
});

