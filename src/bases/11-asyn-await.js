const getImagen = async() =>{
try{
    const apiKey = 'E5PxNcL6iepg8j0QfpOW6Yi7hSLoNTQC';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original;
    const img =document.createElement('img');
     img.src= url;
    document.body.append(img);

 console.log(data);  
}catch(error){
    // manejo del error
    console.error(error);
} 
 //return 'https://adadadda.com'

//console.log(getImagen());
getImagen().then(console.log);

//const apiKey = 'E5PxNcL6iepg8j0QfpOW6Yi7hSLoNTQC';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//peticion.then( resp => resp.json())

// //console.log(resp)
//   .then (({data}) => { 
//       const {url} = data.images.original;
//     const img =document.createElement('img');
//     img.src= url;
//     document.body.append(img);
//     })

// .catch (console.warn);