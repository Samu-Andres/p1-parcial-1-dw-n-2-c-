/*
 * HERRERA, SAMUEL 
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// dbdbDiscos: para guardar los dbDiscos
let dbDiscos = [];
//
let disco = {
    pistas: []
};
let pista = {};



// Función Cargar:
function cargarDisco() {
    let nombre,autband;
    let codigo;
    do{
        nombre = prompt("Ingrese el nombre del disco");
    }while(noVacio(nombre));
    do{
         autband = prompt("Ingrese el nombre del autor o banda");
    }while(noVacio(autband));
   
    do{
        codigo = prompt("Ingrese Codigo")
    }while(validaCodigo(codigo));
   
    disco.nombre = nombre;
    disco.autband = autband;
    disco.codigo = codigo;
    let text = "";
    let sigue = false;
    do {
        cargarPista();
        res=prompt("Desea Continuar: ");
        res=res.toLowerCase();
        if(res==="si" || res==="s" )
              sigue=true;
        else
            sigue=false;
        
    }
    while (sigue);
  
}

function cargarPista() {
    let nombrePista = prompt("Ingrese el nombre de la pista");
    //let duracionPista = parseInt(prompt("Ingrese duracion de la pista"));
    let duracionPista;
    let segundosPista=false;
    
    do {
       
        duracionPista = parseInt(prompt("Ingrese duracion de la pista"));
        if(duracionPista > 0 && duracionPista <= 7200)
            segundosPista = true;
        else{
            segundosPista = false;
            alert("La duracion debe estar entre 0 y 7200 segundos");
           }
    }
    while (!segundosPista);

    pista.nombrePista = nombrePista;
    pista.duracionPista = duracionPista;
    disco.pistas.push(pista);
    pista = {};
}
const MostrarInfo = (html) => {
    document.getElementById('info').innerHTML = html;
}
const MostrarDatos = () => {
    // Variable que guarda el html generado:
    let html = '';

    // Armado:
    for (let disco of dbDiscos) {
        // Datos del disco:
        html += `<p>Disco:${disco['nombre']}  Banda/Autor:${disco['autband']} Codigo:${disco['codigo']}</p>`;

        

        // Notas: recorrida de cada nota para acumular, contar y armar el mensaje:
        html += '<ul>';
            
            for (let pista of disco['pistas']) {
                
                html += `<li style="color: ${pista['duracionPista'] >= 180 ? 'white' : 'red'}">

                        Nombre: ${pista['nombrePista']}
                        Duracion: ${pista['duracionPista']}
                  
                    </li>`;

            }
            
        html += '</ul>';
            
    }

    // Ejecuto la función 'MostrarInfo':
    MostrarInfo(html);
}


function enviar() {

    dbDiscos.push(disco);
    /* Reinicializo el objeto disco */
    disco = {
        pistas: []
    };
}


// Todas las funciones que necesites:
function existeCodigo(codigo) { 
    //recorrer dbDiscos y preguntar por cada disco si el codigo es igual al que viene por parametro
    codigo=parseInt(codigo)
    for (index = 0; index < dbDiscos.length; index++) {
       if(dbDiscos[index].codigo==codigo) {
            alert("El codigo ya fue cargado");
            return true;
       }
    }
    alert("El codigo es correcto");
    return false;
}

function noVacio(str) { 
    if (str == null || str.trim() == ""){
        alert("NO SE PERMITEN DATOS VACIOS");
        return true;}
    else
        return false;
}
function fueraDeRango(codigo) { 
    intCodigo=parseInt(codigo)
    if(intCodigo!=NaN)
    {
        if(intCodigo>=1 && intCodigo<=999)
            return false;
        else
        {
            alert("fuera de rango, 1-999");
            return true;
        }
    }
    else{
        alert("eso no es un numero");
        return true;
    }
}
function validaCodigo(codigo) { 
    if (noVacio(codigo)){
        return true;
    }
    if(fueraDeRango(codigo))
    {
        return true;
    }
    if (existeCodigo(codigo)){
        return true;
    }
    return false;


}

