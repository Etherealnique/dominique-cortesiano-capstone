import React, { createContext, useContext, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency] = useState("USD");
  const [symbol] = useState("$");

  return (
    <Crypto.Provider value={{ currency, symbol }}>{children}</Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
