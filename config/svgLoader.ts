import loading from "./loading.svg";

const svg_s = {
  loading,
};

const svgLoader = (name: string) => {
  return svg_s[name as keyof typeof svg_s];
};

export default svgLoader;
