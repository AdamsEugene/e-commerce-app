import { Card, CardBody, Tooltip } from "@nextui-org/react";
import { type Options } from "@/src/types";
import { productDetailOptions } from "@/src/utils/onProduct";

type PROPS = {
  optionChanged: (option: Options) => void;
};

export default function OptionsOnProduct(props: PROPS) {
  const { optionChanged } = props;

  return (
    <div className="grid xs:grid-cols-2 grid-cols-4 gap-4">
      {productDetailOptions.map((option) => {
        const Icon = option.icon;

        return (
          <Tooltip
            key={option.key}
            showArrow={true}
            content={option.description}
            color="foreground"
          >
            <Card
              id={option.key}
              isPressable
              fullWidth
              shadow="sm"
              // className="h-full"
              onClick={() => {
                optionChanged(option.key);
              }}
            >
              <CardBody>
                <div className="flex flex-col gap-2 items-center justify-center relative text-center h-full">
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Icon className="text-[40px] text-secondary-500/30" />
                  </div> */}
                  <Icon className="text-2xl text-default-500" />
                  <p className="text-sm font-medium">{option.name}</p>
                </div>
              </CardBody>
            </Card>
          </Tooltip>
        );
      })}
    </div>
  );
}
