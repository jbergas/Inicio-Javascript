// Desestructuracion
//Assignación Desestructurante

const persona={
nombre:'Jaume',
edad:35,
clave:'Ironman',
rango:'Soldado'

};
const {nombre:nombre2, edad}= persona; // extrae lo de dentro de las llaves del objeto

console.log(persona.nombre);
console.log(persona.edad);
console.log(edad);
console.log(persona.clave);

console.log(nombre2); 

const retornaPerona= ({clave,nombre,edad,rango= 'Capitan'} )=>{

    //console.log(nombre, edad, rango);
    return{nombreClave: clave,
    anios: edad
    }
}
const avenger= retornaPerona(persona);
console.log(avenger);
const useContexto= ({clave,nombre,edad,rango} )=>{

    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 15.4567,
            lng: -14.987
        }
    }
}
const {nombreClave, anios, latlng:{lat,lng}} = useContexto(persona);
console.log(nombreClave, anios);
console.log(lat,lng);