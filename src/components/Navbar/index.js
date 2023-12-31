import React from "react";
import { 
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/technologies" activeStyle>
            Technologies
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
