import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Approutes } from "./routes";

function App() {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default App;
