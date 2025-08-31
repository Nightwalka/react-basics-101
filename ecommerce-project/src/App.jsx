import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchApp= async () =>{
      const response = await axios.get("/api/cart-items?expand=product")
      setCart(response.data);
  
    }
    fetchApp()
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
