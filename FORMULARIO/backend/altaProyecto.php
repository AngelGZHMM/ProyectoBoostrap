<?php
include_once("config.php");
$conexion = obtenerConexion();

$Proyectos = json_decode($_POST['Proyectos']);
$sql = "INSERT INTO Proyectos (nombre, tipo, objetivo, presupuesto) 
        VALUES ('$Proyectos->nombre', '$Proyectos->tipo', '$Proyectos->objetivo', '$Proyectos->presupuesto')";

mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    // Si hay un error, lo devuelve
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);

    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);

} else {
    // Prototipo responder($datos,$error,$mensaje,$conexion)
    responder(null, true, "Se ha insertado el tipo de servicio", $conexion);
}
?>