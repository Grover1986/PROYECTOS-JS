// Variables
const d = document
const carrito = d.querySelector('#carrito')
const contenedorCarrito = d.querySelector('#lista-carrito tbody')
const listaCursos = d.querySelector('#lista-cursos')
const vaciarCarritoBtn = d.querySelector('#vaciar-carrito')

// como tendremos varios eventListeners crearemos una función donde registremos todos nuestros eventListeners 
cargarEventListeners()

function cargarEventListeners () {
    // cuando agregas un Curso presionando 'Agregar al Carrito'
    listaCursos.addEventListener('click', agregarCurso)
}

// funciones
function agregarCurso (e) {
    // aqui usamos preventDefault para eliminar el comportamiento x defecto ya q los anchor al no encontrar un id o selector direcionan hacia arriba
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la info del curso
function leerDatosCurso (curso) {
    console.log(curso)

    // aquí creamos un Objeto con el contenido del curso actual
    const infoCurso = {
        id: curso.querySelector('.agregar-carrito').dataset.id,                                                                       
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        cantidad: 1
    }
    console.log(infoCurso)
}