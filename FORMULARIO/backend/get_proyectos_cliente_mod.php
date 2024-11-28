<?php
# --------------------------------------------- PHP DE MANUEL ---------------------------------------------
require_once("config.php");
$conexion = obtenerConexion();

$id_proyecto = $_GET['id_proyecto'];

$sql = "SELECT id, nombre FROM Proyectos WHERE id_Cliente IS NULL OR id = '$id_proyecto';";
$resultado = mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "No se han podido recuperar los datos de los clientes<br>Codigo de error número $numerror<br>Descripcion: $descrerror <br>", $conexion);
} else {
    $proyectos = array();
    $contador = 0;
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $proyectos[$contador] = $fila;
        $contador++;
    }
    responder($proyectos, true, null, $conexion);
}