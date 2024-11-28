<?php
# --------------------------------------------- PHP DE MANUEL ---------------------------------------------
include_once("config.php");
$conexion = obtenerConexion();

$generoCliente = $_POST['genero'];
$sql = "SELECT Proyectos.id AS id_proyecto, Proyectos.nombre AS nombre_proyecto, Cliente.id AS id, Cliente.nombre, Cliente.apellidos, Cliente.correo, Cliente.genero 
FROM Cliente 
LEFT JOIN Proyectos ON Proyectos.id_Cliente = Cliente.id;";

mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);

    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);
} else {
    $resultado = mysqli_query($conexion, $sql);
    $clientes = array();
    $contador = 0;
    while ($cliente = mysqli_fetch_assoc($resultado)) {
        $clientes[$contador] = $cliente;
        $contador++;
    }
    if (count($clientes) == 0) {
        responder(null, false, "No existe el cliente especificado", $conexion);
    }
    responder($clientes, true, null, $conexion);
}
