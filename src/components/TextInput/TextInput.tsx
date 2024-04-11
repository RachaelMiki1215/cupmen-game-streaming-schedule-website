import React, { useEffect, useState } from "react";
import * as Styles from "./TextInput.module.css";

interface TextInputProps {
  className?: string;
  onChange?: (inputValue: string) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  className,
  onChange,
  placeholder,
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange ? onChange(inputValue) : "";
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  return (
    <input
      type="text"
      value={inputValue}
      placeholder={placeholder ?? ""}
      onChange={(e) => {
        handleInputChange(e);
      }}
      className={`${Styles.input} ${className}`}
    />
  );
};

export default TextInput;
