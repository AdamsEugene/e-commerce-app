import React, { PropsWithChildren } from "react";

type PROPS = {
  condition: boolean;
  fallback: React.ReactNode;
};

export default function CustomSuspense(props: PropsWithChildren<PROPS>) {
  const { condition, fallback, children } = props;
  return condition ? <>{children}</> : <>{fallback}</>;
}
