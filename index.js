const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById("pizza-form");
const input = document.getElementById("pizza-id");
const container = document.getElementById("result-container");

function clearContainer() {
  container.innerHTML = "";
}

function Pizza(pizza) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<h3>${pizza.nombre}</h3><img src="${pizza.imagen}" alt="Imagen de ${pizza.nombre}" /><p>Precio: $${pizza.precio}</p>`;
  container.appendChild(card);
}

function Error(msg) {
  const errorElem = document.createElement("p");
  errorElem.classList.add("error");
  errorElem.textContent = msg;
  container.appendChild(errorElem);
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearContainer();
  const value = input.value.trim();
  if (value === "") {
    Error("❌ Por favor ingrese un número");
    return;
  }
  const id = Number(value);
  if (isNaN(id) || id < 1) {
    Error("❌ El valor ingresado no es un número válido.");
    return;
  }
  const pizzaEncontrada = pizzas.find((p) => p.id === id);
  if (pizzaEncontrada) {
    Pizza(pizzaEncontrada);
  } else {
    Error(`❌ No se encontró ninguna pizza con ese número ${id}.`);
  }
});
