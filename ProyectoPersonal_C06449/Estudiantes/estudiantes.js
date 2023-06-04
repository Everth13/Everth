//Variables
var contenidoTablaResultado = document.querySelector("#resultados");
var contenidoListaGrupos = document.querySelector("#listaGrupos");
var contenidoEditarListaGrupos = document.querySelector("#editarListaGrupos");
var contenidoListaSexo = document.querySelector("#editarSexo");

function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php")
        .then((respuesta) => respuesta.json())
        .then((datosrespuesta) => {
            setTable(datosrespuesta.data); 
        })
        .catch(console.log);
}

function setTable(datos) {
    console.log("Datos", datos);

    for (const valor of datos) {
        console.log("valor", valor);
        contenidoTablaResultado.innerHTML += `
      <tr class="table-dark">
        <td>${valor.id}</td>
        <td>${valor.cedula}</td>
        <td>${valor.correoelectronico}</td>
        <td>${valor.telefono}</td>
        <td>${valor.telefonocelular}</td>
        <td>${valor.fechanacimiento}</td>
        <td>${valor.sexo}</td>
        <td>${valor.direccion}</td>
        <td>${valor.nombre}</td>
        <td>${valor.apellidopaterno}</td>
        <td>${valor.apellidomaterno}</td>
        <td>${valor.nacionalidad}</td>        
        <td>${valor.usuario}</td>
        <td>
          <button type="button" class="btn btn-success" onclick="detalles('${valor.id}',
          '${valor.cedula}','${valor.correoelectronico}','${valor.telefono}',
          '${valor.telefonocelular}','${valor.fechanacimiento}','${valor.sexo}',
          '${valor.direccion}','${valor.nombre}','${valor.apellidopaterno}'
          ,'${valor.apellidomaterno}','${valor.nacionalidad}','${valor.idCarreras}'
          ,'${valor.usuario}')">Ver detalles</button>||
          <button type="button" class="btn btn-primary" onclick="editar('${valor.id}',
          '${valor.cedula}','${valor.correoelectronico}','${valor.telefono}',
          '${valor.telefonocelular}','${valor.fechanacimiento}','${valor.sexo}',
          '${valor.direccion}','${valor.nombre}','${valor.apellidopaterno}'
          ,'${valor.apellidomaterno}','${valor.nacionalidad}','${valor.idCarreras}'
          ,'${valor.usuario}')">Editar</button>|| 
          <button type="button" class="btn btn-danger"  onclick="borrar('${valor.id}','${valor.cedula}','${valor.nombre}' )">Eliminar</button>   
        </td>
      </tr>`;
    }

}
//Funciones para pintar los datos de los grupos disponibles
function pintarSelect() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php")
        .then((respuesta) => respuesta.json())
        .then((datosrespuesta) => {
            setSelect(datosrespuesta.data); 
        })
        .catch(console.log);
}
function setSelect(datos) {
    for (const valor of datos) {
        contenidoListaGrupos.innerHTML +=
            `
    <option value="${valor.id}">${valor.nombre}</option>
    `;
    }
    for (const valor of datos) {
        contenidoEditarListaGrupos.innerHTML +=
            `
    <option value="${valor.id}">${valor.nombre}</option>
    `;
    }
    setSexosNuevos();
}
//función para pintar los sexos que no existen el select de sexo
function setSexoNuevo() {
    var sexo = document.getElementById('editarSexo').value;
    if (sexo != 'Femenino' && sexo != 'Masculino' && sexo != 'PrefiereNo') {
        contenidoListaSexo.innerHTML +=
            `
    <option value="${sexo}">${sexo}</option>
    `
    }
}

function actualizarPagina() {
    setTimeout(() => {
        window.location.reload();
    }, 100);
}// fin de la función actualizar pagina


////////////////Funciones CRUD


//Inicio de la funcion crear
function crear() {
    const modalCreate = new bootstrap.Modal(document.getElementById('modalCrear'));
    modalCreate.show();

    var formulario = document.getElementById('formCrear');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        var datosEnviar = {
            cedula: document.getElementById('crearCedula').value,
            correoelectronico: document.getElementById('crearCorreo').value,
            telefono: document.getElementById('crearTelefono').value,
            telefonocelular: document.getElementById('crearTelefonoCel').value,
            fechanacimiento: document.getElementById('crearFechaNac').value,
            sexo: document.getElementById('crearSexo').value,
            direccion: document.getElementById('crearDireccion').value,
            nombre: document.getElementById('crearNombre').value,
            apellidopaterno: document.getElementById('crearApPaterno').value,
            apellidomaterno: document.getElementById('crearApMaterno').value,
            nacionalidad: document.getElementById('crearNacionalidad').value,
            idCarreras: document.getElementById('crearGrupo').value,
            usuario: 'Everth'
        }
        console.log(datosEnviar);

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php", {
            method: 'POST',
            body: JSON.stringify(datosEnviar)
        })
            .then((respuesta) => respuesta.json())
            .then((datosrespuesta) => {

            })
            .catch(console.log);
        alert('Estudiante registrado correctamente');
        actualizarPagina();
    })
}// fin de la función crear

//Inicio de la funcion detalles
function detalles(
    id, cedula, correoelectronico,
    telefono, telefonocelular,
    fechanacimiento, sexo, direccion,
    nombre, apellidopaterno, apellidomaterno,
    nacionalidad, idCarreras, usuario
) {

    const myModal = new bootstrap.Modal(document.getElementById('modalDetalles'));
    myModal.show();
    document.getElementById('detalleId').value = id;
    document.getElementById('detalleCedula').value = cedula;
    document.getElementById('detalleCorreo').value = correoelectronico;
    document.getElementById('detalleTelefono').value = telefono;
    document.getElementById('detalleTelefonoCel').value = telefonocelular;
    document.getElementById('detalleFechaNac').value = fechanacimiento;
    document.getElementById('detalleSexo').value = sexo;
    document.getElementById('detalleDireccion').value = direccion;
    document.getElementById('detalleNombre').value = nombre;
    document.getElementById('detalleApPaterno').value = apellidopaterno;
    document.getElementById('detalleApMaterno').value = apellidomaterno;
    document.getElementById('detalleNacionalidad').value = nacionalidad;
    document.getElementById('detalleGrupo').value = idCarreras;
    document.getElementById('detalleUsuario').value = usuario;
}
//Fin de la funcion detalles

//Inicio de la funcion editar
function editar(
    id, cedula, correoelectronico,
    telefono, telefonocelular,
    fechanacimiento, sexo, direccion,
    nombre, apellidopaterno, apellidomaterno,
    nacionalidad, idCarreras, usuario,
) {
    const modalEdit = new bootstrap.Modal(document.getElementById('modalEditar'));
    modalEdit.show();
    document.getElementById('editarId').value = id;
    document.getElementById('editarCedula').value = cedula;
    document.getElementById('editarCorreo').value = correoelectronico;
    document.getElementById('editarTelefono').value = telefono;
    document.getElementById('editarTelefonoCel').value = telefonocelular;
    document.getElementById('editarFechaNac').value = fechanacimiento;
    document.getElementById('editarSexo').value = sexo;
    document.getElementById('editarDireccion').value = direccion;
    document.getElementById('editarNombre').value = nombre;
    document.getElementById('editarApPaterno').value = apellidopaterno;
    document.getElementById('editarApMaterno').value = apellidomaterno;
    document.getElementById('editarNacionalidad').value = nacionalidad;
    document.getElementById('editarGrupo').value = idCarreras;
    document.getElementById('editarUsuario').value = usuario;

    var formulario = document.getElementById('formEditar');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        var datosEnviar = {
            id: document.getElementById('editarId').value,
            cedula: document.getElementById('editarCedula').value,
            correoelectronico: document.getElementById('editarCorreo').value,
            telefono: document.getElementById('editarTelefono').value,
            telefonocelular: document.getElementById('editarTelefonoCel').value,
            fechanacimiento: document.getElementById('editarFechaNac').value,
            sexo: document.getElementById('editarSexo').value,
            direccion: document.getElementById('editarDireccion').value,
            nombre: document.getElementById('editarNombre').value,
            apellidopaterno: document.getElementById('editarApPaterno').value,
            apellidomaterno: document.getElementById('editarApMaterno').value,
            nacionalidad: document.getElementById('editarNacionalidad').value,
            idCarreras: document.getElementById('editarGrupo').value,
            usuario: document.getElementById('editarUsuario').value
        }

        console.log(datosEnviar);

        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php", {
            method: 'POST',
            body: JSON.stringify(datosEnviar)
        })
            .then((respuesta) => respuesta.json()) 
            .then((datosrespuesta) => {
            })
            .catch(console.log);
        alert('Estudiante actualizado correctamente');
        actualizarPagina();
    })

}
//Fin de la funcion editar

//Inicio de la funcion eliminar
function borrar(id, cedula, nombre) {
    const modalDelete = new bootstrap.Modal(document.getElementById('modalBorrar'));
    modalDelete.show();
    document.getElementById('borrarId').value = id;
    document.getElementById('borrarCedula').value = cedula;
    document.getElementById('borrarNombre').value = nombre;
  
    var formulario = document.getElementById('formularioBorrar');
      formulario.addEventListener('submit', function (e) {
  
    var datosEnviar = {
         id: id
       }
  
       fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php", {
         method: 'POST',
        body: JSON.stringify(datosEnviar)
       })
         .then((respuesta) => respuesta.json()) 
         .then((datosrespuesta) => {
         console.log('Datos', datosrespuesta.data);
       })
       e.preventDefault();
       actualizarPagina();
  
       alert('El estudiante se eliminó correctamente')
     })
  
  }
//Fin de la funcion eliminar
cargarDatos();
pintarSelect();