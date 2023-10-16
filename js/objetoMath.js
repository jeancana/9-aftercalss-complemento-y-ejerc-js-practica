
// El Objeto Math: es parte de la Ventana(window) Global de JavaScritp ,este objeto tiene todas las propiedades y funciones matematicas necesarias, ya listas para ser usadas 

// Aca Veremos las Propiedades y funcionalidade mas Importantes del Objeto Math 

let resultado; 
// Propiedad PI del Objeto Math 
resultado = Math.PI

let resultado1; 
//Funcion que Redondea hacia arriba un Nro siempre este de 0,5 centimas en adelante, sino rendondea para abajo 
resultado1 = Math.round(2.5)

let resultado2;
//Funcion que Redondea hacia arriba un Nro siempre, NUNCA rendondea para abajo 
resultado2 = Math.ceil(2.000001)

let resultado3;
//Funcion que Redondea hacia abajo un Nro siempre, NUNCA rendondea para arriba / Funciona parecido al parseInt
resultado3 = Math.floor(2.99999)

let resultado4;
//Funcion que Calcula la Raiz Cuadrada un Nro siempre
resultado4 = Math.sqrt(144)

let resultado5;
//Funcion que devuelve el Valor absoluto / convierte a positivo / Preserva el valor del dato y se olvida del signo
resultado5 = Math.abs(-44)

let resultado6;
//Funcion que devuelve el Un valor elevado a su potencia / recibe 2 parametros 1) el valor y 2) la potencia
resultado6 = Math.pow(3, 3) 

let resultado7;
//Funcion que devuelve el menor/minimo  de todos los valores / Sirve SOLO con datos primitivos de tipo Number (Numeros sueltos/cadenar de Nros Separados por comas) o NO Sirve para Datos Punteros(Arrays/Objetos)
resultado7 = Math.min(3, 6, 78, 44, 23, 18, 99) 

let resultado8; 
// Los inverso del Minimo
resultado8 = Math.max(3, 6, 78, 44, 23, 18, 99) 

let resultado9;
// Me entrega/retorne un valor Random en 0 y 1 
resultado9 = Math.random() 

// redondeo para hacer el juego de la ruleta 
let ruleta = Math.floor(resultado9*100)


console.log(resultado)
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)
console.log(resultado6)
console.log(resultado7)
console.log(resultado8)
console.log(resultado9)
console.log(ruleta)