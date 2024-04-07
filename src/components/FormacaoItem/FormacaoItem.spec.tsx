import React from "react";
import { render } from "@testing-library/react";
import FormacaoItem from "./FormacaoItem";

test("checks if the div with text FormacaoItem is present", () => {
  const { getByText } = render(<FormacaoItem />);
  const divElement = getByText(/FormacaoItem/i);
  expect(divElement).toBeInTheDocument();
});