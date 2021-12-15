import { LinearProgress, makeStyles } from "@material-ui/core";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactHtmlParser from "react-html-parser";
import CoinLineGraph from "../components/CoinLineGraph/CoinLineGraph";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import keylock from "../assets/images/keylock.png";
import link from "../assets/images/link.png";
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
    <div className="coin-details">
      <div className="coin-details__container">
        <img className="coin-details__keylock" src={keylock} alt="keylock" />
        <hr className="coin-details__divider-left" />
        <section>
          <h1 className="coin-details__cryto-name">{coin?.name}</h1>
          <img
            className="coin-details__logo"
            src={coin?.image.large}
            alt={coin?.name}
          />
        </section>

        <div className="coin-details__container-market">
          <h3 className="coin-details__market-data">
            Rank:{coin?.market_cap_rank}
          </h3>
          <h3 className="coin-details__market-data">
            Current Price:{symbol}{" "}
            {numberWithCommas(
              coin?.market_data.current_price[currency.toLowerCase()]
            )}
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
          <h3 className="coin-details__description">
            {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
          </h3>
        </div>
        <hr className="coin-details__divider-right" />
        <img className="coin-details__link" src={link} alt="link" />
      </div>
      <CoinLineGraph coin={coin} />
    </div>
  );
};

export default CoinDetails;
