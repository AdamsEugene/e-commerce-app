"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Progress,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { MdModeEdit } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import {
  FaMapMarkerAlt,
  FaPeopleArrows,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

import RadarChart from "../charts/RadarChart";
import ImpressionsBreakdownChart from "../charts/ImpressionsBreakdownChart";

const dataCategory = [
  { key: "Electronics", value: 120 },
  { key: "Clothing", value: 98 },
  { key: "Home Decor", value: 86 },
  { key: "Books", value: 99 },
  { key: "Toys", value: 85 },
];

const dataLocation = [
  { key: "Urban", value: 110 },
  { key: "Suburban", value: 130 },
  { key: "Rural", value: 100 },
];

const dataAgeRange = [
  { key: "18-24", value: 85 },
  { key: "25-34", value: 90 },
  { key: "35-44", value: 80 },
  { key: "45-54", value: 75 },
  { key: "55+", value: 70 },
];

const dailyData = [
  { day: "Monday", impressions: 1000 },
  { day: "Tuesday", impressions: 1500 },
  { day: "Wednesday", impressions: 2000 },
  // Add more data for each day
];

const hourlyData = [
  { hour: "00:00", impressions: 100 },
  { hour: "01:00", impressions: 150 },
  { hour: "02:00", impressions: 200 },
  // Add more data for each hour
];

const totalBudget = 1000; // Example total budget

export default function Campaign() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [activeChart, setActiveChart] = useState(0);
  const [spentBudget, setSpentBudget] = useState(800);
  const [showHourlyImpressions, setShowHourlyImpressions] = useState(false);
  const [showDailyImpressions, setShowDailyImpressions] = useState(true);

  const handleNextChart = () => {
    setActiveChart((prev) => (prev < 2 ? prev + 1 : 0));
  };

  const handlePrevChart = () => {
    setActiveChart((prev) => (prev > 0 ? prev - 1 : 2));
  };

  const toggleHourlyImpressions = () => {
    setShowHourlyImpressions(true);
    setShowDailyImpressions(false);
  };

  const toggleDailyImpressions = () => {
    setShowHourlyImpressions(false);
    setShowDailyImpressions(true);
  };

  // Calculate remaining budget
  const remainingBudget = totalBudget - spentBudget;

  // Determine progress bar color based on remaining budget percentage
  let progressBarColor:
    | "secondary"
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | undefined;

  if (remainingBudget / totalBudget > 0.5) {
    progressBarColor = "primary"; // High remaining budget
  } else if (remainingBudget / totalBudget > 0.25) {
    progressBarColor = "secondary"; // Medium remaining budget
  } else {
    progressBarColor = "danger"; // Low remaining budget
  }

  const statusColor = getStatusColor(remainingBudget, totalBudget);
  const glowClass = `glowing-${
    statusColor === "#00FF00" ? "a" : statusColor === "#FF0000" ? "c" : "b"
  }`;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold">Campaign Title</p>
          <div className="flex items-center gap-3">
            <div
              className={`h-4 w-4 rounded-full glowing-d`}
              style={{
                background: "gray",
              }}
            />
            <Button
              isIconOnly
              color="secondary"
              variant="light"
              aria-label="Edit campaign"
            >
              <MdModeEdit className="text-lg" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-semibold mb-2">Target Audience</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <IoBagHandle className="text-xl text-primary" />
                <p className="text-sm">
                  Targeting users interested in [category]
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-xl text-primary" />
                <p className="text-sm">Targeting users in [location]</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPeopleArrows className="text-xl text-primary" />
                <p className="text-sm">Targeting users in [Age range]</p>
              </div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full rounded-lg overflow-hidden">
              {activeChart === 0 && (
                <RadarChart
                  data={dataCategory}
                  name="category"
                  fill="#8884d8"
                />
              )}
              {activeChart === 1 && (
                <RadarChart
                  data={dataLocation}
                  name="location"
                  fill="#82ca9d"
                />
              )}
              {activeChart === 2 && (
                <RadarChart
                  data={dataAgeRange}
                  name="Age range"
                  fill="#ffc658"
                />
              )}
            </div>
          </motion.div>
          <div className="flex items-center justify-between">
            <Button
              isIconOnly
              onClick={handlePrevChart}
              className="bg-primary text-white rounded-full p-2"
            >
              <FaAngleLeft className="text-lg" />
            </Button>
            <Button
              isIconOnly
              onClick={handleNextChart}
              className="bg-primary text-white rounded-full p-2"
            >
              <FaAngleRight className="text-lg" />
            </Button>
          </div>
          <Divider className="my-4" />
          <div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold mb-2">
                Budget:{" "}
                <span>
                  ${totalBudget} (${spentBudget} spent)
                </span>
              </p>
              <div
                className={`h-2 w-2 rounded-full ${glowClass}`}
                style={{
                  background: statusColor,
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="w-full">
                <Progress
                  value={spentBudget}
                  maxValue={totalBudget}
                  classNames={{
                    base: "max-w-md",
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                    label: "tracking-wider font-medium text-default-600",
                    value: "text-foreground/60",
                  }}
                  size="sm"
                />
                <div className="flex justify-between text-sm">
                  <p>Spent: ${spentBudget}</p>
                  <p>Remaining: ${remainingBudget}</p>
                </div>
              </div>
            </div>
            <Divider className="my-4" />
            <div>
              <p className="text-lg font-semibold mb-2">
                Impressions: <span>1,254 (75% of Target)</span>
              </p>
              <div>
                <Button
                  onClick={toggleDailyImpressions}
                  className={`bg-primary text-white rounded-full p-2 ${
                    showDailyImpressions ? "opacity-100" : "opacity-50"
                  }`}
                >
                  Daily Impressions
                </Button>
                <Button
                  onClick={toggleHourlyImpressions}
                  className={`bg-primary text-white rounded-full p-2 ${
                    showHourlyImpressions ? "opacity-100" : "opacity-50"
                  }`}
                >
                  Hourly Impressions
                </Button>
                {showDailyImpressions && (
                  <>
                    <h2>Daily Impressions Breakdown</h2>
                    <ImpressionsBreakdownChart
                      data={dailyData}
                      xAxisDataKey="day"
                      lineDataKeys={["impressions"]}
                    />
                  </>
                )}
                {showHourlyImpressions && (
                  <>
                    <h2>Hourly Impressions Breakdown</h2>
                    <ImpressionsBreakdownChart
                      data={hourlyData}
                      xAxisDataKey="hour"
                      lineDataKeys={["impressions"]}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

const getStatusColor = (remaining: number, total: number) => {
  if (remaining / total > 0.5) return "#00FF00"; // Green
  if (remaining / total > 0.25) return "#FFFF00"; // Yellow
  return "#FF0000"; // Red
};
