import React from "react";
import { render, screen } from "@testing-library/react";
import CurriculumRender from "./CurriculumRender";

test("checks if the div with text CurriculumRender is present", () => {
  render(<CurriculumRender />);
  const divElement = screen.getByText(/CurriculumRender/i);
  expect(divElement).toBeDefined();
});
