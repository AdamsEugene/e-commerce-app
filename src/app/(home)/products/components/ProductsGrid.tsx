import StyledImage from "@/src/components/_shared/Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import { MdModeEdit } from "react-icons/md";

type PROPS = {
  reverse?: boolean;
};

export default function ProductsGrid(props: PROPS) {
  const { reverse } = props;

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4">
      <div className="grid xs:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 w-full">
        <div className={`col-span-2 ${reverse ? "order-last" : "order-1"}`}>
          <Card shadow="sm" isPressable>
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between w-full">
                <p className="text-lg font-semibold">Gaming accessories</p>
                <div className="flex items-center gap-3">
                  <Button
                    color="secondary"
                    variant="light"
                    aria-label="Edit campaign"
                  >
                    See more
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full">
                {[11, 2, 13, 19].map((i) => (
                  <div key={i}>
                    <StyledImage
                      shadow="sm"
                      radius="lg"
                      width={300}
                      height={300}
                      alt={"item.name"}
                      className="object-cover product_image !h-36 w-full"
                      src={imageByIndex(i)}
                      isZoomed
                    />
                    <p className="text-default-500">product name</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-3">
          <Card shadow="sm" isPressable>
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between w-full">
                <p className="text-lg font-semibold">Shop deals in Fashion</p>
                <div className="flex items-center gap-3">
                  <Button
                    color="secondary"
                    variant="light"
                    aria-label="Edit campaign"
                  >
                    See all deals
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full">
                {[12, 17, 3, 9, 6, 8].map((i) => (
                  <div key={i}>
                    <StyledImage
                      shadow="sm"
                      radius="lg"
                      width={300}
                      height={300}
                      alt={"item.name"}
                      className="object-cover product_image !h-36 w-full"
                      src={imageByIndex(i)}
                      isZoomed
                    />
                    <p className="text-default-500">product name</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
