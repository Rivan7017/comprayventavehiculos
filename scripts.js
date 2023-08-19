// Función para abrir el modal de promociones
function abrirModal() {
    modal.style.display = 'block';
}

// Función para cerrar el modal de promociones
function cerrarModal() {
    modal.style.display = 'none';
}

// Función para cargar productos desde archivo JSON
function cargarProductos() {
    const productosContainer = document.querySelector('.productos');

    // Simulación de carga de productos desde un archivo JSON
    const productosJSON = [
        {
            "imagen": "producto1.jpg",
            "nombre": "Producto 1",
            "descripcion": "Descripción del producto 1.",
            "precio": "$99.99"
        },
        {
            "imagen": "producto2.jpg",
            "nombre": "Producto 2",
            "descripcion": "Descripción del producto 2.",
            "precio": "$49.99"
        }
        // Agregar más productos aquí
    ];

    productosJSON.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">${producto.precio}</p>
                <button>Agregar al Carrito</button>
            </div>
        `;
        productosContainer.innerHTML += productoHTML;
    });
}

// Asignar eventos a los botones para abrir y cerrar el modal
const abrirModalBtn = document.getElementById('abrir-modal');
const cerrarModalBtn = document.getElementById('cerrar-modal');

abrirModalBtn.addEventListener('click', abrirModal);
cerrarModalBtn.addEventListener('click', cerrarModal);

// Asignar evento al hacer clic fuera del modal para cerrarlo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        cerrarModal();
    }
});

// Cargar productos al cargar la página
window.addEventListener('load', cargarProductos);
