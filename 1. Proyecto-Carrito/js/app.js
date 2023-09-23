// Variables
const d = document
const carrito = d.querySelector('#carrito')
const contenedorCarrito = d.querySelector('#lista-carrito tbody')
const listaCursos = d.querySelector('#lista-cursos')
const vaciarCarritoBtn = d.querySelector('#vaciar-carrito')
let articulosCarrito = []

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
    // aquí creamos un Objeto con el contenido del curso actual
    const infoCurso = {
        id: curso.querySelector('.agregar-carrito').dataset.id,                                                                       
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        cantidad: 1
    }
    // Ahora veremos como Agregar los elementos al Carrito de Compras, para eso creamos un array vacío

    /* aqui creamos una copia de articulosCarrito, eso xq la 1ra vez estará vacío, pero si agregamos un articulo éste se agregará al Carrito de Compras, y si damos clic a otro 'Agregar al
     Carrito', aún se requiere la referencia del articulo anterior, entonces tengo q ir copiando mi arreglo anterior para no perder los articulos q fui agregando previamente */
    articulosCarrito = [...articulosCarrito, infoCurso]
    console.log(articulosCarrito)

    carritoHTML()
}

// Muestra  el Carrito de Compras en el HTML
/* esta función va a generar el HTML basado en este carrito de compras */
function carritoHTML () {

    // Limpiar el HTML previo xq se duplica
    limpiarHTML()

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const row = d.createElement('tr')
        row.innerHTML = `
            <td><img src=${curso.imagen} alt='imagen' /></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
        `
        // Agrega el HTML del carrito en el body pero no limpia los previos
        contenedorCarrito.appendChild(row)
    })
}

// Elimina los cursos del tbody
function limpiarHTML () {
    // forma lenta
    // contenedorCarrito.innerHTML = ''

    // forma rápida y óptima
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}