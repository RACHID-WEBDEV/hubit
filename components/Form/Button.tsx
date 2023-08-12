import classNames from "classnames";
import React from "react";

const Button = ({
  color = "primary",
  title,
  className,
}: {
  color?: string;
  title: string;
  className?: string;
}) => {
  return (
    <>
      <button
        className={classNames(
          "relative flex h-12 px-7 items-center justify-center before:absolute before:inset-0 before:rounded-full  before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 ",
          { "before:transition before:bg-primary ": color === "primary" },
          {
            " before:transition-transform before:bg-secondary lg:before:bg-secondary lg:before:border lg:before:border-gray-200 ":
              color === "secondary",
          },
          className
        )}
      >
        <span
          className={classNames(
            "relative w-max text-sm font-bold text-white font-Syne",
            { "hover:text-secondary": color === "primary" },
            {
              "hover:text-primary": color === "secondary",
            }
          )}
        >
          {title}
        </span>
      </button>
    </>
  );
};

export default Button;
