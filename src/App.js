import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Approutes } from "./routes";
import { Suspense } from "react";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          {Approutes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
