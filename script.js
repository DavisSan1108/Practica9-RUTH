// Genera la interfaz para ingresar las matrices
function generarMatrices() {
    const matriz1 = document.getElementById('matriz1');
    const matriz2 = document.getElementById('matriz2');

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            matriz1.innerHTML += `<input type="number" id="m1-${i}-${j}" value="0">`;
            matriz2.innerHTML += `<input type="number" id="m2-${i}-${j}" value="0">`;
        }
    }
}

// Llama a la función para generar la interfaz al cargar la página
window.onload = generarMatrices;

function calcularOperaciones() {
    const matriz1 = [
        [parseFloat(document.getElementById('m1-0-0').value), parseFloat(document.getElementById('m1-0-1').value)],
        [parseFloat(document.getElementById('m1-1-0').value), parseFloat(document.getElementById('m1-1-1').value)]
    ];

    const matriz2 = [
        [parseFloat(document.getElementById('m2-0-0').value), parseFloat(document.getElementById('m2-0-1').value)],
        [parseFloat(document.getElementById('m2-1-0').value), parseFloat(document.getElementById('m2-1-1').value)]
    ];

    // Suma
    const suma = [
        [matriz1[0][0] + matriz2[0][0], matriz1[0][1] + matriz2[0][1]],
        [matriz1[1][0] + matriz2[1][0], matriz1[1][1] + matriz2[1][1]]
    ];

    // Resta
    const resta = [
        [matriz1[0][0] - matriz2[0][0], matriz1[0][1] - matriz2[0][1]],
        [matriz1[1][0] - matriz2[1][0], matriz1[1][1] - matriz2[1][1]]
    ];

    // Producto
    const producto = [
        [matriz1[0][0] * matriz2[0][0], matriz1[0][1] * matriz2[0][1]],
        [matriz1[1][0] * matriz2[1][0], matriz1[1][1] * matriz2[1][1]]
    ];

    // División
    const division = [
        [
            matriz2[0][0] !== 0 ? (matriz1[0][0] / matriz2[0][0]).toFixed(2) : '∞',
            matriz2[0][1] !== 0 ? (matriz1[0][1] / matriz2[0][1]).toFixed(2) : '∞'
        ],
        [
            matriz2[1][0] !== 0 ? (matriz1[1][0] / matriz2[1][0]).toFixed(2) : '∞',
            matriz2[1][1] !== 0 ? (matriz1[1][1] / matriz2[1][1]).toFixed(2) : '∞'
        ]
    ];

    // Mostrar resultados
    document.getElementById('resultados').innerHTML = `
        <h2>Resultados</h2>
        <p><strong>Suma:</strong><br> ${suma[0][0]} ${suma[0][1]}<br> ${suma[1][0]} ${suma[1][1]}</p>
        <p><strong>Resta:</strong><br> ${resta[0][0]} ${resta[0][1]}<br> ${resta[1][0]} ${resta[1][1]}</p>
        <p><strong>Producto:</strong><br> ${producto[0][0]} ${producto[0][1]}<br> ${producto[1][0]} ${producto[1][1]}</p>
        <p><strong>División:</strong><br> ${division[0][0]} ${division[0][1]}<br> ${division[1][0]} ${division[1][1]}</p>
    `;
}
