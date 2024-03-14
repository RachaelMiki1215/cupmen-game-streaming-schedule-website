import React, { useState } from "react";
import * as Styles from "./RadioButtonList.module.css";

interface ItemProps {
  label: string;
  checkedOnDefault?: boolean;
  action?: () => void;
}

interface Props {
  items: ItemProps[];
  id: string;
  containerClass?: string;
  activeClass?: string;
  inactiveClass?: string;
}

const RadioButtonList: React.FC<Props> = ({
  items,
  id,
  containerClass,
  activeClass,
  inactiveClass,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    items.filter((item) => item.checkedOnDefault)[0].label
  );

  const handleOptionChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  return (
    <fieldset className={`${Styles.container} ${containerClass}`}>
      {items.map((item, i) => {
        return (
          <label
            className={Styles.label}
            key={`radioBtnLabel_${id}_${Math.random}`}
          >
            {item.label}
            <input
              type="radio"
              name={id}
              id={id}
              value={item.label}
              className={Styles.radioButton}
              checked={selectedValue === item.label}
              onChange={(e) => {
                handleOptionChange(e);
                item.action ? item.action() : () => {};
              }}
            />
          </label>
        );
      })}
    </fieldset>
  );
};

export default RadioButtonList;
export { ItemProps };
