import React from "react";
import clsx from "clsx";

// import "./Spinner.css";
import { twMerge } from "tailwind-merge";

type SpinnerProps = {
  className: string | undefined;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  center?: boolean;
};

const Spinner = ({ className, size = "md", center = true }: SpinnerProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          "spinner bg-gradient-to-r from-indigo-500 ...",
          { "w-[20px]": size === "xs" },
          { "w-[30px]": size === "sm" },
          { "w-[50px]": size === "md" },
          { "w-[60px]": size === "lg" },
          { "w-[70px]": size === "xl" },
          { "justify-center": center },
          className
        )
      )}
    />
  );
};
export default Spinner;
