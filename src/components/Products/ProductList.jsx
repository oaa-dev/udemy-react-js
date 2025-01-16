import React from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="product_list_section">
      <header className="align_center product_list_header">
        <h2>Products</h2>

        <select name="sort" id="" className="product_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>

      <div className="product_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductList;
