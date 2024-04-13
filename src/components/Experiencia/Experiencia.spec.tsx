import React from "react";
import { render, screen } from "@testing-library/react";
import Experiencia from "./Experiencia";

describe("Experiencia", () => {
  test("Should render Experiencia", () => {
    render(<Experiencia />);
    expect(screen.getByTestId("BtnExperiencia")).toBeDefined();
  });
});
