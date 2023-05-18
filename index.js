/////////////////////// Array para almacenar los discos ///////////////////////



var discos = [];



/////////////////////// Función para cargar un nuevo disco ///////////////////////



function Cargar() {
    var nombre = prompt("Ingrese el nombre del disco:");
    var autor = prompt("Ingrese el autor o banda del disco:");
    var codigo = parseInt(prompt("Ingrese el código numérico único del disco (entre 1 y 999):"));



/////////////////////// Validación del código único ///////////////////////



    while (isNaN(codigo) || codigo < 1 || codigo > 999 || discoExistente(codigo)) {
        codigo = parseInt(prompt("Código inválido o ya existente. Ingrese otro código numérico único del disco (entre 1 y 999):"));
    }

    var pistas = [];

    var continuar = true;

    while (continuar) {
        var nombrePista = prompt("Ingrese el nombre de la pista:");
        var duracion = parseInt(prompt("Ingrese la duración de la pista (en segundos):"));



/////////////////////// Validación de los datos de la pista ///////////////////////



        while (nombrePista.trim() === '' || isNaN(duracion) || duracion < 0 || duracion > 7200) {
            nombrePista = prompt("Datos de la pista inválidos. Ingrese el nombre de la pista:");
            duracion = parseInt(prompt("Ingrese la duración de la pista (en segundos):"));
        }

        pistas.push({ nombre: nombrePista, duracion: duracion });

        var opcion = confirm("¿Desea ingresar otra pista?");

        if (!opcion) {
            continuar = false;
        }
    }

    discos.push({ nombre: nombre, autor: autor, codigo: codigo, pistas: pistas });
}



/////////////////////// Función auxiliar para verificar si un disco ya existe en el array ///////////////////////



function discoExistente(codigo) {
    for (var i = 0; i < discos.length; i++) {
        if (discos[i].codigo === codigo) {
            return true;
        }
    }
    return false;
}



/////////////////////// Función para mostrar los discos ///////////////////////



function Mostrar() {
    var resultado = "";

    for (var i = 0; i < discos.length; i++) {
        resultado += "Nombre del disco: " + discos[i].nombre + "<br>";
        resultado += "Autor/Banda: " + discos[i].autor + "<br>";
        resultado += "Código: " + discos[i].codigo + "<br>";
        resultado += "<i>Datos de las pistas:</i><br>";

        for (var j = 0; j < discos[i].pistas.length; j++) {
            var pista = discos[i].pistas[j];
            resultado += "Nombre de la canción: " + pista.nombre + "<br>";
            


/////////////////////// Resaltar en rojo las duraciones mayores a 180 ///////////////////////



            if (pista.duracion > 180) {
                resultado += '<span style="color: red;">Duración: ' + pista.duracion + '</span><br>';
            } else {
                resultado += "Duración: " + pista.duracion + "<br>";
            }
        }

        resultado += "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}


