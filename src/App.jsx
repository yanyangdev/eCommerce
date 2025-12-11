import { Routes, Route } from "react-router";
import { Cart, Home } from "./pages";
import MainLayout from "./layouts/MainLayout";
import { CartState } from "./contexts";
const App = () => {
  return (
    <div>
      <CartState>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </CartState>
    </div>
  );
};

export default App;
