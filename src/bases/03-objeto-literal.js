const persona={
 nombre:'Jaume',
 apellido:'Bergas',
 edad: 35,
 dir: { 
     ciudad: 'palma',
     zipcode:7011,
     lat:15.3434,
     lng:14.999,
 }
};


console.table(persona);
console.log(persona);
const persona2 = persona;// copia la referencia y se modifica el orginal (persona)
persona.nombre='peter';
console.log(persona2);
console.log(persona);
const persona3 = {...persona};//clona la persona en este caoso persona ha sido modificada
console.log(persona3);
