import React, { useState } from "react";
import { ColorResult, ChromePicker } from "react-color";

type PROPS = {
  className?: string;
  onColorChange: (color: ColorResult) => void;
};

const ColorPicker: React.FC<PROPS> = ({ className,onColorChange }) => {
  const [background, setBackground] = useState<string>("#fff");

  const handleChangeComplete = (color: ColorResult) => {
    setBackground(color.hex);
    onColorChange(color)
  };

  return (
    <ChromePicker
      color={background}
      className={className}
      disableAlpha={false}
      onChangeComplete={handleChangeComplete}
    />
  );
};

export default ColorPicker;
