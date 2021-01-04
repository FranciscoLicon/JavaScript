//Francisco Arturo Licón Colón.
//Busqueda lineal en un arreglo.

const busquedaLineal = (arreglo,n) => {
    for(let i=0; i<arreglo.length;i++){
        if(arreglo[i]===n){
            return true;
        }
    }
    return false;
}

let prueba = busquedaLineal([1,2,3,4,5],5);
let prueba2 = busquedaLineal([2,4,6,8],1);
console.log(prueba); //true
console.log(prueba2); //false