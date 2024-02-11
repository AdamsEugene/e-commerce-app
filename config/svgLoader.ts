const svg_s = {
  mtn: "/assets/svgs/mtn.svg",
  airtel: "/assets/svgs/airtel.svg",
  vodafone: "/assets/svgs/vodafone.svg",
};

const svgLoader = (name: string) => {
  return svg_s[name as keyof typeof svg_s];
};

export default svgLoader;
