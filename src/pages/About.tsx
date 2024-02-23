import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { emptyOnMobile } from "../utils/checkMobile";

export function About() {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);

  return (
    <section id="about">
      <motion.div ref={targetRef} className="w-full flex justify-center mt-32">
        <motion.div
          style={emptyOnMobile({ opacity, scale })}
          className="grid grid-cols-1 order-last lg:grid-cols-2 z-10 max-w-[1150px]"
        >
          <div className="p-5">
            <p className="text-4xl font-bold">{t("about")}</p>
            <p className="text-xl font-semibold text-justify mt-2">
              {t("aboutText1")}{" "}
              <strong className="text-green-500">{t("job1")}</strong>{" "}
              {t("aboutText1_1")}{" "}
              <strong className="text-green-500">{t("job2")}</strong>{" "}
              {t("aboutText1_2")}
            </p>
            <p className="text-xl font-semibold text-justify mt-2">
              {t("aboutText2")}
            </p>
            <p className="text-xl font-semibold text-justify mt-2">
              {t("aboutText3")}
            </p>
            <p className="text-xl font-semibold text-justify mt-2">
              {t("aboutText4")}
            </p>
          </div>
          <div className="w-full h-fit mt-16 flex justify-center">
            <img
              className="object-cover shadow-md shadow-gray-900/20 dark:shadow-slate-200/20"
              src="http://via.placeholder.com/640x360"
              height={360}
              width={640}
              alt={t("bragaImgAlt")}
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.div className=""></motion.div>
    </section>
  );
}
