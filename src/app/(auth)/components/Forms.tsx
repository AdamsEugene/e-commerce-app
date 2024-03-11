import { Checkbox } from "@nextui-org/react";

import StyledButton from "@/src/components/StyledButton";
import StyledInput, { INPUT_PROPS } from "@/src/components/StyledInput";
import { Card, CardBody } from "@nextui-org/react";

type PROPS = {
  title: string;
  message: string;
  formData: INPUT_PROPS[];
};

export default function Forms(props: PROPS) {
  const { formData, title, message } = props;
  return (
    <div className="flex justify-center items-center relative top-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        <Card className="flex flex-col justify-center items-center gap-6 max-w-[32.25rem] w-[32.25rem] mx-auto px-4 py-8">
          <CardBody className="flex flex-col justify-center items-center gap-6">
            <h4 className="text-base leading-5 font-bold text-center mb-4 capitalize">
              {message}
            </h4>
            {formData.map((data) =>
              data.type === "checkbox" ? (
                <div key={data.label as string} className="w-full">
                  <Checkbox defaultSelected color="secondary">
                    <span className="text-sm text-[#606668]">
                      {data.label}
                    </span>
                  </Checkbox>
                </div>
              ) : (
                <StyledInput key={data.label as string} {...data} iconStart />
              )
            )}
            <StyledButton
              className="w-full"
              content="Submit"
              color="secondary"
              // isLoading
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
