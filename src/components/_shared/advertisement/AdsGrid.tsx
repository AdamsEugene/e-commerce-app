import { useMemo, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Image,
  Pagination,
} from "@nextui-org/react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ConditionalRender from "../Conditional/ConditionalRender";
import StyledImage from "../Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import { type AdCreative } from "../types/@ads";

type PROPS = {
  data: AdCreative[];
  onOpen: (kind: "edit" | "view" | "delete", item: AdCreative) => void;
};

export default function AdsGrid(props: PROPS) {
  const { data, onOpen } = props;

  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {items.map((item) => (
          <AdsGridItem key={item.headline} data={item} onOpen={onOpen} />
        ))}
      </div>
      <div className="flex w-full justify-between items-center">
        <div></div>
        <ConditionalRender
          condition={data.length >= rowsPerPage}
          Component={
            <Pagination
              isCompact
              showControls
              // showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          }
        />
      </div>
    </div>
  );
}

function AdsGridItem({
  data,
  onOpen,
}: {
  data: AdCreative;
  onOpen: (kind: "edit" | "view" | "delete", item: AdCreative) => void;
}) {
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col gap-4">
          <div className="h-32 w-full rounded-lg ads-banner">
            <Image
              alt={data.headline}
              className="h-28 w-full object-center rounded-r-none"
              as={StyledImage}
              height={112}
              src={imageByIndex(13)}
              width={3000}
              isZoomed
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold truncate">{data.headline}</p>
            <p className="text-sm">{data.description}</p>
            <div>
              <Button>{data.callToAction}</Button>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <ButtonGroup fullWidth variant="flat">
          <Button
            color="secondary"
            startContent={<FaEye className="text-lg" />}
            onClick={() => onOpen("view", data)}
          >
            View
          </Button>
          <Button
            color="warning"
            startContent={<FaEdit className="text-lg" />}
            onClick={() => onOpen("edit", data)}
          >
            Edit
          </Button>
          <Button
            color="danger"
            startContent={<MdDelete className="text-lg" />}
            onClick={() => onOpen("delete", data)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
