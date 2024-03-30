const getRGBArray = (colorHex: string): number[] => {
  const rgb: number[] = colorHex
    .match(/^#?([a-f\d](2))([a-f\d](2))([a-f\d](2))$/i)
    ?.slice(1)
    .map((x) => parseInt(x, 16)) as number[];

  return rgb;
};

const getHSLArray = (colorHex: string): number[] => {
  const rgb = getRGBArray(colorHex);

  const hue =
    (Math.atan2(
      Math.sqrt(3) * (rgb[1] - rgb[2]),
      2 * rgb[0] - rgb[1] - rgb[2]
    ) *
      180) /
    Math.PI;

  const max = Math.max(...rgb);
  const min = Math.min(...rgb);
  const saturation = (max - min) / (max + min);

  const lightness = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];

  return [hue, saturation, lightness];
};

// TODO: Finish up this conversion function
const convertHSLtoRGB = (
  hue: number,
  saturation: number,
  lightness: number
): string => {
  return "";
};

export { getRGBArray, getHSLArray };
