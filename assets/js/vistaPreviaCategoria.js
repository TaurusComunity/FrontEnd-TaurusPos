// Función para capitalizar la primera letra
function capitalizeFirstLetter(str) {
  return str.length > 0
    ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    : str;
}

// Función para actualizar la vista previa de forma dinámica
function updatePreview() {
  // Selecciona todos los inputs y sus correspondientes elementos de vista previa
  const fields = [
    { input: "idCategoria", preview: "idCategoriaPreview" },
    { input: "nombreCategoria", preview: "nombreCategoriaPreview" },
    { input: "descripcionCategoria", preview: "descripcionCategoriaPreview" },
    { input: "idSubcategoria", preview: "idSubcategoriaPreview" },
    { input: "nombreSubcategoria", preview: "nombreSubcategoriaPreview" },
    {
      input: "descripcionSubcategoria",
      preview: "descripcionSubcategoriaPreview",
    },
  ];

  // Actualiza cada campo de vista previa
  fields.forEach(({ input, preview }) => {
    const inputValue = document.getElementById(input)?.value || "";
    document.getElementById(preview).textContent =
      capitalizeFirstLetter(inputValue);
  });
}

// Añadir listeners de forma dinámica
[
  "idCategoria",
  "nombreCategoria",
  "descripcionCategoria",
  "idSubcategoria",
  "nombreSubcategoria",
  "descripcionSubcategoria",
].forEach((id) => {
  document.getElementById(id)?.addEventListener("input", updatePreview);
});
