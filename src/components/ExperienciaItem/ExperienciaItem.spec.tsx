import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienciaItem from "./ExperienciaItem";
import { IExperiencia } from "../Experiencia/IExperiencia";

const experienciaMock: IExperiencia = {
  Inicio: "",
  Fim: "",
  Cargo: "",
  Descricao: "",
  Empresa: ""
};

describe("ExperienciaItem", () => {
  test("Should render ExperienciaItem", () => {
    render(<
      ExperienciaItem 
      deleteExperiencia={() => null} 
      index={1} 
      updateExperiencia={() => null} 
      experiencia={experienciaMock}
    />);

    expect(screen.getByTestId("Empresa")).toBeDefined();
    expect(screen.getByTestId("Inicio")).toBeDefined();
    expect(screen.getByTestId("Fim")).toBeDefined();
    expect(screen.getByTestId("Cargo")).toBeDefined();
    expect(screen.getByTestId("Descricao")).toBeDefined();
  });
});
