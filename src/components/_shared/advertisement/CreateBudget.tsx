"use client";

import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Checkbox,
  RadioGroup,
  Radio,
  Tooltip,
} from "@nextui-org/react";
import { GrMoney } from "react-icons/gr";
import StyledInput from "../Styled/StyledInput";
import StyledTextarea from "../Styled/StyledTextarea";
import { useState } from "react";
import ConditionalRender from "../Conditional/ConditionalRender";

type PROPS = {
  onClose: () => void;
};

const tooltip = {
  cpc: {
    meaning: "You pay only when someone clicks on your ad.",
    benefits: [
      "Ideal for driving targeted traffic to your website or product pages.",
      "You only pay for actions (clicks) that potentially lead to conversions (sales).",
      "Offers more control over your budget and return on investment (ROI).",
    ],
    whenToUse: [
      "Your main goal is to drive website traffic or product discovery.",
      "You want to maximize conversions (sales) for your budget.",
      "You have a well-defined target audience.",
    ],
  },
  cpm: {
    meaning:
      "You pay each time 1,000 people (one thousand) see your ad, regardless of clicks.",
    benefits: [
      "Effective for brand awareness campaigns to increase product visibility.",
      "Good for reaching a large audience and generating initial interest.",
    ],
    whenToUse: [
      "Your primary goal is to build brand awareness for your products.",
      "You want to reach a broad audience within your target demographics.",
      "You have a new product launch or want to promote a sale.",
    ],
  },
};

export default function CreateBudget({ onClose }: PROPS) {
  const [daily, setDaily] = useState(false);
  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <GrMoney className="text-2xl" />
          <p className="text-lg font-bold">Manage Your Campaign Costs</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <StyledInput
            type="number"
            label="Total Budget"
            placeholder="Enter the total budget they want to allocate for their ad campaign."
          />
          <StyledTextarea
            label="Budget Explanation"
            placeholder="A brief explanation of how the budget will be spent (e.g., daily or total campaign duration)."
          />
          <div className="flex items-baseline gap-4">
            <div className="w-[144px]">
              <Checkbox color="secondary" onValueChange={(e) => setDaily(e)}>
                Daily Budget
              </Checkbox>
            </div>
            <ConditionalRender
              condition={daily}
              Component={
                <StyledInput
                  type="number"
                  label="Daily Spend Limit"
                  placeholder="Specify a daily spend limit (alternative to total campaign budget)."
                />
              }
            />
          </div>
          <div className="flex items-baseline gap-4">
            <p>Bidding Strategy</p>
            <RadioGroup color="secondary" orientation="horizontal">
              <Tooltip
                color="foreground"
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      {tooltip.cpc.meaning}
                    </div>
                    <div className="text-tiny">
                      <div className="text-tiny font-bold">Benefits</div>
                      <ul>
                        {tooltip.cpc.benefits.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <div className="text-tiny font-bold">
                        When To Use This Strategy
                      </div>
                      <ul>
                        {tooltip.cpc.whenToUse.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                }
                delay={100}
              >
                <Radio value="cpc"> Cost-per-Click (CPC)</Radio>
              </Tooltip>
              <Tooltip
                color="foreground"
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      {tooltip.cpm.meaning}
                    </div>
                    <div className="text-tiny">
                      <div className="text-tiny font-bold">Benefits</div>
                      <ul>
                        {tooltip.cpm.benefits.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <div className="text-tiny font-bold">
                        When To Use This Strategy
                      </div>
                      <ul>
                        {tooltip.cpm.whenToUse.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                }
                delay={100}
              >
                <Radio value="cpm">Cost-per-Mille (CPM)</Radio>
              </Tooltip>
            </RadioGroup>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex items-center gap-4">
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary">Save as Draft</Button>
          <Button color="secondary">Review & Submit</Button>
        </div>
      </ModalFooter>
    </>
  );
}
