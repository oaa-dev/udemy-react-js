import React, { useEffect, useState } from "react";
import "./ProductSidebar.css";

import rocket from "../../assets/img/rocket.png";

import LinkWithIcon from "../Navbar/LinkWithIcon";
import apiClient from "../../utils/api-client";

const ProductSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get("/category")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <aside className="product_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories.map((category) => (
          <LinkWithIcon
            id={category.id}
            title={category.name}
            link={`products?category=${category.name}`}
            emoji={`http://localhost:5000/category/${category.image}`}
            is_sidebar={true}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductSidebar;
