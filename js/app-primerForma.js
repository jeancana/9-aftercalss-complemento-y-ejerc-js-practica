//alert('hola')

// ***** Caso Practico - Para Metodos de Array - HOF ******

// ***** Haciendo un FILTRADOR de Objetos  para el Array de Objetos "autos" *****

// Estas son Variables las que funcionan como Filtros de Busqueda 
// - Aca coloco Marca de Auto que me va a devolver
let marca;
// - Aca coloco el Year que me va a devolver
let year = 2022; 
 
// la funcion mostrarAutos recibe como Parametro el Array de Objetos "autos"
// Estoy Creando una funcion Estatica para Mostrar
function mostrarAutos(autos) {
    
    // Uso la HOF forEach en el Array de Objetos autos
    autos.forEach( arrObjetosauto => {
        
        // Monstrado por Pantalla las propiedades contenidas en el Array de Objetos
        console.log(`Marca:${arrObjetosauto.marca} // Modelo:${arrObjetosauto.modelo} // Year:${arrObjetosauto.year} // Puertas:${arrObjetosauto.puertas} 
        // Color:${arrObjetosauto.color} // Precio:${arrObjetosauto.precio} `)
        
        /* document.write('<p>' + `Marca:${auto.marca} // Modelo:${auto.modelo} // Year:${auto.year} // Puertas:${auto.puertas} 
        // Color:${auto.color} // Precio:${auto.precio}` + '</p>') */
    })

    
}

// Esta Funcion que indica que no Hubo resultados segun las condiciones que se colocaron en los filtros
function noResultados() { 

    console.log('No hay Resultados')
    document.write("<p style='color:red'> No Hay Resultado </p>")
}


// Creando la funcion que filtra x las Marcas 
function filtrarMarca(auto) {
    
    // Si existe algun Dato en la Varialbe Marca - entra y.... 
    if (marca) {
        // auto.marco  sera estrictamente igual a lo que trae la variable marca
        return auto.marca === marca
    } else {
        // sino retorna lo que entro por el parametro auto
        return auto 
    }
    
}

// Creando la funcion que filtra x el Year del vehiculo
function filtrarYear(auto) {
    // Si existe algun Dato en la Varialbe Year - entra y.... 
    if (year) {
        // auto.marco  sera estrictamente igual a lo que trae la variable Year
        return auto.year === year
    } else {
        // sino retorna lo que entro por el parametro auto
        return auto
    }

}

// Esta la funcion que integra todo y Filtra
function filtrarAuto() { 
    
    // Creando un filtro para Conseguir por Marca un auto - Esto me arroja un nuevo array distinto que cumpla con ambas condiciones del .filter
    let resultado = autos.filter(filtrarMarca) ;
    
    // Creando un filtro para Conseguir por Year un auto - Esto me arroja un nuevo array distinto que cumpla con ambas condiciones del .filter
    let resultado2 = autos.filter(filtrarYear);

    // Creando un DOBLE filtro para Conseguir por Marca y Year un auto - Esto me arroja un nuevo array distinto que cumpla con ambas condiciones del .filter
    let resultado3 = autos.filter(filtrarMarca).filter(filtrarYear);
    
    // si la variable resultado contiene Array con elementos dentro entra y ...
    if (resultado.length) {
       // La variable "resultado" es el nuevo array filtrado y la pasamos como parametro dentro mostrarAutos() para que PISE el parametro inicial que es el Array de Objetos mostrarAutos(autos) y consologue(muestres el resultado) del nuevo Array Objetos "resultado/2/3"
        
        mostrarAutos(resultado)
        console.log("----------------------")
        
        mostrarAutos(resultado2)
        
        console.log("----------------------")
        mostrarAutos(resultado3)

    } else { 
        // Si resultado es un array vacio usa la funcion ....
        noResultados()
    }
}

filtrarAuto()