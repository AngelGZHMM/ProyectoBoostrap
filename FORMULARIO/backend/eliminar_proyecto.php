<?php
include_once("config.php");
$conexion = obtenerConexion();

$idProyecto = $_POST['id'];
$sql = "DELETE FROM Proyectos WHERE id = $idProyecto;";


mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);

    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
} else {
    responder(null, true, "Proyecto eliminado correctamente", $conexion);
}