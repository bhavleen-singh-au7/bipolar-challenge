import React from "react";

const Navbar = () => {
  return (
    <nav className="transparent z-depth-2 mb-4">
      <div className="nav-wrapper">
        <a
          href="/"
          className="brand-logo center teal-text text-darken-3 bold"
        >
          <i className="fab fa-unsplash"></i>Unsplash
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
