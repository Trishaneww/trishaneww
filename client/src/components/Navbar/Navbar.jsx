import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { IoIosAdd } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { GiTreeBeehive } from "react-icons/gi";
import { MdOutlineHive } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { VscGraphLine } from "react-icons/vsc";
import Logo from "../../images/logo.png";
import "./Navbar.scss";
import axios from "axios";

function Navbar() {
  
  return (
    <>
      <Nav>
        <Link to="/">
          <img className="hive-logo" src={Logo} alt="study hive logo" />
        </Link>

        <NavItem icon={<IoIosAdd />}>
          <DropdownMenu1></DropdownMenu1>
        </NavItem>

        <NavItem icon={<IoIosArrowDown />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Nav>
    </>
  );
}

function Nav(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <p className="icon-button a" onClick={() => setOpen(!open)}>
        {props.icon}
      </p>

      {open && props.children}
    </li>
  );
}

function DropdownMenu1({ user }) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem1(props) {
    return (
      <p
        className="menu-item a"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </p>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <Link to={`/createdeck/${user.id}`} className="navbar-icon">
            <DropdownItem1 leftIcon={<HiMiniRectangleStack />}>
              Create Deck
            </DropdownItem1>
          </Link>

          <Link to={`/createhive/${user.id}`} className="navbar-icon">
            <DropdownItem1 leftIcon={<MdOutlineHive />}>
              Create Hive
            </DropdownItem1>
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
}

function DropdownMenu({ user, handleLogout }) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }


  function DropdownItem(props) {
    return (
      <p
        className="menu-item a"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </p>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <Link to={`/settings/${user.id}`}>
            <DropdownItem leftIcon={<VscGraphLine />}>Activity</DropdownItem>
          </Link>

          <DropdownItem
            leftIcon={<GiTreeBeehive />}
            rightIcon={<IoIosArrowForward />}
            goToMenu="settings"
          >
            Hives
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiMiniRectangleStack />}
            rightIcon={<IoIosArrowForward />}
            goToMenu="animals"
          >
            Decks
          </DropdownItem>
          <Link to={`/favouritedeck/${user.id}`}>
            <DropdownItem leftIcon={<FaRegStar />}>Daily Deck</DropdownItem>
          </Link>

          <DropdownItem leftIcon={<FiLogOut />}>
            <p className="logout" onClick={handleLogout}>
              Logout
            </p>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<IoIosArrowBack />}>
            <h2>Your Hives</h2>
          </DropdownItem>
      
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<IoIosArrowBack />}>
            <h2>Your Decks</h2>
          </DropdownItem>

        </div>
      </CSSTransition>
    </div>
  );
}

export default Navbar;
