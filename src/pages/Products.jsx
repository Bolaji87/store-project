import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils";
import ProductCard from "../components/productCard";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProducts() {
      const res = await fetchProducts();
      setProducts(res);
      console.log(res);
    }
    getProducts().catch((e) => console.error("we have an error", e));
  }, []);
  return (
    <div className="product-card-cont">
      {products.length > 0 &&
        products.map(
          (product) =>
            product.category !== "jewellery" &&
            product.category !== "electronics" && (
              <ProductCard
                key={product.id}
                id={product.id}
                rating={product.rating}
                img={product.image}
                price={product.price}
                description={product.description}
                categoryName={product.category}
                productName={product.title}
              />
            )
        )}
    </div>
  );
}

export default Products;
