import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <ul className="header__link">
        <Link to="/">
          <button className="header__link--one">Home</button>
        </Link>
        <Link to="/blockchain">
          <button className="header__link--two">How Blockchain Works</button>
        </Link>
        <Link to="/virtualWallet">
          <button className="header__link--three">
            How Virtual Wallet Works
          </button>
        </Link>
      </ul>
    </div>
  );
}
