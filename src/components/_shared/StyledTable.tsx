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
} from "@nextui-org/react";
import { users } from "@/src/utils/dashboardData";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoImage } from "react-icons/io5";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  notActive: "danger",
  pending: "warning",
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
              statusColorMap[(item as any)?.status ? "active" : "notActive"] ||
              "warning"
            }
            size="sm"
            variant="flat"
          >
            {cellValue ? "Active" : "Inactive"}
          </Chip>
        );
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
      <TableBody emptyContent={"No rows to display."} items={data}>
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
