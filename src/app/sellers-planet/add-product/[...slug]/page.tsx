import Link from "next/link";
import { Button } from "@nextui-org/button";
import { addProductsMetrics } from "@/src/utils/dashboardData";
import BackButton from "@/src/components/_shared/button/BackButton";
import LoadExcel from "@/src/components/_shared/files/LoadExcel";

interface ItemDetailsParams {
  params: { slug: string[] };
}

const ItemDetails: React.FC<ItemDetailsParams> = ({ params }) => {
  const renderContent = () => {
    switch (params.slug[0]) {
      case "load-excel":
        return <LoadExcel />;
      case "load-csv":
        return <>Load CSV</>;
      case "create-template":
        return <>Create Template</>;
      case "use-template":
        return <>Use Template</>;
      default:
        return <>Something</>;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <ButtonIcons />
      {renderContent()}
    </div>
  );
};

export default ItemDetails;

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
