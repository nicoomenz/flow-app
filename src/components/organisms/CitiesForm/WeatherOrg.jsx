import {
  AppBar,
  Card,
  CircularProgress,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import CitiesForm from "../../molecules/CitiesForm/CitiesForm";
import ResultadoClima from "../../molecules/ResultadoClima/ResultadoClima";
import styles from "./styles.module.scss";

/**
 * Devuelve un substitulo con su descripcion
 * @function WeatherMap
 * @returns {JSX.Element}
 */

const WeatherMap = ({
  busqueda,
  datosBusqueda,
  consultarClima,
  resultado,
  resultadoClimaExtendido,
  isLoading,
}) => {
  return (
    <Grid container spacing={2} padding={1}>
      <Grid container item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Weather map</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid className={styles.card} item xs={6}>
        <Card className={styles.childrenCard}>
          <CitiesForm
            busqueda={busqueda}
            datosBusqueda={datosBusqueda}
            consultarClima={consultarClima}
          />
        </Card>
      </Grid>

      <Grid className={styles.card} item xs={6}>
        {resultado?.name &&
          (isLoading ? (
            <div className={styles.snipper}>
              <CircularProgress />
            </div>
          ) : (
            <Card className={styles.childrenCard}>
              <ResultadoClima
                resultado={resultado}
                resultadoClimaExtendido={resultadoClimaExtendido}
              />
            </Card>
          ))}
      </Grid>
    </Grid>
  );
};

export default WeatherMap;
