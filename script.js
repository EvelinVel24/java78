// URL de la API
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Elemento del DOM donde se colocarán las filas de la tabla
const tableBody = document.querySelector("#posts-table tbody");

// Función para consumir la API y mostrar los datos en la tabla
async function fetchAndDisplayPosts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }
        const posts = await response.json();
        populateTable(posts);
    } catch (error) {
        console.error("Hubo un problema al consumir la API:", error);
    }
}

// Función para llenar la tabla con los datos de la API
function populateTable(posts) {
    posts.forEach(post => {
        const row = document.createElement("tr");

        // ID
        const idCell = document.createElement("td");
        idCell.textContent = post.id;
        row.appendChild(idCell);

        // Título
        const titleCell = document.createElement("td");
        titleCell.textContent = post.title;
        row.appendChild(titleCell);

        // Contenido
        const bodyCell = document.createElement("td");
        bodyCell.textContent = post.body;
        row.appendChild(bodyCell);

        tableBody.appendChild(row);
    });
}

// Llamar a la función para cargar los datos
fetchAndDisplayPosts();
