import React from "react";
import { render } from "@testing-library/react";
import FormacaoItem from "./FormacaoItem";
import { IFormacaoAcademica } from "../FormacaoAcademica/IFormacaoAcademica";

const formacaoMock: IFormacaoAcademica = {
  AnoDeConclusao: "",
  Curso: "",
  Instituicao: ""
};

test("checks if the div with text FormacaoItem is present", () => {
  const { getByText } = render(<FormacaoItem deleteFormacao={() => null} updateFormacao={() => null} index={1}  formacao={formacaoMock}/>);
  const divElement = getByText(/FormacaoItem/i);
  expect(divElement).toBeDefined();
});
