let ciudades = ['caracas', 'de noche', 'maracaibo 15', 'maracaibo 14'];

function stringMasLargo(ciudades){
// Para cada ciudad buscar el tamaño

var Numeros = [];// esto es un array vacio donde guardare los tamaños de mis strings

for (let i = 0; i < ciudades.length; i++) {

    console.log(ciudades[i].length); //esto me muestra en consola los tamaños de los string en la consola

    Numeros.push(ciudades[i].length);

    
}  

console.log(Numeros); //Imprimo en consola para ver como queda el array 

//ahora que tengo el array de numeros busco el valor max

console.log(Math.max(...Numeros)); //aqui me tire media hora por la sintaxis de la funcion math.max que hay que pasarle los numeros de uno en uno o usar 
//esos 3 puntos delante del array para que reconozca los numeros de uno en uno

// ahora que tengo el numero mas alto busco la posicion en mi array de ciudades

var valorMax = Math.max(...Numeros);

var posicion = Numeros.indexOf(valorMax); //donde esta el que tiene el valor maximo , aqui busque en google la posicion de un array 

console.log(posicion); // esto imprime en consola la posicion

console.log(ciudades[posicion]); //esto imprime lo que hay en la posicion

// ahora solo queda limpiar el codigo


}