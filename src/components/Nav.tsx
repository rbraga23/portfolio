import { useState, ReactNode, useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { cn } from "../utils/cn";
import { useTranslation } from "react-i18next";
import Brazil from "../assets/flags/brazil.webp";
import US from "../assets/flags/us.webp";
import { useContactModal } from "../hooks/useContactModal";

export function Nav() {
  const { setIsContactModalOpen } = useContactModal();

  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "dark"
  );
  const [icon, setIcon] = useState<ReactNode>(
    theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />
  );
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("home");
  const [language, setLanguage] = useState(
    window.localStorage.getItem("language") || "en"
  );
  const [flag, setFlag] = useState(language === "en" ? US : Brazil);

  useEffect(() => {
    i18n.changeLanguage(language);
    window.localStorage.setItem("language", language);
  }, [i18n, language]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    root.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function handleThemeChange() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setIcon(newTheme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />);
  }

  function handleLanguageChange() {
    const newLanguage = language === "en" ? "pt-BR" : "en";
    setLanguage(newLanguage);
    setFlag(newLanguage === "en" ? US : Brazil);
  }

  function handleContactClick() {
    setActive("contact");
    setIsContactModalOpen(true);
  }

  return (
    <>
      <div className="flex md:hidden w-screen justify-end p-4 fixed top-0 z-50">
        <button className="text-2xl">
          <CiMenuBurger />
        </button>
      </div>
      <nav className="hidden md:flex w-screen h-12 fixed top-0 z-50 items-center gap-3 justify-end p-5 bg-transparent divide-x font-semibold">
        <div className="flex gap-4 flex-row text-md">
          <a
            className={cn(
              "hover:text-green-500",
              active === "home" && "text-green-500"
            )}
            href="#home"
            onClick={() => setActive("home")}
          >
            Home
          </a>
          <a
            className={cn(
              "hover:text-green-500",
              active === "about" && "text-green-500"
            )}
            href="#about"
            onClick={() => setActive("about")}
          >
            {t("about")}
          </a>
          <a
            className={cn(
              "hover:text-green-500",
              active === "projects" && "text-green-500"
            )}
            href="#projects"
            onClick={() => setActive("projects")}
          >
            {t("projects")}
          </a>
          <button
            className={cn(
              "hover:text-green-500",
              active === "contact" && "text-green-500"
            )}
            onClick={handleContactClick}
          >
            {t("contact")}
          </button>
        </div>
        <div className="flex px-2 gap-4 text-2xl items-center">
          <img
            className="object-cover w-6 cursor-pointer"
            src={flag}
            alt={t(language === "en" ? "usaFlag" : "brazilianFlag")}
            onClick={handleLanguageChange}
          />
          <button className="hover:text-green-500" onClick={handleThemeChange}>
            {icon}
          </button>
          <a
            href="https://github.com/rbraga23"
            target="_blank"
            className="hover:text-green-500"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  );
}
