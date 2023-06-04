//declaracion de variabe
var contenidoTablaResultado = document.querySelector("#resultados");

function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaUsuarios.php")
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
        <td>${valor.name}</td>
        <td>${valor.email}</td>
        <td>${valor.password}</td>
        <td>
          <button type="button" class="btn btn-success" onclick="detalles('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Ver detalles</button>||
          <button type="button" class="btn btn-primary" onclick="editar('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Editar</button>
        </td>
      </tr>`;
    }
}

//Funciones para pintar los datos de los grupos disponibles
function pintarSelect() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaUsuarios.php")
        .then((respuesta) => respuesta.json())
        .then((datosrespuesta) => {
            setSelect(datosrespuesta.data);
        })
        .catch(console.log);
}

function actualizarPagina() {
    setTimeout(() => {
        window.location.reload();
    }, 100);
}

function crear() {
    const modalCreate = new bootstrap.Modal(document.getElementById('modalCrear'));
    modalCreate.show();

    var formulario = document.getElementById('formularioCrear');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        var datosEnviar = {
            nombre: document.getElementById('crearNombre').value,
            password: document.getElementById('crearPassword').value,
            email: document.getElementById('crearEmail').value
        }

        console.log(datosEnviar);

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarUsuarios.php", {
            method: 'POST',
            body: JSON.stringify(datosEnviar)
        })
            .then((respuesta) => respuesta.json())
            .then((datosrespuesta) => {
            })
            .catch(console.log);
        alert('Usuario registrado correctamente');
        actualizarPagina();
    })
}

function editar(
    nombre, email, id,
) {
    const modalEdit = new bootstrap.Modal(document.getElementById('modalEditar'));
    modalEdit.show();
    document.getElementById('editarNombre').value = nombre;
    document.getElementById('editarEmail').value = email;
    document.getElementById('editarId').value = id;


    var formulario = document.getElementById('formularioEditar');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        var datosEnviar = {
            nombre: document.getElementById('editarNombre').value,
            email: document.getElementById('editarEmail').value,
            id: document.getElementById('editarId').value,

        }

        console.log(datosEnviar);

        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarUsuarios.php", {
            method: 'POST',
            body: JSON.stringify(datosEnviar)
        })
            .then((respuesta) => respuesta.json())
            .then((datosrespuesta) => {
            })
            .catch(console.log);
        alert('Usuario actualizado correctamente');
        actualizarPagina();
    })
}


function detalles(
    id, nombre, email,
) {

    const myModal = new bootstrap.Modal(document.getElementById('modalDetalles'));
    myModal.show();
    document.getElementById('detallesId').value = id;
    document.getElementById('detallesNombre').value = nombre;
    document.getElementById('detallesEmail').value = email;
}

cargarDatos();