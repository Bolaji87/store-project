import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
}

export async function fetchCategoryProducts(_category) {
  const response = await axios.get(
    `${BASE_URL}/products/category/${_category}`
  );
  return response.data;
}

export async function authenticateUser(email, password) {
  const response = await axios.get(`${BASE_URL}/users`);
  const authenticate = response.data.find(
    (user) => user.email === email && user.password === password
  );
  return authenticate;
}
