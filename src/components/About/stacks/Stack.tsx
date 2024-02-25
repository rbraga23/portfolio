import { Variants, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IStack } from "./istack.type";
import { FaCode } from "react-icons/fa";
import { emptyOnMobile } from "../../../utils/checkMobile";

interface StackProps {
  title: string;
  stack: IStack[];
}

const animationVariants = emptyOnMobile({
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});
export function Stack({ stack, title }: StackProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold mb-2">{t(title)}</h1>
      <div className="flex flex-row flex-wrap gap-3">
        {stack.map((item: IStack) => (
          <motion.div key={item.name} variants={animationVariants as Variants}>
            <div className="flex flex-col items-center justify-center p-4 rounded-md max-h-20 min-w-24 bg-zinc-200 dark:bg-slate-800">
              <div className="text-2xl dark:text-white text-black">
                {item.icon ? (
                  <item.icon className={`${item.color}`} />
                ) : (
                  <FaCode />
                )}
              </div>
              <div className="dark:text-white text-black font-medium">
                {item.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
