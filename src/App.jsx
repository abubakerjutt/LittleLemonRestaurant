import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Reservations from "./components/pages/Reservations";
import Order from "./components/pages/Order";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import { CartProvider } from "./context/CartContext";
import "./assets/css/global.css";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="menu" element={<Menu />} />
              <Route path="reservations" element={<Reservations />} />
              <Route path="order" element={<Order />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
