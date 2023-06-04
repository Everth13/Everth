var Navbar = document.querySelector('#navId')
var footer = document.querySelector('#footer')

contenido.innerHTML +=
  `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/ProyectoPersonal_C06449/Index.html">ApiPHP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav">
          
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal_C06449/Curso/listarCurso.html">Cursos</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal_C06449/Estudiantes/listarEstudiantes.html">Estudiantes</a>
              </li>

              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal_C06449/Profesores/Profesores.html">Profesores</a>
              </li>

              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal_C06449/Grupos/Grupos.html">Grupos</a>
              </li>

              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/ProyectoPersonal_C06449/Usuarios/Usuarios.html">Usuarios</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            `;

cuerpo.innerHTML +=
  `
<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, repudiandae sunt? Mollitia ratione, quaerat
        dolore omnis dolorum temporibus numquam soluta? Laborum eum repellendus iusto vel delectus voluptate, mollitia
        quasi reiciendis!
    </div>
`

vFooter.innerHTML +=
  `<footer class="bg-dark py-5 mt-5">
<!-- place footer here -->
<div class="container text-light text-center">
    <p class="display-5 mb-3">Proyecto Api PHP</p>
    <small class="text-white-50">&copy; Copyright by C06449</small>
</div>
</footer>`;