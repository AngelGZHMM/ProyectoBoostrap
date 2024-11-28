<?php
require_once("config.php");
$conexion = obtenerConexion();

$sql = "SELECT * FROM Servicios;";
$resultado = mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "No se han podido recuperar los datos de los servicios<br>Codigo de error número $numerror<br>Descripcion: $descrerror <br>", $conexion);
} else {
    $proyectos = array();
    $contador = 0;
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $proyectos[$contador] = $fila;
        $contador++;
    }
    responder($proyectos, true, null, $conexion);
}