<?php
# --------------------------------------------- PHP DE ANGEL ---------------------------------------------
include_once("config.php");
$conexion = obtenerConexion();

$idServicio = $_POST['datos-servicio'];
$sql = "DELETE  FROM Servicios WHERE id = $idServicio;";


mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);

    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
} else {
    responder(null, true, "Servicio eliminado correctamente", $conexion);
}