var Navbar = document.querySelector('#navId')
var footer = document.querySelector('#footer')

contenido.innerHTML +=
    `
<ul class="nav nav-tabs" id="navId" role="tablist">
        <li class="nav-item">
            <a href="#tab1Id" class="nav-link active" data-bs-toggle="tab" aria-current="page">Inicio</a>
        </li>
        
        <li class="nav-item">
            <a href="Curso/listarCurso.html" class="nav-link" data-bs-toggle="tab">Lista de curso</a>
        </li>
    </ul>
`

cuerpo.innerHTML +=
    `
    <div class="container">
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam fugit rem porro similique minima adipisci itaque accusantium libero? A mollitia, neque sunt praesentium saepe et ipsa velit odio est.
    </div>
    </div>
`

vFooter.innerHTML +=
    `<footer class="bg-dark py-5 mt-5">
<!-- place footer here -->
<div class="container text-light text-center">
    <p class="display-5 mb-3">Proyecto</p>
    <small class="text-white-50">&copy; Copyright by Proyecto</small>
</div>
</footer>`