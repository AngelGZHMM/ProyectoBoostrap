<?php
# --------------------------------------------- PHP DE MANUEL ---------------------------------------------
include_once("config.php");
$conexion = obtenerConexion();

$cliente = json_decode($_POST['cliente']);
$sql = "UPDATE Cliente SET nombre = '$cliente->nombre', apellidos = '$cliente->apellidos', correo = '$cliente->correo', genero = '$cliente->genero' WHERE id = $cliente->id;";

mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    if ($numerror == 1062) {
        // 1062 es el codigo de error cuando se intenta insertar un registro duplicado en un campo con una unique key
        // Por eso directamente pongo que ya existe un correo igual, para que el usuario sepa que tiene que cambiar
        responder(null, false, "Ya existe un cliente con ese correo", $conexion);
    } else {
        responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
    }
} else {
    responder(null, true, "Se ha modificado el cliente", $conexion);
}