//unit test for card component
import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("renders learn react link", () => {
  render(<Card children={undefined} label={""} />);
});
