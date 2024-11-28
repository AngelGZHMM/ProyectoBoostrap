//----------------------------------------------- TABLA CLIENTE MANEJADA POR MANUEL -----------------------------------------------
// (Se podria quitar el id del proyecto del constructor porque no se usa en la tabla Cliente,
// pero la he conservado para hacer mas fácil el manejo del id entre clases cuando quiera atacar a la tabla Proyectos)
class Cliente {
  constructor(id, nombre, apellidos, correo, genero, proyectos) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.correo = correo;
    this.genero = genero;
    this.proyectos = proyectos;
  }
}

//----------------------------------------------- TABLA SERVICIO MANEJADA POR ANGEL -----------------------------------------------
class Servicio {
  constructor(id, nombre, descripcion, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

//----------------------------------------------- TABLA PROYECTO MANEJADA POR PEDRO -----------------------------------------------
class Proyectos {
  constructor(id, nombre, tipo, objetivo, presupuesto) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.objetivo = objetivo;
    this.presupuesto = presupuesto;
  }
}

class Proyecto {
  //-------------------------------------------------------------------- APARTADO DE MANUEL ----------------------------------------------------
  // funcion que agrega un cliente a la tabla Cliente
  async agregarCliente(oCliente) {
    let datos = new FormData();
    datos.append("cliente", JSON.stringify(oCliente));

    let respuesta = await peticionPOST("agregar_cliente.php", datos);
    return respuesta;
  }
  // funcion que busca un cliente dentro de la tabla Cliente por su nombre
  async buscarClientePorNombre(nombreClienteABuscar) {
    let datos = new FormData();
    datos.append("nombre", nombreClienteABuscar);

    let respuesta = await peticionPOST("buscar_cliente_por_nombre.php", datos);
    return respuesta;
  }
  // funcion que devuelve una lista de clientes por su genero
  async listarClientesPorGenero(generoCliente) {
    let datos = new FormData();
    datos.append("genero", generoCliente);

    let respuesta = await peticionPOST("listar_clientes_por_genero.php", datos);
    return respuesta;
  }
  // funcion que modifica un cliente de la tabla Cliente
  async modificarCliente(oCliente) {
    let datos = new FormData();
    datos.append("cliente", JSON.stringify(oCliente));

    let respuesta = await peticionPOST("modificar_cliente.php", datos);
    return respuesta;
  }
  // funcion que elimina un cliente de la tabla Cliente
  async eliminarCliente(idCliente) {
    let datos = new FormData();
    datos.append("id", idCliente);

    let respuesta = await peticionPOST("eliminar_cliente.php", datos);
    return respuesta;
  }
  // funcion que llama a un php para obtener todos los clientes y devuelve una tabla con el formato de buscarClientepor nombre y por genero
  async listarClientes() {
    let tabla = "";
    let respuesta = await peticionGET("get_clientes.php", new FormData());
    if (!respuesta.ok) {
      tabla = respuesta.mensaje;
    } else {
      let iconoGenero = "";
      let mensajeProyecto = "Sin datos";
      tabla =
        "<table class='table table-striped'><thead><tr><th scope='col'>Id_cliente</th><th scope='col'>Nombre</th><th scope='col'>Apellidos</th><th scope='col'>Correo</th><th scope='col'>Genero</th><th scope='col'>Proyecto_asociado</th><th scope='col'>Acciones</th></tr></thead><tbody class='table-group-divider'>";
      for (let i = 0; i < respuesta.datos.length; i++) {
        if (respuesta.datos[i].genero == "H") {
          iconoGenero = "<i class='bi bi-gender-male'></i> Hombre";
        } else {
          iconoGenero = "<i class='bi bi-gender-female'></i> Mujer";
        }
        if (respuesta.datos[i].id_proyecto != null) {
          mensajeProyecto = respuesta.datos[i].nombre_proyecto;
        } else {
          mensajeProyecto = "Sin datos";
        }
        tabla +=
          "<tr><th scope='row' class='align-middle'>" +
          respuesta.datos[i].id +
          "</th><td class='align-middle'>" +
          respuesta.datos[i].nombre +
          "</td><td class='align-middle'>" +
          respuesta.datos[i].apellidos +
          "</td><td class='align-middle'>" +
          respuesta.datos[i].correo +
          "</td><td class='align-middle'>" +
          iconoGenero +
          "</td><td class='align-middle'>" +
          mensajeProyecto +
          "</td><td class='align-middle'><button type='button' class='btn btn-primary btn-sm mx-1' id='btnModificar' datos-cliente='" +
          JSON.stringify(respuesta.datos[i]) +
          "'><i class='bi bi-pencil-square' id='lapiz'></i></button><button type='button' class='btn btn-danger btn-sm mx-1' id='btnEliminar' datos-cliente='" +
          JSON.stringify(respuesta.datos[i]) +
          "'><i class='bi bi-trash3' id='basura'></i></button></td></tr>";
      }
      tabla += "</tbody></table>";
      return tabla;
    }
  }
  // funcion que llama a un php para obtener todos los proyectos de los clientes
  // y devuelve una lista de opciones para los select que se usan en el formulario
  async getProyectosCliente() {
    let respuesta = await peticionGET(
      "get_proyectos_cliente.php",
      new FormData()
    );
    let opciones = "";
    opciones +=
      "<option value='' disabled selected>---Seleccione una opcion---</option>";
    for (let i = 0; i < respuesta.datos.length; i++) {
      opciones +=
        "<option value='" +
        respuesta.datos[i].id +
        "'>" +
        respuesta.datos[i].nombre +
        "</option>";
    }
    return opciones;
  }
  // funcion que llama a un php para obtener todos los proyectos de los clientes pero modificada
  // para que te muestre todas las que sean null, pero tambien la que tenga el mismo id del cliente que lo llama,
  // para reflejar en el html que ese es el proyecto asignado a ese cliente concreto
  async getProyectosClienteMod(id_proyecto) {
    let datos = new FormData();
    datos.append("id_proyecto", id_proyecto);
    let respuesta = await peticionGET("get_proyectos_cliente_mod.php", datos);
    let opciones = "";
    opciones +=
      "<option value='' class='fst-italic'>No asociar proyecto</option>";
    for (let i = 0; i < respuesta.datos.length; i++) {
      if (respuesta.datos[i].id == id_proyecto) {
        opciones +=
          "<option value='" +
          respuesta.datos[i].id +
          "' selected>" +
          respuesta.datos[i].nombre +
          "</option>";
      } else {
        opciones +=
          "<option value='" +
          respuesta.datos[i].id +
          "'>" +
          respuesta.datos[i].nombre +
          "</option>";
      }
    }
    return opciones;
  }
  // funcion que llama a un php para obtener todos los clientes y devuelve una lista de opciones para los select que se usan en el formulario
  async getClientes() {
    let respuesta = await peticionGET("get_clientes_opt.php", new FormData());
    let opciones = "";
    opciones +=
      "<option value='' selected disabled class='fst-italic'>---Seleccione un cliente---</option>";
    for (let i = 0; i < respuesta.datos.length; i++) {
      opciones +=
        "<option value='" +
        respuesta.datos[i].id +
        "'>" +
        respuesta.datos[i].nombre +
        "</option>";
    }
    return opciones;
  }
  // funcion que eliminar el id_Cliente de un proyecto, es decir elimina el proyecto asociado a un cliente
  async eliminarProyectoDeCliente(idCliente) {
    let datos = new FormData();
    datos.append("id", idCliente);
    let respuesta = await peticionPOST("eliminar_proyecto_cliente.php", datos);
    return respuesta;
  }
  // funcion que modifica el proyecto asociado a un cliente
  async modificarProyectoDeCliente(idProyecto, idCliente) {
    let datos = new FormData();
    datos.append("id_proyecto", idProyecto);
    datos.append("id", idCliente);
    let respuesta = await peticionPOST("modificar_proyecto_cliente.php", datos);
    return respuesta;
  }
  // funcion que asigna un proyecto a un cliente
  async asignarProyectoCliente(idCliente, idProyecto) {
    let datos = new FormData();
    datos.append("id", idCliente);
    datos.append("id_proyecto", idProyecto);
    let respuesta = await peticionPOST("asignar_proyecto_cliente.php", datos);
    return respuesta;
  }

  //-------------------------------------------------------------------- APARTADO DE ANGEL ----------------------------------------------------
  async getSelectProyectos() {
    let respuesta = await peticionGET(
      "get_select_proyectos.php",
      new FormData()
    );
    let opciones = "";
    opciones +=
      "<option value='' disabled selected>--Seleccione una opcion--</option>";
    for (let i = 0; i < respuesta.datos.length; i++) {
      opciones +=
        "<option value='" +
        respuesta.datos[i].id +
        "'>" +
        respuesta.datos[i].nombre +
        "</option>";
    }
    return opciones;
  }

  async agregarServicio(oServicio) {
    let datos = new FormData();
    datos.append("servicio", JSON.stringify(oServicio));

    let respuesta = await peticionPOST("agregar_servicio.php", datos);
    return respuesta;
  }

  async listarServicioporProyecto(proyectoServicio) {
    let datos = new FormData();
    datos.append("proyectoServicio", proyectoServicio);

    let respuesta = await peticionPOST(
      "listar_servicios_por_proyecto.php",
      datos
    );
    return respuesta;
  }

  // funcion que elimina un servicio de la tabla Servicios
  async eliminarServicio(idServicio) {
    let datos = new FormData();
    datos.append("datos-servicio", idServicio);

    let respuesta = await peticionPOST("eliminar_servicio.php", datos);
    return respuesta;
  }

  async modificarServicio(oServicio) {
    let datos = new FormData();
    datos.append("servicio", JSON.stringify(oServicio));

    let respuesta = await peticionPOST("modificar_servicio.php", datos);
    return respuesta;
  }

  async buscarServicioPorNombre(nombreServicioABuscar) {
    let datos = new FormData();
    datos.append("nombre", nombreServicioABuscar);

    let respuesta = await peticionPOST("buscar_servicio_por_nombre.php", datos);
    return respuesta;
  }

  // funcion que asigna un proyecto a un Servicio
  async asignarServicioProyecto(idServicio, idProyecto) {
    let datos = new FormData();
    datos.append("id_servicio", idServicio);
    datos.append("id_proyecto", idProyecto);
    let respuesta = await peticionPOST("asignar_proyecto_servicio.php", datos);
    return respuesta;
  }

  async comprobarServicios_Proyectos(idServicio, idProyecto) {
    let datos = new FormData();
    datos.append("id_servicio", idServicio);
    datos.append("id_proyecto", idProyecto);
    let respuesta = await peticionPOST(
      "get_comprobar_servicios_proyectos.php",
      datos
    );
    return respuesta;
  }

  async eliminarServicioProyecto(idServicio, idProyecto) {
    let datos = new FormData();
    datos.append("id_servicio", idServicio);
    datos.append("id_proyecto", idProyecto);
    let respuesta = await peticionPOST("eliminar_proyecto_servicio.php", datos);
    return respuesta;
  }

  async getSelectServicios() {
    let respuesta = await peticionGET(
      "get_select_servicios.php",
      new FormData()
    );
    let opciones = "";
    opciones +=
      "<option value='' disabled selected>--Seleccione una opcion--</option>";
    for (let i = 0; i < respuesta.datos.length; i++) {
      opciones +=
        "<option value='" +
        respuesta.datos[i].id +
        "'>" +
        respuesta.datos[i].nombre +
        "</option>";
    }
    return opciones;
  }

 async listarServicios() {
    let tabla = "";
    let respuesta = await peticionGET("get_servicios.php", new FormData());
    if (!respuesta.ok) {
      tabla = respuesta.mensaje;
    } else {
      tabla =
        "<table class='table table-striped'><thead><tr><th scope='col'>Id_Servicio</th><th scope='col'>Nombre</th><th scope='col'>Descripcion</th><th scope='col'>Precio</th><th scope='col'>Acciones</th></tr></thead><tbody class='table-group-divider'>";
      for (let i = 0; i < respuesta.datos.length; i++) {
        tabla +=
          "<tr><th scope='row' class='align-middle'>" +
          respuesta.datos[i].id +
          "</th><td class='align-middle'>" +
          respuesta.datos[i].nombre +
          "</td><td class='align-middle'>" +
          respuesta.datos[i].descripcion +
          "</td><td class='align-middle'>" +
          respuesta.datos[i].precio +
          "</td><td class='align-middle'><button type='button' class='btn btn-primary btn-sm mx-1' id='btnModificar' datos-servicio='" +
          JSON.stringify(respuesta.datos[i]) +
          "'><i class='bi bi-pencil-square' id='lapiz'></i></button><button type='button' class='btn btn-danger btn-sm mx-1' id='btnEliminar' datos-servicio='" +
          JSON.stringify(respuesta.datos[i]) +
          "'><i class='bi bi-trash3' id='basura'></i></button></td></tr>";
      }
      tabla += "</tbody></table>";
      return tabla;
    }
  }

  //----------------------------------------------- PARTE PEDRO -----------------------------------------------
  //DAR DE ALTA UN PROYECTO
  async AltaProyecto(oProyecto) {
    let datos = new FormData();
    datos.append("Proyectos", JSON.stringify(oProyecto));

    let respuesta = await peticionPOST("altaProyecto.php", datos);
    return respuesta;
  }

  async BuscarProyectoPorNombre(nombreProyectoABuscar) {
    let datos = new FormData();
    datos.append("nombre", nombreProyectoABuscar);

    let respuesta = await peticionPOST("buscar_proyecto_por_nombre.php", datos);
    return respuesta;
  }

  // Función para modificar el proyecto
  async modificarProyecto(oProyecto) {
    const datos = new FormData();
    datos.append("proyecto", JSON.stringify(oProyecto));

    const respuesta = await peticionPOST("modificar_proyecto.php", datos);
    return respuesta;
  }

  async eliminarProyecto(idProyecto) {
    let datos = new FormData();
    datos.append("id", idProyecto);

    let respuesta = await peticionPOST("eliminar_proyecto.php", datos);
    return respuesta;
  }

  async listarProyectoPorTipo(tipoProyecto) {
    let datos = new FormData();
    datos.append("tipo", tipoProyecto);

    let respuesta = await peticionPOST("listar_proyectos_por_tipo.php", datos);
    return respuesta;
  }

  async listarTodosProyectos() {
    let listado = "";

    let respuesta = await peticionGET("getProyectos.php", new FormData());
    console.log(respuesta);

    if (respuesta.error) {
      listado = respuesta.mensaje;
    } else {
      listado =
        "<table class='table table-striped'><thead><tr><th scope='col'>Id_Proyecto</th><th scope='col'>Nombre</th><th scope='col'>Tipo</th><th scope='col'>Objetivo</th><th scope='col'>Presupuesto</th><th scope='col'>Acciones</th></tr></thead><tbody class='table-group-divider'>";
      for (let i = 0; i < respuesta.datos.length; i++) {
        listado +=
          "<tr><th scope='row' class='align-middle'>" +
          respuesta.datos[i].id +
          "</th><td class='align-middle'>" +
          respuesta.datos[i].nombre +
          "</td><td class='align-middle'>" +
          respuesta.datos[i].tipo +
          "</td><td class='align-middle'>" +
          respuesta.datos[i].objetivo +
          "</td><td class='align-middle'>" +
          respuesta.datos[i].presupuesto +
          "</td><td class='align-middle'><button type='button' class='btn btn-primary btn-sm mx-1' id='btnModificarProyecto' datos-proyecto='" +
          JSON.stringify(respuesta.datos[i]) +
          "'><i class='bi bi-pencil-square' id='lapiz'></i></button><button type='button' class='btn btn-danger btn-sm mx-1' id='btnEliminarProyecto' datos-proyecto='" +
          JSON.stringify(respuesta.datos[i]) +
          "'><i class='bi bi-trash3' id='basura'></i></button></td></tr>";
      }
      listado += "</tbody></table>";
      return listado;
    }
  }
}
