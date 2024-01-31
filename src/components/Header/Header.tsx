import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import React from "react";
import { LinksArray } from "./LinksArray";

const Header = () => {
  const [showHeaderText, setShowHeaderText] = React.useState(false);
  const [headerActive, setHeaderActive] = React.useState("main");

  return (
    <div className="header flexBetween">
      <div
        className={`header-text d-flex ${
          showHeaderText && "show-header-text"
        } `}
      >
        {LinksArray.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.path}
              onClick={() => setHeaderActive(item.activeValue)}
              className={`${
                headerActive === item.activeValue && "active-red "
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <button
        className="menu-button"
        onClick={() => setShowHeaderText(!showHeaderText)}
      >
        <i className="bi bi-list"></i>
      </button>
      <img src={logo} className="header-logo" />
    </div>
  );
};

export default Header;
