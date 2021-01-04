//Francisco Arturo Licon Colón.
//Algoritmo de ordenamiento burbuja (Bubble sort).

const swap = (arreglo, indice1, indice2) => {
    let temp = arreglo[indice1];
    arreglo[indice1] = arreglo[indice2];
    arreglo[indice2] = temp;
}

const bubbleSort = (arreglo) => {
    for(let i=0; i<arreglo.length;i++){
        for(let j=0; j<=i;j++){
            if(arreglo[i] < arreglo[j]){
                swap(arreglo,i,j);
            }
        }
    }
    return arreglo;
}

const arregloOrdenado = bubbleSort([1,4,3,2,5,6,7,0,10,8,9]);
console.log(arregloOrdenado);