import React from "react";
import clsx from "clsx";

import "./Button.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
  href?: string;
  className: string | undefined;
};

const Button = (props: ButtonProps) => {
  return (
    <a href={props.href}>
      <button
        onClick={props.onClick}
        className={clsx(`button ${props.className}`)}
      >
        {props.label}
        {props.children}
      </button>
    </a>
  );
};
export default Button;
