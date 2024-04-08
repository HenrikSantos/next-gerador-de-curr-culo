import React from "react";
import { render } from "@testing-library/react";
import ExperienciaItem from "./ExperienciaItem";

test("checks if the div with text ExperienciaItem is present", () => {
  const { getByText } = render(<ExperienciaItem />);
  const divElement = getByText(/ExperienciaItem/i);
  expect(divElement).toBeInTheDocument();
});