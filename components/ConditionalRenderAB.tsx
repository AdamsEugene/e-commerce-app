import React from "react";

type PROPS = {
  condition: boolean;
  ComponentA: React.ReactNode;
  ComponentB: React.ReactNode;
};

export default function ConditionalRenderAB(props: PROPS) {
  const { ComponentA, ComponentB, condition } = props;
  return condition ? <>{ComponentA}</> : <>{ComponentB}</>;
}
