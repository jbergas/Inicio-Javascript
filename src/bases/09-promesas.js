import { getHeroeById } from './bases/08-imp-exp'

/**const promesa = new Promise( (resolve,reject) => {

    setTimeout(() => {
       //resolve();
       const hero = getHeroeById(2);
        resolve(hero);
       //console.log(heroes);
       //reject ('No se pudo encontrar el heroe');
    }, 2000);

});
promesa.then( () => {
    console.log('heroe');
})
.catch(err => console.warn(err));*/

const getHeroeByIdByAsinc = (id) => {
    return new Promise( (resolve,reject) => {

        setTimeout(() => {
           //resolve();
           const p1 = getHeroeById(id);
           if (p1) {
            resolve(p1);               
           }else
            reject('No se pudo encontrar el heroe');
           //console.log(heroes);
           //reject ('No se pudo encontrar el heroe');
        }, 2000);
    });
}
getHeroeByIdByAsinc(5)
.then(console.log)
.catch(console.warn);