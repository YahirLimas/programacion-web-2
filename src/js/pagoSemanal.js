document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("pagoForm");
    const resultadoDiv = document.getElementById("resultado");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const pagoBase = parseFloat(document.getElementById("pagoBase").value);
      const horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
  
      if (isNaN(pagoBase) || isNaN(horasTrabajadas) || pagoBase <= 0 || horasTrabajadas < 0) {
        resultadoDiv.innerHTML = "<p>Por favor, ingrese valores válidos para pago base y horas trabajadas.</p>";
        return;
      }
  
      let pagoTotal = 0;
  
      if (horasTrabajadas <= 40) {
        pagoTotal = horasTrabajadas * pagoBase;
      } else if (horasTrabajadas <= 47) {
        pagoTotal = (40 * pagoBase) + ((horasTrabajadas - 40) * pagoBase * 2);
      } else {
        pagoTotal = (40 * pagoBase) + (7 * pagoBase * 2) + ((horasTrabajadas - 47) * pagoBase * 3);
      }
  
      resultadoDiv.innerHTML = `
        <p>Pago Base por Hora: $${pagoBase.toFixed(2)}</p>
        <p>Horas Trabajadas: ${horasTrabajadas}</p>
        <p>Pago Total: $${pagoTotal.toFixed(2)}</p>
      `;
    });
  });