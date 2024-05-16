import { Chip, ChipProps } from "@nextui-org/react";
import { IoAddCircle } from "react-icons/io5";

type PROPS = {
  title: string;
  data: { text: string; bg?: string }[];
};

export default function RenderSizeAndColor(props: PROPS & ChipProps) {
  const { data, title, ...others } = props;
  const editing = false;
  
  return (
    <div className="flex items-center gap-3 flex-1">
      <p className="min-w-[50px]">{title}</p>
      <div className="flex gap-1 items-center">
        {data.map((item) =>
          item.text !== "+" ? (
            editing ? (
              <Chip
                key={item.text}
                size="lg"
                className={`bg-[${item?.bg}]`}
                onClose={() => console.log("close")}
                style={{ background: item?.bg }}
                {...others}
              >
                {item?.text}
              </Chip>
            ) : (
              <Chip
                key={item.text}
                size="lg"
                className={`bg-[${item?.bg}]`}
                style={{ background: item?.bg }}
                {...others}
              >
                {item?.text}
              </Chip>
            )
          ) : (
            editing && (
              <Chip
                key={item.text}
                variant="flat"
                size="lg"
                avatar={<IoAddCircle />}
                {...others}
              >
                Add
              </Chip>
            )
          )
        )}
      </div>
    </div>
  );
}
