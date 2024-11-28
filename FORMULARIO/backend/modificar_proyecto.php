<?php
include_once("config.php");
$conexion = obtenerConexion();

$proyecto = json_decode($_POST['proyecto']);

$sql = "UPDATE Proyectos SET nombre = ?, tipo = ?, objetivo = ?, presupuesto = ? WHERE id = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("sssdi", $proyecto->nombre, $proyecto->tipo, $proyecto->objetivo, $proyecto->presupuesto, $proyecto->id);
$stmt->execute();

if ($stmt->errno != 0) {
    $numerror = $stmt->errno;
    $descrerror = $stmt->error;
    if ($numerror == 1062) {
        responder(null, false, "Ya existe un proyecto así", $conexion);
    } else {
        responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
    }
} else {
    responder(null, true, "Se ha modificado el proyecto", $conexion);
}

$stmt->close();
$conexion->close(); 