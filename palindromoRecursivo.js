//Francisco Arturo Licón Colón. 
//Forma recursiva de verificar si una palabra es un palindromo.

const esPalindromoRecursivo = (palabra) => {
    return esPalindromoRecursivoAux(palabra,0,palabra.length-1);
}

const esPalindromoRecursivoAux = (palabra,posInicial,posFinal) => {
    if(posInicial >= posFinal){
        return true;
    } 
    
    if(palabra[posInicial] !== palabra[posFinal]){
        return false;
    } else {
        return esPalindromoRecursivoAux(palabra,posInicial+1,posFinal-1);
    }
}

let prueba = esPalindromoRecursivo('Hola');
let prueba2 = esPalindromoRecursivo('ana');
console.log(prueba);//false
console.log(prueba2);//true
