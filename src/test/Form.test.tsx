//test Form component
import React from "react";
import { render } from "@testing-library/react";
import Form from "../components/Form/Form";
import { FormProps } from "../components/Form/Form";

test("renders Form component", () => {
  const props: FormProps = {
    onSubmit: () => {},
    onClick: () => {},
    value: "",
    step: 0,
    typing: false,
  };
  render(<Form {...props} />);
});
