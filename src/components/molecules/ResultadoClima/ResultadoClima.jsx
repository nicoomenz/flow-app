import React from "react";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./styles.module.scss";

const ResultadoClima = ({ resultado, resultadoClimaExtendido }) => {
  const kelvin = 273.15;
  const { name, sys, main, weather } = resultado;
  const { daily } = resultadoClimaExtendido;

  const formatDate = (day) => {
    return new Date(day.dt * 1000).toLocaleDateString("sp", {
      weekday: "long",
    });
  };

  const today = new Date().toLocaleDateString("sp", { weekday: "long" });
  return (
    <div className={styles.container}>
      <Typography align="center" variant="h5">
        El clima de {name}, {sys.country}, {today} es:
      </Typography>
      <div className={styles.tempActual}>
        <Box
          component="img"
          alt="clima icon"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
        />

        <Typography variant="h3">
          {parseInt(main.temp - kelvin)}
          <span>&#x2103;</span>
        </Typography>
      </div>
      <div className={styles.tempMinMax}>
        <Typography variant="h6">
          Min: {parseInt(main.temp_min - kelvin)}
          <span>&#x2103;</span>
        </Typography>
        <Typography variant="h6">
          Max: {parseInt(main.temp_max - kelvin)}
          <span>&#x2103;</span>
        </Typography>
      </div>
      <div className={styles.forecast}>
        {daily
          ?.filter(
            (day, i, row) =>
              formatDate(day) !== today && i + 1 !== row.length - 1
          )
          .map((day) => {
            return (
              <Card>
                <div className={styles.forecastChild}>
                  <Box
                    component="img"
                    alt="clima icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  />

                  <Typography>{formatDate(day)}</Typography>
                </div>
                <div className={styles.tempMinMax}>
                  <Typography variant="h6">
                    {parseInt(day.temp.min - kelvin)}
                    {"/"}
                  </Typography>
                  <Typography variant="h6">
                    {parseInt(day.temp.max - kelvin)}
                    <span>&#x2103;</span>
                  </Typography>
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default ResultadoClima;
