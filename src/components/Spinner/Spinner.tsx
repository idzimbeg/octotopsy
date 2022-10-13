import React from "react";
import clsx from "clsx";

import "./Spinner.css";

type SpinnerProps = {
  label?: string;
  className: string | undefined;
};

const Spinner = (props: SpinnerProps) => {
  return <div className={clsx(`spinner ${props.className}`)}></div>;
};
export default Spinner;
