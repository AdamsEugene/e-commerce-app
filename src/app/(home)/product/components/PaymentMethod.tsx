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
import StyledButton from "@/src/components/StyledButton";
import StyledModal from "@/src/components/StyledModal";
import TabWithIcon from "@/src/components/TabWithIcon";

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
              <OtherPlans onClose={onClose} />
            </ModalBody>
          )}
        </ModalContent>
      </StyledModal>
    </div>
  );
}

type PROPS = {
  onClose: () => void;
};

const OtherPlans = (props: PROPS) => {
  const { onClose } = props;

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

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Payment Methods</ModalHeader>
      <Divider />
      <ModalBody>
        {paymentMethods.map((method, index) =>
          method.ready ? (
            <CardItem key={index} {...method} />
          ) : (
            <CardItemSkeleton key={index} />
          )
        )}
      </ModalBody>
      <Divider />
      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
        <Button color="secondary" onPress={onClose}>
          Select
        </Button>
      </ModalFooter>
    </>
  );
};
const CardItem = ({
  name,
  description,
  logoSrc,
}: {
  name: string;
  description: string;
  logoSrc: string;
}) => {
  return (
    <Card className="!w-full" isPressable>
      <CardBody className="flex flex-row gap-4">
        <Image alt={name} height={40} radius="sm" src={logoSrc} width={40} />
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">{description}</p>
        </div>
      </CardBody>
    </Card>
  );
};

const CardItemSkeleton = () => {
   return (
     <Card className="w-full space-y-5 p-4">
       <div className="max-w-[300px] w-full flex items-center gap-3">
         <div>
           <Skeleton className="flex rounded-full w-12 h-12" />
         </div>
         <div className="w-full flex flex-col gap-2">
           <Skeleton className="h-3 w-3/5 rounded-lg" />
           <Skeleton className="h-3 w-4/5 rounded-lg" />
         </div>
       </div>
     </Card>
   );
}