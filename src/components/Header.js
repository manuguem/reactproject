import React, { Component } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { DataContext } from "./Context";

export class Header extends Component {
  static contextType = DataContext;

  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    const { cart } = this.context;
    return (
      <header className="shadow">
        <div className="menu" onClick={this.menuToggle}>
          <img src={Menu} alt="" width="20" />
        </div>
        <div className="logo">
          <h3>
            <Link to="/">SAMSUNGSTUFF</Link>
          </h3>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/login">
                <i className="fa fa-sign-in me-1"></i>
                Login
              </Link>
            </li>
            <li className="close" onClick={this.menuToggle}>
              <img src={Close} alt="" width="20" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>{cart.length}</span>
            <Link to="/cart">
              <i className="fa fa-shopping-cart me-1" />
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
