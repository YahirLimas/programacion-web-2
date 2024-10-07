document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("productosForm");
    const productosContainer = document.getElementById("productosContainer");
    const resultadoDiv = document.getElementById("resultado");
  
    document.getElementById("numProductos").addEventListener("input", (event) => {
      const numProductos = parseInt(event.target.value);
      productosContainer.innerHTML = '';
  
      for (let i = 0; i < numProductos; i++) {
        const label = document.createElement("label");
        label.textContent = `Costo del Producto ${i + 1}:`;
        const input = document.createElement("input");
        input.type = "number";
        input.name = `producto${i}`;
        input.required = true;
        productosContainer.appendChild(label);
        productosContainer.appendChild(input);
      }
    });
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const numProductos = parseInt(document.getElementById("numProductos").value);
      let totalSinDescuento = 0;
      let productos = [];
  
      for (let i = 0; i < numProductos; i++) {
        const costo = parseFloat(document.querySelector(`input[name="producto${i}"]`).value);
        if (isNaN(costo) || costo <= 0) {
          resultadoDiv.innerHTML = "<p>Por favor, ingrese valores válidos para los costos de los productos.</p>";
          return;
        }
        productos.push(costo);
        totalSinDescuento += costo;
      }
  
      let descuento = 0;
      if (totalSinDescuento >= 6000) {
        descuento = 0.50;
      } else if (totalSinDescuento >= 4000) {
        descuento = 0.40;
      } else if (totalSinDescuento >= 2000) {
        descuento = 0.25;
      }
  
      const totalConDescuento = totalSinDescuento * (1 - descuento);
      const totalConIVA = totalConDescuento * 1.05;
  
      resultadoDiv.innerHTML = `
        <p>Lista de Productos con los Costos:</p>
        <ul>
          ${productos.map((costo, index) => `<li>Producto ${index + 1}: $${costo.toFixed(2)}</li>`).join('')}
        </ul>
        <p>Costo Total sin Descuento Aplicado sin IVA: $${totalSinDescuento.toFixed(2)}</p>
        <p>Costo Total con Descuento Aplicado sin IVA: $${totalConDescuento.toFixed(2)}</p>
        <p>Costo Total con Descuento Aplicado y con IVA: $${totalConIVA.toFixed(2)}</p>
      `;
    });
  });