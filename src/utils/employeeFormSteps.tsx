import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import {
  MdPerson,
  MdWork,
  MdSecurity,
  MdPhone,
  MdInsertPhoto,
  MdAttachMoney,
  MdDateRange,
  MdAccountBalance,
  MdBusiness,
  MdLocationOn,
  MdEmail,
  MdCheckCircle,
  MdAssignment,
} from "react-icons/md";
import {
  FaMapMarkerAlt,
  FaHome,
  FaMapMarkedAlt,
  FaPhone,
  FaIdCard,
  FaImage,
} from "react-icons/fa";

import Forms from "../app/(auth)/components/Forms";
import { generalFormData } from "@/src/utils/generalFormData";

export const employeeFormSteps = [
  {
    label: "Basic info",
    // icon: <AiOutlineHome />,
    visited: true,
  },
  {
    label: "Personal Details",
    icon: <AiOutlineUser />,
    visited: false,
  },
  {
    label: "Employment Details",
    icon: <AiOutlineMail />,
    visited: false,
  },
  {
    label: "Banking Details",
    // icon: <AiOutlineMail />,
    visited: false,
  },
];

const personalDetails = [
  {
    label: "Municipal/district",
    placeholder: "Enter municipal/district",
    type: "text",
    Icon: FaMapMarkerAlt,
    isRequired: true,
  },
  {
    label: "House location with common landmark",
    placeholder: "Enter house location",
    type: "text",
    Icon: FaHome,
    isRequired: true,
  },
  {
    label: "House GPS address (Ghana Post GPS and street address)",
    placeholder: "Enter GPS address",
    type: "text",
    Icon: FaMapMarkedAlt,
    isRequired: true,
  },
  {
    label: "Second person’s phone number",
    placeholder: "Enter second person’s phone number",
    type: "tel",
    Icon: FaPhone,
    isRequired: true,
  },
  {
    label: "National ID",
    placeholder: "Enter national ID",
    type: "file",
    Icon: FaIdCard,
    isRequired: true,
  },
  {
    label: "Upload “very clear” picture",
    placeholder: "Upload picture",
    type: "file",
    Icon: FaImage,
    isRequired: true,
  },
];
const employmentDetails = [
  {
    label: "Organization/Employer/Institution/Association/Group",
    placeholder: "Enter organization/employer",
    type: "text",
    Icon: MdWork,
    isRequired: true,
  },
  {
    label: "Employment Status",
    placeholder: "Select employment status",
    type: "select", // Assuming you have a dropdown/select component
    Icon: MdSecurity,
    isRequired: true,
  },
  {
    label: "Department",
    placeholder: "Enter department",
    type: "text",
    Icon: MdWork,
    isRequired: true,
  },
  {
    label: "Position in the Organization",
    placeholder: "Enter position",
    type: "text",
    Icon: MdWork,
    isRequired: true,
  },
  {
    label: "Branch of the Organization",
    placeholder: "Enter branch",
    type: "text",
    Icon: MdWork,
  },
  {
    label: "TIN Number",
    placeholder: "Enter TIN number",
    type: "text",
    Icon: MdWork,
  },
  {
    label: "Years of Working Experience",
    placeholder: "Enter years of experience",
    type: "number",
    Icon: MdWork,
  },
  {
    label: "Contract Start Date",
    placeholder: "Select start date",
    type: "date", // Assuming you have a date picker component
    Icon: MdDateRange,
  },
  {
    label: "Contract End Date",
    placeholder: "Select end date",
    type: "date", // Assuming you have a date picker component
    Icon: MdDateRange,
  },
  {
    label: "Former Organization/Employer",
    placeholder: "Enter former organization",
    type: "text",
    Icon: MdWork,
  },
  {
    label: "Organization’s Location with Common Landmark",
    placeholder: "Enter organization's location",
    type: "text",
    Icon: MdPerson,
  },
  {
    label: "Organization’s GPS Address",
    placeholder: "Enter GPS address",
    type: "text",
    Icon: MdPhone,
  },
  {
    label: "Organization’s ID",
    placeholder: "Upload ID picture",
    type: "file",
    Icon: MdInsertPhoto,
  },
  {
    label: "Upload Very Recent Pay Slip",
    placeholder: "Upload pay slip",
    type: "file",
    Icon: MdInsertPhoto,
  },
  {
    label: "Net Salary",
    placeholder: "Enter net salary",
    type: "text",
    Icon: MdAttachMoney,
  },
  {
    label: "Gross Salary",
    placeholder: "Enter gross salary",
    type: "text",
    Icon: MdAttachMoney,
  },
  {
    label: "Current Commitment",
    placeholder: "Enter current commitment",
    type: "text",
    Icon: MdAttachMoney,
  },
  {
    label: "Organizational Financial Insurance System",
    placeholder: "Enter insurance system details",
    type: "text",
    Icon: MdSecurity,
  },
  {
    label: "Guarantor",
    placeholder: "Enter guarantor details",
    type: "text",
    Icon: MdPerson,
    isRequired: true,
  },
];

const bankingDetails = [
  {
    label: "Bank's Name",
    placeholder: "Enter bank's name",
    type: "text",
    Icon: MdAccountBalance,
    isRequired: true,
  },
  {
    label: "Branch",
    placeholder: "Enter branch",
    type: "text",
    Icon: MdBusiness,
    isRequired: true,
  },
  {
    label: "Address",
    placeholder: "Enter bank's address",
    type: "text",
    Icon: MdLocationOn,
    isRequired: true,
  },
  {
    label: "GPS Location",
    placeholder: "Enter GPS location",
    type: "text",
    Icon: FaMapMarkedAlt,
    isRequired: true,
  },
  {
    label: "Bank Account Name",
    placeholder: "Enter account name",
    type: "text",
    Icon: MdPerson,
    isRequired: true,
  },
  {
    label: "Bank Account Number",
    placeholder: "Enter account number",
    type: "text",
    Icon: MdAssignment,
    isRequired: true,
  },
  {
    label: "Relationship Manager",
    placeholder: "Enter relationship manager's name",
    type: "text",
    Icon: MdPerson,
  },
  {
    label: "Manager's Phone Contact",
    placeholder: "Enter manager's phone contact",
    type: "tel",
    Icon: MdPhone,
  },
  {
    label: "Manager's Email",
    placeholder: "Enter manager's email",
    type: "email",
    Icon: MdEmail,
  },
  {
    label: "Check to Accept Undertaken",
    type: "checkbox",
    Icon: MdCheckCircle,
    isRequired: true,
  },
  {
    label: "Check to Accept Terms and Conditions",
    type: "checkbox",
    Icon: MdCheckCircle,
    isRequired: true,
  },
  {
    label: "Standing Order Form",
    placeholder: "Link to Standing Order Form",
    type: "text",
    Icon: MdAssignment,
  },
];

export const employeeStepsData = [
  {
    component: (
      <Forms
        formData={generalFormData}
        title="General Signup Info"
        message="Provide basic information to get started with your employee account."
      />
    ),
  },
  {
    component: (
      <Forms
        formData={personalDetails}
        title="Personal Details"
        message="Tell us more about yourself. Your personal details help us create a personalized experience for you."
      />
    ),
  },
  {
    component: (
      <Forms
        formData={employmentDetails}
        title="Employment Details"
        message="Let's get into the specifics of your employment. Fill in your job-related details to complete your profile."
      />
    ),
  },
  {
    component: (
      <Forms
        formData={bankingDetails}
        title="Banking Details"
        message="For payroll and financial transactions, we need your banking details. Rest assured, your information is secure with us."
      />
    ),
  },
];
