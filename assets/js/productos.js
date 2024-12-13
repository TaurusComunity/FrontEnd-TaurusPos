// Datos: una lista de productos simulados con propiedades personalizadas
const items = Array.from({ length: 20 }, (_, i) => ({
    name: `Producto ${i + 1}`,
    description: "Plato fuerte",
    image: "../assets/img/pasta.jpg",
    price: 18000 + i * 1000, // Precio dinámico
    quantity: 1, // Cantidad inicial
  }));
  
  // Variables de paginación
  const itemsPerPage = 6;
  let currentPage = 1;
  
  // Elementos del DOM
  const gridContainer = document.getElementById("grid-container");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const pageIndicator = document.getElementById("page-indicator");
  
  // Función para renderizar los productos
  function renderPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);
  
    // Limpiar el contenedor
    gridContainer.innerHTML = "";
  
    // Agregar los elementos
    pageItems.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "rounded-[16px] text-white";
  
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="w-full h-[150px] object-cover rounded-[8px] mb-4">
        <div class="flex justify-between items-center mb-2">
          <div>
            <h4 class="font-semibold text-[18px]">${item.name}</h4>
            <p class="font-light -mt-[8px]">${item.description}</p>
          </div>
          <div class="flex justify-center items-center rounded-sm border-[2px] border-blanco_opacidad w-[15px] h-[15px] p-[10px]">
            <span class="number">8</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <h5 class="number text-[22px] font-semibold">$ ${item.price.toLocaleString()}</h5>
          <div class="flex items-center justify-center gap-2 p-[7px] border-[2px] border-blanco_opacidad w-[80px] rounded-full">
            <button class="bg-rojo text-blanco px-2 py-1 rounded-full w-[20px] h-[20px] decrease flex justify-center items-center" data-index="${start + index}">
              <span class="material-symbols-rounded text-[20px]">remove</span>
            </button>
            <span class="quantity number">${item.quantity}</span>
            <button class="bg-rojo text-blanco px-2 py-1 rounded-full w-[20px] h-[20px] increase flex justify-center items-center" data-index="${start + index}">
              <span class="material-symbols-rounded text-[20px]">add</span>
            </button>
          </div>
        </div>
      `;
  
      gridContainer.appendChild(div);
    });
  
    // Agregar eventos a los botones de incremento y decremento
    addEventListeners();
  
    // Actualizar el indicador de página
    pageIndicator.textContent = `Página ${page}`;
    prevButton.disabled = page === 1;
    nextButton.disabled = page === Math.ceil(items.length / itemsPerPage);
  }
  
  // Función para agregar eventos dinámicos
  function addEventListeners() {
    const increaseButtons = document.querySelectorAll(".increase");
    const decreaseButtons = document.querySelectorAll(".decrease");
  
    increaseButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.currentTarget.getAttribute("data-index");
        items[index].quantity++;
        renderPage(currentPage); // Volver a renderizar para actualizar la cantidad
      });
    });
  
    decreaseButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.currentTarget.getAttribute("data-index");
        if (items[index].quantity > 1) {
          items[index].quantity--;
          renderPage(currentPage); // Volver a renderizar para actualizar la cantidad
        }
      });
    });
  }
  
  // Eventos de los botones de navegación
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });
  
  nextButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      currentPage++;
      renderPage(currentPage);
    }
  });
  
  // Inicializar la primera página
  renderPage(currentPage);
  

  