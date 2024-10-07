document.addEventListener("DOMContentLoaded", () => {
    const resultadoDiv = document.getElementById("resultado");

    document.getElementById("triangulo1Btn").addEventListener("click", () => {
        resultadoDiv.innerHTML = "Triángulo 1:\n";
        for (let i = 1; i <= 4; i++) {
            resultadoDiv.innerHTML += " ".repeat(4 - i) + "#".repeat(i) + "\n";
        }
    });

    document.getElementById("triangulo2Btn").addEventListener("click", () => {
        resultadoDiv.innerHTML = "Triángulo 2:\n";
        for (let i = 1; i <= 4; i++) {
            resultadoDiv.innerHTML += "#".repeat(i) + "\n";
        }
        for (let i = 3; i >= 1; i--) {
            resultadoDiv.innerHTML += "#".repeat(i) + "\n";
        }
    });

    document.getElementById("triangulo3Btn").addEventListener("click", () => {
        const numCiclos = parseInt(document.getElementById("numCiclos").value);

        if (isNaN(numCiclos) || numCiclos <= 0) {
            resultadoDiv.innerHTML =
                "Por favor, ingrese un número válido de ciclos.";
            return;
        }

        resultadoDiv.innerHTML = "Triángulo 3:\n";
        for (let i = 1; i <= numCiclos; i++) {
            for (let j = 1; j <= i; j++) {
                resultadoDiv.innerHTML += "#".repeat(j) + "\n";
            }
        }
    });
});
