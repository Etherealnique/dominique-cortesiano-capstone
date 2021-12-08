import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import CoinModal from "../CoinModal/CoinModal";
import VirtualWallet from "../../pages/VirtualWallet";
import logo from "../../assets/images/Logo.png";

function Header() {
  return (
    <div className="header">
      <ul className="header__link">
        <Link to="/">
          <button className="header__link--one">Home</button>
        </Link>
        <CoinModal />
        <VirtualWallet />

        <img className="header__logo" src={logo} alt="Logo" />
      </ul>
    </div>
  );
}

export default Header;
