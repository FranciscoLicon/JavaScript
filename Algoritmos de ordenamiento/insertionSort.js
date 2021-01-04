//Francisco Arturo Licón Colón
//Algortimo de ordenamiento por inseerción.

const insertionSort = (arreglo) => {
    for(let i=1; i<arreglo.length;i++) {
        let valor = arreglo[i];
        let j = i-1;
        while(j >= 0 && arreglo[j] > valor){
            arreglo[j+1] = arreglo[j];
            j--;
        }
        arreglo[j+1] = valor;
    }
    return arreglo;
}

const arregloOrdenado = insertionSort([3,2,1,5,4,6,7,8,9]);
console.log(arregloOrdenado);