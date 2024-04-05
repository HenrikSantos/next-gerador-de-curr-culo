import React from "react";
import { render, screen } from "@testing-library/react";
import DadosPessoais from "./DadosPessoais";

test("Should render DadosPessoais", () => {
  render(<DadosPessoais />);
  expect(screen.getByText(/Nome Completo/i)).toBeDefined();
  expect(screen.getByText(/Email/i)).toBeDefined();
  expect(screen.getByText(/Nacionalidade/i)).toBeDefined();
  expect(screen.getByTestId("Idade")).toBeDefined();
  expect(screen.getByText(/Telefone Residêncial/i)).toBeDefined();
  expect(screen.getByText(/Celular/i)).toBeDefined();
  expect(screen.getByText(/Endereço/i)).toBeDefined();
  expect(screen.getByText(/Cidade/i)).toBeDefined();
  expect(screen.getByText(/Estado/i)).toBeDefined();
  expect(screen.getByText(/CEP/i)).toBeDefined();
  expect(screen.getByText(/Salvar/i)).toBeDefined();
});
