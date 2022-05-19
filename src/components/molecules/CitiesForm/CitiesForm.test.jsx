import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import CitiesForm from "./CitiesForm";

describe("<CitiesForm/>", () => {
  let component;
  const busqueda = {
    ciudad: "La Plata",
    pais: "AR",
  };

  const mockHandler = jest.fn();

  beforeEach(() => {
    component = render(
      <CitiesForm busqueda={busqueda} consultarClima={mockHandler} />
    );
  });

  test("busqueda de la ciudad", () => {
    const button = component.getByText("Consultar clima");
    console.log(fireEvent.click(button));
    console.log(component);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
