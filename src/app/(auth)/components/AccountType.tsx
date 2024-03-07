"use client";

import { useAppStore } from "@/src/providers/AppStoreProvider";
import { AuthState } from "@/src/store/authSlice";
import { Card, CardBody } from "@nextui-org/react";
import { AiOutlineUser, AiOutlineBuild, AiOutlineTeam } from "react-icons/ai";

type AccountType = {
  title: string;
  description: string;
  icon: JSX.Element;
  type: AuthState["accountType"];
};

const accountTypes: AccountType[] = [
  {
    title: "Default",
    description: "Default account type",
    icon: <AiOutlineUser size={40} />,
    type: "default",
  },
  {
    title: "Employee/Member",
    description: "Individuals working or associated with an organization",
    icon: <AiOutlineUser size={40} />,
    type: "employee",
  },
  {
    title: "Organization/Employer",
    description: "Companies, businesses, or employers seeking employees",
    icon: <AiOutlineBuild size={40} />,
    type: "organization",
  },
  {
    title: "Association/Group",
    description: "Groups, clubs, or associations with a collective purpose",
    icon: <AiOutlineTeam size={40} />,
    type: "association",
  },
];

const AccountType = () => {
  const updateAccountType = useAppStore((state) => state.updateAccountType);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="main flex flex-col items-center justify-center gap-4 -mt-20">
        <h1 className="text-3xl font-bold mb-2">Choose Your Account Type</h1>
        <p className="text-lg text-gray-600 mb-8">
          Select the account type that best fits your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {accountTypes.map((type, index) => (
            <Card key={index} isHoverable isPressable>
              <CardBody onClick={() => updateAccountType(type.type)}>
                {type.icon}
                <h3 className="text-lg font-semibold mt-2">{type.title}</h3>
                <p className="text-gray-500">{type.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountType;
