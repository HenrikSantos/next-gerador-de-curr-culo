import React from "react";
import { render } from "@testing-library/react";
import FormacaoAcademica from "./FormacaoAcademica";

test("checks if the div with text FormacaoAcademica is present", () => {
  const { getByText } = render(<FormacaoAcademica />);
  const divElement = getByText(/FormacaoAcademica/i);
  expect(divElement).toBeInTheDocument();
});