import React, { useState } from "react";
import { SketchPicker, ColorResult } from "react-color";

const ColorPicker: React.FC = () => {
  const [background, setBackground] = useState<string>("#fff");

  const handleChangeComplete = (color: ColorResult) => {
    setBackground(color.hex);
  };

  return (
    <SketchPicker color={background} onChangeComplete={handleChangeComplete} />
  );
};

export default ColorPicker;
