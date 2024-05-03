"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
  getKeyValue,
  TableProps,
  Pagination,
} from "@nextui-org/react";
import { users } from "@/src/utils/dashboardData";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoImage } from "react-icons/io5";
import ConditionalRender from "./Conditional/ConditionalRender";

const inCludesEndingSoon = (label: string) =>
  label.includes("ending soon") ? "ending soon" : label;

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  notActive: "danger",
  ended: "danger",
  paused: "primary",
  pending: "warning",
  draft: "secondary",
  "ending soon": "warning",
};

const getColor = (index: number) => {
  const map: Record<number, ChipProps["color"]> = {
    0: "secondary",
    1: "primary",
    2: "success",
    3: "warning",
  };

  return map[index] || "default";
};

type User = (typeof users)[0];

type Column = {
  name: string;
  uid: string;
};

type PROPS<T> = {
  data: T[];
  columns: Column[];
};

export default function StyledTable<T>(props: PROPS<T> & TableProps) {
  const { columns, data, ...others } = props;

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 12;

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);

  const renderCell = React.useCallback((item: T, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof T] as string | number;

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: (item as any)?.image,
              showFallback: true,
              // name: (item as any)?.name,
              fallback: <IoImage className="text-xl" />,
            }}
            // description={(item as any)?.description}
            name={cellValue}
          >
            {(item as any)?.name}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {(item as any)?.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={
              statusColorMap[
                inCludesEndingSoon((item as any)?.status?.toLowerCase())
              ]
            }
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "targetAudience":
        return (cellValue as any).map((item: string, index: number) => (
          <Chip
            key={item}
            className="capitalize"
            size="sm"
            variant="flat"
            color={getColor(index)}
          >
            {item}
          </Chip>
        ));
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaEye />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <MdDelete />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      isStriped
      removeWrapper
      fullWidth
      aria-label="Example table with custom cells"
      bottomContent={
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
      }
      {...others}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No rows to display."} items={items}>
        {(item) => (
          <TableRow key={(item as any)?.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
