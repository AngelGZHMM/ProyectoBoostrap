<?php
# --------------------------------------------- PHP DE MANUEL ---------------------------------------------
require_once("config.php");
$conexion = obtenerConexion();

$idServicio = $_POST["id_servicio"];
$idProyecto = $_POST["id_proyecto"];

$sql = "INSERT INTO Servicios_Proyectos VALUES($idProyecto,$idServicio);";
$resultado = mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "No se ha podido asignar el proyecto al servicio<br>Codigo de error número $numerror<br>Descripcion: $descrerror <br>", $conexion);
} else {
    responder(null, true, "Proyecto asignado al servicio correctamente", $conexion);
}