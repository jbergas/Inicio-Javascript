const nombre= 'Jaume';
const apellido= 'Bergas'


let valorDado=5;
console.log(nombre, apellido, valorDado);
if (true) {
    const nombre ='pepito';
    let valorDado=6;
    // el valor es diferente ya que las variable solo existen en este scope
    console.log(nombre, valorDado);
}
console.log(nombre, valorDado);

