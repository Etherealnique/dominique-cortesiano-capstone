import { LinearProgress, makeStyles } from "@material-ui/core";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../components/CoinInfo/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import "./CoinDetails.scss";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CoinDetails = () => {
  const [coin, setCoin] = useState();
  const { id } = useParams();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles(() => ({}));

  const classes = useStyles();

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    // <div className="coin-details__container">
    //   <div classname="coin-details__sidebar">sidebar</div>
    // </div>
    <div className={classes.container}>
      <div className={classes.sidebar}></div>
      <img
        className="coin-details__logo"
        src={coin?.image.large}
        alt={coin?.name}
        height="200"
        style={{ marginBottom: 20 }}
      />
      <h1 className="coin-details__cryto-name">{coin?.name}</h1>

      <h3 className="coin-details__description">
        {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
      </h3>

      <div className="coin-details__container-market">
        <h3 className="coin-details__market-data">
          Rank:{coin?.market_cap_rank}
        </h3>
        <h3 className="coin-details__market-data">
          Current Price:{symbol}{" "}
          {coin?.market_data.current_price[currency.toLowerCase()]}
        </h3>
        <h3 className="coin-details__market-data">
          Market Cap: {symbol}{" "}
          {numberWithCommas(
            coin?.market_data.market_cap[currency.toLowerCase()]
              .toString()
              .slice(0, -6)
          )}
          M
        </h3>
      </div>

      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinDetails;