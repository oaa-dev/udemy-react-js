import React from "react";
import "./ProductSidebar.css";

import rocket from "../../assets/img/rocket.png";

import LinkWithIcon from "../Navbar/LinkWithIcon";

const ProductSidebar = () => {
  return (
    <aside className="product_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        <LinkWithIcon
          title="Electronics"
          link="products?category=electronics"
          emoji={rocket}
          is_sidebar={true}
        />
      </div>
    </aside>
  );
};

export default ProductSidebar;
