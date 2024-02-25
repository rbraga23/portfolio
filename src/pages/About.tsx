import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { emptyOnMobile } from "../utils/checkMobile";
import Profile from "../assets/about/profile-pic.png";
import { Techstack } from "../components/About/Techstack";

export function About() {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section id="about">
      <motion.div ref={targetRef} className="w-full flex justify-center pt-24">
        <motion.div
          style={emptyOnMobile({ opacity, scale })}
          className="grid grid-cols-1 order-last lg:grid-cols-2 z-10 max-w-[1150px]"
        >
          <div className="p-5">
            <p className="text-4xl font-bold">{t("about")}</p>
            <p className="text-xl font-semibold text-justify mt-5">
              {t("aboutText1")}{" "}
              <strong className="text-green-500">{t("job")}</strong>{" "}
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
          <div className="w-full mt-8 h-[410px] flex justify-center">
            <img
              className="object-fill"
              src={Profile}
              height={410}
              width={410}
              alt={t("bragaImgAlt")}
            />
          </div>
        </motion.div>
      </motion.div>
      <div className="flex justify-center items-center w-full">
        <Techstack />
      </div>
    </section>
  );
}
