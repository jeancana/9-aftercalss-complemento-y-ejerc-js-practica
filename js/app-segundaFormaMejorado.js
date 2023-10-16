//alert('hola')

// ***** 2do Caso Practico - Para Metodos de Array - HOF ******

// ***** Haciendo un FILTRADOR de Objetos  para el Array de Objetos "autos" *****

// Creando los filtros de busqueda via prompt - NO LO USO y lo dejo en texto Mientras
//let marca = prompt('Ingresa la Marca a Buscar ')
//let year = Number(prompt('Ingresa el Year Buscar '))

// Creo un Objeto Literal que me sirvera de filtro
const datosAbuscar = {

    //Estamos Harcodeando los datos por ahora 
    marca: '',
    year: 2023,
    minimo: '50000',
    maximo: '300000',
    puertas: '',
    modelo: '',
    color: 'Arena'
    
}

 
// la funcion mostrarAutos recibe como Parametro el Array de Objetos "autos"
// Estoy Creando una funcion Estatica para Mostrar
function mostrarAutos(autos) {
    
    // Uso la HOF forEach en el Array de Objetos autos
    autos.forEach( arrObjetosauto => {
        
        // Monstrado por Pantalla las propiedades contenidas en el Array de Objetos
        console.log(`Marca:${arrObjetosauto.marca} // Modelo:${arrObjetosauto.modelo} // Year:${arrObjetosauto.year} // Puertas:${arrObjetosauto.puertas} 
        // Color:${arrObjetosauto.color} // Precio:${arrObjetosauto.precio} `)
        
         document.write('<p>' + `Marca:${arrObjetosauto.marca} // Modelo:${arrObjetosauto.modelo} // Year:${arrObjetosauto.year} // Puertas:${arrObjetosauto.puertas} // Color:${arrObjetosauto.color} // Precio:${arrObjetosauto.precio}` + '</p>') 
    })

    
}

// Esta Funcion que indica que no Hubo resultados segun las condiciones que se colocaron en los filtros
function noResultados() { 

    console.log('No hay Resultados')
    document.write("<p style='color:red'> No Hay Resultado </p>")
}

function filtrarMinimo(auto) {
    
    if (datosAbuscar.minimo) {
        return auto.precio >= datosAbuscar.minimo
    }
    
    // sino retorna el dato que entro por el parametro auto
    return auto
    // No colocamos el "else" xq no es necesario JavaScripto lo auto comprende

}

function filtrarMaximo(auto) {

    if (datosAbuscar.maximo) {
        return auto.precio <= datosAbuscar.maximo
    }

    // sino retorna el dato que entro por el parametro auto
    return auto
    // No colocamos el "else" xq no es necesario JavaScripto lo auto comprende

}

function filtrarPuertas(auto) {

    if (datosAbuscar.puertas) {
        return auto.puertas === datosAbuscar.puertas
    }

    // sino retorna el dato que entro por el parametro auto
    return auto
    // No colocamos el "else" xq no es necesario JavaScripto lo auto comprende

}

function filtrarModelo(auto) {

    if (datosAbuscar.modelo) {
        return auto.modelo === datosAbuscar.modelo
    }

    // sino retorna el dato que entro por el parametro auto
    return auto
    // No colocamos el "else" xq no es necesario JavaScripto lo auto comprende

}

function filtrarColor(auto) {

    if (datosAbuscar.color) {
        return auto.color === datosAbuscar.color
    }

    // sino retorna el dato que entro por el parametro auto
    return auto
    // No colocamos el "else" xq no es necesario JavaScripto lo auto comprende

}


// Creando la funcion que filtra x las Marcas 
function filtrarMarca(auto) {
    
    // Si existe algun Dato en el objeto datosAbuscar - entra y.... 
    if (datosAbuscar.marca) {
        // auto.marco  sera estrictamente igual a lo que trae el objeto datosAbuscar.marca
        return auto.marca === datosAbuscar.marca
    } else {
        // sino retorna lo que entro por el parametro auto
        return auto 
    }
    
}

// Creando la funcion que filtra x el Year del vehiculo
function filtrarYear(auto) {
    // Si existe algun Dato en el objeto datosAbuscar - entra y.... .
    if (datosAbuscar.year) {
        // auto.marco  sera estrictamente igual a lo que trae el objeto datosAbuscar.year
        return auto.year === datosAbuscar.year
    } else {
        // sino retorna lo que entro por el parametro auto
        return auto
    }

}

// Esta la funcion que integra todo y Filtra
function filtrarAuto() { 
    

    // Creando un SUPER FILTRO con todos las propiedades del Array de Objeto "autos" Esto me arroja un nuevo array distinto que cumpla con TODAS condiciones del .filter
    let resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarColor).filter(filtrarMaximo).filter(filtrarMinimo).filter(filtrarModelo).filter(filtrarPuertas).filter(filtrarYear);
    
    // si la variable resultado contiene Array con elementos dentro entra y ...
    if (resultado.length) {
       
        // La variable "resultado" es el nuevo array filtrado y la pasamos como parametro dentro mostrarAutos() para que PISE el parametro inicial que es el Array de Objetos mostrarAutos(autos) y consologue(muestres el resultado) del nuevo Array Objetos "resultado"
        
        mostrarAutos(resultado)
       
    } else { 
        // Si resultado es un array vacio usa la funcion ....
        noResultados()
    }
}

filtrarAuto()