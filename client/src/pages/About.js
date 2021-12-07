import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <p className="about__text">
        This Website if A blockchain is essentially a digital ledger of
        transactions that is duplicated and distributed across the entire
        network of computer systems on the blockchain. Each block in the chain
        contains a number of transactions, and every time a new transaction
        occurs on the blockchain, a record of that transaction is added to every
        participant’s ledger. The decentralised database managed by multiple
        participants is known as Distributed Ledger Technology (DLT).
      </p>

      <button>Linkedin</button>
      <button>Twitter</button>
      <button>Github</button>
    </div>
  );
}
