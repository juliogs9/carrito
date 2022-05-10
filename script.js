addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    //console.log(data);
    pintarProductos(data);
  } catch (error) {}
};

const contenedorProductos = document.querySelector("#contenedor-Productos");
const pintarProductos = (data) => {
  const template = document.querySelector("#template-productos").content;
  const fragment = document.createDocumentFragment();

  data.forEach((producto) => {
    console.log(producto);
    template.querySelector("img").setAttribute("src", producto.thumbnailUrl);
    template.querySelector("h5").textContent = producto.title;
    template.querySelector("p span").textContent = producto.precio;

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });

  contenedorProductos.appendChild(fragment);
};
