
//Declaracion de variables u objetos
var contenidoTablaResultado = document.querySelector('#resultados');
var alertaC;
var alertaT;

function cargarDatos() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")
    .then((respuesta) => respuesta.json())
    .then((datosrepuesta) => {
      setTable(datosrepuesta.data)
    })
    .catch(console.log)
}

function actualizarPagina() {
  setTimeout(() => {
    window.location.reload();
  }, 100);
}

function desplegarAlerta(colorAlerta, textoAlerta) {
  var mensajeAlerta = document.querySelector("#mensajeAlerta");
  var alerta = '<div class="alert alert-' + colorAlerta + ' alert-dismissible fade show" role="alert">'
    + textoAlerta + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="btnAlerta"></button></div>'
  alertaMensaje = new bootstrap.alert(alerta);
  alertaMensaje.show();
  alerta.onclick = () => actualizarPagina();
}

function setTable(datos) {
  console.log('datos', datos);
  for (const valor of datos) {
    contenidoTablaResultado.innerHTML += `
            <tr class="table-primary" >
                <td scope="row">${valor.id}</td>
                <td>${valor.nombre}</td>
                <td>${valor.descripcion}</td>
                <td>${valor.tiempo}</td>
                <td>${valor.usuario}</td>
                         
                <td>
                <button type="button" class="btn btn-success" onclick="detalles('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Ver detalles</button>||
                <button type="button" class="btn btn-primary" onclick="editar('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Editar</button>|| 
                <button type="button" class="btn btn-danger" onclick="borrar('${valor.id}','${valor.nombre}' )">Borrar</button>   
                </td>
            </tr>`;
  }
}

function editar(id, nombre, descripcion, tiempo, usuario) {
  const myModal = new boobstrap.Modal(document.getElementById('modalEditar'));
  myModal.show();
  document.getElementById('editarNombre').value = nombre;
  document.getElementById('editarDescripcion').value = descripcion;
  document.getElementById('editarTiempo').value = tiempo;
  document.getElementById('editarUsuario').value = usuario;

  var formulario = document.getElementById('formularioEditar');
  formulario.addEventListener('submit', function (e) {
    var datosEnviar = {
      id: id,
      nombre: document.getElementById('editarNombre').value,
      descripcion: document.getElementById('editarDescripcion').value,
      tiempo: document.getElementById('editarTiempo').value,
      usuario: document.getElementById("editarUsuario").value
    }
    console.log(datosEnviar);
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php", {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json())
      .then((datosrepuesta) => {
      })
      .catch(console.log);
    e.preventDefault();
    actualizarPagina();
  })

}

function borrar(id, nombre) {
  const modalDel = new boobstrap.Modal(document.getElementById('modalBorrar'));
  modalDel.show();
  document.getElementById('borrarId').value = id;
  document.getElementById('borrarNombre').value = nombre;
  alertaC = 'danger';
  alertaT = 'El curso se elimino correctamente';

  var formulario = document.getElementById('formularioBorrar');
  formulario.addEventListener('submit', function (e) {

    var datosEnviar = {
      id: id,
    }

    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php", {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {
        console.log('Datos', datosrespuesta.data);
      })
    e.preventDefault();
    actualizarPagina();

    alert('El curso se eliminó correctamente')
  })
}

function crear() {
  const myModal = new boobstrap.Modal(document.getElementById('modalCrear'));
  myModal.show();

  var formulario = document.getElementById('formularioCrear');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datosEnviar = {
      nombre: document.getElementById('crearNombre').value,
      descripcion: document.getElementById('crearDescripcion').value,
      tiempo: document.getElementById('crearTiempo').value,
      usuario: 'Everth'
    }
    console.log(datosEnviar);
    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php", {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json())
      .then((datosrepuesta) => {
      })
      .catch(console.log);
    alert('Curso creado');
    actualizarPagina();
  })
}

function detalles(id, nombre, descripcion, tiempo, usuario) {
  const myModal = new boobstrap.Modal(document.getElementById('modalDetalles'));
  myModal.show();
  document.getElementById('detallesId').value = id;
  document.getElementById('detallesNombre').value = nombre;
  document.getElementById('detallesDescripcion').value = descripcion;
  document.getElementById('detallesTiempo').value = tiempo;
  document.getElementById('detallesUsuario').value = usuario;
}

cargarDatos();