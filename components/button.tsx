import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    classname?: string
};

const Button: React.FC<ButtonProps> = ({ classname, ...rest }) => {
  return (
    <button
      className={`bg-blue-500 rounded-lg px-5 py-2 font-semibold text-white shadow-sm transition-all duration-500 hover:rounded-2xl hover:shadow-md ${classname}`}
      {...rest}
    />
  );
};

export default Button;
