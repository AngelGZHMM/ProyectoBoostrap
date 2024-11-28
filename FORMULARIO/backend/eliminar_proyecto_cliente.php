<?php
# --------------------------------------------- PHP DE MANUEL ---------------------------------------------
require_once("config.php");
$conexion = obtenerConexion();

$idCliente = $_POST['id'];

$sql = "UPDATE Proyectos SET id_Cliente = NULL WHERE id_Cliente = '$idCliente';";

mysqli_query($conexion, $sql);
if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
} else {
    responder(null, true, null, $conexion);
}
