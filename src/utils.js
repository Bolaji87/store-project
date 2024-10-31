import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
}
