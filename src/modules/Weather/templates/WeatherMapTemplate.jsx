import React from "react";
import WeatherMap from "../../../components/organisms/CitiesForm/WeatherOrg";
import useClima from "../hooks/useClima";

const WeatherMapTemplate = () => {
  const {
    busqueda,
    datosBusqueda,
    consultarClima,
    resultado,
    resultadoClimaExtendido,
    isLoading,
  } = useClima();

  return (
    <WeatherMap
      busqueda={busqueda}
      datosBusqueda={datosBusqueda}
      consultarClima={consultarClima}
      resultado={resultado}
      resultadoClimaExtendido={resultadoClimaExtendido}
      isLoading={isLoading}
    ></WeatherMap>
  );
};

export default WeatherMapTemplate;
