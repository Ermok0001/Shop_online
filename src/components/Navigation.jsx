import { Link, useLocation } from "react-router-dom";
import { SideBar } from "./Side";
import { useState } from "react";
import Menu_img from "./assets/menu.png";
import Like_img from "./assets/favorite_border.png";
import Search_img from "./assets/search.png";
import Person_img from "./assets/person_outline.png";
import Shopping_img from "./assets/shopping_bag.png";

export function Navigation() {
  const location = useLocation();
  const [MenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!MenuOpen);
  }

  return (
    <div>
      <div className="All_Navigation">
        <img className="Menu_img" onClick={toggleMenu} src={Menu_img} alt="" />
        <div className="Navigation">
          <img src={Search_img} alt="" />
          <img src={Like_img} alt="" />
          <input type="text" placeholder="Search" />
          <Link to="/fav">
            <img className="Like_img" src={Like_img} alt="" />
          </Link>
          <img src={Person_img} alt="" />
          <Link to="/card">
            <img src={Shopping_img} alt="" />
          </Link>
        </div>
      </div>
      <SideBar MenuOpen={MenuOpen} toggleMenu={toggleMenu}></SideBar>
      <div>
        <p>
          <Link to="/">Главное</Link>/Мужская одежда
        </p>
        <Link to={location.pathname}>
          <span>{location.pathname.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}