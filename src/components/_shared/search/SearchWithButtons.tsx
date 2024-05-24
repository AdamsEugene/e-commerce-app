"use client";

import { useAppStore } from "@/src/providers/AppStoreProvider";
import { Button } from "@nextui-org/button";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import { IoGridSharp, IoListSharp } from "react-icons/io5";
import StyledInput from "../Styled/StyledInput";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import ConditionalRender from "../Conditional/ConditionalRender";

export default function SearchWithButtons({
  buttons,
  mode = true,
}: {
  buttons?: JSX.Element[];
  mode?: boolean;
}) {
  const displayMode = useAppStore((state) => state.displayMode);
  const toggleDisplayMode = useAppStore((state) => state.toggleDisplayMode);

  return (
    <div className="flex gap-3 items-center">
      {buttons}
      <ConditionalRender
        condition={mode}
        Component={
          <Button
            onClick={() => toggleDisplayMode(displayMode)}
            variant="flat"
            // color="warning"
            isIconOnly
          >
            <ConditionalRenderAB
              condition={displayMode === "grid"}
              ComponentA={<IoListSharp className="text-xl" />}
              ComponentB={<IoGridSharp className="text-xl" />}
            />
          </Button>
        }
      />
      <Button
        key="filter"
        // onClick={() => {}}
        variant="flat"
        // color="warning"
        isIconOnly
      >
        <FaFilter className="text-base" />
      </Button>
      <StyledInput
        iconStart
        both
        keys="L"
        Icon={FiSearch}
        className="lg:w-[400px] md:w-[340px] sm:w-[200px]"
      />
    </div>
  );
}
