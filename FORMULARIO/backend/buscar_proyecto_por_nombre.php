<?php
include_once("config.php");
$conexion = obtenerConexion();

$nombreProyecto = $_POST['nombre'];
$sql = "SELECT * FROM Proyectos WHERE nombre LIKE '%" . $nombreProyecto . "%'";

mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);

    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
} else {
    $resultado = mysqli_query($conexion, $sql);
    $proyectos = array();
    $contador = 0;
    while ($proyecto = mysqli_fetch_assoc($resultado)) {
        $proyectos[$contador] = $proyecto;
        $contador++;
    }
    if (count($proyectos) == 0) {
        responder(null, false, "No existe el Proyecto especificado", $conexion);
    }
    responder($proyectos, true, null, $conexion);
}