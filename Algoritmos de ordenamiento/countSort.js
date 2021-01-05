//Francisco Arturo Licón Colón.
//Algoritmo de ordenamiento por conteo (Count Sort).

const countSort = (arreglo) => {
    let hash = {};
    let countArr = [];
    for(let i=0; i<arreglo.length; i++){
        if(!hash[arreglo[i]]){
            hash[arreglo[i]] = 1;
        } else {
            hash[arreglo[i]] ++;
        }
    }
    for(let key in hash){
        for(let i=0;i<hash[key];i++){
            countArr.push(parseInt(key))
        }
    }
    return countArr;
}

const arregloOrdenado = countSort([3,2,1,5,4,6,7,8,9,3,2,1,5,4,7,8,9]);
console.log(arregloOrdenado);