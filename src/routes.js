import React from "react";
import { lazy } from "react";
import Homepage from "./pages/Homepage";

const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));

export const ALLOWED_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};
export const Approutes = [
  {
    path: "/",
    component: Homepage,
    requiresAuth: false,
  },
  {
    path: "/products/:category?",
    component: Products,
    requiresAuth: false,
  },
  {
    path: "/cart",
    component: Cart,
    requiresAuth: false,
  },
];
