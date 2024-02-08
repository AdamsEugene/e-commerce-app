import React from "react";
import { User, Link } from "@nextui-org/react";

type PROPS = {
  name: string;
  image: string;
  email: string;
};

export default function StyledUser(props: PROPS) {
  const { email, image, name } = props;

  return (
    <User
      as="button"
      name={name}
      description={email}
      className="transition-transform"
      avatarProps={{
        src: image,
      }}
    />
  )
}
