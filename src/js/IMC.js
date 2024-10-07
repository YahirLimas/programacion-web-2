document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("imcForm");
    const resultadoDiv = document.getElementById("resultado");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const peso = parseFloat(document.getElementById("peso").value);
      const altura = parseFloat(document.getElementById("altura").value);
  
      if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = "<p>Por favor, ingrese valores válidos para peso y altura.</p>";
        return;
      }
  
      const imc = peso / (altura * altura);
      let recomendacion = "";
  
      if (imc > 25) {
        recomendacion = "Peso Alto, haga dieta y ejercicio";
      } else if (imc >= 22 && imc <= 25) {
        recomendacion = "Peso Correcto";
      } else {
        recomendacion = "Peso Bajo, coma más";
      }
  
      resultadoDiv.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Peso: ${peso} kg</p>
        <p>Altura: ${altura} m</p>
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>Recomendación: ${recomendacion}</p>
      `;
    });
  });