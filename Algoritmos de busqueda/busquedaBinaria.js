//Francisco Arturo Licón Colón.
//Busqueda binaria en un arreglo.

const busquedaBinaria = (arreglo,n) => {
    let indiceInferior = 0;
    let indiceSuperior = arreglo.length-1;
    while(indiceInferior <= indiceSuperior) {
        let indiceMedio = Math.floor((indiceInferior+indiceSuperior)/2);
        if(arreglo[indiceMedio] === n){
            return true;
        } else if(n < arreglo[indiceMedio]){
            indiceSuperior = indiceMedio - 1;
        } else if(n > arreglo[indiceMedio]){
            indiceInferior = indiceMedio + 1;
        }
    }
    return false;
}

let prueba = busquedaBinaria([1,2,3,4,5,6,7,8,9,10],6);
let prueba2 = busquedaBinaria([1,2,3,4,6,7,8,9],11);
console.log(prueba);//true
console.log(prueba2);//false