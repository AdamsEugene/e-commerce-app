import {
  MdMail,
  MdOutlineSecurity,
  MdPerson,
  MdLocalPhone,
} from "react-icons/md";

import { INPUT_PROPS } from "../components/_shared/Styled/StyledInput";

export const generalFormData: INPUT_PROPS[] = [
  {
    label: "Email",
    placeholder: "adams@gmail.com",
    type: "email",
    Icon: MdMail,
    isRequired: true,
  },
  {
    label: "Name",
    placeholder: "Adams Eugene",
    type: "text",
    Icon: MdPerson,
    isRequired: true,
  },
  {
    label: "Phone",
    placeholder: "0 244 22 44 55",
    type: "phone",
    Icon: MdLocalPhone,
    isRequired: true,
  },
  {
    label: "Password",
    placeholder: "",
    type: "password",
    Icon: MdOutlineSecurity,
    isRequired: true,
  },
  {
    label: "Confirm Password",
    placeholder: "",
    type: "password",
    Icon: MdOutlineSecurity,
    isRequired: true,
  },
];
