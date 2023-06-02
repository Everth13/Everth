//declaracion de variabe
var contenidoTablaResultado = document.querySelector("#resultados");

function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")
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
        <td>${valor.nombre}</td>
        <td>
        <button type="button" class="btn btn-success" onclick="detalles('${valor.id}','${valor.nombre}')">Ver detalles</button>||
          <button type="button" class="btn btn-primary" onclick="editar('${valor.id}','${valor.nombre}')">Editar</button>|| 
          <button type="button" class="btn btn-danger" onclick="borrar('${valor.id}','${valor.nombre}' )">Borrar</button>   
        </td>
      </tr>`;
    }
}

function actualizarPagina() {
    setTimeout(() => {
        window.location.reload();
    }, 100);
}

function detalles(id, nombre) {

    const myModal = new bootstrap.Modal(document.getElementById('modalDetalles'));
    myModal.show();
    document.getElementById('detallesId').value = id;
    document.getElementById('detallesNombre').value = nombre;

}

function editar(id, nombre) {

    const modalEdit = new bootstrap.Modal(document.getElementById('modalEditar'));
    modalEdit.show();
    document.getElementById('editarId').value = id;
    document.getElementById('editarNombre').value = nombre;

    var formulario = document.getElementById('formularioEditar');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        var datosEnviar = {
            id: document.getElementById('editarId').value,
            nombre: document.getElementById('editarNombre').value,
        }

        console.log(datosEnviar);

        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php", {
            method: 'POST',
            body: JSON.stringify(datosEnviar)
        })
            .then((respuesta) => respuesta.json())
            .then((datosrespuesta) => {
            })
            .catch(console.log);
        alert('Grupo actualizado correctamente');
        actualizarPagina();
    })

}

function borrar(id, nombre) {

    const modalDelete = new bootstrap.Modal(document.getElementById('modalBorrar'));
    modalDelete.show();
    document.getElementById('borrarId').value = id;
    document.getElementById('borrarNombre').value = nombre;

    var formulario = document.getElementById('formularioBorrar');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        var datosEnviar = {
            id: id
        }

        console.log(datosEnviar);

        fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php", {
            method: 'POST',
            body: JSON.stringify(datosEnviar)
        })
            .then((respuesta) => respuesta.json())
            .then((datosrespuesta) => {
            })
            .catch(console.log);
        alert('Grupo borrado correctamente');
        actualizarPagina();
    })

}

function crear() {
    const modalCreate = new bootstrap.Modal(document.getElementById('modalCrear'));
    modalCreate.show();
  
    var formulario = document.getElementById('formularioCrear');
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
  
      var datosEnviar = {
        nombre: document.getElementById('crearNombre').value
      }
  
      console.log(datosEnviar);
  
      fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php", {
        method: 'POST',
        body: JSON.stringify(datosEnviar)
      })
        .then((respuesta) => respuesta.json())
        .then((datosrespuesta) => {

        })
        .catch(console.log);
      alert('Grupo registrado correctamente');
      actualizarPagina();
    })
  }

cargarDatos();