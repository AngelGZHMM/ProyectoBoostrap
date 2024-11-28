<?php
# --------------------------------------------- PHP DE MANUEL ---------------------------------------------
require_once("config.php");
$conexion = obtenerConexion();

$idCliente = $_POST["id"];
$idProyecto = $_POST["id_proyecto"];

$sql = "UPDATE Proyectos SET id_Cliente = '$idCliente' WHERE id = '$idProyecto';";
$resultado = mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "No se ha podido asignar el proyecto al cliente<br>Codigo de error número $numerror<br>Descripcion: $descrerror <br>", $conexion);
} else {
    responder(null, true, "Proyecto asignado al cliente correctamente", $conexion);
}