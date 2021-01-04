//Francisco Arturo Licón Colón.
//Algortimo de ordenamiento por selección (Selection Sort).

const swap = (arreglo, indice1, indice2) => {
    let temp = arreglo[indice1];
    arreglo[indice1] = arreglo[indice2];
    arreglo[indice2] = temp;
}

const selectionSort = (arreglo) => {
    let min;
    for(let i=0; i<arreglo.length;i++){
        min = i;
        for(let j=i+1;j<arreglo.length;j++){
            if(arreglo[j] < arreglo[min]){
                min = j;
            }
            swap(arreglo,i,min);
        }
    }
    return arreglo;
}

const arregloOrdenado = selectionSort([3,2,1,5,4,6,7,8,9]);
console.log(arregloOrdenado);