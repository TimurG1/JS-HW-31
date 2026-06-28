import { products } from "./data.js";
import makeMarkup from "../templates/products.hbs";

const searchInput = document.getElementById("searchInput");
const container = document.querySelector(".content");
const listMarkup = makeMarkup({ products });
container.innerHTML = listMarkup;

searchInput.addEventListener("input", onSearch);

function onSearch() {
  const query = searchInput.value.toLowerCase();

  const newArr = products.filter((product) =>
    product.name.toLowerCase().includes(query),
  );

  const newListMarkup = makeMarkup({ products: newArr });
  container.innerHTML = newListMarkup;
}
