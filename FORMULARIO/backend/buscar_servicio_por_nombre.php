<?php
# --------------------------------------------- PHP DE ANGEL ---------------------------------------------
include_once("config.php");
$conexion = obtenerConexion();

$nombreServicio = mysqli_real_escape_string($conexion, $_POST['nombre']);
$sql = "SELECT id AS ids,nombre AS nombres,descripcion AS descripcions,precio AS precios 
FROM Servicios 
WHERE Servicios.nombre LIKE '%" . $nombreServicio . "%';";

$resultado = mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);

    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
} else {
    $servicios = array();
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $servicios[] = $fila;
    }
    if (count($servicios) == 0) {
        responder(null, false, "No existe el servicio especificado", $conexion);
    } else {
        responder($servicios, true, null, $conexion);
    }
}



// if (mysqli_errno($conexion) != 0) {
//     $numerror = mysqli_errno($conexion);
//     $descrerror = mysqli_error($conexion);

//     responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
// } else {
//     $resultado = mysqli_query($conexion, $sql);
//     $servicios = array();
//     $contador = 0;
//     while ($servicios = mysqli_fetch_assoc($resultado)) {
//         $servicios[$contador] = $servicio;
//         $contador++;
//     }
//     if (count($servicios) == 0) {
//         responder(null, false, "No existe el servicio especificado", $conexion);
//     }
//     responder($servicios, true, null, $conexion);
// }