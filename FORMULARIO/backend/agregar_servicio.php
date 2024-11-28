<?php
# --------------------------------------------- PHP DE ANGEL ---------------------------------------------
include_once("config.php");
$conexion = obtenerConexion();

// Recoger datos
$servicio = json_decode($_POST['servicio']);
$sql = "INSERT INTO Servicios (id, nombre, descripcion,precio) VALUES(null, '$servicio->nombre' , '$servicio->descripcion', '$servicio->precio'); ";

mysqli_query($conexion, $sql);

if(mysqli_errno($conexion) != 0){ // = 0 no hay error
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    if ($numerror == 1062) {
        // 1062 es el codigo de error cuando se intenta insertar un registro duplicado en un campo con una unique key
        // Por eso directamente pongo que ya existe un correo igual, para que el usuario sepa que tiene que cambiar
        responder(null, false, "Ya existe un servicio con ese correo", $conexion);
    } else {
        responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
    }
} else {responder(null, true, "Servicio insertado correctamente", $conexion);
    // $idServicioRecienInsertado = mysqli_insert_id($conexion);

    // $sql = "UPDATE Proyectos SET id_Servicio = $idServicioRecienInsertado WHERE id = '$servicio->proyectos';";

    // mysqli_query($conexion, $sql);

    // if(mysqli_errno($conexion) != 0){ // = 0 no hay error
    //     $numerror = mysqli_errno($conexion);
    //     $descrerror = mysqli_error($conexion);
    //     responder(null, false, "Se ha insertado el cliente, pero se ha producido un error número $numerror que corresponde a: $descrerror intentado asignarle un proyecto<br>", $conexion);
    // } else {
        
    // }
}

