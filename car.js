// function mostrarDatos() {
//     // Recuperar los datos del localStorage
//     const datosCompra = JSON.parse(localStorage.getItem("datoscompra")) || [];

//     // Crear una cadena HTML para mostrar los datos
//     let html = "<ul>";
//     datosCompra.forEach(dato => {
//         html += `<li>ID: ${dato.id}, Precio: ${dato.precio}</li>`;
//     });
//     html += "</ul>";

//     // Insertar el HTML en el contenedor de la página
//     document.getElementById("datosContenedor").innerHTML = html;
// }

// // Llamar a la función para mostrar datos cuando se cargue la página
// document.addEventListener('DOMContentLoaded', mostrarDatos);    

function mostrarDatos() {
    // Recuperar los datos del localStorage
    const datosCompra = JSON.parse(localStorage.getItem("datoscompra")) || [];

    // Crear una cadena HTML para mostrar los datos en forma de div
    let html = "";
    datosCompra.forEach(dato => {
        html += `<div style="display: flex; flex-direction: row; margin-bottom: 5px;">
                    <span>ID: ${dato.id}</span>
                    <span>Precio: ${dato.precio}</span>
                </div>`;
    });

    // Insertar el HTML en el contenedor de la página
    document.getElementById("datosContenedor").innerHTML = html;
}

// Llamar a la función para mostrar datos cuando se cargue la página
document.addEventListener('DOMContentLoaded', mostrarDatos);