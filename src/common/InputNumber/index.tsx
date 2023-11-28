import React from "react";
import { InputTelephone } from "./styles";

interface InputNumberProps {
  onInputChange: (input: string) => void;
}

const InputNumber = ({ onInputChange }: InputNumberProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };
  return (
    <div>
      <InputTelephone
        type="tel"
        name="tel"
        placeholder="+7 (999) 999-99-99"
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

export default InputNumber;
