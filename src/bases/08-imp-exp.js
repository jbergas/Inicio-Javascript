//Son las funciones de find i filter
//import heroes , {owners}from '../data/heroes'
import heroes from '../data/heroes'

export const getHeroeById = (id)=> heroes.find((heroes) => heroes.id ===id);

export const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);

