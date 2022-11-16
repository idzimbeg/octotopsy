import React from "react";
import { render } from "@testing-library/react";

import Button from "../components/Button/Button";

describe("Button", () => {
  test("renders Button component", () => {
    render(<Button label="Test" className={undefined} />);
  });
});
