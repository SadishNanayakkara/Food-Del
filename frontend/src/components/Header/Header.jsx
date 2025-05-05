import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Embark on a delightful culinary adventure with a diverse menu offering
          an exquisite selection of dishes, each thoughtfully crafted to satisfy
          your cravings and tantalize your taste buds. From rich and savory
          flavors to light and refreshing options, every bite is designed to
          elevate your dining experience and leave a lasting impression.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
