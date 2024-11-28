<?php
include_once("config.php");
$conexion = obtenerConexion();

$idServicio = $_POST["id_servicio"];
$idProyecto = $_POST["id_proyecto"];

$sql = "SELECT * FROM Servicios_Proyectos WHERE id_Proyecto = $idProyecto AND id_Servicio = $idServicio;";
$resultado = mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "No se han podido recuperar los datos de los servicios_proyectos<br>Codigo de error número $numerror<br>Descripcion: $descrerror <br>", $conexion);
} else {
    $proyectos = array();
    $contador = 0;
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $proyectos[$contador] = $fila;
        $contador++;
    }
    responder($proyectos, true, null, $conexion);
}