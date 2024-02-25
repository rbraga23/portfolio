import { useTranslation } from "react-i18next";
import { BackendStack } from "./stacks/backend";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FrontendStack } from "./stacks/frontend";
import { DataStack } from "./stacks/data";
import { InfrastructureStack } from "./stacks/infrastructure";
import { Stack } from "./stacks/Stack";
import { MobileStack } from "./stacks/mobile";
import { MachineLearningStack } from "./stacks/machineLearning";

export function Techstack() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.div
      className="p-4 max-w-[1150px]"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.06 }}
    >
      <h1 className="text-3xl font-bold">{t("technologies")}</h1>
      <Stack stack={BackendStack} title="backend" />
      <Stack stack={FrontendStack} title="frontend" />
      <Stack stack={DataStack} title="data" />
      <Stack stack={MobileStack} title="mobile" />
      <Stack stack={InfrastructureStack} title="infrastructure" />
      <Stack stack={MachineLearningStack} title="machineLearning" />
    </motion.div>
  );
}
