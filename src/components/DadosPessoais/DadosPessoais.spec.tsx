import React from "react";
import DadosPessoais from "./DadosPessoais";
import { render, screen } from "@testing-library/react";

describe("DadosPessoais", () => {
  test("Should render DadosPessoais", () => {
    render(<DadosPessoais />);
    expect(screen.getByTestId("NomeCompleto")).toBeDefined();
    expect(screen.getByTestId("Subtitulo")).toBeDefined();
    expect(screen.getByTestId("Email")).toBeDefined();
    expect(screen.getByTestId("Sobre")).toBeDefined();
    expect(screen.getByTestId("Nacionalidade")).toBeDefined();
    expect(screen.getByTestId("Idade")).toBeDefined();
    expect(screen.getByTestId("TelefoneResidencial")).toBeDefined();
    expect(screen.getByTestId("Celular")).toBeDefined();
    expect(screen.getByTestId("Endereco")).toBeDefined();
    expect(screen.getByTestId("Salvar")).toBeDefined();
  });
});
