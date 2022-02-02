//array en JS

//const arreglo = new Array(); -->forma poco comun
const arreglo =[]
const arreglo2 =[1,2,3,4]
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
// no utilizar push para añadir
console.log(arreglo);
let arreglo3=[...arreglo,5]

console.log(arreglo);
console.log(arreglo3);

const arreglo4= arreglo2.map(function (numero){// la funciona map necesitar una funcioan de paso de paarametro
return numero*2;
});
console.log(arreglo4);

