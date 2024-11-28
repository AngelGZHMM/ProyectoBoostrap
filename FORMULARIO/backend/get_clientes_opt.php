<?php
# --------------------------------------------- PHP DE MANUEL ---------------------------------------------
require_once("config.php");
$conexion = obtenerConexion();

$sql = "SELECT * FROM Cliente";
$resultado = mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "No se han podido recuperar lo clientes<br>Codigo de error número $numerror<br>Descripcion: $descrerror <br>", $conexion);
} else {
    $clientes = array();
    $contador = 0;
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $clientes[$contador] = $fila;
        $contador++;
    }
    responder($clientes, true, null, $conexion);
}