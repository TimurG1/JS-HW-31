import { products } from "./data.js";
import makeMarkup from "../templates/products.hbs"
const container = document.querySelector(".content");
const listMarkup = makeMarkup({products});
container.innerHTML = listMarkup;