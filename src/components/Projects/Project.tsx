import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css/effect-cards";

import { Stack } from "../About/stacks/Stack";
import { Badge } from "../Badge";
import { Project as ProjectProps } from "./projectList";
import { useTranslation } from "react-i18next";

export function Project({
  title,
  subtitle,
  description,
  type,
  stack,
  projectLinks,
  images,
}: ProjectProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full h-full px-12 md:px-16 py-10">
      <div className="w-full flex flex-col md:pr-20 mb-5">
        <div className="flex flex-col mb-5">
          <h1 className="text-left text-3xl font-bold">{t(title)}</h1>
          <h4 className="text-left text-sm font-semibold">{t(subtitle)}</h4>
        </div>
        <h2 className="text-left text-xl font-semibold mb-2">
          {t("description")}
        </h2>
        <p className="text-justify">{t(description)}</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="mb-10 max-w-lg">
          <h2 className="text-left text-xl font-semibold mb-2">{t("type")}</h2>
          <div className="flex mb-5">
            {type.map((item, index) => (
              <div className="w-fit" key={index}>
                <Badge variant={item.variant} text={item.name} />
              </div>
            ))}
          </div>
          <h2 className="text-left text-xl font-semibold mb-2">Links</h2>
          <div className="flex flex-col mb-5">
            {projectLinks?.map((projectLink, index) => (
              <div className="w-fit flex gap-2 text-left" key={index}>
                <span>{t(projectLink.title)}:</span>
                <a
                  href={projectLink.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500"
                >
                  {projectLink.link || t("noPublicLink")}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap flex-col">
            <h2 className="text-left text-xl font-semibold mb-2">
              {t("Techstack")}
            </h2>
            <Stack stack={stack} />
          </div>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          loop
          className="w-[400px] md:w-[500px] h-64 md:mt-10 mb-10"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="object-fit"
                src={image}
                alt="project ulbra printscreen"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
