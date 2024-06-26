import StyledTextarea from "@/src/components/_shared/Styled/StyledTextarea";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
import { IoSend } from "react-icons/io5";

interface ChatMessageProps {
  message: string;
  time: string;
  isRight: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = (props) => {
  const { message, time, isRight } = props;
  return (
    <div
      className={`chat-message p-2 rounded-lg shadow-md w-[80%] ${
        isRight ? "ml-auto bg-primary-50" : "bg-secondary-50"
      }`}
    >
      <p className="text-sm text-default-900 mt-2">{message}</p>
      <p className="text-xs text-gray-500 mt-2">{time}</p>
    </div>
  );
};

const messages = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus fuga sunt, voluptate sit alias amet laudantium",
    time: "10:30 AM",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus fuga sunt, voluptate sit alias amet laudantium",
    time: "10:32 AM",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus fuga sunt, voluptate sit alias amet laudantium",
    time: "10:35 AM",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus fuga sunt, voluptate sit alias amet laudantium",
    time: "10:37 AM",
  },
];
export default function ContactManufacturer() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-lg font-bold">Advanced Customization</h2>
        <p className="text-sm text-default-500">
          Access detailed settings and advanced features to tailor your product
          to your exact needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 xs:gap-y-4 md:gap-4">
        <div></div>
        <div className="col-span-3">
          <Card shadow="none" isFooterBlurred isHoverable>
            <CardHeader>Chat</CardHeader>
            <CardBody>
              <ScrollShadow
                size={0}
                hideScrollBar
                className="w-full h-[min(350px,40vh)]"
              >
                <div className="w-full flex flex-col gap-3">
                  {messages.map((msg, index) => (
                    <ChatMessage
                      key={index}
                      message={msg.text}
                      time={msg.time}
                      isRight={index % 2 !== 0}
                    />
                  ))}
                </div>
              </ScrollShadow>
            </CardBody>
            <CardFooter>
              <div className="flex items-end w-full gap-4">
                <StyledTextarea />
                <Button isIconOnly>
                  <IoSend className="text-xl" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
