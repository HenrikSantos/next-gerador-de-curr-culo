import React from "react";
import { render } from "@testing-library/react";
import ExperienciaItem from "./ExperienciaItem";
import { IExperiencia } from "../Experiencia/IExperiencia";

const experienciaMock: IExperiencia = {
  Inicio: "",
  Fim: "",
  Cargo: "",
  Descricao: "",
  Empresa: ""
};

test("checks if the div with text ExperienciaItem is present", () => {
  const { getByText } = render(<
    ExperienciaItem 
    deleteExperiencia={() => null} 
    index={1} 
    updateExperiencia={() => null} 
    experiencia={experienciaMock}
  />);
  const divElement = getByText(/ExperienciaItem/i);
  expect(divElement).toBeDefined();
});
