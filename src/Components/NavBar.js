import React from "react";
import { Link } from "react-router-dom";
import "./ninja-ticket-main/01 Discover Fly/style.css";

const NavBar = () => {
  return (
    <>
      <header className="container">
        <nav>
          <ul>
            <li>
              <Link to="/mega-bus" href="#">
                Mega Bus
              </Link>
            </li>
            <li>
              <Link to="/discover-fly">Discover Fly</Link>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a className="active" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
