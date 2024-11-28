<?php
# --------------------------------------------- PHP DE MANUEL ---------------------------------------------
include_once("config.php");
$conexion = obtenerConexion();

$idCliente = $_POST['id'];
$sql = "DELETE FROM Cliente WHERE id = $idCliente;";


mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);

    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
} else {
    responder(null, true, "Cliente eliminado correctamente", $conexion);
}