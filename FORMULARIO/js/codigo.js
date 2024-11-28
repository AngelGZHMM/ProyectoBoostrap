"use strict";

inicio();

var oProyecto = new Proyecto();

function inicio() {
    ocultarFormularios();
    //-------------------------------- APARTADOS DE MANUEL --------------------------------
    // EventListener para los botones del menu que mostraran y ocultaran los formularios
    document.querySelector("#mnuAgregarCliente").addEventListener("click", mostrarFormulario);
    document.querySelector("#mnuBuscarCliente").addEventListener("click", mostrarFormulario);
    document.querySelector("#mnuListarClientesPorGenero").addEventListener("click", mostrarFormulario);
    document.querySelector("#mnuAsignarProyectoCliente").addEventListener("click", mostrarFormulario);
    document.querySelector("#btnAgregarCliente").addEventListener("click", procesarAgregarCliente);
    document.querySelector("#btnListarClientePorNombre").addEventListener("click", procesarBuscarClientePorNombre);
    document.querySelector("#btnListarClientesPorGenero").addEventListener("click", procesarListarClientesPorGenero);
    document.querySelector("#btnAsignarProyectoCliente").addEventListener("click", procesarAsignarProyectoCliente);
//-------------------------------- APARTADOS DE Pedro --------------------------------
    document.querySelector("#mnuAgregarTipoServicio").addEventListener("click", mostrarFormulario);
    document.querySelector("#mnuBuscarTipoServicio").addEventListener("click", mostrarFormulario);
    document.querySelector("#mnuListarTipoServicioPorTipo").addEventListener("click", mostrarFormulario);
    document.querySelector("#mnuAsignarProyectoAServicio").addEventListener("click", mostrarFormulario);

    document.querySelector("#btnAgregarTipoServicio").addEventListener("click", procesarAltaProyecto)
    document.querySelector("#btnBuscarTipoServicio").addEventListener("click", procesarBuscarProyectoPorNombre);
    document.getElementById("btnListarProyectoPorTipoServicio").addEventListener("click", procesarListarProyectoPorTipo);
    //document.querySelector("#frmAsignarServicioProyecto").addEventListener("click", procesarAsignarProyectoServicio);



    //-------------------------------- APARTADOS DE Ángel --------------------------------
    document.querySelector("#mnuAgregarServicio").addEventListener("click", mostrarFormulario);
    document.querySelector("#mnuBuscarServicio").addEventListener("click", mostrarFormulario);
    document.querySelector("#mnuListarServiciosPorTipo").addEventListener("click", mostrarFormulario);
    document.querySelector("#mnuListarTodosLosClientes").addEventListener("click", mostrarListadoClientes);
    document.querySelector("#mnuListarTodosLosTiposDeServicios").addEventListener("click", mostrarTodosLosProyectos);


    
    document.querySelector("#btnAgregarServicio").addEventListener("click", procesarAgregarServicio);
    
    document.querySelector("#btnListarServiciosPorProyecto").addEventListener("click", procesarListarServiciosPorProyecto);
    
    document.querySelector("#btnBuscarServicio").addEventListener("click", procesarBuscarServicioPorNombre);

    document.querySelector("#mnuAsignarServicioAProyecto").addEventListener("click", mostrarFormulario);
    document.querySelector("#btnAsignarProyectoServicio").addEventListener("click", procesarAsignarServicioProyecto);
    document.querySelector("#btnBorrarProyectoServicio").addEventListener("click", eliminarServicioProyecto);
    document.querySelector("#mnuListarTodosLosServicios").addEventListener("click",mostrarListadoServicios);
}

function ocultarFormularios() {
    //-------------------------------- APARTADOS DE MANUEL --------------------------------
    // funcion que ocultara todos los formularios cada vez que se quiera mostrar uno nuevo
    frmAgregarCliente.classList.remove("d-block");
    frmBuscarCliente.classList.remove("d-block");
    frmListarClientesPorGenero.classList.remove("d-block");
    frmAsignarProyectoCliente.classList.remove("d-block");
    frmAsignarProyectoServicio.classList.remove("d-block");

    frmAgregarCliente.classList.add("d-none");
    frmBuscarCliente.classList.add("d-none");
    frmListarClientesPorGenero.classList.add("d-none");
    frmAsignarProyectoCliente.classList.add("d-none");
    frmAsignarProyectoServicio.classList.add("d-none");
    frmAgregarCliente.reset();

    document.querySelector("#contenidoBusqueda").classList.remove("d-block");
    document.querySelector("#contenidoBusqueda").classList.add("d-none");
    frmListarClientesPorGenero.reset();
    document.querySelector("#contenidoListar").classList.remove("d-block");
    document.querySelector("#contenidoListar").classList.add("d-none");


    frmAgregarTipoServicio.classList.remove("d-block");
    // frmBuscarTipoServicio.classList.remove("d-block");
    frmAgregarServicio.classList.remove("d-block");
    frmBuscarServicio.classList.remove("d-block");
    frmListarServiciosPorProyecto.classList.remove("d-block");
    frmAgregarTipoServicio.classList.add("d-none");
    // frmBuscarTipoServicio.classList.add("d-none");
    frmAgregarServicio.classList.add("d-none");
    frmBuscarServicio.classList.add("d-none");
    frmListarServiciosPorProyecto.classList.add("d-none");

    document.querySelector("#contenidoListarServiciosporProyecto").classList.remove("d-block");
    document.querySelector("#contenidoListarServiciosporProyecto").classList.add("d-none");


// ----------------------- PARTE Pedro

    frmAgregarTipoServicio.classList.remove("d-block");
    frmBuscarTipoServicio.classList.remove("d-block");
    frmListarProyectoPorTipoServicio.classList.add("d-block");

    frmAgregarTipoServicio.classList.add("d-none");
    frmBuscarTipoServicio.classList.add("d-none");
    frmListarProyectoPorTipoServicio.classList.add("d-none");

}

async function mostrarFormulario(oEvento) {
    ocultarFormularios();
    // CONSULTAS DE MANUEL PARA RELLENAR CAMPOS SELECT
    let opcionesProyecto = await oProyecto.getProyectosCliente();
    let opcionesCliente = await oProyecto.getClientes();

    switch (oEvento.target.id) {
        //---------------------------------------------------- APARTADOS MENU MANUEL ----------------------------------------------------
        case "mnuAgregarCliente":
            // Logica para mostrar que no hay proyectos disponibles si no hay ningun proyecto en la base de datos con el id cliente null
            if (opcionesProyecto == "<option value='' disabled selected>---Seleccione una opcion---</option>") {
                opcionesProyecto = "<option value='' disabled selected>--No hay proyectos disponibles--</option>";
            }
            // Mostrara los resultados en el select
            document.getElementById("optAgregarClienteProyecto").innerHTML = opcionesProyecto;
            frmAgregarCliente.classList.remove("d-none");
            frmAgregarCliente.classList.add("d-block");
            break;
        case "mnuBuscarCliente":
            frmBuscarCliente.classList.remove("d-none");
            frmBuscarCliente.classList.add("d-block");
            break;
        case "mnuListarClientesPorGenero":
            frmListarClientesPorGenero.classList.remove("d-none");
            frmListarClientesPorGenero.classList.add("d-block");
            break;
        case "mnuAsignarProyectoCliente":
            // Logica para mostrar que no hay clientes disponibles si no hay clientes dados de alta en la base de datos
            if (opcionesCliente == "<option value='' selected disabled class='fst-italic'>---Seleccione un cliente---</option>") {
                opcionesCliente = "<option value='' disabled selected>---No hay clientes disponibles---</option>";
            }
            // Misma logica que para mostrar que no hay proyectos disponibles si no hay ningun proyecto en la base de datos con el id cliente null
            if (opcionesProyecto == "<option value='' disabled selected>---Seleccione una opcion---</option>") {
                opcionesProyecto = "<option value='' disabled selected>---No hay proyectos disponibles---</option>";
            }
            // Mostrara los resultados en el select
            document.getElementById("optAsignarProyecto").innerHTML = opcionesProyecto;
            document.getElementById("optAsignarCliente").innerHTML = opcionesCliente;
            frmAsignarProyectoCliente.classList.remove("d-none");
            frmAsignarProyectoCliente.classList.add("d-block");
            break;



        case "mnuAgregarTipoServicio":
            frmAgregarTipoServicio.classList.remove("d-none");
            frmAgregarTipoServicio.classList.add("d-block");
            break;
        case "mnuBuscarTipoServicio":
            frmBuscarTipoServicio.classList.remove("d-none");
            frmBuscarTipoServicio.classList.add("d-block");
            break;
        case "mnuListarTipoServicioPorTipo":
            frmListarProyectoPorTipoServicio.classList.remove("d-none");
            frmListarProyectoPorTipoServicio.classList.add("d-block");
            break;
        case "mnuAsignarProyectoAServicio":
            mostrarSelectProyectos2();
            mostarSelectServicios();
            frmAsignarProyectoServicio.classList.remove("d-none");
            frmAsignarProyectoServicio.classList.add("d-block");
            break;



        case "mnuAgregarServicio":
            frmAgregarServicio.classList.remove("d-none");
            frmAgregarServicio.classList.add("d-block");
            break;
        case "mnuBuscarServicio":
            frmBuscarServicio.classList.remove("d-none");
            frmBuscarServicio.classList.add("d-block");
            break;
        case "mnuListarServiciosPorTipo":
            mostrarSelectProyectos();
            frmListarServiciosPorProyecto.classList.remove("d-none");
            frmListarServiciosPorProyecto.classList.add("d-block");
            break;

        case "mnuAsignarServicioAProyecto":
            mostrarSelectProyectos2();
            mostarSelectServicios();
            frmAsignarProyectoServicio.classList.remove("d-none");
            frmAsignarProyectoServicio.classList.add("d-block");
            break;
        default:
            alert("Opción no implementada");
            break;
    }
}

//--------------------------------------------------------------- APARTADOS FUNCIONES DE MANUEL ---------------------------------------------------------------

// funcion para validar el formulario de agregar cliente (Manuel)
// Simplemente comprueba que los campos que no pueden ser nulos en la BBDD
// no estén vacíos y que el correo tenga un formato correcto con una expresion regular
function validarAgregarCliente() {
    let nombreCliente = document.getElementById("txtAgregarClienteNombre");
    let apellidosCliente = document.getElementById("txtAgregarClienteApellidos");
    let correoCliente = document.getElementById("txtAgregarClienteCorreo");
    let validacionCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let generoCliente = document.getElementById("optAgregarClienteGenero");

    let valido = true;
    let errores = "";
    if (nombreCliente.value.trim() == "") {
        valido = false;
        errores += "El nombre no puede estar vacío<br>";
    }
    if (apellidosCliente.value.trim() == "") {
        valido = false;
        errores += "Los apellidos no pueden estar vacíos<br>";
    }
    if (!(validacionCorreo.test(correoCliente.value.trim()))) {
        valido = false;
        errores += "El correo no es correcto (abc@abc.xx)<br>";
    }
    if (generoCliente.value == "") {
        valido = false;
        errores += "Debe seleccionar un género<br>";
    }
    if (!valido) {
        document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + errores + "</p>";
        let errorModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
        errorModal.show();
    }
    return valido;
}

// funcion para validar el formulario de buscar cliente por nombre (Manuel)
// Comprueba que el campo de nombre no esté vacío
function validarBuscarClientePorNombre() {
    let nombreCliente = document.getElementById("txtBuscarClienteNombre");

    if (nombreCliente.value.trim() == "") {
        document.getElementById("modalInfoContentCliente").innerHTML = "<p>Por favor introduzca un nombre a buscar</p>";
        let errorModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
        errorModal.show();
        return false;
    }

    return true;
}

// funcion para validar el formulario de listar clientes por género (Manuel)
// Comprueba que el campo de género no esté vacío
function validarListarClientesPorGenero() {
    let generoCliente = document.getElementById("optListarClientesPorGeneroGenero");
    if (generoCliente.value == "") {
        document.getElementById("modalInfoContentCliente").innerHTML = "<p>Por seleccione un génereo</p>";
        let errorModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
        errorModal.show();
        return false;
    }
    return true;
}

// funcion para validar el formulario de asignar proyecto a cliente (Manuel)
// Comprueba que se haya seleccionado un cliente y un proyecto
// y adapta el mensaje en funcion de lo que si y no se haya seleccionado
function validarAsignarProyectoCliente() {
    let idCliente = document.getElementById("optAsignarCliente");
    let idProyecto = document.getElementById("optAsignarProyecto");
    let validacionCorrecta = true;
    let respuesta = "";

    if (idProyecto.value == "" && idCliente.value == "") {
        respuesta = "<p>Por favor seleccione un proyecto y un cliente al que asignarlo</p>";
        validacionCorrecta = false;
    } else if (idCliente.value == "") {
        respuesta = "<p>Por favor seleccione un cliente al que asignar el proyecto</p>";
        validacionCorrecta = false;
    } else if (idProyecto.value == "") {
        respuesta = "<p>Por favor seleccione un proyecto a asignar al cliente</p>";
        validacionCorrecta = false;
    }
    if (!validacionCorrecta) {
        document.getElementById("modalInfoContentCliente").innerHTML = respuesta;
        let errorModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
        errorModal.show();
    }

    return validacionCorrecta;
}

// funcion que procesa el alta de un nuevo cliente (Manuel)
async function procesarAgregarCliente() {
    if (validarAgregarCliente()) {
        // Primero se valida que los campos esten correctos y se recogen en variables
        let nombreCliente = document.getElementById("txtAgregarClienteNombre").value.trim();
        let apellidosCliente = document.getElementById("txtAgregarClienteApellidos").value.trim();
        let correoCliente = document.getElementById("txtAgregarClienteCorreo").value.trim();
        let generoCliente = document.getElementById("optAgregarClienteGenero").value.trim();
        let proyectoCliente = document.getElementById("optAgregarClienteProyecto").value.trim();
        // Si no se ha seleccionado un proyecto, se le asigna un valor nulo (para crear el objeto cliente)
        if (proyectoCliente == "") {
            proyectoCliente = null;
        }

        // Se muestra el modal con la respuesta del servidor
        let respuesta = await oProyecto.agregarCliente(new Cliente(null, nombreCliente, apellidosCliente, correoCliente, generoCliente, proyectoCliente));
        document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
        let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
        infoModal.show();

        // Si la respuesta es correcta, se resetea el formulario y se oculta
        if (respuesta.ok) {
            frmAgregarCliente.reset();
            document.querySelector("#frmAgregarCliente").classList.remove("d-block");
            document.querySelector("#frmAgregarCliente").classList.add("d-none");
        }
    }
}

// funcion que procesa la busqueda de un cliente por nombre (Manuel)
async function procesarBuscarClientePorNombre() {
    if (validarBuscarClientePorNombre()) {
        // Nuevamente se valida que se hayan introducido los datos necesarios y se obtienen las variables
        let nombreClienteABuscar = document.getElementById("txtBuscarClienteNombre").value.trim();
        let respuesta = await oProyecto.buscarClientePorNombre(nombreClienteABuscar);
        // Si la respuesta del servidor es correcta, se crea la tabla con los datos obtenidos
        if (respuesta.ok) {
            let divResultado = document.getElementById("contenidoBusqueda");
            let resultado = "";
            let iconoGenero = "";
            resultado = "<table class='table table-striped'><thead><tr><th scope='col'>Id_cliente</th><th scope='col'>Nombre</th><th scope='col'>Apellidos</th><th scope='col'>Correo</th><th scope='col'>Genero</th><th scope='col'>Proyecto_asociado</th><th scope='col'>Acciones</th></tr></thead><tbody class='table-group-divider'>";
            let mensajeProyecto = "";
            for (let i = 0; i < respuesta.datos.length; i++) {
                if (respuesta.datos[i].genero == "H") {
                    iconoGenero = "<i class='bi bi-gender-male'></i> Hombre";
                } else {
                    iconoGenero = "<i class='bi bi-gender-female'></i> Mujer";
                }
                if (respuesta.datos[i].id_proyecto == null) {
                    mensajeProyecto = "Sin datos";
                } else {
                    mensajeProyecto = respuesta.datos[i].nombre_proyecto;
                }
                resultado += "<tr><th scope='row' class='align-middle'>" + respuesta.datos[i].id + "</th><td class='align-middle'>" + respuesta.datos[i].nombre + "</td><td class='align-middle'>" + respuesta.datos[i].apellidos + "</td><td class='align-middle'>" + respuesta.datos[i].correo + "</td><td class='align-middle'>" + iconoGenero + "</td><td class='align-middle'>" + mensajeProyecto + "</td><td class='align-middle'><button type='button' class='btn btn-primary btn-sm mx-1' id='btnModificar' datos-cliente='" + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-pencil-square' id='lapiz'></i></button><button type='button' class='btn btn-danger btn-sm mx-1' id='btnEliminar' datos-cliente='" + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-trash3' id='basura'></i></button></td></tr>";
            }
            resultado += "</tbody></table>";
            // Se muestra el resultado en el html
            divResultado.innerHTML = resultado;
            frmBuscarCliente.reset();
            document.querySelector("#contenidoBusqueda").classList.remove("d-none");
            document.querySelector("#contenidoBusqueda").classList.add("d-block");
            // Y se añade un enento a la tabla para obtener donde haces click en los botones creados que modificaran o eliminaran un cliente
            divResultado.addEventListener("click", function (oEvento) {
                let boton = oEvento.target.closest("button");

                if (boton) {
                    // Recogemos los valores del boton que le pasamos previamente en la construccion de la tabla
                    let cliente = JSON.parse(boton.getAttribute("datos-cliente"));

                    // Y si el boton pulsado es el de modificar se llama a procesarModificarCliente pasandole el cliente guardado en el boton como parametro
                    if (oEvento.target.id == "lapiz" || oEvento.target.id == "btnModificar") {
                        procesarModificarCliente(cliente);
                    }
                    // Y si el boton pulsado es el de eliminar se llama a procesarEliminarCliente pasandole el cliente guardado en el boton como parametro
                    if (oEvento.target.id == "basura" || oEvento.target.id == "btnEliminar") {
                        procesarEliminarCliente(cliente);
                    }
                }
            });

        // Y si la respuesta del servidor no es correcta, se muestra un modal con el mensaje de error
        } else {
            document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
            let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
            infoModal.show();
            frmBuscarCliente.reset();
            document.querySelector("#contenidoBusqueda").classList.remove("d-block");
            document.querySelector("#contenidoBusqueda").classList.add("d-none");
        }

    }
}

// funcion que procesa la modificacion de un cliente (Manuel)
async function procesarModificarCliente(cliente) {
    // Primero se crea un formulario con los elementos del cliente seleccionados para que sepa lo que cambiar.
    let generoSeleccionado = "";
    if (cliente.genero == "H") {
        generoSeleccionado += "<option value='H' selected>Hombre</option>";
        generoSeleccionado += "<option value='M'>Mujer</option>";
    } else {
        generoSeleccionado += "<option value='H'>Hombre</option>";
        generoSeleccionado += "<option value='M' selected>Mujer</option>";
    }
    let formulario = "";
    formulario += "<label class='col-xs-4 control-label' for='txtModificarClienteId'>Id:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarClienteId' name='txtModificarClienteId' placeholder='Id' class='form-control input-md' type='text' value='" + cliente.id + "' disabled>";
    formulario += "</div>";
    formulario += "<label class='col-xs-4 control-label' for='txtModificarClienteNombre'>Nombre:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarClienteNombre' name='txtModificarClienteNombre' placeholder='Nombre' class='form-control input-md' type='text' value='" + cliente.nombre + "'>";
    formulario += "</div>";
    formulario += "<label class='col-xs-4 control-label' for='txtModificarClienteApellidos'>Apellidos:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarClienteApellidos' name='txtModificarClienteApellidos' placeholder='Apellidos' class='form-control input-md' type='text' value='" + cliente.apellidos + "'>";
    formulario += "</div>";
    formulario += "<label class='col-xs-4 control-label' for='txtModificarClienteCorreo'>Correo:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarClienteCorreo' name='txtModificarClienteCorreo' placeholder='Apellidos' class='form-control input-md' type='text' value='" + cliente.correo + "'>";
    formulario += "</div>";
    formulario += "<label class='col-xs-4 control-label' for='optModificarClienteGenero'>Genero:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<select name='optModificarClienteGenero' id='optModificarClienteGenero' class='form-select'>";
    formulario += generoSeleccionado;
    formulario += "</select>";
    formulario += "</div>";
    formulario += "<label class='col-xs-4 control-label' for='optModificarClienteGenero'>Proyecto asociado:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<select name='optModificarClienteProyecto' id='optModificarClienteProyecto' class='form-select'>";
    // Para obtener los proyectos que no tienen cliente asociado o los que ya tiene ese cliente llamamos a una funcion que nos devolvera las opciones
    let respuesta = await oProyecto.getProyectosClienteMod(cliente.id_proyecto);
    formulario += respuesta;
    formulario += "</select>";
    formulario += "</div>";
    // Se muestra el formulario
    document.getElementById("modalModContentCliente").innerHTML = formulario;
    let formularioModClienteModal = new bootstrap.Modal(document.getElementById("modModalCliente"));
    formularioModClienteModal.show();

    // Y nuevamente creamos un EventListener para los botones del formulario
    document.querySelector("#modModalCliente").addEventListener("click", async function (oEvento) {
        let boton = oEvento.target.closest("button");

        if (boton) {
            // Si se le da al boton de modificar,
            if (oEvento.target.id == "btnModificarCliente") {
                // Recogemos los datos del formulario
                let idCliente = document.getElementById("txtModificarClienteId").value.trim();
                let nombreCliente = document.getElementById("txtModificarClienteNombre").value.trim();
                let apellidosCliente = document.getElementById("txtModificarClienteApellidos").value.trim();
                let correoCliente = document.getElementById("txtModificarClienteCorreo").value.trim();
                let generoCliente = document.getElementById("optModificarClienteGenero").value.trim();
                let idProyecto = document.getElementById("optModificarClienteProyecto").value.trim();

                // Y ahora dentro de la logica para saber que campos hay que modificar en que tabla.
                // Si no se ha seleccionado un id del proyecto, significa que o se ha quitado al cliente
                // de un proyecto en el que estaba, o simplemente no se ha modificado el campo.
                // Para averiguar si se ha quitado el proyecto o no, compararemos el id de antes de modificar mas adelante
                if (idProyecto == "") {
                    idProyecto = null;
                }

                let clienteAModificar = null;
                // Creamos el cliente que modificaremos mas adelante en caso de que en la tabla Proyecto no haya habido errores si es que la hemos tenido que atacar

                // Si los ids del proyecto son iguales (es decir no se han modificado), solo se modificara el cliente
                if (cliente.id_proyecto == idProyecto) {
                    clienteAModificar = new Cliente(idCliente, nombreCliente, apellidosCliente, correoCliente, generoCliente, idProyecto);
                } else {
                    // Si el id del proyecto modificado es null significa que antes tenia un dato porque ya hemos comprobado antes que no son iguales, 
                    // por lo que querremos eliminar el proyecto asociado al cliente
                    if (idProyecto == null) {
                        // Llamamos a la funcion que eliminara un proyecto del cliente asociado
                        let respuesta = await oProyecto.eliminarProyectoDeCliente(cliente.id);
                        // Si ha habido errores no se modificara el cliente porque mas adelante establezco que solo se modifique si no es null
                        // y se mostrara el modal con los errores
                        if (!respuesta.ok) {
                            formularioModClienteModal.hide();
                            document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                            let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
                            infoModal.show();
                            // Si no ha habido errores, entonces se crea el cliente con los paremtros indicados
                        } else {
                            clienteAModificar = new Cliente(idCliente, nombreCliente, apellidosCliente, correoCliente, generoCliente, idProyecto);
                        }
                        // Si el id del proyecto modificado no es null, significa que o se va a añadir un proyecto a un cliente que no tenia antes proyectos asignados,
                        // o se va a cambiar el proyecto asignado al cliente
                    } else {
                        let eliminadoAntesDeModificar = true;
                        // Entonces compruebas si el antes el cliente tenia un proyecto asignado
                        if (cliente.id_proyecto != null) {
                            // Entonces la consulta que tenemos que ejecutar es modificar el proyecto asociado al cliente
                            // Para ello primero eliminamos el proyecto asociado al cliente
                            let respuesta = await oProyecto.eliminarProyectoDeCliente(cliente.id);
                            // Si ha habido errores y no se ha podido eliminar, pondremos una variable a false para que despues no se modifique el cliente ni se añada el proyecto
                            if (!respuesta.ok) {
                                formularioModClienteModal.hide();
                                document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                                let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
                                infoModal.show();
                                // Si no ha habido errores, entonces se crea el cliente con los paremtros indicados
                                eliminadoAntesDeModificar = false;
                            }
                        }
                        // Si la eliminacion ha ido bien o no ha habido modificacion,
                        // lo que significaria que antes el cliente no tenia proyecto asociado,
                        // entonces llamaremos a la funcion que asigna un proyecto a un cliente
                        if (eliminadoAntesDeModificar) {
                            let respuesta = await oProyecto.modificarProyectoDeCliente(idProyecto, cliente.id);
                            // Si hay fallos se mostrara en el modal y no se modificara el cliente
                            if (!respuesta.ok) {
                                formularioModClienteModal.hide();
                                document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                                let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
                                infoModal.show();
                            } else {
                                clienteAModificar = new Cliente(idCliente, nombreCliente, apellidosCliente, correoCliente, generoCliente, idProyecto);
                            }
                        }
                    }
                }

                // Si se ha ejecutado alguna consulta entonces se habra modificado el cliente, por lo que no sera null
                // y entrara en el if para modificar ya el cliente en si atacando solo a la tabla cliente.
                // De esta manera se divide el trabajo en partes mas pequeñas y se evita tener que hacer consultas muy largas
                // que pueden ser mas propensas a errores.
                if (cliente != null) {
                    // Entonces primero se oculta el formulario donde se han introducido las modificaciones del cliente
                    formularioModClienteModal.hide();
                    // Y se llama a la funcion que modifica el cliente
                    let respuesta = await oProyecto.modificarCliente(clienteAModificar);

                    // Se muestra el modal con la respuesta del servidor
                    document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                    let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
                    infoModal.show();

                    // Y se resetea el formulario y se ocultan las tablas donde se muestran los clientes buscados,
                    // ya sea por nombre o por genero (ya que la funcion modificar puede ser llamada por cualquiera de los dos eventos)
                    document.querySelector("#contenidoBusqueda").classList.remove("d-block");
                    document.querySelector("#contenidoBusqueda").classList.add("d-none");
                    frmBuscarCliente.reset();
                    document.querySelector("#contenidoListar").classList.remove("d-block");
                    document.querySelector("#contenidoListar").classList.add("d-none");
                }
            }
            // Si se le da al boton de cancelar, simplemente se oculta el modal con el formulario
            if (oEvento.target.id == "btnCancelarModificarCliente") {
                formularioModClienteModal.hide();
            }
        }
    });
}

// funcion que procesa la eliminacion de un cliente (Manuel)
async function procesarEliminarCliente(cliente) {
    // Primero mostramos un modal para confirmar que se quiere eliminar el cliente para evitar que se elimine por error
    let mensaje = "¿Estás seguro de que quieres eliminar el cliente <strong>" + cliente.nombre + "</strong>  <strong>" + cliente.apellidos + "</strong> con correo <strong>" + cliente.correo + "</strong>?";
    document.getElementById("modalDelContentCliente").innerHTML = "<p>" + mensaje + "</p>";
    let eliminarModal = new bootstrap.Modal(document.getElementById("delModalCliente"));
    eliminarModal.show();
    // Y creamos un EventListener para capturar cuando se le de al boton de confirmar eliminacion
    document.querySelector("#delModalCliente").addEventListener("click", async function (oEvento) {
        let boton = oEvento.target.closest("button");

        if (boton) {
            // Si efectivamente se quiere eliminar el cliente
            if (oEvento.target.id == "btnEliminarCliente") {
                // Primero se oculta el modal de confirmacion para evitar que se solapen modales
                eliminarModal.hide();
                let proyectoEliminado = true;
                // Si el cliente tiene un proyecto asociado, se eliminara primero el proyecto asociado al cliente
                // para que despues no de fallo al borrar el cliente por la foreign key
                if (cliente.id_proyecto != null) {
                    let respuesta = await oProyecto.eliminarProyectoDeCliente(cliente.id);
                    // Si hay errores al eliminar el proyecto, se mostrara un modal con el mensaje de error y no se eliminara el cliente (por el booleano)
                    if (!respuesta.ok) {
                        proyectoEliminado = false;
                        document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                        let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
                        infoModal.show();
                        document.querySelector("#contenidoBusqueda").classList.remove("d-block");
                        document.querySelector("#contenidoBusqueda").classList.add("d-none");
                        frmBuscarCliente.reset();
                    }
                }
                // Si se ha elimnado correctamente el proyecto asociado al cliente o no tenia ninguno, se eliminara el cliente
                if (proyectoEliminado) {
                    // Se llama a la funcion que elimina el cliente
                    let respuesta = await oProyecto.eliminarCliente(cliente.id);
                    // Y simplemente se muestra el modal con la respuesta del servidor y se ocultan las tablas donde se muestran los clientes
                    document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                    let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
                    infoModal.show();
                    document.querySelector("#contenidoBusqueda").classList.remove("d-block");
                    document.querySelector("#contenidoBusqueda").classList.add("d-none");
                    frmBuscarCliente.reset();
                }
            }
        }

    });
}

// funcion que procesa la busqueda de clientes por genero (Manuel)
async function procesarListarClientesPorGenero() {
    // Primero le pasamos el genero seleccionado en el formulario a la funcion que buscara los clientes por genero
    let generoCliente = document.getElementById("optListarClientesPorGenero").value;
    let respuesta = await oProyecto.listarClientesPorGenero(generoCliente);
    // Si la respuesta del servidor es correcta se creara la misma tabla que en el caso de buscar por nombre con los mismos botones, eventos y funcionalidades
    if (respuesta.ok) {
        let divResultado = document.getElementById("contenidoListar");
        let resultado = "";
        let iconoGenero = "";
        resultado = "<table class='table table-striped'><thead><tr><th scope='col'>Id_cliente</th><th scope='col'>Nombre</th><th scope='col'>Apellidos</th><th scope='col'>Correo</th><th scope='col'>Genero</th><th scope='col'>Proyecto_asociado</th><th scope='col'>Acciones</th></tr></thead><tbody class='table-group-divider'>";
        let mensajeProyecto = "";
        for (let i = 0; i < respuesta.datos.length; i++) {
            if (respuesta.datos[i].genero == "H") {
                iconoGenero = "<i class='bi bi-gender-male'></i> Hombre";
            } else {
                iconoGenero = "<i class='bi bi-gender-female'></i> Mujer";
            }
            if (respuesta.datos[i].id_proyecto == null) {
                mensajeProyecto = "Sin datos";
            } else {
                mensajeProyecto = respuesta.datos[i].nombre_proyecto;
            }
            resultado += "<tr><th scope='row' class='align-middle'>" + respuesta.datos[i].id + "</th><td class='align-middle'>" + respuesta.datos[i].nombre + "</td><td class='align-middle'>" + respuesta.datos[i].apellidos + "</td><td class='align-middle'>" + respuesta.datos[i].correo + "</td><td class='align-middle'>" + iconoGenero + "</td><td class='align-middle'>" + mensajeProyecto + "</td><td class='align-middle'><button type='button' class='btn btn-primary btn-sm mx-1' id='btnModificar' datos-cliente='" + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-pencil-square' id='lapiz'></i></button><button type='button' class='btn btn-danger btn-sm mx-1' id='btnEliminar' datos-cliente='" + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-trash3' id='basura'></i></button></td></tr>";
        }
        resultado += "</tbody></table>";
        divResultado.innerHTML = resultado;
        frmBuscarCliente.reset();
        document.querySelector("#contenidoListar").classList.remove("d-none");
        document.querySelector("#contenidoListar").classList.add("d-block");
        divResultado.addEventListener("click", function (oEvento) {
            let boton = oEvento.target.closest("button");

            if (boton) {
                // Verificamos si el botón tiene el atributo 'datos-cliente'
                let cliente = JSON.parse(boton.getAttribute("datos-cliente"));

                if (oEvento.target.id == "lapiz" || oEvento.target.id == "btnModificar") {
                    procesarModificarCliente(cliente);
                }
                if (oEvento.target.id == "basura" || oEvento.target.id == "btnEliminar") {
                    procesarEliminarCliente(cliente);
                }
            }
        });
    // Y si no pues simplemente se muestra un modal con el mensaje de error
    } else {
        document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
        let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
        infoModal.show();
        frmBuscarCliente.reset();
        document.querySelector("#contenidoListar").classList.remove("d-block");
        document.querySelector("#contenidoListar").classList.add("d-none");
    }
}

// funcion que procesa la asignacion de un proyecto a un cliente (Manuel)
async function procesarAsignarProyectoCliente() {
    // Primero se valida que se haya pasado un cliente y un proyecto
    if (validarAsignarProyectoCliente()) {
        // Y se recogen los valores de los campos
        let idCliente = document.getElementById("optAsignarCliente").value.trim();
        let idProyecto = document.getElementById("optAsignarProyecto").value.trim();

        // Llamamos a la funcion que asigna un proyecto a un cliente
        let respuesta = await oProyecto.asignarProyectoCliente(idCliente, idProyecto);
        document.getElementById("modalInfoContentCliente").innerHTML = "<p>" + respuesta.mensaje + "</p>";
        let infoModal = new bootstrap.Modal(document.getElementById("infoModalCliente"));
        infoModal.show();
        frmAsignarProyectoCliente.reset();

        // Si la respuesta es correcta, se resetea el formulario y se oculta        
        if (respuesta.ok) {
            document.querySelector("#frmAsignarProyectoCliente").classList.remove("d-block");
            document.querySelector("#frmAsignarProyectoCliente").classList.add("d-none");
        }
    }
}

// funcion que muestra un listado de todos los clientes en otra página (Manuel)
function mostrarListadoClientes() {
    open("listado_clientes.html", "_blank");
}

//--------------------------------------------------------------- APARTADOS FUNCIONES DE ANGEL ---------------------------------------------------------------
async function mostrarSelectProyectos() {
    let respuesta = await oProyecto.getSelectProyectos();
    document.getElementById("optListarServiciosPorProyecto").innerHTML = respuesta;
   
}

async function mostarSelectServicios() {
    let respuesta = await oProyecto.getSelectServicios();
    document.getElementById("optAsignarServicio").innerHTML = respuesta;
    
}
async function mostrarSelectProyectos2() {
    let respuesta = await oProyecto.getSelectProyectos();
    document.getElementById("optAsignarProyectos").innerHTML = respuesta;
}

async function procesarAgregarServicio() {
    let  validar = true
    if (validar) {
        // Primero se valida que los campos esten correctos y se recogen en variables
        let nombreServicio = document.getElementById("txtAgregarServicioNombre").value.trim();
        let descripcion = document.getElementById("txtAgregarServicioDescripcion").value.trim();
        let precio = document.getElementById("txtAgregarServicioPrecio").value.trim();

        let respuesta = await oProyecto.agregarServicio(new Servicio(null, nombreServicio, descripcion, precio));
        document.getElementById("modalInfoContentServicio").innerHTML = "<p>" + respuesta.mensaje + "</p>";
        let infoModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
        infoModal.show();

        // Si la respuesta es correcta, se resetea el formulario y se oculta
        if (respuesta.ok) {
            frmAgregarServicio.reset();
            document.querySelector("#frmAgregarServicio").classList.remove("d-block");
            document.querySelector("#frmAgregarServicio").classList.add("d-none");
        }
    }
}


// funcion que procesa la busqueda de servicios por proyectos (Angel)
async function procesarListarServiciosPorProyecto() {
    // Primero le pasamos el proyecto seleccionado en el formulario a la funcion que buscara los servicios por proyectos
    let proyectoServicio = document.getElementById("optListarServiciosPorProyecto").value;
    let respuesta = await oProyecto.listarServicioporProyecto(proyectoServicio);
    // Si la respuesta del servidor es correcta se creara la misma tabla que en el caso de buscar por nombre con los mismos botones, eventos y funcionalidades
    if (respuesta.ok) {
        let divResultado = document.getElementById("contenidoListarServiciosporProyecto");
        let resultado = "";
        let iconoProyecto = "";
        resultado += "<h3>Servicios asociados al proyecto "+respuesta.datos[0].nombre+"</h3>";
        resultado += "<table class='table table-striped'><thead><tr><th scope='col'>Id_Servicio</th><th scope='col'>Nombre</th><th scope='col'>Descripcion</th><th scope='col'>Precio</th><th scope='col'>Acciones</th></tr></thead><tbody class='table-group-divider'>";
        let mensajeProyecto = "";
        for (let i = 0; i < respuesta.datos.length; i++) {
           
                iconoProyecto += "<i class='bi bi-cpu'></i>";
            
            if (respuesta.datos[i].id_proyecto == null) {
                mensajeProyecto = "Sin datos";
            } else {
                mensajeProyecto = respuesta.datos[i].nombre_proyecto;
            }
            resultado += "<tr><th scope='row' class='align-middle'>" + respuesta.datos[i].ids + "</th><td class='align-middle'>" + respuesta.datos[i].nombres + "</td><td class='align-middle'>" + respuesta.datos[i].descripcions + "</td><td class='align-middle'>" + respuesta.datos[i].precios + "</td><td class='align-middle'><button type='button' class='btn btn-primary btn-sm mx-1' id='btnModificarServicio' datos-servicio='" + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-pencil-square' id='lapiz'></i></button><button type='button' class='btn btn-danger btn-sm mx-1' id='btnEliminarServicio' datos-servicio='" + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-trash3' id='basura'></i></button></td></tr>";
        }
        resultado += "</tbody></table>";
        divResultado.innerHTML = resultado;
        frmListarServiciosPorProyecto.reset();
        document.querySelector("#contenidoListarServiciosporProyecto").classList.remove("d-none");
        document.querySelector("#contenidoListarServiciosporProyecto").classList.add("d-block");
        divResultado.addEventListener("click", function (oEvento) {
            let boton = oEvento.target.closest("button");

            if (boton) {
                // Verificamos si el botón tiene el atributo 'datos-servicio'
                let servicio = JSON.parse(boton.getAttribute("datos-servicio"));

                if (oEvento.target.id == "lapiz" || oEvento.target.id == "btnModificar") {
                    procesarModificarServicio(servicio);
                }
                if (oEvento.target.id == "basura" || oEvento.target.id == "btnEliminarServicio") {
                    procesarEliminarServicio(servicio);
                }
            }
        });
    // Y si no pues simplemente se muestra un modal con el mensaje de error
    } else {
        document.getElementById("modalInfoContentServicio").innerHTML = "<p>" + respuesta.mensaje + "</p>";
        let infoModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
        infoModal.show();
        frmListarServiciosPorProyecto.reset();
        document.querySelector("#contenidoListarServiciosporProyecto").classList.remove("d-block");
        document.querySelector("#contenidoListarServiciosporProyecto").classList.add("d-none");
    }
}

// funcion que procesa la eliminacion de un Servicio (ANGEL)
async function procesarEliminarServicio(servicio) {
    // Primero mostramos un modal para confirmar que se quiere eliminar el servicio para evitar que se elimine por error
    let mensaje = "¿Estás seguro de que quieres eliminar el servicio <strong>" + servicio.id + "</strong> con nombre:  <strong>" + servicio.nombres + "</strong>?";
    document.getElementById("modalDelContentServicio").innerHTML = "<p>" + mensaje + "</p>";
    let eliminarModal = new bootstrap.Modal(document.getElementById("delModalServicio"));
    eliminarModal.show();
    // Y creamos un EventListener para capturar cuando se le de al boton de confirmar eliminacion
    document.querySelector("#delModalServicio").addEventListener("click", async function (oEvento) {
        let boton = oEvento.target.closest("button");

        if (boton) {
            // Si efectivamente se quiere eliminar el servicio
            if (oEvento.target.id == "btnEliminarServicio") {
                // Primero se oculta el modal de confirmacion para evitar que se solapen modales
                eliminarModal.hide();
              if (servicio.ids != null) {
                    let respuesta = await oProyecto.eliminarServicio(servicio.ids);
                   
                        document.getElementById("modalInfoContentServicio").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                        let infoModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
                        infoModal.show();
                        document.querySelector("#contenidoListarServiciosporProyecto").classList.remove("d-block");
                        document.querySelector("#contenidoListarServiciosporProyecto").classList.add("d-none");
                        frmBuscarServicio.reset();
                    
                }
            }
        }

    });
}

// funcion que procesa la modificacion de un servicio (Angel)
async function procesarModificarServicio(servicio) {
    // Primero se crea un formulario con los elementos del servicio seleccionados para que sepa lo que cambiar.
  let  ServicioaComprobar = new Servicio(servicio.ids, servicio.nombres, servicio.descripcions, servicio.precios);
    let formulario = "";
    formulario += "<label class='col-xs-4 control-label' for='txtModificarServicioId'>Id:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarServicioId' name='txtModificarServicioId' placeholder='nombre' class='form-control input-md' type='text' value='" + servicio.ids + "' disabled>";
    formulario += "</div>";
    formulario += "<label class='col-xs-4 control-label' for='txtModificarServicioNombre'>Nombre:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarServicioNombre' name='txtModificarServicioNombre' placeholder='Nombre' class='form-control input-md' type='text' value='" + servicio.nombres + "'>";
    formulario += "</div>";
    formulario += "<label class='col-xs-4 control-label' for='txtModificarServicioDescripcion'>Descripcion:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarServicioDescripcion' name='txtModificarServicioDescripcion' placeholder='Descripcion' class='form-control input-md' type='text' value='" + servicio.descripcions + "'>";
    formulario += "</div>";
    formulario += "<label class='col-xs-4 control-label' for='txtModificarServicioprecio'>Precio:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarServicioprecio' name='txtModificarServicioprecio' placeholder='precio' class='form-control input-md' type='number' value='" + servicio.precios+ "'>";
    formulario += "</div>";
   
    // Se muestra el formulario
    document.getElementById("modalModContentServicio").innerHTML = formulario;
    let formularioModServicioModal = new bootstrap.Modal(document.getElementById("modModalServicio"));
    formularioModServicioModal.show();

    // Y nuevamente creamos un EventListener para los botones del formulario
    document.querySelector("#modModalServicio").addEventListener("click", async function (oEvento) {
        let boton = oEvento.target.closest("button");

        if (boton) {
            // Si se le da al boton de modificar,
            if (oEvento.target.id == "btnModificarServicio") {
                // Recogemos los datos del formulario
                let idservicio = document.getElementById("txtModificarServicioId").value.trim();
                let nombreServicio = document.getElementById("txtModificarServicioNombre").value.trim();
                let descripcionServicio = document.getElementById("txtModificarServicioDescripcion").value.trim();
                let precioServicio = document.getElementById("txtModificarServicioprecio").value;

                let servicioAModificar = new Servicio(idservicio, nombreServicio, descripcionServicio, precioServicio);

                    // Entonces primero se oculta el formulario donde se han introducido las modificaciones del servicio
                    formularioModServicioModal.hide();
                    // Y se llama a la funcion que modifica el servicio
                    let respuesta = await oProyecto.modificarServicio(servicioAModificar);

                    // Se muestra el modal con la respuesta del servidor
                    document.getElementById("modalInfoContentServicio").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                    let infoModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
                    infoModal.show();

                    document.querySelector("#contenidoBusqueda").classList.remove("d-block");
                    document.querySelector("#contenidoBusqueda").classList.add("d-none");
                    frmListarServiciosPorProyecto.reset();
                    document.querySelector("#contenidoListarServiciosporProyecto").classList.remove("d-block");
                    document.querySelector("#contenidoListarServiciosporProyecto").classList.add("d-none");
                
            }
            // Si se le da al boton de cancelar, simplemente se oculta el modal con el formulario
            if (oEvento.target.id == "btnCancelarModificarServicio") {
                formularioModServicioModal.hide();
            }
        }
    });
}

    // funcion para validar el formulario de buscar servicio por nombre (ANGEL)
// Comprueba que el campo de nombre no esté vacío
function validarBuscarServicioPorNombre() {
    let nombreServicio = document.getElementById("txtBuscarServicioNombre");

    if (nombreServicio.value.trim() == "") {
        document.getElementById("modalInfoContentServicio").innerHTML = "<p>Por favor introduzca un nombre a buscar</p>";
        let errorModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
        errorModal.show();
        return false;
    }

    return true;
}



// funcion que procesa la busqueda de un servicio por nombre (Angel)
async function procesarBuscarServicioPorNombre() {
    if (validarBuscarServicioPorNombre()) {
        // Nuevamente se valida que se hayan introducido los datos necesarios y se obtienen las variables
        let nombreServicioABuscar = document.getElementById("txtBuscarServicioNombre").value.trim();
        let respuesta = await oProyecto.buscarServicioPorNombre(nombreServicioABuscar);
        // Si la respuesta del servidor es correcta, se crea la tabla con los datos obtenidos
        if (respuesta.ok) {
            let divResultado = document.getElementById("contenidoBusquedaServicioPorNombre");
            let resultado = "";
            let iconoGenero = "";
            resultado = "<table class='table table-striped'><thead><tr><th scope='col'>Id_Servicio</th><th scope='col'>Nombre</th><th scope='col'>Descripcion</th><th scope='col'>Precio</th><th scope='col'>Acciones</th></tr></thead><tbody class='table-group-divider'>";
            let mensajeProyecto = "";
            for (let i = 0; i < respuesta.datos.length; i++) {
                
               
                resultado += "<tr><th scope='row' class='align-middle'>" + respuesta.datos[i].ids + "</th><td class='align-middle'>" + respuesta.datos[i].nombres + "</td><td class='align-middle'>" + respuesta.datos[i].descripcions + "</td><td class='align-middle'>" + respuesta.datos[i].precios + "</td><td class='align-middle'><button type='button' class='btn btn-primary btn-sm mx-1' id='btnModificar' datos-servicio='" + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-pencil-square' id='lapiz'></i></button><button type='button' class='btn btn-danger btn-sm mx-1' id='btnEliminar' datos-servicio='" + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-trash3' id='basura'></i></button></td></tr>";
            }
            resultado += "</tbody></table>";
            // Se muestra el resultado en el html
            divResultado.innerHTML = resultado;
            frmBuscarServicio.reset();
            document.querySelector("#contenidoBusquedaServicioPorNombre").classList.remove("d-none");
            document.querySelector("#contenidoBusquedaServicioPorNombre").classList.add("d-block");
            // Y se añade un enento a la tabla para obtener donde haces click en los botones creados que modificaran o eliminaran un servicio
            divResultado.addEventListener("click", function (oEvento) {
                let boton = oEvento.target.closest("button");

                if (boton) {
                    // Recogemos los valores del boton que le pasamos previamente en la construccion de la tabla
                    let servicio = JSON.parse(boton.getAttribute("datos-servicio"));

                    // Y si el boton pulsado es el de modificar se llama a procesarModificarServicio pasandole el servicio guardado en el boton como parametro
                    if (oEvento.target.id == "lapiz" || oEvento.target.id == "btnModificar") {
                        procesarModificarServicio(servicio);
                    }
                    // Y si el boton pulsado es el de eliminar se llama a procesarEliminarServicio pasandole el servicio guardado en el boton como parametro
                    if (oEvento.target.id == "basura" || oEvento.target.id == "btnEliminar") {
                        procesarEliminarServicio(servicio);
                    }
                }
            });

        // Y si la respuesta del servidor no es correcta, se muestra un modal con el mensaje de error
        } else {
            document.getElementById("modalInfoContentServicio").innerHTML = "<p>" + respuesta.mensaje + "</p>";
            let infoModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
            infoModal.show();
            frmBuscarServicio.reset();
            document.querySelector("#contenidoBusquedaServicioPorNombre").classList.remove("d-block");
            document.querySelector("#contenidoBusquedaServicioPorNombre").classList.add("d-none");
        }

    }
}


async function  comprobarServicios_Proyectos(id_servicio,id_proyecto){
    let asignacion ;
    let respuesta = await oProyecto.comprobarServicios_Proyectos(id_servicio,id_proyecto);
    if(respuesta.datos.length!=0){
    if (respuesta.datos[0].id_Proyecto == id_proyecto && respuesta.datos[0].id_Servicio == id_servicio){
     asignacion =  false
   
    }}
    else{
        asignacion= true
    }

return asignacion;

}

async function procesarAsignarServicioProyecto() {
    let id_servicio = document.getElementById("optAsignarServicio").value;
   
    let id_proyecto = document.getElementById("optAsignarProyectos").value;

    if(id_proyecto == null || id_servicio==null){
        document.getElementById("modalInfoContentServicio").innerHTML = "<p>Por favor seleccione un proyecto y un servicio</p>";
        let errorModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
        errorModal.show();
        return false;
    }else{
        //comprobar si devuelve true
       
        
        if(await comprobarServicios_Proyectos(id_servicio,id_proyecto) == true){
            let respuesta = await oProyecto.asignarServicioProyecto(id_servicio, id_proyecto);
            document.getElementById("modalInfoContentServicio").innerHTML = "<p>" + respuesta.mensaje + "</p>";
            let infoModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
            infoModal.show();
            frmAsignarProyectoServicio.reset();
        }
        else{
            document.getElementById("modalInfoContentServicio").innerHTML = "<p>El servicio ya esta asignado a este proyecto</p>";
            let errorModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
            errorModal.show();
        }


    }
}

async function eliminarServicioProyecto(){
    let id_servicio = document.getElementById("optAsignarServicio").value;
   
    let id_proyecto = document.getElementById("optAsignarProyectos").value;

    if(id_proyecto == null || id_servicio==null){
        document.getElementById("modalInfoContentServicio").innerHTML = "<p>Por favor seleccione un proyecto y un servicio</p>";
        let errorModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
        errorModal.show();
        return false;
    }else{
        //comprobar si devuelve false
        let comprobacion = await comprobarServicios_Proyectos(id_servicio,id_proyecto)
        if(comprobacion == false){
            let respuesta = await oProyecto.eliminarServicioProyecto(id_servicio, id_proyecto);
            document.getElementById("modalInfoContentServicio").innerHTML = "<p>" + "proyecto eliminado correctamente" + "</p>";
            let infoModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
            infoModal.show();
            frmAsignarProyectoServicio.reset();
        }
        else{
            document.getElementById("modalInfoContentServicio").innerHTML = "<p>El Servicio no esta asignado a este proyecto</p>";
            let errorModal = new bootstrap.Modal(document.getElementById("infoModalServicio"));
            errorModal.show();
        }
    }

}
function mostrarListadoServicios() {
    open("listado_servicios.html", "_blank");
}

//--------------------------------------------------------------- APARTADOS FUNCIONES DE PEDRO ---------------------------------------------------------------

//DAR DE ALTA UN PROYECTO


function validarAltaProyecto() {
    let nombre = frmAgregarTipoServicio.txtAgregarTipoServicioNombre.value.trim();
    let tipo = frmAgregarTipoServicio.optListarProyectoPorTipoServicio.value.trim();
    let objetivo = frmAgregarTipoServicio.txtAgregarTipoServicioObjetivo.value.trim();
    let presupuesto = parseFloat(frmAgregarTipoServicio.txtAgregarTipoServicioPresupuesto.value.trim());

    let valido = true;
    let errores = "";

    // Verificamos que los campos no estén vacíos o que 'presupuesto' sea un número válido
    if (nombre.length == 0 || tipo.length == 0 || objetivo.length == 0 || isNaN(presupuesto) || presupuesto <= 0) {
        valido = false;
        errores += "Faltan datos por rellenar o el presupuesto no es válido.\n";
    }

    if (!valido) {
        alert(errores);
    }

    return valido;
}

async function procesarAltaProyecto() {
    if (validarAltaProyecto()) {
        // Obtener los valores del formulario
        let id = null;
        let nombre = document.getElementById("txtAgregarTipoServicioNombre").value.trim();
        let tipo = document.getElementById("optListarProyectoPorTipoServicio").value.trim();
        let objetivo = document.getElementById("txtAgregarTipoServicioObjetivo").value.trim();
        let presupuesto = parseFloat(document.getElementById("txtAgregarTipoServicioPresupuesto").value.trim());

        console.log("Datos enviados:");
        console.log({ nombre, tipo, objetivo, presupuesto });

        // Verificar que los valores no estén vacíos o indefinidos
        if (!nombre || !tipo || !objetivo || isNaN(presupuesto) || presupuesto <= 0) {
            console.log("Algún dato está vacío o indefinido");
            alert("Por favor, completa todos los campos correctamente.");
            return;
        }
        // Llamar a la función AltaProyecto sin pasar oProyecto como parámetro
        let respuesta = await oProyecto.AltaProyecto(new Proyectos(id, nombre, tipo, objetivo, presupuesto));

        alert(respuesta.mensaje);

        if (!respuesta.error) {
            document.getElementById("frmAgregarTipoServicio").reset();
            document.getElementById("frmAgregarTipoServicio").style.display = "none";
        }
    }
}


// BUSCAR UN PROYECTO POR NOMBRE

function validarBuscarProyectoPorNombre() {
    let nombreCliente = document.getElementById("txtBuscarProyecto");

    if (nombreCliente.value.trim() == "") {
        document.getElementById("modalInfoContentProyecto").innerHTML = "<p>Por favor introduzca un nombre a buscar</p>";
        let errorModal = new bootstrap.Modal(document.getElementById("infoModalLabelProyecto"));
        errorModal.show();
        return false;
    }

    return true;
}

async function procesarBuscarProyectoPorNombre() {
    if(validarBuscarProyectoPorNombre()){
        let nombreProyectoABuscar = document.getElementById("txtBuscarProyecto").value.trim();
        let respuesta = await oProyecto.BuscarProyectoPorNombre(nombreProyectoABuscar);
        if(respuesta.ok){

            let divResultado = document.getElementById("contenidoBusquedaProyecto");
            let resultado = "<table class='table table-striped'><thead><tr><th scope='col'>Id_Proyecto</th><th scope='col'>Nombre</th><th scope='col'>Tipo</th><th scope='col'>Objetivo</th><th scope='col'>Presupuesto</th><th scope='col'>Acción</th></tr></thead><tbody class='table-group-divider'>";
            for(let i = 0; i < respuesta.datos.length; i++){
                
                resultado += "<tr><th scope='row' class='align-middle'>" + respuesta.datos[i].id 
                + "</th><td class='align-middle'>" + respuesta.datos[i].nombre 
                + "</th><td class='align-middle'>" + respuesta.datos[i].tipo 
                + "</td><td class='align-middle'>" + respuesta.datos[i].objetivo 
                + "</td><td class='align-middle'>" + respuesta.datos[i].presupuesto 
                + "</td><td class='align-middle'><button type='button' class='btn btn-primary btn-sm mx-1' id='btnModificarProyecto' datos-proyecto='" 
                + JSON.stringify(respuesta.datos[i]) 
                + "'><i class='bi bi-pencil-square' id='lapiz'></i></button><button type='button' class='btn btn-danger btn-sm mx-1' id='btnEliminarProyecto' datos-proyecto='" 
                + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-trash3' id='basura'></i></button></td></tr>";
            }

            resultado += "</tbody></table>";
            divResultado.innerHTML = resultado;
            frmBuscarTipoServicio.reset();
            divResultado.addEventListener("click", function(oEvento){
                let boton = oEvento.target.closest("button");

                if(boton){
                    let proyecto = JSON.parse(boton.getAttribute("datos-proyecto"));
                    if(oEvento.target.id == "lapiz" || oEvento.target.id == "btnModificarProyecto"){
                        procesarModificarProyecto(proyecto);
                    }
                    if(oEvento.target.id == "basura" || oEvento.target.id == "btnEliminarProyecto"){
                        procesarEliminarProyecto(proyecto);
                    }
                }
            });

        } else {
            // Validar si respuesta.mensaje existe
            if (respuesta && respuesta.mensaje) {
                document.getElementById("modalInfoContentProyecto").innerHTML = "<p>" + respuesta.mensaje + "</p>";
            } else {
                document.getElementById("modalInfoContentProyecto").innerHTML = "<p>Ocurrió un error inesperado.</p>";
            }
        
            let infoModal = new bootstrap.Modal(document.getElementById("infoModalProyecto"));
            infoModal.show();
        
            // Validar si el formulario existe
            let formulario = document.getElementById("frmBuscarTipoServicio");
            if (formulario) {
                formulario.reset();
            }
        
            // Validar si contenidoBusquedaProyecto existe
            let contenidoBusqueda = document.querySelector("#contenidoBusquedaProyecto");
            if (contenidoBusqueda) {
                contenidoBusqueda.classList.remove("d-block");
                contenidoBusqueda.classList.add("d-none");
            }
        }
    }
    
}

async function procesarModificarProyecto(proyecto) {
    let tipoSeleccionado = "";
    if (proyecto.tipo === "Asesoría") {
        tipoSeleccionado += "<option value='Asesoría' selected>Asesoría</option>";
        tipoSeleccionado += "<option value='Auditoría'>Auditoría</option>";
        tipoSeleccionado += "<option value='Residencia'>Residencia</option>";
    } else if (proyecto.tipo === "Auditoría") {
        tipoSeleccionado += "<option value='Asesoría'>Asesoría</option>";
        tipoSeleccionado += "<option value='Auditoría' selected>Auditoría</option>";
        tipoSeleccionado += "<option value='Residencia'>Residencia</option>";
    } else {
        tipoSeleccionado += "<option value='Asesoría'>Asesoría</option>";
        tipoSeleccionado += "<option value='Auditoría'>Auditoría</option>";
        tipoSeleccionado += "<option value='Residencia' selected>Residencia</option>";
    }

    let formulario = "";
    formulario += "<label class='col-xs-4 control-label' for='txtModificarProyectoId'>Id:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarProyectoId' name='txtModificarProyectoId' class='form-control input-md' type='text' value='" + proyecto.id + "' disabled>";
    formulario += "</div>";

    formulario += "<label class='col-xs-4 control-label' for='txtModificarProyectoNombre'>Nombre:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarProyectoNombre' name='txtModificarProyectoNombre' class='form-control input-md' type='text' value='" + proyecto.nombre + "'>";
    formulario += "</div>";

    formulario += "<label class='col-xs-4 control-label' for='optListarProyectoPorTipoServicio'>Tipo:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<select name='optListarProyectoPorTipoServicio' id='optListarProyectoPorTipoServicio' class='form-select'>";
    formulario += tipoSeleccionado;
    formulario += "</select>";
    formulario += "</div>";

    formulario += "<label class='col-xs-4 control-label' for='txtModificarProyectoObjetivo'>Objetivo:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarProyectoObjetivo' name='txtModificarProyectoObjetivo' class='form-control input-md' type='text' value='" + proyecto.objetivo + "'>";
    formulario += "</div>";

    formulario += "<label class='col-xs-4 control-label' for='txtModificarProyectoPresupuesto'>Presupuesto:</label>";
    formulario += "<div class='col-xs-4'>";
    formulario += "<input id='txtModificarProyectoPresupuesto' name='txtModificarProyectoPresupuesto' class='form-control input-md' type='text' value='" + proyecto.presupuesto + "'>";
    formulario += "</div>";

    // Insertar el contenido en el modal
    document.getElementById("modalModContentProyecto").innerHTML = formulario;

    let formularioModProyectoModal = new bootstrap.Modal(document.getElementById("modModalProyecto"));
    formularioModProyectoModal.show();

    document.querySelector("#modModalProyecto").addEventListener("click", async function (oEvento) {
        let boton = oEvento.target.closest("button");

        if (boton) {
            if (oEvento.target.id === "btnModificarProyecto") {
                formularioModProyectoModal.hide();

                let idProyecto = document.getElementById("txtModificarProyectoId").value.trim();
                let nombreProyecto = document.getElementById("txtModificarProyectoNombre").value.trim();
                let tipoProyecto = document.getElementById("optListarProyectoPorTipoServicio").value.trim();
                let objetivoProyecto = document.getElementById("txtModificarProyectoObjetivo").value.trim();
                let presupuestoProyecto = parseFloat(document.getElementById("txtModificarProyectoPresupuesto").value.trim());

                let proyectoAModificar = new Proyectos(idProyecto, nombreProyecto, tipoProyecto, objetivoProyecto, presupuestoProyecto);

                formularioModProyectoModal.hide();

                let respuesta = await oProyecto.modificarProyecto(proyectoAModificar);

                document.getElementById("modalInfoContentProyecto").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                let infoModal = new bootstrap.Modal(document.getElementById("infoModalProyecto"));
                infoModal.show();

                document.querySelector("#contenidoBusquedaProyecto").classList.remove("d-block");
                document.querySelector("#contenidoBusquedaProyecto").classList.add("d-none");
                frmListarProyectoPorTipoServicio.reset();
                document.querySelector("#contenidoListarProyectos").classList.remove("d-block");
                document.querySelector("#contenidoListarProyectos").classList.add("d-none");
            }

            if (oEvento.target.id === "btnCancelarModificarProyecto") {
                formularioModProyectoModal.hide();
            }
        }
    });
}


async function procesarEliminarProyecto(proyecto){
    let mensaje = "¿Estás seguro de que quieres eliminar el proyecto <strong>" + proyecto.nombre + "</strong>  <strong>?";
    document.getElementById("modalDelContentProyecto").innerHTML = "<p>" + mensaje + "</p>";
    let eliminarModal = new bootstrap.Modal(document.getElementById("delModalProyecto"));
    eliminarModal.show();
    document.querySelector("#delModalProyecto").addEventListener("click", async function(oEvento){
        let boton = oEvento.target.closest("button");

        if (boton) {
            if (oEvento.target.id == "btnEliminarProyecto") {
                let respuesta = await oProyecto.eliminarProyecto(proyecto.id);
                eliminarModal.hide();
                document.getElementById("modalInfoContentProyecto").innerHTML = "<p>" + respuesta.mensaje + "</p>";
                let infoModal = new bootstrap.Modal(document.getElementById("infoModalProyecto"));
                infoModal.show();
                document.querySelector("#contenidoBusquedaProyecto").classList.remove("d-block");
                document.querySelector("#contenidoBusquedaProyecto").classList.add("d-none");
                frmBuscarTipoServicio.reset();
            }
        }

    });
}

function validarListarProyectoPorTipo() {
    let tipoProyecto = document.getElementById("optListarProyectoTipo");
    if (tipoProyecto == "") {
        document.getElementById("modalInfoContentProyecto").innerHTML = "<p>Por favor seleccione un tipo</p>";
        let errorModal = new bootstrap.Modal(document.getElementById("infoModalProyecto"));
        errorModal.show();
        return false;
    }
    return true;
}

 async function procesarListarProyectoPorTipo() {

        // Obtener el valor seleccionado
        let tipoProyecto = document.getElementById("optListarProyectoTipo").value;

        // Solicitar al servidor
        let respuesta = await oProyecto.listarProyectoPorTipo(tipoProyecto);

        if (respuesta.ok) {
            let divResultado = document.getElementById("contenidoListarProyectos");
            let resultado = "";
            resultado = "<table class='table table-striped'><thead><tr><th scope='col'>Id_Proyecto</th><th scope='col'>Nombre</th><th scope='col'>Tipo</th><th scope='col'>Objetivo</th><th scope='col'>Presupuesto</th><th scope='col'>Acciones</th></tr></thead><tbody class='table-group-divider'>";

            for (let i = 0; i < respuesta.datos.length; i++) {
                resultado += "<tr><th scope='row' class='align-middle'>" 
                + respuesta.datos[i].id + "</th><td class='align-middle'>" 
                + respuesta.datos[i].nombre + "</td><td class='align-middle'>"
                + respuesta.datos[i].tipo + "</td><td class='align-middle'>" 
                + respuesta.datos[i].objetivo + "</td><td class='align-middle'>"
                + respuesta.datos[i].presupuesto + "</td><td class='align-middle'><button type='button' class='btn btn-primary btn-sm mx-1' id='btnModificarProyecto' datos-proyecto='" 
                + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-pencil-square' id='lapiz'></i></button><button type='button' class='btn btn-danger btn-sm mx-1' id='btnEliminarProyecto' datos-proyecto='" 
                + JSON.stringify(respuesta.datos[i]) + "'><i class='bi bi-trash3' id='basura'></i></button></td></tr>";
            }

            resultado += "</tbody></table>";

            divResultado.innerHTML = resultado;
            divResultado.classList.remove("d-none");
            divResultado.classList.add("d-block");
            divResultado.addEventListener("click", function (oEvento) {
                let boton = oEvento.target.closest("button");

                if (boton) {
                    let proyecto = JSON.parse(boton.getAttribute("datos-proyecto"));
                    if (oEvento.target.id === "btnModificarProyecto") {
                        procesarModificarProyecto(proyecto);
                    } else if (oEvento.target.id === "btnEliminarProyecto") {
                        procesarEliminarProyecto(proyecto);
                    }
                }
            });
        } else {
            // Mostrar mensaje de error
            document.getElementById("modalInfoContentProyecto").innerHTML = "<p>" + respuesta.mensaje + "</p>";
            let infoModal = new bootstrap.Modal(document.getElementById("infoModalProyecto"));
            infoModal.show();
            frmListarProyectoPorTipoServicio.reset();
            document.querySelector("#contenidoListarProyectos").classList.remove("d-block");
            document.querySelector("#contenidoListarProyectos").classList.add("d-none");
        }
    
}


 async function mostrarTodosLosProyectos() {
    open("listado_tipos.html", "_blank");
}



