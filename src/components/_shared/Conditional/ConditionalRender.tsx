import { AnimatePresence, motion } from "framer-motion";

type PROPS = {
  condition: boolean;
  Component: React.ReactNode;
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function ConditionalRender(props: PROPS) {
  const { Component, condition } = props;

  // return (
  //   <AnimatePresence>
  //     {condition && (
  //       <motion.div
  //         key="component"
  //         initial="hidden"
  //         animate="visible"
  //         exit="hidden"
  //         variants={scaleVariants}
  //         className="w-full"
  //       >
  //         {Component}
  //       </motion.div>
  //     )}
  //   </AnimatePresence>
  // );

  return condition ? <>{Component}</> : null;
}
