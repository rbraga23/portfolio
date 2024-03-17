import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Project } from "../components/Projects/Project";
import { projects } from "../components/Projects/projectList";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();

  return (
    <div id="projects" className="min-h-screen w-full flex justify-center">
      <div className="mt-20 w-full mb-12 max-w-[1250px]">
        <p className="text-4xl font-bold pl-12 md:pl-16">{t("projects")}</p>
        <Swiper
          className="w-full overflow-y-auto"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          simulateTouch={false}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Project {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
