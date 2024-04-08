import React from "react";
import { render } from "@testing-library/react";
import Experiencia from "./Experiencia";

test("checks if the div with text Experiencia is present", () => {
  const { getByText } = render(<Experiencia />);
  const divElement = getByText(/Experiencia/i);
  expect(divElement).toBeInTheDocument();
});