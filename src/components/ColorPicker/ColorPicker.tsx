import React, { useReducer } from "react";
import { getHSLArray } from "../../functions/ColorFunctions";

interface Props {
  initColorHex?: string;
  onChange: (newColorHex: string) => void;
}

interface HSLSliderReducerState {
  hue: number;
  saturation: number;
  lightness: number;
}
enum HSLSliderReducerActionType {
  Hue = "hue",
  Saturation = "saturation",
  Lightness = "lightness",
}
interface HSLSliderReducerAction {
  type: HSLSliderReducerActionType;
  payload: number;
}
const colorReducer = (
  state: HSLSliderReducerState,
  action: HSLSliderReducerAction
) => {
  switch (action.type) {
    case HSLSliderReducerActionType.Hue:
      return {
        ...state,
        hue: action.payload,
      };
    case HSLSliderReducerActionType.Saturation:
      return {
        ...state,
        saturation: action.payload,
      };
    case HSLSliderReducerActionType.Lightness:
      return {
        ...state,
        lightness: action.payload,
      };
  }
};

const HSLColorSliders: React.FC<Props> = ({
  initColorHex,
  onChange,
}: Props) => {
  const initHSLArray = initColorHex ? getHSLArray(initColorHex) : [0, 0, 0];
  const [color, dispatchColor] = useReducer(colorReducer, {
    hue: initHSLArray[0],
    saturation: initHSLArray[1],
    lightness: initHSLArray[2],
  });

  // TODO: Add logic to convert hsl to hex and pass it on to
  // onChange (function param to pass value from this component to parent)
  const handleChange = () => {};

  return (
    <div>
      <input
        type="range"
        min={0}
        max={360}
        value={color.hue}
        onChange={(e) => {
          dispatchColor({
            type: HSLSliderReducerActionType.Hue,
            payload: parseInt(e.target.value),
          });
        }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={color.saturation}
        onChange={(e) => {
          dispatchColor({
            type: HSLSliderReducerActionType.Saturation,
            payload: parseInt(e.target.value),
          });
        }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={color.lightness}
        onChange={(e) => {
          dispatchColor({
            type: HSLSliderReducerActionType.Lightness,
            payload: parseInt(e.target.value),
          });
        }}
      />
    </div>
  );
};
