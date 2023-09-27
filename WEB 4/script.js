function realizarOperaciones() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoDiv.textContent = "Por favor, ingresa números válidos.";
        return;
    }

    let resultado = "";

    resultado += `Suma: ${numero1 + numero2}<br>`;
    resultado += `Resta: ${numero1 - numero2}<br>`;
    resultado += `Multiplicación: ${numero1 * numero2}<br>`;

    if (numero2 !== 0) {
        resultado += `División: ${numero1 / numero2}<br>`;
        resultado += `Módulo: ${numero1 % numero2}<br>`;
    } else {
        resultado += "División y Módulo no definidos (divisor es 0).<br>";
    }

    resultadoDiv.innerHTML = resultado;
}
