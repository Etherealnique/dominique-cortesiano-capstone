import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../../config/api";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import SelectButton from "../SelectButton/SelectButton";
import { chartDays } from "../../config/data";
import { CryptoState } from "../../CryptoContext";

const CoinLineGraph = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    console.log(data.prices);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
  }, [days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <div className={classes.container}>
      {!historicData ? (
        <CircularProgress style={{ color: "gold" }} size={250} thickness={1} />
      ) : (
        <>
          <Line
            data={{
              labels: historicData.map((coin, index) => {
                // let date = new Date(coin[0]);
                // let time =
                //   date.getHours() > 12
                //     ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                //     : `${date.getHours()}:${date.getMinutes()} AM`;
                // return days === 1 ? time : date.toLocaleDateString();
                const unixTime = coin[0];
                let time;
                if (days === 1) {
                  const date = new Date(unixTime * 1000);
                  const hours = date.getHours();

                  const minutes = "0" + date.getMinutes();

                  time = hours + ":" + minutes.substr(-2);
                  return time;
                } else {
                  const date = new Date(unixTime * 1000);
                  let month = date.getMonth();
                  let day = date.getDate();
                  let year = date.getFullYear();
                  time = `${month}/${day}/${year}`;
                  return time;
                }
                coin[0] = time;
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => setDays(day.value)}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CoinLineGraph;
