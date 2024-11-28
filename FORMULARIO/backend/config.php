<?php

/* Array que indica la conexion a nuestra base de datos */
$basedatos = array(
    "basedatos" => "Proyecto",
    "usuario" => "root",
    "password" => "test",
    "servidor" => "db",
    "puerto" => 3306
);


// Linea para indicar que solo se van a mostrar los errores no los warnings ni nada de eso. 
error_reporting(E_ERROR);

// Reporte de errores para mysql sin excepciones
mysqli_report(MYSQLI_REPORT_OFF);


/* FUNCIONES COMUNES */

function obtenerConexion()
{
    global $basedatos; //recuperamos el array con la conexión

    $conexion = mysqli_connect($basedatos["servidor"], $basedatos["usuario"], $basedatos["password"], $basedatos["basedatos"]) or die(mysqli_error($conexion));
    // $conexion = new mysqli($basedatos["servidor"], $basedatos["usuario"], $basedatos["password"], $basedatos["basedatos"], $basedatos["puerto"]) ;

    if ($conexion->connect_errno) { 
        responder(null, true, "Error al conectar a la base de datos. \nCompruebe los parámetros de la conexión: " .
            $conexion->connect_error . " Código de error: " . $conexion->connect_errno, $conexion);
    }

    mysqli_set_charset($conexion, "utf8");
    //Si no se produjo un error devolvemos el objeto de la conexión
    return $conexion;
}


function responder($datos, $ok, $mensaje, $conexion)
{
    // Formatear array asociativo con los campos de la respuesta
    $respuesta["ok"] = $ok; // Boolean true si OK -- false si error
    $respuesta["datos"] = $datos;  // Datos devueltos
    $respuesta["mensaje"] = $mensaje; // Información sobre la operación

    //Mandamos la respuesta al cliente
    echo json_encode($respuesta);

    // Cerramos la conexión
    mysqli_close($conexion);

    if ($ok == false) {
        // Finalizar el proceso el servidor con indicador de error
        exit(1);
    } else {
        // Finalizar el proceso el servidor con indicador de éxito
        exit(0);
    }
}
