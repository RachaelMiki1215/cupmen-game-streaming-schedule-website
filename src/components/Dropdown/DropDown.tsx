import React, { useState } from "react";
import * as Styles from "./DropDown.module.css";

type DropDownOption = {
  value: string;
  displayText: string;
  action: () => void;
};

interface DropDownProps {
  options: DropDownOption[];
  defaultSelValue?: string | null;
  containerClass?: React.CSSProperties;
  activeClass?: React.CSSProperties;
  inactiveClass?: React.CSSProperties;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  defaultSelValue = null,
  containerClass,
  activeClass,
  inactiveClass,
}: DropDownProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    options.filter((option) => option.value === defaultSelValue)[0].value
  );

  const handleOptionChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  return (
    <select
      className={Styles.container}
      onChange={(e) => {
        handleOptionChange(e);
        options.filter((option) => option.value === e.target.value)[0].action();
      }}
    >
      {/* TODO: Figure out how to customize this even more, etc. dropdown box, arrow */}
      {options.map((option) => {
        return (
          <option
            selected={selectedValue === option.value}
            value={option.value}
          >
            {option.displayText}
          </option>
        );
      })}
    </select>
  );
};

export default DropDown;
export { DropDownOption };
