import React, { createContext, useState } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({ ciudad: "", pais: "AR" });
  const [isLoading, setLoading] = useState(true);

  const [resultado, setResultado] = useState({});
  const [resultadoClimaExtendido, setResultadoClimaExtendido] = useState({});

  const datosBusqueda = (event) => {
    setBusqueda({ ...busqueda, [event.target.name]: event.target.value });
  };

  const consultarClima = async (datos) => {
    setLoading(true);
    try {
      const { ciudad, pais } = datos;
      const appId = process.env.REACT_APP_API;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];
      const climaUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: dataClima } = await axios(climaUrl);
      setResultado(dataClima);
      const climaExtendido = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${appId}`;
      const { data: dataClimaExtend } = await axios(climaExtendido);
      setResultadoClimaExtendido(dataClimaExtend);
      setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        resultadoClimaExtendido,
        isLoading,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaContext };

export default ClimaProvider;
