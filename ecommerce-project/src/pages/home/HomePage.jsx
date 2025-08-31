import { Header } from "../../components/Header";
import "./HomePage.css";

import axios from "axios";
import { useEffect, useState } from "react";
import {ProductsGrid} from './ProductsGrid'
export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData= async () =>{
      const response = await axios.get("/api/products")
      setProducts(response.data);

    }
    getHomeData()
    
  }, []);

  return (
    <>
      <title> E-commerce</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}
