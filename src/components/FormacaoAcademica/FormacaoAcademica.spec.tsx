import React from "react";
import { render, screen } from "@testing-library/react";
import FormacaoAcademica from "./FormacaoAcademica";

describe("FormacaoAcademica", () => {
  test("Should render FormacaoAcademica", () => {
    render(<FormacaoAcademica />);
    expect(screen.getByTestId("BtnFormacao")).toBeDefined();
    expect(screen.getByTestId("Salvar")).toBeDefined();
  });
});
