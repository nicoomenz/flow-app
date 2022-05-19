import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";

/**
 * Devuelve un substitulo con su descripcion
 * @function CitiesForm
 * @returns {JSX.Element}
 */

const CitiesForm = ({ busqueda, datosBusqueda, consultarClima }) => {
  const { ciudad } = busqueda;

  const cities = [
    { key: 0, value: "La Plata" },
    { key: 1, value: "San Miguel de Tucumán" },
    { key: 2, value: "Mar del Plata" },
    { key: 3, value: "Córdoba" },
    { key: 4, value: "Quilmes" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Seleccionar Ciudad
          </InputLabel>
          <Select
            id="ciudad"
            name="ciudad"
            value={ciudad}
            label="Seleccionar Ciudad"
            onChange={datosBusqueda}
          >
            {cities.map((city) => {
              return (
                <MenuItem value={city.value} key={city.key}>
                  {city.value}
                </MenuItem>
              );
            })}
          </Select>
          <div className={styles.button}>
            <Button
              type={"submit"}
              variant="contained"
              onClick={() => {
                consultarClima(busqueda);
              }}
            >
              Consultar clima
            </Button>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default CitiesForm;
