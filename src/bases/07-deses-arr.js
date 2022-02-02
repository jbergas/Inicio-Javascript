const personajes=['Goku', 'Trunks', 'Krilin'];

const [,,p1] = personajes;
console.log(personajes[0]);
console.log('Desestructuracion array ' + p1);

const retronaArreglo=()=>{
    return['ABC',123]
}
const[p2,p3]= retronaArreglo();
console.log(retronaArreglo());
console.log('nuevo retorno'+p2,p3);
 
const useState=(valor)=>{
    return[valor, ()=>{console.log('Hola mundo')}]; 
}
//const arr = useState('Goku');
const [nombre, setNombre] = useState( 'Gokuuuu' );
console.log(nombre);
setNombre();