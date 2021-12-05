import React from "react";

function VirtualWallet() {
  const handleClick = () => {
    window.open(
      "https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.4.20+commit.3155dd80.js"
    );
  };

  return (
    <div>
      <button onClick={handleClick}>VirtualWallet</button>
    </div>
  );
}

export default VirtualWallet;
