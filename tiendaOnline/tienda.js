// Productos definidos en el frontend
const productos = [
  { id: 1, nombre: "Laptop Lenovo", descripcion: "Laptop Core i5, 8GB RAM", precio: 750, stock: 10 },
  { id: 2, nombre: "Smartphone Samsung", descripcion: "Pantalla AMOLED, 128GB", precio: 500, stock: 15 },
  { id: 3, nombre: "Auriculares Bluetooth", descripcion: "Sonido Hi-Fi", precio: 80, stock: 20 },
  { id: 4, nombre: "Monitor LG 24''", descripcion: "Full HD", precio: 200, stock: 8 }
];

let carrito = [];

function cargarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = "";

  productos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <p><strong>$${p.precio}</strong></p>
      <p>Stock: ${p.stock}</p>
      <button onclick="agregarCarrito(${p.id})">Agregar al carrito</button>
    `;
    lista.appendChild(card);
  });
}

function agregarCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  let total = 0;

  carrito.forEach(p => {
    const item = document.createElement("li");
    item.textContent = `${p.nombre} - $${p.precio}`;
    lista.appendChild(item);
    total += p.precio;
  });

  document.getElementById("total").textContent = `Total: $${total}`;
}

cargarProductos();

const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    alert(`Gracias ${nombre}.\n\nHemos recibido tu mensaje y nos comunicaremos contigo al correo ${correo}.`);

    formulario.reset();
});