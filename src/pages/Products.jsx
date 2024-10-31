import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils";
import { ALLOWED_CATEGORIES } from "../routes";

import ProductCard from "../components/productCard";
function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("All");

  function handleFilterProducts(productCategory = null) {
    if (productCategory) {
      const filterProducts = allProducts.filter(
        (product) => product.category === productCategory
      );

      setProducts(filterProducts);
    } else {
      setProducts(allProducts);
    }
  }

  useEffect(function () {
    async function getProducts() {
      const res = await fetchProducts();
      setProducts(res);
      setAllProducts(res);
    }
    getProducts().catch((e) => console.error("we have an error", e));
  }, []);
  return (
    <div className="products-cont">
      <div className={"category-select"}>
        <span
          onClick={() => {
            handleFilterProducts();
            setActive("All");
          }}
          className={`select-cat-span ${active === "All" ? "cat-active" : ""}`}
        >
          All
        </span>
        <span
          onClick={() => {
            handleFilterProducts(ALLOWED_CATEGORIES.WOMENS);
            setActive("women's");
          }}
          className={`select-cat-span ${
            active === "women's" ? "cat-active" : ""
          }`}
        >
          Women's
        </span>
        <span
          onClick={() => {
            handleFilterProducts(ALLOWED_CATEGORIES.MENS);
            setActive("men's");
          }}
          className={`select-cat-span ${
            active === "men's" ? "cat-active" : ""
          }`}
        >
          Men's
        </span>
      </div>
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
    </div>
  );
}

export default Products;
