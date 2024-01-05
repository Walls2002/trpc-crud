import React from "react";

interface Input {
  name: string;
  type: string;
  placeholder?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({
  placeholder,
  type,
  name,
  onChange,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="input input-bordered input-sm w-full max-w-xs"
      value={value}
    />
  );
};

export default Input;
