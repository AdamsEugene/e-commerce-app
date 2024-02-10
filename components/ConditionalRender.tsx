import React from "react";

type PROPS = {
  condition: boolean;
  Component: React.ReactNode;
};

export default function ConditionalRender(props: PROPS) {
  const { Component, condition } = props;
  return condition ? <>{Component}</> : null;
}
