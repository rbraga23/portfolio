import { useTranslation } from "react-i18next";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { emptyOnMobile } from "../utils/checkMobile";
import { Button } from "../components/Form/Button";
import { useContactModal } from "../hooks/useContactModal";

export function Home() {
  const { t } = useTranslation();
  const { setIsContactModalOpen } = useContactModal();
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titlePosition = useTransform(scrollYProgress, (pos: number) => {
    return pos === 1 ? "fixed" : "relative";
  });

  return (
    <motion.section
      id="home"
      style={emptyOnMobile({ opacity: sectionOpacity })}
      ref={targetRef}
      className="min-h-dvh flex items-center justify-center flex-col z-0"
    >
      <motion.div
        style={emptyOnMobile({ scale: titleScale, position: titlePosition })}
      >
        <motion.h1
          className="text-4xl md:text-7xl -mt-12 md:mt-0 text-center font-bold"
          initial={emptyOnMobile({ opacity: 0 })}
          animate={emptyOnMobile({ opacity: 1 })}
          transition={emptyOnMobile({ duration: 1 })}
        >
          {`${t("name")}`}
        </motion.h1>
        <motion.h1
          className="text-3xl md:text-6xl text-center font-bold text-green-500"
          initial={emptyOnMobile({ opacity: 0 })}
          animate={emptyOnMobile({ opacity: 1 })}
          transition={emptyOnMobile({ delay: 1.5, duration: 1 })}
        >
          {t("job")}
        </motion.h1>
        <motion.div
          className="flex justify-center gap-3 mt-10"
          initial={emptyOnMobile({ opacity: 0 })}
          animate={emptyOnMobile({ opacity: 1 })}
          transition={emptyOnMobile({ delay: 2, duration: 1 })}
        >
          <Button
            text={t("contactMe")}
            variant="primary"
            onClick={() => setIsContactModalOpen(true)}
          />
          <a href="#projects">
            <Button text={t("seeMyProjects")} variant="secondary" />
          </a>
        </motion.div>
      </motion.div>
      <motion.span
        className="animate-bounce absolute font-bold bottom-10 invisible md:visible"
        style={emptyOnMobile({ opacity: buttonOpacity })}
        initial={emptyOnMobile({ opacity: 0 })}
        animate={emptyOnMobile({ opacity: 1 })}
        transition={emptyOnMobile({ delay: 2, duration: 1 })}
      >
        <a
          className="bg-green-500 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
          href="#about"
        >
          <FaArrowDownLong />
        </a>
      </motion.span>
    </motion.section>
  );
}
