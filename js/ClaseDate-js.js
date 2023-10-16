
// OJO IMPORTANTE LOS MESES EM JAVASCRIPT EMPIEZAN A CONTAR DESDE EL CERO --- ENERO = 0, FEBRERO = 1 ...

// **** EL OBJETO DATE / CLASE DATE ****

// Instanciando un objeto de la CLASE DATE

// Aca se creo la fecha actual es este preciso momento 
const diaHoy = new Date();
console.log(diaHoy);
console.log(typeof diaHoy);


// Metodos de la Clase Date 

// METEDO - ESTE MOMENTO UNICO: me DA el Nro de Milisegundos Transcurridos desde 1970 hasta ahora - Se utiliza Mucho para Obtener ID unicos de forma Aleatoria 
console.log(Date.now());

//METODO - Creando Fecha con Objeto Date / Pasandole atributos al objeto

// Forma 1
let miCumple = new Date('1-6-1962')
console.log(miCumple);

// Forma 2
let miCumple2 = new Date('December 15 1996')
console.log(miCumple2);

// Obteniendo Datos Especificos a traves de los Metodos get usados en el Objeto DATE

// 1) Obteniendo SOLO el Mes 
let valor = diaHoy.getMonth()
console.log(valor);

// 2) Obteniendo el dia de la semana Lunes = 1 , Marte = 2  
let valor2 = diaHoy.getDay()
console.log(valor2);

// 3) Obteniendo el dia de la semana Lunes = 1 , Marte = 2  
let valor3 = diaHoy.getHours() // lunes = 1 
console.log(valor3);

// 4) Obteniendo la fecha del Mes que toca  
let valor4 = diaHoy.getDate() // 11 de Septiembre
console.log(valor4);

// 5) Obteniendo el ano en curso   
let valor5 = diaHoy.getFullYear() // 2023
console.log(valor5);

// 6) Enviado por Set el ano que YO quiero  
let valor6 = diaHoy.setFullYear(2001)// 1984
console.log(valor6);