<?php
# --------------------------------------------- PHP DE Angel ---------------------------------------------
include_once("config.php");
$conexion = obtenerConexion();

$serviciosProyecto = $_POST['proyectoServicio'];
$sql = "SELECT Servicios.id AS ids,Servicios.nombre AS nombres,Servicios.descripcion AS descripcions,Servicios.precio AS precios, Proyectos.*
FROM Servicios
JOIN Servicios_Proyectos ON Servicios.id = Servicios_Proyectos.id_Servicio
JOIN Proyectos ON Proyectos.id = Servicios_Proyectos.id_Proyecto
WHERE Servicios_Proyectos.id_Proyecto = $serviciosProyecto;";

mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);

    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
} else {
    $resultado = mysqli_query($conexion, $sql);
    $servicios = array();
    $contador = 0;
    while ($servicio = mysqli_fetch_assoc($resultado)) {
        $servicios[$contador] = $servicio;
        $contador++;
    }
    if (count($servicios) == 0) {
        responder(null, false, "No existe el servicio especificado", $conexion);
    }
    responder($servicios, true, null, $conexion);
}
