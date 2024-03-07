import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { LinksArray } from "./LinksArray";

const Header = () => {
  const [showHeaderText, setShowHeaderText] = React.useState(false);
  const [scrollToTop, setScrollToTop] = React.useState(false);

  /*   Scroll to the top of the page */
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [scrollToTop]);

  const handleChangeActive: any = (active: any) => {
    if (active.isActive) {
      return "active-red";
    }
  };
  
  return (
    <div className="header flexBetween">
      <div
        className={`header-text d-flex ${
          showHeaderText && "show-header-text"
        } `}
      >
        {LinksArray.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.path}
              className={(active: any) => handleChangeActive(active)}
              onClick={() => setScrollToTop(!scrollToTop)}
            >
              {item.name}
            </NavLink>
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
