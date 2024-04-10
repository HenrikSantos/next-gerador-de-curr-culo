import React from "react";
import { render } from "@testing-library/react";
import OutrasInformacoes from "./OutrasInformacoes";

test("checks if the div with text OutrasInformacoes is present", () => {
  const { getByText } = render(<OutrasInformacoes />);
  const divElement = getByText(/OutrasInformacoes/i);
  expect(divElement).toBeDefined();
});
