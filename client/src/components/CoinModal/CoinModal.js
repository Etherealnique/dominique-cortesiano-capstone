import React from "react";
import "./CoinModal.scss";

function CoinModal(props) {
  return props.trigger ? (
    <div className="modal">
      <div className="modal__inner">
        <button
          className="modal__close-btn"
          onClick={() => props.setTrigger(false)}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default CoinModal;
