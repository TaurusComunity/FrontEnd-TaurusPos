// Función para capitalizar la primera letra
const capitalizeFirstLetter = str =>
    str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str;

// Configuración dinámica para actualizar la vista previa
function updatePreview() {
    // Lista de campos de texto y select para actualizar dinámicamente
    const fields = [
        { input: 'idProducto', preview: 'idProductoPreview' },
        { input: 'nombreProducto', preview: 'nombreProductoPreview' },
        { input: 'categoriaProducto', preview: 'categoriaProductoPreview' },
        { input: 'subcategoriaProducto', preview: 'subcategoriaProductoPreview' },
        { input: 'descripcionProducto', preview: 'descripcionProductoPreview' },
        { input: 'stockProducto', preview: 'stockProductoPreview' },
        { input: 'valorUnidadMedidaProducto', preview: 'valorUnidadMedidaProductoPreview' },
        { input: 'precioFinalProducto', preview: 'precioFinalProductoPreview' },
        { input: 'loteProducto', preview: 'loteProductoPreview' },
        { input: 'fechaVencimientoProducto', preview: 'fechaVencimientoProductoPreview' },
        { input: 'registroSanitarioProducto', preview: 'registroSanitarioProductoPreview' },
        { input: 'proveedorProducto', preview: 'proveedorProductoPreview' }
    ];

    // Actualizar dinámicamente los valores en la vista previa
    fields.forEach(({ input, preview }) => {
        const value = document.getElementById(input)?.value || '';
        document.getElementById(preview).textContent = capitalizeFirstLetter(value);
    });

    // Actualizar la unidad de medida seleccionada
    const selectedUnidad = document.querySelector('input[name="unidadMedidaProducto"]:checked')?.value || '';
    document.getElementById('unidadMedidaProductoPreview').textContent = capitalizeFirstLetter(selectedUnidad);
}

// Asignar listeners de manera dinámica
[
    'idProducto',
    'nombreProducto',
    'categoriaProducto',
    'subcategoriaProducto',
    'descripcionProducto',
    'stockProducto',
    'valorUnidadMedidaProducto',
    'precioFinalProducto',
    'loteProducto',
    'fechaVencimientoProducto',
    'registroSanitarioProducto',
    'proveedorProducto'
].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updatePreview);
});

// Listeners para radio buttons de unidad de medida
document.querySelectorAll('input[name="unidadMedidaProducto"]').forEach(input =>
    input.addEventListener('change', updatePreview)
);
