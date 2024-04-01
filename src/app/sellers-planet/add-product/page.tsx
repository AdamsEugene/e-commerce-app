import Link from "next/link";
import { Metadata } from "next";
import { addProductsMetrics } from "@/src/utils/dashboardData";
import { Button } from "@nextui-org/button";

export const metadata: Metadata = {
  title: "Add Products",
};

export default function AddProducts() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div></div>
        <div className="flex gap-4 items-center">
          {addProductsMetrics.map((item) => {
            const Icon = item.icon
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
    </div>
  );
}
