import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import ReactPlayer from "react-player";
import CoinModal from "../CoinModal/CoinModal";
import { useState } from "react";

function Header() {
  const [buttonModal, setButtonModal] = useState(false);
  return (
    <div className="header">
      <ul className="header__link">
        <Link to="/">
          <button className="header__link--one">Home</button>
        </Link>

        <button
          onClick={() => setButtonModal(true)}
          className="header__link--two"
        >
          How Blockchain Works
        </button>

        <CoinModal trigger={buttonModal} setTrigger={setButtonModal}>
          <h1>I am the Coin Modal</h1>
          <ReactPlayer url="https://www.youtube.com/watch?v=SSo_EIwHSd4" />
        </CoinModal>
        <Link to="/virtualWallet">
          <button className="header__link--three">
            How Virtual Wallet Works
          </button>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
