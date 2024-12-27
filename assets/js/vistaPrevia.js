// Función para capitalizar la primera letra
function capitalizeFirstLetter(str) {
    if (str.length > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    return str;
}

// Se agregan los event listeners a los radio buttons de unidad de medida
document.querySelectorAll('input[name="unidadMedidaProducto"]').forEach(function(input) {
    input.addEventListener('change', updatePreview);
});

document.getElementById('idProducto').addEventListener('input', updatePreview);
document.getElementById('nombreProducto').addEventListener('input', updatePreview);
document.getElementById('categoriaProducto').addEventListener('change', updatePreview);
document.getElementById('subcategoriaProducto').addEventListener('change', updatePreview);
document.getElementById('descripcionProducto').addEventListener('input', updatePreview);
document.getElementById('stockProducto').addEventListener('input', updatePreview);
document.getElementById('valorUnidadMedidaProducto').addEventListener('input', updatePreview);
document.getElementById('precioFinalProducto').addEventListener('input', updatePreview);
document.getElementById('loteProducto').addEventListener('input', updatePreview);
document.getElementById('fechaVencimientoProducto').addEventListener('input', updatePreview);
document.getElementById('registroSanitarioProducto').addEventListener('input', updatePreview);
document.getElementById('proveedorProducto').addEventListener('input', updatePreview);

function updatePreview() {
    // Actualiza los valores de la vista previa para todos los campos
    document.getElementById('idProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('idProducto').value);
    document.getElementById('nombreProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('nombreProducto').value);
    document.getElementById('categoriaProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('categoriaProducto').value);
    document.getElementById('subcategoriaProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('subcategoriaProducto').value);
    document.getElementById('descripcionProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('descripcionProducto').value);
    document.getElementById('stockProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('stockProducto').value);
    document.getElementById('valorUnidadMedidaProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('valorUnidadMedidaProducto').value);
    document.getElementById('precioFinalProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('precioFinalProducto').value);
    document.getElementById('loteProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('loteProducto').value);
    document.getElementById('fechaVencimientoProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('fechaVencimientoProducto').value);
    document.getElementById('registroSanitarioProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('registroSanitarioProducto').value);
    document.getElementById('proveedorProductoPreview').textContent = capitalizeFirstLetter(document.getElementById('proveedorProducto').value);

    // Actualiza el valor de la unidad de medida seleccionada
    const selectedUnidad = document.querySelector('input[name="unidadMedidaProducto"]:checked')?.value;
    if (selectedUnidad) {
        document.getElementById('unidadMedidaProductoPreview').textContent = capitalizeFirstLetter(selectedUnidad);
    }
}
