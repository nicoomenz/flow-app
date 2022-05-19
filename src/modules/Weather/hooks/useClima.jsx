import { useContext } from "react";
import { ClimaContext } from "../pages";

const useClima = () => {
  return useContext(ClimaContext);
};

export default useClima;
