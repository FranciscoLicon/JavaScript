//Francisco Arturo Licón Colón.
//Algoritmo de ordenamiento por mezcla (Merge sort).


const merge = (arregloA, arregloB) => {
    let arregloRes = [];
    let indiceA = 0;
    let indiceB = 0;
    while(indiceA < arregloA.length && indiceB < arregloB.length){
        if(arregloA[indiceA] < arregloB[indiceB]){
            arregloRes.push(arregloA[indiceA]);
            indiceA++;
        } else {
            arregloRes.push(arregloB[indiceB]);
            indiceB++;
        }
    }
    let resArregloA = arregloA.slice(indiceA);
    let resArregloB = arregloB.slice(indiceB);
    arregloRes = arregloRes.concat(resArregloA).concat(resArregloB);
    return arregloRes;
}

const mergeSort = (arreglo) => {
    if(arreglo.length < 2){
        return arreglo;
    }
    const mitad = Math.floor((arreglo.length)/2);
    let arregloA = arreglo.slice(0,mitad);
    let arregloB = arreglo.slice(mitad);
    return merge(mergeSort(arregloA),mergeSort(arregloB));
}

const arregloOrdenado = mergeSort([3,2,1,5,4,6,7,8,9]);
console.log(arregloOrdenado);