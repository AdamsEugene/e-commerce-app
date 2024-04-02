import Link from "next/link";
import { Button } from "@nextui-org/button";
import { addProductsMetrics } from "@/src/utils/dashboardData";
import BackButton from "@/src/components/_shared/button/BackButton";
import LoadExcel from "@/src/components/_shared/files/LoadExcel";

export default function ItemDetails({ params }: { params: string[] }) {
  if (Object.keys(params).length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full justify-center items-center w-full">
        <ButtonIcons />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          something
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <ButtonIcons />
      <div className="w-full gap-4">load</div>
      <LoadExcel />
    </div>
  );
}

const ButtonIcons = () => (
  <div className="flex items-center justify-between">
    <BackButton />
    <div className="flex gap-4 items-center">
      {addProductsMetrics.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.value}
            as={Link}
            href={item.link}
            style={{ background: item.bgColor }}
            startContent={<Icon />}
          >
            {item.value}
          </Button>
        );
      })}
    </div>
  </div>
);
