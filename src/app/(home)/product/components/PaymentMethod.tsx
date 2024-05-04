import {
  Button,
  Card,
  CardBody,
  Divider,
  Image,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Skeleton,
} from "@nextui-org/react";
import StyledButton from "@/src/components/_shared/Styled/StyledButton";
import StyledModal from "@/src/components/_shared/Styled/StyledModal";
import TabWithIcon from "@/src/components/TabWithIcon";
import SelectList from "@/src/components/_shared/SelectList";

const paymentMethods = [
  {
    name: "Stripe",
    description: "Stripe | Financial Infrastructure for the Internet",
    logoSrc: "https://logo.clearbit.com/stripe.com",
    ready: true, // Add the ready state for Stripe
  },
  {
    name: "PayPal",
    description: "PayPal | Safer, Simpler, Smarter Ways to Pay Online",
    logoSrc:
      "https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg",
    ready: true, // Add the ready state for PayPal
  },
  {
    name: "Visa",
    description: "Visa | Everywhere You Want To Be",
    logoSrc: "https://www.vectorlogo.zone/logos/visa/visa-icon.svg",
    ready: false, // Add the ready state for Visa
  },
  {
    name: "Mastercard",
    description: "Mastercard | Start Something Priceless",
    logoSrc: "https://www.vectorlogo.zone/logos/mastercard/mastercard-icon.svg",
    ready: false, // Add the ready state for Mastercard
  },
  {
    name: "American Express",
    description: "American Express | Don't Live Life Without It",
    logoSrc:
      "https://www.vectorlogo.zone/logos/americanexpress/americanexpress-icon.svg",
    ready: false, // Add the ready state for American Express
  },
];

export default function PaymentMethod() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col w-full gap-6">
      <TabWithIcon />
      <Divider />
      <StyledButton
        content="Choose different method"
        fullWidth
        onClick={onOpen}
      />
      <StyledModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        size="sm"
        className="search_result"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <SelectList
                onClose={onClose}
                title="Select Payment Method"
                data={paymentMethods}
              />
            </ModalBody>
          )}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
