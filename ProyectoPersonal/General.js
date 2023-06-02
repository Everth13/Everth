var Navbar = document.querySelector('#navId')
var footer = document.querySelector('#footer')

contenido.innerHTML +=
  `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/ProyectoPersonal/Index.html">ApiPHP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav">
          
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal/Curso/listarCurso.html">Cursos</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal/Estudiantes/listarEstudiantes.html">Estudiantes</a>
              </li>

              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal/Profesores/Profesores.html">Profesores</a>
              </li>

              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal/Grupos/Grupos.html">Grupos</a>
              </li>

              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal/Usuarios/Usuarios.html">Usuarios</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            `;

cuerpo.innerHTML +=
  `
    <div class="container">
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam fugit rem porro similique minima adipisci itaque accusantium libero? A mollitia, neque sunt praesentium saepe et ipsa velit odio est.
    </div>
    </div>
`;

vFooter.innerHTML +=
  `<footer class="bg-dark py-5 mt-5">
<!-- place footer here -->
<div class="container text-light text-center">
    <p class="display-5 mb-3">Proyecto Api PHP</p>
    <small class="text-white-50">&copy; Copyright by C06449</small>
</div>
</footer>`;