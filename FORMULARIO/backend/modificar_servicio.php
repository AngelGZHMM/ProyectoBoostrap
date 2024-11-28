<?php
# --------------------------------------------- PHP DE Angel ---------------------------------------------
include_once("config.php");
$conexion = obtenerConexion();

$servicio = json_decode($_POST['servicio']);
$sql = "UPDATE Servicios SET id = '$servicio->id', nombre = '$servicio->nombre', descripcion = '$servicio->descripcion', precio = '$servicio->precio' WHERE id = $servicio->id;";

mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    if ($numerror == 1062) {
        // 1062 es el codigo de error cuando se intenta insertar un registro duplicado en un campo con una unique key
        // Por eso directamente pongo que ya existe un correo igual, para que el usuario sepa que tiene que cambiar
        responder(null, false, "Ya existe un Servicio con ese nombre", $conexion);
    } else {
        responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
    }
} else {
    responder(null, true, "Se ha modificado el Servicio", $conexion);
}