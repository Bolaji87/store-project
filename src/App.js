import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Approutes } from "./routes";
import { Suspense, useRef, useState } from "react";
import "./App.css";

function App() {
  const initialCartState = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: [],
  };
  const [cartItems, setCartItems] = useState(initialCartState);
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const categoryRef = useRef(null);
  return (
    <div>
      <Navbar
        isLogged={isLogged}
        categoryRef={categoryRef}
        cartItemsCount={cartItems.numberOfItems}
      />

      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          {Approutes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={
                <route.component
                  categoryRef={categoryRef}
                  _cartItems={cartItems}
                  setCartItems={setCartItems}
                  setUser={setUser}
                  setIsLogged={setIsLogged}
                />
              }
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
