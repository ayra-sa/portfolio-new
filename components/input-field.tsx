import React from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const InputField: React.FC<InputFieldProps> = ({ ...rest }) => {
  return (
    <input
      className="px-3 py-2 font-medium w-full bg-white rounded-md border border-neutral-200 shadow-sm focus:outline-none"
      {...rest}
    />
  );
};

export default InputField;
