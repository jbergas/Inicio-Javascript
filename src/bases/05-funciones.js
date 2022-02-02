// funcions

const saludar = function (nombre){
    return`Hola ${nombre}`;
}
//saludar=20; si esta a una constante la funcion no tiene opcion de variar el valor.
const saludar2 = (nombre)=>{
    return`Hola ${nombre}`;}
    const saludar3 = (nombre)=>`Hola ${nombre}`;

console.log('Goku');
console.log(saludar2('Vegeta'));
console.log(saludar2('Krilin'));
const getUser= () =>
    ({
        uid:'ABC123',
        username: 'El_papi504'
    });

const usuario = getUser();
console.log(usuario);

//tarea
/**function getUsuarioActivo(nombre){
    return {
        uid: 'ABCDEF',
        username: nombre
    }

};*/
const getUsuarioActivo = (nombre ) => ({uid: 'ABCDEF', username:nombre});
const usuarioActivo = getUsuarioActivo('Jaume')
console.log(usuarioActivo);