import React from "react";
import Homepage from "./pages/Homepage";

export const Approutes = [
  {
    path: "/",
    component: Homepage,
    requiresAuth: false,
  },
];
