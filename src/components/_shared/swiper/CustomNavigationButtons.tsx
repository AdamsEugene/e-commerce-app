import { Fragment } from "react";
import { Button, ButtonProps } from "@nextui-org/button";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function CustomNavigationButtons(props: ButtonProps) {
  return (
    <Fragment>
      <Button
        isIconOnly
        radius="full"
        variant="light"
        size="sm"
        color="secondary"
        className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
        {...props}
      >
        <MdOutlineArrowBackIos className="text-xl" />
      </Button>
      <Button
        isIconOnly
        radius="full"
        variant="light"
        size="sm"
        color="secondary"
        className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
        {...props}
      >
        <MdOutlineArrowForwardIos className="text-xl" />
      </Button>
    </Fragment>
  );
}
