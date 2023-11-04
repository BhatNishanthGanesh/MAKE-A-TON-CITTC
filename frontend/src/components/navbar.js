import React,{useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faMapMarkerAlt, faShoppingCart, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../Assets/emblem/icon-nobg.png"

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-white " href="/">
      <img src={logo} alt="logo" className="img-fluid my-0" style={{ height: "35px",width:"150px" }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavbarCollapsed}
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarNav">
        <ul className="navbar-nav  text-center">
        <li className="nav-item dropdown" ref={dropdownRef}>
      <div className="dropdown">
        <Link
          className="nav-link text-white dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faUtensils} /> Recipes
        </Link>
        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/recipe">
             Chef's Choice
          </Link>
          <Link className="dropdown-item" to="/ingred">
             Home Kitchen
          </Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/specials">
             Trending
          </Link>
        </div>
      </div>
    </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="/restaurant">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> LocalBites
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/order">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto p-1 text-center ">
          <li className="nav-item">
            <a className="nav-link text-white" href="/about">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="/contact">
              <FontAwesomeIcon icon={faUser} /> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
