// function suma (numero1,numero2) {
//     var numero1;
//     var numero2;
//     var suma;
//     numero1=prompt('Ingrese un numero:','');
//     numero2=prompt('Ingrese otro numero:','');
//     suma = parseInt(numero1) + parseInt(numero2);
//     // document.write('La suma de los numeros es ');
//     // document.write(suma);
//     // console.log(suma);
//     // document.getElementById("result").innerHTML = suma;
//     return suma
// }

var button = document.getElementById("operacion");

// var form = document.getElementById("opera");
// alert(form.elements["opera"].value);


button.addEventListener("click",function(){
    var num1=prompt("Digite el numero 1:");
    var num2=prompt("Digite el numero 2:");

    var radVal = document.form.operaciones.value;
   
    alert("You selected: "+radVal);
 

    if (document.getElementById("rbs") = "suma" ){
        var result =  suma(num1,num2);
    }else if (document.getElementById("rbr").value = "resta") {
        var result =  resta(num1,num2);
    }else {
        var result =  multiplica(num1,num2);
    } 
    
    document.getElementById("resultado").innerHTML = result;
})

function suma (numero1,numero2) {
        var suma = parseInt(numero1) + parseInt(numero2);
        return suma
}

function resta (numero1,numero2) {

    var resta = parseInt(numero1) - parseInt(numero2);
    return resta
}

function multiplica (numero1,numero2) {
    var multiplica = parseInt(numero1) * parseInt(numero2);
    return multiplica
}