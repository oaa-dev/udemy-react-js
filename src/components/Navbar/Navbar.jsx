import React from "react";
import "./Navbar.css";
import LinkWithIcon from "./LinkWithIcon";

import rocket from "../../assets/img/rocket.png";
import star from "../../assets/img/glowing-star.png";
import idButton from "../../assets/img/id-button.png";
import memo from "../../assets/img/memo.png";
import order from "../../assets/img/package.png";
import lock from "../../assets/img/locked.png";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">Cart Wist</h1>
        <form action="" className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="navbar_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkWithIcon title="Home" link="/" emoji={rocket} />
        <LinkWithIcon title="Products" link="/products" emoji={star} />
        <LinkWithIcon title="Login" link="/login" emoji={idButton} />
        <LinkWithIcon title="Signup" link="/signup" emoji={memo} />
        <LinkWithIcon title="My Orders" link="/myorders" emoji={order} />
        <LinkWithIcon title="Logout" link="/logout" emoji={lock} />
        <a href="/cart" className="align_center ">
          Cart <p className="align_center cart_counts">0</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
