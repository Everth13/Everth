
//Declaracion de variables u objetos
var contenidoTablaResultado = document.querySelector('#resultados');
//const myModal = new bootstrap.Modal(document.getElementById('modalId'));
//var formulario = document.getElementById('formulario');
var alertaC;
var alertaT;

function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//url de peticion de datos
        .then((respuesta) => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {
            steTabla(datosrepuesta.data)//lo envio para la funcion para darle tratamiento
            // console.log('Datos',datosrepuesta.data)//Muestra el resultado de la peticion
        })
        .catch(console.log)//muestra errores
}

function actualizarPagina() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }// fin de la función actualizar pagina

function desplegarAlerta(colorAlerta, textoAlerta) {
    //const mensajeAlerta = new bootstrap.Modal(document.getElementById('mensajeAlerta'));
    var mensajeAlerta = document.querySelector("#mensajeAlerta");
    //var alerta = '<div class="alert alert-' + colorAlerta + '" role="alert">' + textoAlerta + '</div>';
    var alerta = '<div class="alert alert-'+colorAlerta+' alert-dismissible fade show" role="alert">'
      +textoAlerta+'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="btnAlerta"></button></div>'
      alertaMensaje = new bootstrap.alert(alerta);
      alertaMensaje.show();
      alerta.onclick=() => actualizarPagina();
    
    //mensajeAlerta.innerHTML='<div class="alert alert-'+colorAlert+'" role="alert">'+textoAlerta+'</div>';
    //mensajeAlerta.show();
}
  
function setTabla(datos) {
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
    const myModal = new boobstrap.Modal(document.getElementById('modalEdit'));
    myModal.show();
    document.getElementById('nombreC').value = nombre;
    document.getElementById('descripcionC').value = descripcion;
    document.getElementById('tiempoC').value = tiempo;
    document.getElementById('usuarioC').value = usuario;

    var formulario = document.getElementById('formEditar');
    formulario.addEventListener('submit', function (e){
        var datosEnviar = {
            id: id,
            nombre: document.getElementById('nombreC').value,
            descripcion: document.getElementById('descripcionC').value,
            tiempo: document.getElementById('tiempoC').value,
            usuario: document.getElementById("usuarioC").value
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


function eliminar(id, nombre) {
    const modalDel = new boobstrap.Modal(document.getElementById('modalEliminar'));
    modalDel.show();
    document.getElementById('idElim').value = id;
    document.getElementById('nombreElim').value = nombre;
    alertaC = 'danger';
    alertaT = 'El curso se elimino correctamente';
    
    var formulario = document.getElementById('formBorrar');
    formulario.addEventListener('submit', function (e) {

    var datosEnviar = {
      id: id,
    }

    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php", {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json()) //recibe los datos em formato json
      .then((datosrespuesta) => {
        //lo envio a la funcion de abajo
        console.log('Datos', datosrespuesta.data);
      })
      e.preventDefault();
      actualizarPagina();
    
    alert('El curso se eliminó correctamente')
  })
}

function crear(){
    const myModal = new boobstrap.Modal(document.getElementById('modalCrear'));
    myModal.show();

    var formulario = document.getElementById('formCrear');
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        
        var datosEnviar = {
            nombre: document.getElementById('crNombre').value,
            descripcion: document.getElementById('crDescripcion').value,
            tiempo: document.getElementById('crTiempo').value,
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

function detalles(id, nombre, descripcion, tiempo, usuario){
    const myModal = new boobstrap.Modal(document.getElementById('formDet'));
    myModal.show();
    document.getElementById('detId').value = id;
    document.getElementById('detNombre').value = nombre;
    document.getElementById('detDescripcion').value = descripcion;
    document.getElementById('deTiempo').value = tiempo;
    document.getElementById('detUsuario').value = usuario;
}

cargarDatos();