const nombre ='Jaume';
const apellido= 'Bergas';

const nombreCompleto1 =`${nombre} ${apellido}`;
// hace los cambios de linea
const nombreCompleto =` 
${nombre}
 ${apellido}
 ${1+1} 
 `;// suma valores javascript
 // template string ```no unar '' que es imprimir nombral
console.log(nombreCompleto);
function getSaludo(){
    return 'Hola Mundo';

}
console.log(`este es n texto : ${getSaludo()}`)

function getSaludo2(nombre){
    return 'Hola Mundo'+ nombre;

}
console.log(`este es n texto : ${getSaludo2('PAco')}`) //debemos paasr el valor del nombr sino dara error undefined