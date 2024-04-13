import React from "react";
import { render, screen } from "@testing-library/react";
import OutrasInformacoes from "./OutrasInformacoes";

describe("OutrasInformacoes", () => {
  test("Should render OutrasInformacoes", () => {
    render(<OutrasInformacoes />);
    expect(screen.getByTestId("OutrasInformacoes")).toBeDefined();
    expect(screen.getByTestId("Salvar")).toBeDefined();
  });
});
