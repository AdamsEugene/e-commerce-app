import Loading from "@/src/components/_shared/others/Loading";
// import StyledImage from "@/components/StyledImage";
// import svgLoader from "@/config/svgLoader";

export default function loading() {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      {/* <AbsoluteImage /> */}
      <Loading size="lg" color="secondary" label="Loading..." />
    </div>
  );
}

// const AbsoluteImage = () => {
//   return (
//     <div className="absolute bottom-0 right-0">
//       <StyledImage
//         src={svgLoader("loading")}
//         height={400}
//         width={400}
//         className="opacity-100"
//       />
//     </div>
//   );
// };
