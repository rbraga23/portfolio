import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: "Hi, I'm Rafael Braga",
      job: "FullStack Engineer",
      job2: "Cloud Architect",
      about: "About me",
      projects: "Projects",
      seeMyProjects: "See my projects",
      contact: "Contact",
      contactMe: "Contact me",
      brazilianFlag: "Brazilian Flag",
      usaFlag: "USA Flag",
      bragaImgAlt: "Picture of Rafael Braga",
      aboutText1: "I'm Rafael Braga, a",
      aboutText1_1: "and",
      aboutText1_2: "based in Minas Gerais, Brazil.",
      aboutText2:
        "I've been building stuff on the web for the last 9 years, working with clients across various countries and industries.",
      aboutText3:
        "I truly believe that programming languages are just tools. The solution lies in planning and execution. I learn quickly, and I don't mind learning and working with the technologies you love the most.",
      aboutText4:
        "My goal is to extract and build the best solution with the available resources.",
    },
  },
  pt: {
    translation: {
      name: "Olá, Eu sou Rafael Braga",
      job: "Desenvolvedor FullStack",
      job2: "Arquiteto Cloud",
      about: "Sobre mim",
      projects: "Projetos",
      contact: "Contato",
      contactMe: "Contate-me",
      brazilianFlag: "Bandeira do Brasil",
      usaFlag: "Bandeira dos EUA",
      bragaImgAlt: "Foto de Rafael Braga",
      aboutText1: "Meu nome é Rafael Braga, um",
      aboutText1_1: "e",
      aboutText1_2: "nascido e vivendo em Minas Gerais, Brasil.",
      aboutText2:
        "Tenho construído coisas na web nos últimos 9 anos, trabalhando com clientes de vários países e indústrias.",
      aboutText3:
        "Eu realmente acredito que as linguagens de programação são apenas ferramentas. A solução reside no planejamento e execução, aprendo rápido, não me importo de aprender e trabalhar com as tecnologias que você mais ama.",
      aboutText4:
        "Meu objetivo é extrair e construir a melhor solução com os recursos disponíveis.",
      seeMyProjects: "Meus projetos",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: window.localStorage.getItem("language") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
