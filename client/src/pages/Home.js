import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinsTable from "../components/CoinsTable/CoinsTable";
import "./Home.scss";
import CoinSpin from "../components/CoinSpin/CoinSpin";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <div className="home__container">
        <CoinSpin />
        <h1 className="home__header">Search A Currency</h1>

        <body>
          <form class="search-container">
            <input
              type="text"
              name="search"
              onChange={handleChange}
              placeholder="Search..."
              class="search-input"
            />
            <button href="#" class="search-btn">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </body>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <CoinsTable
            key={coin.id}
            id={coin.id}
            name={coin.name}
            price={numberWithCommas(coin.current_price)}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default Home;
