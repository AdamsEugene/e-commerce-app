import StyledButton from "@/components/StyledButton";
import StyledInput, { INPUT_PROPS } from "@/components/StyledInput";
import { Card, CardBody } from "@nextui-org/react";

type PROPS = {
  forWhat: "Login" | "Signup";
  message: string;
  formData: INPUT_PROPS[];
};

export default function Forms(props: PROPS) {
  const { formData, forWhat, message } = props;
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="text-3xl font-bold text-center mb-4">{forWhat}</h2>
        <Card className="flex flex-col justify-center items-center gap-6 max-w-[32.25rem] w-[32.25rem] mx-auto px-4 py-8">
          <CardBody className="flex flex-col justify-center items-center gap-6">
            <h4 className="text-xl font-bold text-center mb-4 capitalize">
              {message}
            </h4>
            {formData.map((data) => (
              <StyledInput key={data.label as string} {...data} iconStart />
            ))}
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
