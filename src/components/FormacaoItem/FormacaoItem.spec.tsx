import React from "react";
import { render, screen } from "@testing-library/react";
import FormacaoItem from "./FormacaoItem";
import { IFormacaoAcademica } from "../FormacaoAcademica/IFormacaoAcademica";

const formacaoMock: IFormacaoAcademica = {
  AnoDeConclusao: "",
  Curso: "",
  Instituicao: ""
};

describe("FormacaoAcademica", () => {
  test("checks if the div with text FormacaoItem is present", () => {
    render(<FormacaoItem deleteFormacao={() => null} updateFormacao={() => null} index={1}  formacao={formacaoMock}/>);
    expect(screen.getByTestId("Curso")).toBeDefined();
    expect(screen.getByTestId("Instituicao")).toBeDefined();
    expect(screen.getByTestId("AnoDeConclusao")).toBeDefined();
  });
});
