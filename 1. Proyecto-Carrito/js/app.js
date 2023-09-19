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
        console.log(e.target)
    }
}