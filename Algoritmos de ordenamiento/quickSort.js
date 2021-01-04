//Francisco Arturo Licón Colón.
//Algortimo de ordemamiento rápido (Quick Sort).

const quickSort = (arreglo) => {
    return quickSortAux(arreglo,0,arreglo.length-1);
}

const quickSortAux = (arreglo,izquierda,derecha) => {
    let pivote = arreglo[Math.floor((izquierda+derecha)/2)];
    let i = izquierda;
    let j = derecha;
    let aux;
    while(i < j){
        while(arreglo[i] < pivote){
            i++;
        }
        while(arreglo[j] > pivote){
            j--;
        }
        if(i < j){
           aux = arreglo[i];
           arreglo[i] = arreglo[j];
           arreglo[j] = aux;
        }
    }
    if(j-1 > izquierda){
        quickSortAux(arreglo,izquierda,j-1);
    }
    if(j+1 < derecha){
        quickSortAux(arreglo,j+1,derecha);
    }
    return arreglo;
}


const arregloOrdenado = quickSort([3,5,7,1,2]);
console.log(arregloOrdenado);
const arregloOrdenado2 = quickSort([5,4,3,2,1,6,7,8,9]);
console.log(arregloOrdenado2);